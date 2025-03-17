package com.example.training_and_placement_portal.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import com.example.training_and_placement_portal.model.User;
import com.example.training_and_placement_portal.payload.LoginResponse;
import com.example.training_and_placement_portal.service.AuthService;

import java.util.Map;

@RestController
@RequestMapping("/auth")
public class AuthController {

    @Autowired
    private AuthService authService;

    @PostMapping("/signup")
    public String signup(@RequestBody Map<String, String> request) throws Exception {
        User user = new User();
        user.setFirstName(request.get("firstName"));
        user.setLastName(request.get("lastName"));
        user.setEmail(request.get("email"));
        user.setPassword(request.get("password"));
        user.setAccountType(request.get("accountType"));
        user.setContactNumber(request.get("contactNumber"));

        return authService.signup(user, request.get("otp"), request.get("confirmPassword"));
    }

    @PostMapping("/login")
    public ResponseEntity<LoginResponse> login(@RequestBody Map<String, String> request) throws Exception {
        LoginResponse response = authService.login(request.get("email"), request.get("password"));
        return ResponseEntity.ok(response);
    }
    @PostMapping("/ssendotp")
    public String sendOtp(@RequestBody Map<String, String> request) throws Exception {
        return authService.sendOTP(request.get("email"));
    }

    @PostMapping("/changepassword")
    public String changePassword(@RequestBody Map<String, String> request) throws Exception {
        String userId = request.get("userId"); // Replace with token-based user extraction
        authService.changePassword(userId, request.get("oldPassword"), request.get("newPassword"), request.get("confirmNewPassword"));
        return "Password Updated Successfully";
    }
}

