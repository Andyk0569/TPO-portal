package com.example.training_and_placement_portal.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import com.example.training_and_placement_portal.model.Student;
import com.example.training_and_placement_portal.model.OTP;
import com.example.training_and_placement_portal.model.Recruiter;
import com.example.training_and_placement_portal.model.SignupRequest;
import com.example.training_and_placement_portal.repo.OTPRepository;
import com.example.training_and_placement_portal.repo.RecruiterRepository;
import com.example.training_and_placement_portal.repo.StudentRepository;
import com.example.training_and_placement_portal.service.EmailService;
import com.example.training_and_placement_portal.service.UserService;
import com.example.training_and_placement_portal.util.JwtUtil;

import java.util.Optional;
import java.util.Random;

@RestController
@RequestMapping("/auth")
@CrossOrigin(origins = "http://localhost:3000") // Allow frontend requests
public class AuthController {

    @Autowired
    private StudentRepository studentRepository;

    @Autowired
    private RecruiterRepository recruiterRepository;

    @Autowired
    private OTPRepository otpRepository;

    @Autowired
    private EmailService emailService;

    @Autowired
    private JwtUtil jwtUtil;

    @Autowired
    private UserService userService;

    @CrossOrigin(origins = "http://localhost:3000")
    @PostMapping("/signup")
    public ResponseEntity<?> signup(@RequestBody SignupRequest signupRequest) {
        return userService.registerUser(signupRequest);
    }

    @PostMapping("/login")
    public ResponseEntity<?> login(@RequestParam String email, @RequestParam String password, @RequestParam String accountType) {
        Optional<?> user = accountType.equals("student") ? 
                studentRepository.findByEmail(email) : 
                recruiterRepository.findByEmail(email);

        if (user.isEmpty() || !password.equals(accountType.equals("student") ? ((Student) user.get()).getPassword() : ((Recruiter) user.get()).getPassword())) {
            return ResponseEntity.badRequest().body("Invalid email or password.");
        }

        String token = jwtUtil.generateToken(email);
        return ResponseEntity.ok(token);
    }

    @PostMapping("/sendotp")
    public ResponseEntity<?> sendOtp(@RequestParam String email) {
        if (studentRepository.findByEmail(email).isPresent() || recruiterRepository.findByEmail(email).isPresent()) {
            return ResponseEntity.badRequest().body("User already registered.");
        }

        String otp = String.format("%06d", new Random().nextInt(999999));
        otpRepository.save(new OTP(email, otp));
        emailService.sendOtp(email, otp);

        return ResponseEntity.ok("OTP sent successfully.");
    }

    @PostMapping("/changepassword")
    public ResponseEntity<?> changePassword(@RequestParam String email, @RequestParam String oldPassword, @RequestParam String newPassword, @RequestParam String accountType) {
        Optional<?> user = accountType.equals("student") ? 
                studentRepository.findByEmail(email) : 
                recruiterRepository.findByEmail(email);

        if (user.isEmpty() || !oldPassword.equals(accountType.equals("student") ? ((Student) user.get()).getPassword() : ((Recruiter) user.get()).getPassword())) {
            return ResponseEntity.badRequest().body("Invalid current password.");
        }

        if (accountType.equals("student")) {
            ((Student) user.get()).setPassword(newPassword);  // Save the password as-is
            studentRepository.save((Student) user.get());
        } else {
            ((Recruiter) user.get()).setPassword(newPassword);  // Save the password as-is
            recruiterRepository.save((Recruiter) user.get());
        }

        return ResponseEntity.ok("Password updated successfully");
    }
}
