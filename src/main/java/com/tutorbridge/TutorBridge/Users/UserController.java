package com.tutorbridge.TutorBridge.Users;

import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpSession;
import org.mindrot.jbcrypt.BCrypt;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.web.bind.annotation.*;

import java.util.UUID;
import java.util.stream.Collectors;
import java.util.stream.Stream;
import java.util.stream.StreamSupport;

@RestController
public class UserController {
    private final UserRepo userRepo;

    public UserController(UserRepo userRepo) {
        this.userRepo = userRepo;
    }

    // DEBUGGING PURPOSES ONLY - DELETE BEFORE DEPLOY
    @GetMapping("/user")
    public Iterable<User> getAllUsers() {
        return userRepo.findAll();
    }


    // DEBUGGING PURPOSES ONLY - DELETE BEFORE DEPLOY
    @PostMapping("/user")
    public User createUser(@RequestBody User user) {
        User newuser = new User(user.getEmail(), user.getPassword());
        userRepo.save(newuser);
        return newuser;
    }

    @PostMapping("/register")
    public String registerUser(@RequestBody User user, HttpServletRequest request) {
        User newuser = new User();
        newuser.setEmail(user.getEmail());
        newuser.setPassword(BCrypt.hashpw(user.getPassword(), BCrypt.gensalt()));
        userRepo.save(newuser);
        loginUser(newuser, request);
        return newuser.getEmail();
    }
    private static final Logger logger = LoggerFactory.getLogger(UserController.class);
    @PostMapping("/login")
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

}
