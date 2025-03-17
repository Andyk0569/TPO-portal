package com.example.training_and_placement_portal.repo;

import org.springframework.data.mongodb.repository.MongoRepository;

import com.example.training_and_placement_portal.model.User;

import java.util.Optional;


public interface UserRepository extends MongoRepository<User, String> {
    Optional<User> findByEmail(String email);
}
