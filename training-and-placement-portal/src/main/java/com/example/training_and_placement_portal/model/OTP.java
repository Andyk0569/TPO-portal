package com.example.training_and_placement_portal.model;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;
import lombok.Data;

@Data
@Document(collection = "otp")
public class OTP {
    @Id
    private String id;
    private String email;
    private String otp;
    private long createdAt;
	public String getId() {
		return id;
	}
	public void setId(String id) {
		this.id = id;
	}
	public String getEmail() {
		return email;
	}
	public void setEmail(String email) {
		this.email = email;
	}
	public String getOtp() {
		return otp;
	}
	public void setOtp(String otp) {
		this.otp = otp;
	}
	public long getCreatedAt() {
		return createdAt;
	}
	public void setCreatedAt(long createdAt) {
		this.createdAt = createdAt;
	}
}

