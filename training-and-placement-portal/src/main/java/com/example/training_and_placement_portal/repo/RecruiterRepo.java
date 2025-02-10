package com.example.training_and_placement_portal.repo;

import java.util.Optional;

import org.springframework.data.mongodb.repository.MongoRepository;

import com.example.training_and_placement_portal.model.RecruiterUser;


public interface RecruiterRepo extends MongoRepository<RecruiterUser,String> {
	Optional<RecruiterUser> findByEmail(String email);
}
