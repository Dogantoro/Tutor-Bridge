package com.tutorbridge.TutorBridge.Users;

import jakarta.persistence.*;

@Entity
@Table(name = "users")
public class User {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private int ID;

    private String email;

    private String password;

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

    public String getPassword(){
        return this.password;
    }

    public void setPassword(String password){
        this.password = password;
    }

    public int getID() {
        return ID;
    }
}