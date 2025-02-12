package com.example.training_and_placement_portal.controller;

import com.example.training_and_placement_portal.model.LoginRequest;
import com.example.training_and_placement_portal.model.LoginResponse;
import com.example.training_and_placement_portal.model.Recruiter;
import com.example.training_and_placement_portal.model.Student;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.web.bind.annotation.*;

import java.util.Map;
import java.util.Optional;

@RestController
@RequestMapping("/api/auth")
@CrossOrigin(origins = "http://localhost:3000") // Allow frontend to communicate
public class LoginController {

    @Autowired
    private com.example.training_and_placement_portal.repo.StudentRepository studentRepository;

    @Autowired
    private com.example.training_and_placement_portal.repo.RecruiterRepository recruiterRepository;

    @Autowired
    private PasswordEncoder passwordEncoder;

    @PostMapping("/login")
    public ResponseEntity<?> loginUser(@RequestBody LoginRequest loginRequest) {
        Optional<Student> studentOptional = studentRepository.findByEmail(loginRequest.getEmail());
        Optional<Recruiter> recruiterOptional = recruiterRepository.findByEmail(loginRequest.getEmail());

        if (studentOptional.isPresent()) {
            Student student = studentOptional.get();
            if (passwordEncoder.matches(loginRequest.getPassword(), student.getPassword())) {
                return ResponseEntity.ok(new LoginResponse("Login successful", null)); // No token
            }
        } else if (recruiterOptional.isPresent()) {
            Recruiter recruiter = recruiterOptional.get();
            if (passwordEncoder.matches(loginRequest.getPassword(), recruiter.getPassword())) {
                return ResponseEntity.ok(new LoginResponse("Login successful", null)); // No token
            }
        }

        return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body(Map.of("message", "Invalid credentials"));
    }
}
