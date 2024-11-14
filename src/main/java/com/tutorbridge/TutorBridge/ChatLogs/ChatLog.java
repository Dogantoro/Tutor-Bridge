package com.tutorbridge.TutorBridge.ChatLogs;
import com.tutorbridge.TutorBridge.OpenChats.OpenChat;
import com.tutorbridge.TutorBridge.Users.User;
import jakarta.persistence.*;

import java.util.ArrayList;

@Entity
@Table(name = "ChatLogs")
public class ChatLog {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private int id;

    // this is erroring and having a seizure when i try to use a data structure to store the chats it is way to late to worry abt this i will sub with a string
    String ChatLogHistory;

    @ManyToOne
    // I have legitimately no clue how this line works please enlighten me because I am 99% it is wrong and i do not know how
    @JoinColumn(name = "ChatLogs", nullable = false)
    private OpenChat user_name;

    public ChatLog(){
        this.ChatLogHistory = "Hello";
    }

    public String getTitle() { return ChatLogHistory; }
    public void setTitle(String title) { this.ChatLogHistory = title; }

}
