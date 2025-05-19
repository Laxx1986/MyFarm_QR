package com.myfarm_qr.controller;

import com.myfarm_qr.model.User;
import com.myfarm_qr.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.web.bind.annotation.*;

import java.util.Map;

@RestController
@RequestMapping("/api/auth")
public class AuthController {

    @Autowired
    private UserService userService;

    private final BCryptPasswordEncoder passwordEncoder = new BCryptPasswordEncoder();

    @PostMapping("/login")
    public ResponseEntity<?> login(@RequestBody Map<String, String> payload) {

        String username = payload.get("username");
        String password = payload.get("password");


        return userService.findByUsername(username)
                .map(user -> {
                    if (passwordEncoder.matches(password, user.getPassword())) {
                        return ResponseEntity.ok(Map.of("success", true));
                    } else {
                        return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body(Map.of("error", "Hibás jelszó"));
                    }
                })
                .orElseGet(() ->
                        ResponseEntity.status(HttpStatus.UNAUTHORIZED).body(Map.of("error", "Felhasználó nem található"))
                );
    }
}
