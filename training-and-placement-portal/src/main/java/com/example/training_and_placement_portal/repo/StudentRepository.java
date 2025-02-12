package com.example.training_and_placement_portal.repo;


import java.util.List;
import java.util.Optional;

import org.springframework.data.mongodb.repository.MongoRepository;

import com.example.training_and_placement_portal.model.Student;

import org.springframework.stereotype.Repository;

@Repository
public interface StudentRepository extends MongoRepository<Student, String> {
    boolean existsByEmail(String email);
    Optional<Student> findByEmail(String email);
}

