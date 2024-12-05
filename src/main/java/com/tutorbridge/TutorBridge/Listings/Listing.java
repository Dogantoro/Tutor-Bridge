package com.tutorbridge.TutorBridge.Listings;

import com.fasterxml.jackson.annotation.JsonManagedReference;
import jakarta.persistence.*;
import com.tutorbridge.TutorBridge.Users.User;

@Entity
@Table(name = "listings")
public class Listing {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private int id;

    private String classes;
    private String contactInfo;
    private String additionalInfo;
    private String about;
    private double rate;
    private String paymentMethod;

    @ManyToOne
    @JoinColumn(name = "user_id", nullable = false)
    @JsonManagedReference
    private User user;

    public Listing() {}

    public Listing(String classes, String about, String contactInfo, String additionalInfo, double rate, User user, String paymentMethod) {
        this.classes = classes;
        this.contactInfo = contactInfo;
        this.additionalInfo = additionalInfo;
        this.about = about;
        this.rate = rate;
        this.user = user;
        this.paymentMethod = paymentMethod;
    }

    public Listing(String classes, String about, String contactInfo, double rate, User user) {
        this.classes = classes;
        this.contactInfo = contactInfo;
        this.additionalInfo = null;
        this.about = about;
        this.rate = rate;
        this.user = user;
    }

    // Getters and setters
    public int getId() { return id; }
    public String getClasses() { return classes; }
    public void setClasses(String Class) { this.classes = Class; }

    public String getContactInfo() { return contactInfo; }
    public void setContactInfo(String Contact) { this.contactInfo = Contact; }

    public String getAdditionalInfo() { return additionalInfo; }
    public void setAdditionalInfo(String AdditionalInfo) { this.additionalInfo = AdditionalInfo; }

    public String getAbout() { return about; }
    public void setAbout(String about) { this.about = about; }

    public double getRate() { return rate; }
    public void setRate(double rate) { this.rate = rate; }

    public User getUser() { return user; }
    public void setUser(User user) { this.user = user; }
}
