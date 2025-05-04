package com.myfarm_qr.converter;

import com.myfarm_qr.dto.GardenDto;
import com.myfarm_qr.dto.VegetableDto;
import com.myfarm_qr.model.Garden;
import com.myfarm_qr.model.Vegetable;

import java.util.HashSet;
import java.util.Set;
import java.util.stream.Collectors;

public class GardenConverter {

    public static GardenDto toDTO(Garden garden) {
        if (garden == null) {
            return null;
        }

        GardenDto gardenDto = new GardenDto();
        gardenDto.setId(garden.getId());
        gardenDto.setName(garden.getName());

        Set<VegetableDto> vegetableDTOs = garden.getVegetables().stream()
                .map(vegetable -> VegetableConverter.toDTO(vegetable))
                .collect(Collectors.toSet());

        gardenDto.setVegetables(vegetableDTOs);
        return gardenDto;
    }

    public static Garden toEntity(GardenDto gardenDTO) {
        if (gardenDTO == null) {
            return null;
        }

        Garden garden = new Garden();
        garden.setId(gardenDTO.getId());
        garden.setName(gardenDTO.getName());

        Set<Vegetable> vegetables = gardenDTO.getVegetables().stream()
                .map(vegetableDTO -> VegetableConverter.toEntity(vegetableDTO))
                .collect(Collectors.toSet());

        garden.setVegetables(vegetables);
        return garden;
    }
}
