package com.example.training_and_placement_portal.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import com.example.training_and_placement_portal.model.SignupRequest;
import com.example.training_and_placement_portal.model.Student;
import com.example.training_and_placement_portal.model.Recruiter;
import com.example.training_and_placement_portal.repo.StudentRepository;
import com.example.training_and_placement_portal.repo.RecruiterRepository;

@Service
public class UserService {
    
    @Autowired
    private StudentRepository studentRepository;
    
    @Autowired
    private RecruiterRepository recruiterRepository;

    public ResponseEntity<String> registerUser(SignupRequest signupRequest) {
        String accountType = signupRequest.getAccountType().toUpperCase(); // Normalize input

        // Directly use the password without encryption for now
        String password = signupRequest.getPassword();

        if ("STUDENT".equals(accountType)) {
            if (studentRepository.findByEmail(signupRequest.getEmail()).isPresent()) {
                return ResponseEntity.badRequest().body("Student with this email already exists.");
            }
            Student student = new Student();
            student.setFirstName(signupRequest.getFirstName());
            student.setLastName(signupRequest.getLastName());
            student.setEmail(signupRequest.getEmail());
            student.setPassword(password);  // Save the password as-is
            student.setAccountType(accountType); // Set account type
            studentRepository.save(student);
        } else if ("RECRUITER".equals(accountType)) {
            if (recruiterRepository.findByEmail(signupRequest.getEmail()).isPresent()) {
                return ResponseEntity.badRequest().body("Recruiter with this email already exists.");
            }
            Recruiter recruiter = new Recruiter();
            recruiter.setFirstName(signupRequest.getFirstName());
            recruiter.setLastName(signupRequest.getLastName());
            recruiter.setEmail(signupRequest.getEmail());
            recruiter.setPassword(password);  // Save the password as-is
            recruiter.setAccountType(accountType); // Set account type
            recruiterRepository.save(recruiter);
        } else {
            return ResponseEntity.badRequest().body("Invalid account type");
        }

        return ResponseEntity.ok("User registered successfully");
    }
}
