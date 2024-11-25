package com.tutorbridge.TutorBridge.Users;

import com.fasterxml.jackson.annotation.JsonBackReference;
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

    @OneToMany(mappedBy = "user", cascade = CascadeType.ALL, orphanRemoval = true)
    @JsonBackReference
    private List<Listing> listings;

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

    public List<Listing> getListings() {
        return listings;
    }
}