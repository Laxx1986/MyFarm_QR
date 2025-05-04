package com.myfarm_qr.model;

import jakarta.persistence.*;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.util.HashSet;
import java.util.Set;
import java.util.UUID;

@Entity
@Table(name = "vegetable")
@Getter
@Setter
@NoArgsConstructor
public class Vegetable {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private UUID id;

    private String name;
    @Column(length = 1000)
    private String description;
    @Column(length = 1000)
    private String storing_tips;

    private String link_to_photo;

    @ManyToMany(mappedBy = "vegetables")
    private Set<Garden> gardens = new HashSet<>();
}
