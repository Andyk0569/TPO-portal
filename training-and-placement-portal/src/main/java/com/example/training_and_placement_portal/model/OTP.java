package com.example.training_and_placement_portal.model;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

import java.time.LocalDateTime;

@Document(collection = "otp")
public class OTP {

    @Id
    private String id;
    private String email;
    private String otp;
    private LocalDateTime createdAt;

    public OTP(String email, String otp) {
        this.email = email;
        this.otp = otp;
        this.createdAt = LocalDateTime.now(); // Set current time
    }

    // Getters and setters
    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getOtp() {
        return otp;
    }

    public void setOtp(String otp) {
        this.otp = otp;
    }

    public LocalDateTime getCreatedAt() {
        return createdAt;
    }

    public void setCreatedAt(LocalDateTime createdAt) {
        this.createdAt = createdAt;
    }
}
