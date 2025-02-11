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
            .authorizeHttpRequests(auth -> auth
                .requestMatchers("/", "/login", "/api/**").permitAll() // Allow API and login pages
                .anyRequest().authenticated() // Secure all other requests
            )
            .oauth2Login(oauth2 -> oauth2
                .defaultSuccessUrl("/dashboard", true) // Redirect to dashboard after LinkedIn login
            )
            .csrf(csrf -> csrf.disable()); // Disable CSRF for API testing

        return http.build();
    }
}
