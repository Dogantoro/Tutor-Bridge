package com.tutorbridge.TutorBridge.OpenChats;



import com.tutorbridge.TutorBridge.Listings.Listing;
import jakarta.persistence.*;
import com.tutorbridge.TutorBridge.Users.User;
import com.tutorbridge.TutorBridge.ChatLogs.ChatLog;
import java.util.ArrayList;

@Entity
@Table(name = "OpenChats")
public class OpenChat {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private int id;



    @ManyToOne
    // I have legitimately no clue how this line works please enlighten me because I am 99% it is wrong and i do not know how
    @JoinColumn(name = "user_id", nullable = false)
    private User user;

    @OneToMany(mappedBy = "OpenChats", cascade = CascadeType.ALL, orphanRemoval = true)
    private ArrayList<ChatLog> chats = new ArrayList<>();


    public OpenChat() {}

    public OpenChat( User user) {
        this.user = user;
    }

    // Getters and setters
    public int getId() { return id; }

    public User getUser() { return user; }
    public void setUser(User user) { this.user = user; }

    public void NewChatLog(ChatLog chatLog) {
        chats.add(chatLog);
    }

    public void BlockUser(Listing listing) {
        chats.remove(listing);
    }
}
