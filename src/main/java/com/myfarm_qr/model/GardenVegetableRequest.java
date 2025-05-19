package com.myfarm_qr.model;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.util.List;
import java.util.UUID;

@Setter
@Getter
@NoArgsConstructor
public class GardenVegetableRequest {
    private String gardenId;
    private List<String> vegetableIds;
}
