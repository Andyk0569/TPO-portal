package com.example.training_and_placement_portal.repo;

import org.springframework.data.mongodb.repository.MongoRepository;

import com.example.training_and_placement_portal.model.OTP;

import java.util.Optional;
import java.util.List;



public interface OTPRepository extends MongoRepository<OTP, String> {
    List<OTP> findTop1ByEmailOrderByCreatedAtDesc(String email);
    Optional<OTP> findByOtp(String otp);
}
