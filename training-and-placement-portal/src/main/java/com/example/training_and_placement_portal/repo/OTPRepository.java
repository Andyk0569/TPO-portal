package com.example.training_and_placement_portal.repo;



import com.example.training_and_placement_portal.model.OTP;
import org.springframework.data.mongodb.repository.MongoRepository;

import java.util.Optional;

public interface OTPRepository extends MongoRepository<OTP, String> {

    // Custom query to find the latest OTP for a specific email
    Optional<OTP> findTopByEmailOrderByCreatedAtDesc(String email);
}
