package com.tutorbridge.TutorBridge.Listings;

import jakarta.persistence.*;
import com.tutorbridge.TutorBridge.Users.User;

@Entity
@Table(name = "listings")
public class Listing {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private int id;

    private String classes;
    private String contact;
    private String additionalInfo;
    private String description;
    private double price;

    @ManyToOne
    // I have legitimately no clue how this line works please enlighten me because I am 99% it is wrong and i do not know how
    @JoinColumn(name = "users", nullable = false)
    private User user;

    public Listing() {}

    public Listing(String classes, String description,String contact,String additionalInfo, double price, User user) {
        this.classes = classes;
        this.contact = contact;
        this.additionalInfo = additionalInfo;
        this.description = description;
        this.price = price;
        this.user = user;
    }

    public Listing(String classes, String description,String contact, double price, User user) {
        this.classes = classes;
        this.contact = contact;
        this.additionalInfo = null;
        this.description = description;
        this.price = price;
        this.user = user;
    }
    
    // Getters and setters
    public int getId() { return id; }
    public String getClasses() { return classes; }
    public void setClasses(String Class) { this.classes = Class; }

    public String getContact() { return contact; }
    public void setContact(String Contact) { this.contact = Contact; }

    public String getAdditionalInfo() { return additionalInfo; }
    public void setAdditionalInfo(String AdditionalInfo) { this.additionalInfo = AdditionalInfo; }

    public String getDescription() { return description; }
    public void setDescription(String description) { this.description = description; }

    public double getPrice() { return price; }
    public void setPrice(double price) { this.price = price; }

    public User getUser() { return user; }
    public void setUser(User user) { this.user = user; }
}
