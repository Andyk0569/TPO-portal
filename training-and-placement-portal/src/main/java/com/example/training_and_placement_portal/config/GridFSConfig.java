package com.example.training_and_placement_portal.config;

import com.mongodb.client.MongoClient;
import com.mongodb.client.MongoDatabase;
import com.mongodb.client.gridfs.GridFSBucket;
import com.mongodb.client.gridfs.GridFSBuckets;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

@Configuration
public class GridFSConfig {
	 @Bean
	    public GridFSBucket gridFSBucket(MongoClient mongoClient) {
	        MongoDatabase database = mongoClient.getDatabase("students");
	        return GridFSBuckets.create(database);
	    }
}
