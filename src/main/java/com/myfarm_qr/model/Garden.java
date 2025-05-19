package com.myfarm_qr.model;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import org.hibernate.annotations.GenericGenerator;

import java.util.HashSet;
import java.util.Set;
import java.util.UUID;

@Entity
@Table(name = "garden")
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class Garden {

    @Id
    @GeneratedValue(generator = "UUID")
    @GenericGenerator(
            name = "UUID",
            strategy = "org.hibernate.id.UUIDGenerator"
    )
    private UUID id;

    private String name;

    @ManyToMany
    @JoinTable(
            name = "garden_vegetable",
            joinColumns = @JoinColumn(name = "garden_id"),
            inverseJoinColumns = @JoinColumn(name = "vegetable_id")
    )
    @com.fasterxml.jackson.annotation.JsonManagedReference
    private Set<Vegetable> vegetables = new HashSet<>();


    public Garden(String name) {
        this.name = name;
    }
}
