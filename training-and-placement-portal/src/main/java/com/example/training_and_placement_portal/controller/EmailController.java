package com.example.training_and_placement_portal.controller;

import com.example.training_and_placement_portal.model.StudentData;
import com.example.training_and_placement_portal.repo.StudentRepository;
import com.example.training_and_placement_portal.service.EmailService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.stream.Collectors;

@RestController
@RequestMapping("/api/email")
public class EmailController {

    @Autowired
    private StudentRepository studentRepository;

    @Autowired
    private EmailService emailService;

    @PostMapping("/send-notice")
    public ResponseEntity<String> sendNoticeEmail(@RequestParam String subject,
                                                  @RequestParam String message,
                                                  @RequestParam(required = false) String department) {

        List<String> recipients;

        if ("All".equalsIgnoreCase(department)) {
            // Send to all students
            recipients = studentRepository.findAll().stream()
                    .map(StudentData::getEmail)
                    .collect(Collectors.toList());
        } else {
            // Send to department-specific students using dept field
            recipients = studentRepository.findByDept(department).stream()
                    .map(StudentData::getEmail)
                    .collect(Collectors.toList());
        }

        if (recipients.isEmpty()) {
            return ResponseEntity.badRequest().body("No students found for the selected department.");
        }

        emailService.sendEmail(recipients, subject, message);
        return ResponseEntity.ok("Notice sent successfully!");
    }
}
