package com.example.training_and_placement_portal.model;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;
import org.springframework.web.multipart.MultipartFile;
import jakarta.validation.constraints.Email;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotNull;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.Setter;

import java.util.List;

@Getter
@Setter
@AllArgsConstructor
@Document(collection = "students")
public class StudentData {
	
	  @Id
	    private String id;
	  
		@NotBlank
	    private String name;
	    
	    @Email
	    @NotBlank
	    private String email;
	    
	    private String collegeName = "Dr J J Magdum College of Engineering";
	    
	    @NotBlank
	    private String dept;

		@NotNull
	    private Double sscMarks;
	    
	    @NotNull
	    private Double hscOrDiplomaMarks;
	    
	    private List<Double> semesterMarks;
	    
	    @NotBlank
	    private String currentYear;
	    
	    private String resumeFileId;
	    
	    // Getters and Setters
	    
	    public String getId() {
		return id;
	}

	public void setId(String id) {
		this.id = id;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public String getEmail() {
		return email;
	}

	public void setEmail(String email) {
		this.email = email;
	}
	
	public String getDept() {
		return dept;
	}

	public void setDept(String dept) {
		this.dept = dept;
	}

	public Double getSscMarks() {
		return sscMarks;
	}

	public void setSscMarks(Double sscMarks) {
		this.sscMarks = sscMarks;
	}

	public Double getHscOrDiplomaMarks() {
		return hscOrDiplomaMarks;
	}

	public void setHscOrDiplomaMarks(Double hscOrDiplomaMarks) {
		this.hscOrDiplomaMarks = hscOrDiplomaMarks;
	}

	public List<Double> getSemesterMarks() {
		return semesterMarks;
	}

	public void setSemesterMarks(List<Double> semesterMarks) {
		this.semesterMarks = semesterMarks;
	}

	public String getCurrentYear() {
		return currentYear;
	}

	public void setCurrentYear(String currentYear) {
		this.currentYear = currentYear;
	}

	public String getResumeFileId() {
		return resumeFileId;
	}

	public void setResumeFileId(String resumeFileId) {
		this.resumeFileId = resumeFileId;
	}

	public String getCollegeName() {
		return collegeName;
		
	}
	
	public void setCollegeName(String collegeName) {
	    this.collegeName = collegeName;
	}


	
	
}
