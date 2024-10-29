package com.tutorbridge.TutorBridge.Users;

import jakarta.persistence.*;
//import jakarta.persistence.;

@Entity
@Table
public class UserTable {
    @Id
    private String hash_val;

    @Column(nullable = false, unique = true)
    private String Email;

    @Column(nullable = false)
    private String Password;

    public UserTable(String username, String passwordHash) {
        this.Email = username;
        this.Password = passwordHash;
    }
    public UserTable() {}

    public String getEmail(){
        return Email;
    }

    public void setEmail(String email){
        this.Email = email;
    }

    public String getPassword(){
        return Password;
    }

    public void setPassword(String password){
        this.Password = password;
    }

    public String getHash_val() {
        return hash_val;
    }

    public void setHash_val(String hash_val) {
        this.hash_val = hash_val;
    }
}