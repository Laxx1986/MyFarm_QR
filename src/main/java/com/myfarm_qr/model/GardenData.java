package com.myfarm_qr.model;

import jakarta.persistence.*;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.time.LocalDateTime;
import java.util.List;
import java.util.UUID;

@Entity
@Getter
@Setter
@NoArgsConstructor
public class GardenData {
    @Id
    @GeneratedValue(strategy = GenerationType.UUID)
    private UUID id;

    private String kert;

    @ElementCollection
    private List<String> zoldsegek;

    private LocalDateTime createdAt = LocalDateTime.now();
}

