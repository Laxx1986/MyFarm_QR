package com.myfarm_qr.service;

import com.myfarm_qr.model.Garden;
import com.myfarm_qr.model.GardenVegetableRequest;
import com.myfarm_qr.model.Vegetable;
import com.myfarm_qr.repository.GardenRepository;
import com.myfarm_qr.repository.VegetableRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;
import java.util.Set;
import java.util.UUID;
import java.util.stream.Collectors;

@Service
public class GardenService {

    @Autowired
    private GardenRepository gardenRepository;

    @Autowired
    private VegetableRepository vegetableRepository;

    public List<Garden> getAllGardens() {
        return gardenRepository.findAll();
    }

    public Garden createGarden(String name) {
        Garden garden = new Garden(name);
        return gardenRepository.save(garden);
    }

    public void saveGardenVegetables(GardenVegetableRequest request) {
        Garden garden = gardenRepository.findById(UUID.fromString(request.getGardenId()))
                .orElseThrow(() -> new RuntimeException("Kert nem található"));

        Set<Vegetable> vegetables = request.getVegetableIds().stream()
                .map(UUID::fromString)
                .map(id -> vegetableRepository.findById(id)
                        .orElseThrow(() -> new RuntimeException("Zöldség nem található: " + id)))
                .collect(Collectors.toSet());

        garden.setVegetables(vegetables);
        gardenRepository.save(garden);
    }

    public Optional<Garden> getGardenById(UUID id) {
        return gardenRepository.findById(id);
    }

}
