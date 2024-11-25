package com.tutorbridge.TutorBridge.Users;

import com.tutorbridge.TutorBridge.Listings.Listing;
import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.tags.Tag;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpSession;
import org.mindrot.jbcrypt.BCrypt;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.server.ResponseStatusException;

import java.util.UUID;
import java.util.stream.Collectors;
import java.util.stream.Stream;
import java.util.stream.StreamSupport;

@RestController
@Tag(name = "Users", description = "Endpoints for managing users")
public class UserController {
    private final UserRepo userRepo;

    public UserController(UserRepo userRepo) {
        this.userRepo = userRepo;
    }

    // DEBUGGING PURPOSES ONLY - DELETE BEFORE DEPLOY
    @GetMapping("/user")
    @Operation(summary = "Get all users (ONLY FOR TESTING: NOT available in production!)")
    public Iterable<User> getAllUsers() {
        return userRepo.findAll();
    }


    // DEBUGGING PURPOSES ONLY - DELETE BEFORE DEPLOY
    @PostMapping("/user")
    @Operation(summary = "Create a user directly (ONLY FOR TESTING: NOT available in production!)")
    public User createUser(@RequestBody User user) {
        User newuser = new User(user.getEmail(), user.getPassword());
        userRepo.save(newuser);
        return newuser;
    }

    @PostMapping("/register")
    @Operation(summary = "Register a user")
    public String registerUser(@RequestBody User user, HttpServletRequest request) {
        User newuser = new User();
        newuser.setEmail(user.getEmail());
        newuser.setPassword(BCrypt.hashpw(user.getPassword(), BCrypt.gensalt()));
        userRepo.save(newuser);
        loginUser(newuser, request);
        return newuser.getEmail();
    }
    @PostMapping("/login")
    @Operation(summary = "Log in user and setup session")
    public String loginUser(@RequestBody User user, HttpServletRequest request) {
        var email = user.getEmail();
        var foundAccount = StreamSupport.stream(userRepo.findAll().spliterator(), false)
                .filter(account -> account.getEmail().equals(email)).findFirst();
        if (foundAccount.isEmpty())
            return "Account not found!";
        var correctPassword = foundAccount.get().getPassword();
        if (!BCrypt.hashpw(user.getPassword(), correctPassword).equals(correctPassword))
            return "Incorrect Password!";
        HttpSession session = request.getSession();
        session.setAttribute("userToken", foundAccount.get().getID());
        session.setMaxInactiveInterval(30 * 60);
        return "success!";
    }

    @GetMapping("/user/{userID}/listings")
    @Operation(summary = "Get all listings belonging to a user")
    Iterable<Listing> getUserListings(@PathVariable int userID) {
        User user = userRepo.findById(userID).orElseThrow(() -> new ResponseStatusException(HttpStatus.NOT_FOUND, "User not found!"));
        return user.getListings();
    }
}
