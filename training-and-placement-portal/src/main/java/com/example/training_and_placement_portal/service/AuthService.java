package com.example.training_and_placement_portal.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;

import com.example.training_and_placement_portal.model.OTP;
import com.example.training_and_placement_portal.model.User;
import com.example.training_and_placement_portal.payload.LoginResponse;
import com.example.training_and_placement_portal.repo.OTPRepository;
import com.example.training_and_placement_portal.repo.UserRepository;
import com.example.training_and_placement_portal.util.JwtUtil;

import java.time.Instant;
import java.util.Optional;
import java.util.Random;

import javax.crypto.SecretKey;

import io.jsonwebtoken.Jwts;
import io.jsonwebtoken.SignatureAlgorithm;
import io.jsonwebtoken.security.Keys;

import java.util.Date;
import java.util.List;

@Service
public class AuthService {

    @Autowired
    private UserRepository userRepository;

    @Autowired
    private OTPRepository otpRepository;

    @Autowired
    private MailService mailService; // Implement similar to mailSender utility
    
    private JwtUtil jwtUtil;

    private BCryptPasswordEncoder passwordEncoder = new BCryptPasswordEncoder();

    

    public String generateOTP() {
        Random random = new Random();
        int otp = 100000 + random.nextInt(900000);
        return String.valueOf(otp);
    }

    // Sign-up logic
    public String signup(User user, String otp, String confirmPassword) throws Exception {
        if (!user.getPassword().equals(confirmPassword)) {
            throw new Exception("Password and Confirm Password do not match");
        }
        Optional<User> existingUser = userRepository.findByEmail(user.getEmail());
        if (existingUser.isPresent()) {
            throw new Exception("User already exists");
        }
        List<OTP> otpRecords = otpRepository.findTop1ByEmailOrderByCreatedAtDesc(user.getEmail());
        if (otpRecords.isEmpty() || !otpRecords.get(0).getOtp().equals(otp)) {
            throw new Exception("Invalid OTP");
        }

        user.setPassword(passwordEncoder.encode(user.getPassword()));
        user.setApproved(!user.getAccountType().equalsIgnoreCase("Instructor"));
        user.setImage("https://api.dicebear.com/6.x/initials/svg?seed=" + user.getFirstName() + user.getLastName());
        userRepository.save(user);
        return "User registered successfully";
    }

    // Login Logic
    public LoginResponse login(String email, String password) throws Exception {
        User user = userRepository.findByEmail(email)
                .orElseThrow(() -> new Exception("User not registered"));
        if (!passwordEncoder.matches(password, user.getPassword())) {
            throw new Exception("Incorrect password");
        }
        String token = jwtUtil.generateToken(user.getEmail(), user.getId(), user.getAccountType());
        user.setToken(token);
        userRepository.save(user);

        return new LoginResponse(token, "Login successful!");
    }

    // Send OTP
    public String sendOTP(String email) throws Exception {
        if (userRepository.findByEmail(email).isPresent()) {
            throw new Exception("User already registered");
        }
        String otp = generateOTP();
        OTP otpRecord = new OTP();
        otpRecord.setEmail(email);
        otpRecord.setOtp(otp);
        otpRecord.setCreatedAt(Instant.now().toEpochMilli());
        otpRepository.save(otpRecord);
        // Send email (use mailService)
        mailService.sendEmail(email, "OTP Verification", "Your OTP: " + otp);
        return otp;
    }

    // Change Password
    public void changePassword(String userId, String oldPassword, String newPassword, String confirmNewPassword) throws Exception {
        User user = userRepository.findById(userId)
                .orElseThrow(() -> new Exception("User not found"));
        if (oldPassword.equals(newPassword)) {
            throw new Exception("New Password cannot be same as Old Password");
        }
        if (!passwordEncoder.matches(oldPassword, user.getPassword())) {
            throw new Exception("Old password is incorrect");
        }
        if (!newPassword.equals(confirmNewPassword)) {
            throw new Exception("Password and Confirm Password do not match");
        }
        user.setPassword(passwordEncoder.encode(newPassword));
        userRepository.save(user);
        mailService.sendEmail(user.getEmail(), "Password Updated",
                "Password updated successfully for " + user.getFirstName() + " " + user.getLastName());
    }
}

