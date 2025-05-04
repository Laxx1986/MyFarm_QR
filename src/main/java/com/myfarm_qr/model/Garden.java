package com.myfarm_qr.model;

import jakarta.persistence.*;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.util.HashSet;
import java.util.Set;
import java.util.UUID;

@Entity
@Table(name = "garden")
@Getter
@Setter
@NoArgsConstructor
public class Garden {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private UUID id;

    private String name;

    @ManyToMany
    @JoinTable(
            name = "garden_vegetable",
            joinColumns = @JoinColumn(name = "garden_id"),
            inverseJoinColumns = @JoinColumn(name = "vegetable_id")
    )
    private Set<Vegetable> vegetables = new HashSet<>();
}
