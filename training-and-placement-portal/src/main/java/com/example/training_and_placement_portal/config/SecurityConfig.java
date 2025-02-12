package com.example.training_and_placement_portal.config;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.security.web.SecurityFilterChain;

@Configuration
public class SecurityConfig {
    
    @Bean
    public PasswordEncoder passwordEncoder() {
        return new BCryptPasswordEncoder();
    }

    @Bean
    public SecurityFilterChain securityFilterChain(HttpSecurity http) throws Exception {
        http
            .cors() // Enable CORS
            .and()
            .authorizeHttpRequests(auth -> auth
                .requestMatchers("/", "/login", "/auth/**").permitAll() // Allow API and login pages
                .anyRequest().authenticated() // Secure all other requests
                
            )
            .csrf(csrf -> csrf.disable()); // Disable CSRF for API testing

        return http.build();
    }
}
