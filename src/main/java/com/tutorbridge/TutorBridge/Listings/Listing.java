package com.tutorbridge.TutorBridge.Listings;

import jakarta.persistence.*;
import com.tutorbridge.TutorBridge.Users.User;

@Entity
@Table(name = "listings")
public class Listing {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private int id;

    private String title;
    private String description;
    private double price;

    @ManyToOne
    // I have legitimately no clue how this line works please enlighten me because I am 99% it is wrong and i do not know how
    @JoinColumn(name = "users", nullable = false)
    private User user;

    public Listing() {}

    public Listing(String title, String description, double price, User user) {
        this.title = title;
        this.description = description;
        this.price = price;
        this.user = user;
    }

    // Getters and setters
    public int getId() { return id; }
    public String getTitle() { return title; }
    public void setTitle(String title) { this.title = title; }

    public String getDescription() { return description; }
    public void setDescription(String description) { this.description = description; }

    public double getPrice() { return price; }
    public void setPrice(double price) { this.price = price; }

    public User getUser() { return user; }
    public void setUser(User user) { this.user = user; }
}
