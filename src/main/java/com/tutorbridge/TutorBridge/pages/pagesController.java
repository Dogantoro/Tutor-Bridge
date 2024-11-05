package com.tutorbridge.TutorBridge.pages;

import org.springframework.boot.web.servlet.error.ErrorController;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@Controller
public class pagesController implements ErrorController {
    @RequestMapping("/error")
    public String error() {
        return "forward:error.html";
    }

}