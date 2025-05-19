package com.myfarm_qr.dto;

import java.util.List;
import java.util.UUID;

public class GardenVegetableRequestDTO {
    private UUID gardenId;
    private List<UUID> vegetableIds;

    public UUID getGardenId() { return gardenId; }
    public void setGardenId(UUID gardenId) { this.gardenId = gardenId; }

    public List<UUID> getVegetableIds() { return vegetableIds; }
    public void setVegetableIds(List<UUID> vegetableIds) { this.vegetableIds = vegetableIds; }
}
