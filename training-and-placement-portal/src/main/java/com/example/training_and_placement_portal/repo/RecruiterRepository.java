package com.example.training_and_placement_portal.repo;

import java.util.Optional;

import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

import com.example.training_and_placement_portal.model.Recruiter;

@Repository
public interface RecruiterRepository extends MongoRepository<Recruiter, String> {
    boolean existsByEmail(String email);
    Optional<Recruiter> findByEmail(String email);
}

