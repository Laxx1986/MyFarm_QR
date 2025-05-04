package com.myfarm_qr.dto;

import java.util.Set;
import java.util.UUID;

public class GardenDto {

    private UUID id;
    private String name;
    private Set<VegetableDto> vegetables;

    // Getters and Setters
    public UUID getId() {
        return id;
    }

    public void setId(UUID id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public Set<VegetableDto> getVegetables() {
        return vegetables;
    }

    public void setVegetables(Set<VegetableDto> vegetables) {
        this.vegetables = vegetables;
    }
}
