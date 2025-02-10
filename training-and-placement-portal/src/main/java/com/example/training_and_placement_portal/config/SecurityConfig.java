package com.example.training_and_placement_portal.config;


import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.web.SecurityFilterChain;

@Configuration
public class SecurityConfig {

    @Bean
    public SecurityFilterChain securityFilterChain(HttpSecurity http) throws Exception {
        http
            .authorizeRequests()
                .requestMatchers("/api/**").permitAll()  // Allow all requests to /api/*
                .anyRequest().permitAll()  // Allow any request without authentication
            .and()
            .csrf().disable();  // Disable CSRF for testing with Postman and non-browser clients

        return http.build();  // Return the security filter chain
    }
}


