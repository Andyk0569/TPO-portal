package com.example.training_and_placement_portal.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import com.example.training_and_placement_portal.model.StudentData;
import com.example.training_and_placement_portal.repo.StudentRepository;
import com.example.training_and_placement_portal.service.FileStorageService;

import java.io.IOException;
import java.io.InputStream;
import java.util.List;

@RestController
@RequestMapping("/api/students")
public class StudentController {

    @Autowired
    private StudentRepository studentRepository;

    @Autowired
    private FileStorageService fileStorageService;

    // Add a new student with resume file
    @PostMapping("/add")
    public ResponseEntity<String> addStudent(
            @RequestParam String name,
            @RequestParam String email,
            @RequestParam String dept,
            @RequestParam Double sscMarks,
            @RequestParam Double hscOrDiplomaMarks,
            @RequestParam List<Double> semesterMarks,
            @RequestParam String currentYear,
            @RequestParam MultipartFile resumeFile) {

        try {
            String resumeFileId = fileStorageService.storeFile(resumeFile);

            StudentData student = new StudentData();
            student.setName(name);
            student.setEmail(email);
            student.setDept(dept);
            student.setSscMarks(sscMarks);
            student.setHscOrDiplomaMarks(hscOrDiplomaMarks);
            student.setSemesterMarks(semesterMarks);
            student.setCurrentYear(currentYear);
            student.setResumeFileId(resumeFileId);

            studentRepository.save(student);
            return ResponseEntity.status(HttpStatus.CREATED).body("Student added successfully with ID: " + student.getId());
        } catch (IOException e) {
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body("Error saving student: " + e.getMessage());
        }
    }

    // Get all students
    @GetMapping("/all")
    public ResponseEntity<List<StudentData>> getAllStudents() {
        List<StudentData> students = studentRepository.findAll();
        return ResponseEntity.ok(students);
    }

    // Get student by ID
    @GetMapping("/{id}")
    public ResponseEntity<StudentData> getStudentById(@PathVariable String id) {
        return studentRepository.findById(id)
                .map(ResponseEntity::ok)
                .orElse(ResponseEntity.notFound().build());
    }

    // Download resume file
    @GetMapping("/resume/{fileId}")
    public ResponseEntity<byte[]> getResume(@PathVariable String fileId) {
        try {
            InputStream fileStream = fileStorageService.getFile(fileId);
            byte[] fileContent = fileStream.readAllBytes();
            HttpHeaders headers = new HttpHeaders();
            headers.setContentType(MediaType.APPLICATION_PDF);
            headers.setContentDispositionFormData("attachment", "resume.pdf");
            return new ResponseEntity<>(fileContent, headers, HttpStatus.OK);
        } catch (IOException e) {
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body(null);
        }
    }
}

