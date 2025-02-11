package com.example.training_and_placement_portal.controller;

import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.example.training_and_placement_portal.model.RecruiterUser;
import com.example.training_and_placement_portal.model.StudentUser;
import com.example.training_and_placement_portal.repo.RecruiterRepo; // Import the appropriate repository
import com.example.training_and_placement_portal.repo.StudentRepo;

@RestController
public class LoginController {

    @Autowired
    private StudentRepo studentRepo;

    @Autowired
    private RecruiterRepo recruiterRepo; // Add this if you have a separate repository

    @CrossOrigin(origins = "http://localhost:3000")
    @PostMapping("/addStudent")
    public ResponseEntity<String> addStudent(@RequestBody StudentUser user) {
        try {
            studentRepo.save(user);
            return ResponseEntity.ok("Student registered successfully!");
        } catch (Exception e) {
            return ResponseEntity.status(500).body("Error registering student: " + e.getMessage());
        }
    }

    @CrossOrigin(origins = "http://localhost:3000")
    @PostMapping("/login")
    public ResponseEntity<String> login(@RequestBody StudentUser user) {
        Optional<StudentUser> existingUser = studentRepo.findByEmail(user.getEmail());
        
        if (existingUser.isPresent() && existingUser.get().getPassword().equals(user.getPassword())) {
            return ResponseEntity.ok("Login successful!");
        } else {
            return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body("Invalid email or password.");
        }
    }

    @CrossOrigin(origins = "http://localhost:3000")
    @PostMapping("/addRecruiter")
    public ResponseEntity<String> addRecruiter(@RequestBody RecruiterUser user) {
        try {
            recruiterRepo.save(user);
            return ResponseEntity.ok("Recruiter registered successfully!");
        } catch (Exception e) {
            return ResponseEntity.status(500).body("Error registering recruiter: " + e.getMessage());
        }
    }

    @CrossOrigin(origins = "http://localhost:3000")
    @PostMapping("/loginRecruiter") // New endpoint for recruiter login
    public ResponseEntity<String> loginRecruiter(@RequestBody RecruiterUser user) {
        Optional<RecruiterUser> existingRecruiter = recruiterRepo.findByEmail(user.getEmail());
        
        if (existingRecruiter.isPresent() && existingRecruiter.get().getPassword().equals(user.getPassword())) {
            return ResponseEntity.ok("Recruiter login successful!");
        } else {
            return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body("Invalid email or password.");
        }
    }
}
