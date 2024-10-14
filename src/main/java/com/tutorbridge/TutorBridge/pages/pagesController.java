package com.tutorbridge.TutorBridge.pages;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class pagesController {

    @GetMapping
    public String frontPage() {
        return "Successful!";
    }
}