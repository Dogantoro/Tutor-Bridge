package com.tutorbridge.TutorBridge.Users;

import jakarta.persistence.*;
//import jakarta.persistence.;

@Entity
@Table
public class UserTable {
    @Id
    private int IDVal;

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

    public int getHash_val() {
        return IDVal;
    }

    public void setHash_val(int hash_val) {
        this.IDVal = hash_val;
    }
}