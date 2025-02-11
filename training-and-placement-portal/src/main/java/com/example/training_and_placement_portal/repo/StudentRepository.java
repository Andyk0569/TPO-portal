package com.example.training_and_placement_portal.repo;


import java.util.List;

import org.springframework.data.mongodb.repository.MongoRepository;

import com.example.training_and_placement_portal.model.StudentData;

public interface StudentRepository extends MongoRepository<StudentData, String> {

	 List<StudentData> findByDept(String dept);
	
}
