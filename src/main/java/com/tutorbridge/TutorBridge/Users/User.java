package com.tutorbridge.TutorBridge.Users;

import com.tutorbridge.TutorBridge.Listings.Listing;
import jakarta.persistence.*;

import java.util.ArrayList;
import java.util.List;

@Entity
@Table(name = "users")
public class User {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private int ID;

    private String email;

    private String name;

    private String password;

    @OneToMany(mappedBy = "users", cascade = CascadeType.ALL, orphanRemoval = true)
    // idk what cascade & orphan do but i see them everywhere so I assume they are the default?
    private ArrayList<Listing> listings = new ArrayList<>();

    public User(String email, String password) {
        this.email = email;
        this.password = password;
    }
    public User() {}

    public String getEmail(){
        return this.email;
    }

    public void setEmail(String email){
        this.email = email;
    }

    public String getName() {return name;}

    public void setName(String name) {this.name = name;}

    public String getPassword(){
        return this.password;
    }

    public void setPassword(String password){
        this.password = password;
    }

    public int getID() {
        return ID;
    }

    public void addListing(Listing listing) {
        listings.add(listing);
        listing.setUser(this);
    }

    public void removeListing(Listing listing) {
        listings.remove(listing);
        listing.setUser(null);
    }
}