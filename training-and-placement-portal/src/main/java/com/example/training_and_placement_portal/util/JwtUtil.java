package com.example.training_and_placement_portal.util;

import io.jsonwebtoken.*;
import io.jsonwebtoken.security.Keys;
import org.springframework.stereotype.Component;
import java.util.Date;
import javax.crypto.SecretKey;
import io.jsonwebtoken.Claims;
import io.jsonwebtoken.Jwts;
import io.jsonwebtoken.SignatureAlgorithm;

@Component
public class JwtUtil {
    private final SecretKey secret = Keys.secretKeyFor(SignatureAlgorithm.HS256);

    public String generateToken(String email, String id, String accountType) {
        return Jwts.builder()
                .claim("email", email)
                .claim("id", id)
                .claim("accountType", accountType)
                .setIssuedAt(new Date())
                .setExpiration(new Date(System.currentTimeMillis() + 86400000)) // 24 hours
                .signWith(SignatureAlgorithm.HS256, secret)
                .compact();
    }
    
    public Claims validateToken(String token) {
        return Jwts.parserBuilder()
                .setSigningKey(secret)
                .build()
                .parseClaimsJws(token)
                .getBody();
    }
}

