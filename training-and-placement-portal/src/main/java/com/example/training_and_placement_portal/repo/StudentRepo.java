package com.example.training_and_placement_portal.repo;

import java.util.Optional;

import org.springframework.data.mongodb.repository.MongoRepository;

import com.example.training_and_placement_portal.model.StudentUser;

public interface StudentRepo extends MongoRepository<StudentUser,String>{
	Optional<StudentUser> findByEmail(String email);
}
