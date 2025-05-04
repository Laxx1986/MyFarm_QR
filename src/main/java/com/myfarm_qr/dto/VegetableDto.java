package com.myfarm_qr.dto;

import java.util.UUID;

public class VegetableDto {

    private UUID id;
    private String name;
    private String description;
    private String storingTips;
    private String linkToPhoto;

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

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public String getStoringTips() {
        return storingTips;
    }

    public void setStoringTips(String storingTips) {
        this.storingTips = storingTips;
    }

    public String getLinkToPhoto() {
        return linkToPhoto;
    }

    public void setLinkToPhoto(String linkToPhoto) {
        this.linkToPhoto = linkToPhoto;
    }
}
