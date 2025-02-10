package com.example.training_and_placement_portal.controller;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.example.training_and_placement_portal.model.AdminLoginDto;

@RestController
@RequestMapping("/api/auth")
public class AdminLoginController {
	@CrossOrigin(origins = "http://localhost:3000")
	@PostMapping("/adminlogin")
    public ResponseEntity<String> login(@RequestBody AdminLoginDto loginDto) {
        String username = loginDto.getUsername();
        String password = loginDto.getPassword();

        // Validate credentials (this is just a simple example; you should use a service and hash passwords in a real-world app)
        if ("admin".equals(username) && "admin123".equals(password)) {
            return ResponseEntity.ok("Login successful");
        } else {
            return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body("Invalid credentials");
        }
    }
	
	// Handle OPTIONS request (preflight)
    @CrossOrigin(origins = "http://localhost:3000") // Allow CORS for this endpoint
    @RequestMapping(method = RequestMethod.OPTIONS, value = "/adminlogin")
    public ResponseEntity<Void> handleOptionsRequest() {
        return ResponseEntity.ok().build();
    }
}
