package com.myfarm_qr.model;

import jakarta.persistence.*;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import org.hibernate.annotations.GenericGenerator;

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
    @GeneratedValue(generator = "UUID")
    @GenericGenerator(
            name = "UUID",
            strategy = "org.hibernate.id.UUIDGenerator"
    )
    private UUID id;

    private String name;
    @Column(length = 1000)
    private String description;
    @Column(length = 1000)
    private String storing_tips;

    private String link_to_photo;

    @ManyToMany(mappedBy = "vegetables")
    @com.fasterxml.jackson.annotation.JsonBackReference
    private Set<Garden> gardens = new HashSet<>();

}
