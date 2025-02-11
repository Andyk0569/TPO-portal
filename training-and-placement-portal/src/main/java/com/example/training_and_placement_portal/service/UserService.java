package com.example.training_and_placement_portal.service;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import com.example.training_and_placement_portal.model.Recruiter;
import com.example.training_and_placement_portal.model.SignupRequest;
import com.example.training_and_placement_portal.model.Student;
import com.example.training_and_placement_portal.repo.RecruiterRepository;
import com.example.training_and_placement_portal.repo.StudentRepository;

@Service
public class UserService {
    @Autowired
    private StudentRepository studentRepository;
    @Autowired
    private RecruiterRepository recruiterRepository;

    public ResponseEntity<String> registerUser(SignupRequest signupRequest) {
        if ("STUDENT".equalsIgnoreCase(signupRequest.getAccountType())) {
            Student student = new Student();
            student.setFirstName(signupRequest.getFirstName());
            student.setLastName(signupRequest.getLastName());
            student.setEmail(signupRequest.getEmail());
            student.setPassword(signupRequest.getPassword());
            studentRepository.save(student);
        } else {
            Recruiter recruiter = new Recruiter();
            recruiter.setFirstName(signupRequest.getFirstName());
            recruiter.setLastName(signupRequest.getLastName());
            recruiter.setEmail(signupRequest.getEmail());
            recruiter.setPassword(signupRequest.getPassword());
            recruiterRepository.save(recruiter);
        }
        return ResponseEntity.ok("User registered successfully");
    }
}