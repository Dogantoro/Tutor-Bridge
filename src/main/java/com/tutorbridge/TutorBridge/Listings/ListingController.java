package com.tutorbridge.TutorBridge.Listings;

import com.tutorbridge.TutorBridge.Users.User;
import com.tutorbridge.TutorBridge.Users.UserRepo;
import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.tags.Tag;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.server.ResponseStatusException;

import java.util.Optional;

@RestController
@Tag(name = "Listings", description = "Endpoints for managing listings")
public class ListingController {
    private final ListingRepo listingRepo;
    private final UserRepo userRepo;

    ListingController(ListingRepo listingRepo, UserRepo userRepo) {
        this.listingRepo = listingRepo;
        this.userRepo = userRepo;
    }

    @GetMapping("/listings")
    @Operation(summary = "Get all listings")
    public Iterable<Listing> getAllListings() {
        return listingRepo.findAll();
    }

    @PostMapping("/listings")
    @Operation(summary = "Create a new listing")
    public ResponseEntity<Listing> createListing(@RequestBody ListingDTO listingData) {
        Optional<User> user = userRepo.findById(listingData.userID);
        if (user.isEmpty())
            throw new ResponseStatusException(HttpStatus.NOT_FOUND, "User was not found!");
        Listing listing = new Listing(listingData.classes, listingData.about, listingData.contactInfo, listingData.additionalInfo, listingData.rate, user.get(), listingData.paymentMethod);
        return new ResponseEntity<>(listingRepo.save(listing), HttpStatus.CREATED);
    }

    @DeleteMapping("/listings/{id}")
    @Operation(summary = "Delete listing by ID")
    public ResponseEntity<Void> deleteListing(@PathVariable int id) {
        Optional<Listing> listing = listingRepo.findById(id);
        if (listing.isEmpty())
            throw new ResponseStatusException(HttpStatus.NOT_FOUND, "Listing was not found!");
        User user = listing.get().getUser();
        if (user != null) {
            user.getListings().remove(listing.get());
            userRepo.save(user);
        }
        listingRepo.delete(listing.get());
        return new ResponseEntity<>(HttpStatus.NO_CONTENT);
    }

}

class ListingDTO {
    public String classes;
    public String contactInfo;
    public String additionalInfo;
    public String about;
    public double rate;
    public int userID;
    public String paymentMethod;
}
