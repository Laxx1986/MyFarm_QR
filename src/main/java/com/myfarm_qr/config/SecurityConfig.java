package com.myfarm_qr.config;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.http.SessionCreationPolicy;
import org.springframework.security.web.SecurityFilterChain;
import org.springframework.security.web.authentication.UsernamePasswordAuthenticationFilter;
import org.springframework.web.cors.CorsConfiguration;
import org.springframework.web.cors.CorsConfigurationSource;
import org.springframework.web.cors.UrlBasedCorsConfigurationSource;

import java.util.List;

@Configuration
public class SecurityConfig {

    @Bean
    public SecurityFilterChain securityFilterChain(HttpSecurity http) throws Exception {
        http
                .csrf(csrf -> csrf.disable()) // CSRF kikapcsolása (ha nem szükséges)
                .cors(cors -> cors.configurationSource(corsConfigurationSource())) // CORS beállítások
                .authorizeHttpRequests(auth -> auth
                        .requestMatchers("/api/auth/**", "/api/vegetables", "/api/gardens").permitAll()
                        .anyRequest().permitAll()
                )
                .formLogin(login -> login.disable()) // FONTOS: form login letiltása
                .logout(logout -> logout.disable()) // Opcionális: logout is REST-tel legyen kezelve
                .httpBasic(httpBasic -> httpBasic.disable()) // Nem basic auth
                .sessionManagement(session -> session
                        .sessionCreationPolicy(SessionCreationPolicy.IF_REQUIRED));

        return http.build();
    }

    // CORS beállítások
    @Bean
    public CorsConfigurationSource corsConfigurationSource() {
        CorsConfiguration configuration = new CorsConfiguration();
        configuration.setAllowedOrigins(List.of(
                "https://visszajelzes.myfarmharta.com"));
        configuration.setAllowedMethods(List.of("GET", "POST", "PUT", "DELETE", "OPTIONS"));
        configuration.setAllowedHeaders(List.of("Authorization", "Content-Type"));
        configuration.setAllowCredentials(true); // Hitelesítési adatok engedélyezése (cookie)

        UrlBasedCorsConfigurationSource source = new UrlBasedCorsConfigurationSource();
        source.registerCorsConfiguration("/**", configuration); // CORS minden útvonalra
        return source;
    }
}
