package com.myfarm_qr.converter;

import com.myfarm_qr.dto.VegetableDto;
import com.myfarm_qr.model.Vegetable;

public class VegetableConverter {

    public static VegetableDto toDTO(Vegetable vegetable) {
        if (vegetable == null) {
            return null;
        }

        VegetableDto vegetableDTO = new VegetableDto();
        vegetableDTO.setId(vegetable.getId());
        vegetableDTO.setName(vegetable.getName());
        vegetableDTO.setDescription(vegetable.getDescription());
        vegetableDTO.setStoringTips(vegetable.getStoring_tips());
        vegetableDTO.setLinkToPhoto(vegetable.getLink_to_photo());
        return vegetableDTO;
    }

    public static Vegetable toEntity(VegetableDto vegetableDTO) {
        if (vegetableDTO == null) {
            return null;
        }

        Vegetable vegetable = new Vegetable();
        vegetable.setId(vegetableDTO.getId());
        vegetable.setName(vegetableDTO.getName());
        vegetable.setDescription(vegetableDTO.getDescription());
        vegetable.setStoring_tips(vegetableDTO.getStoringTips());
        vegetable.setLink_to_photo(vegetableDTO.getLinkToPhoto());
        return vegetable;
    }
}
