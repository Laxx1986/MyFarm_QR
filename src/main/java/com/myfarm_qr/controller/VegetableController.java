package com.myfarm_qr.controller;

import com.myfarm_qr.model.Vegetable;
import com.myfarm_qr.repository.VegetableRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/vegetables")
public class VegetableController {
    private final VegetableRepository vegetableRepository;

    @Autowired
    public VegetableController(VegetableRepository vegetableRepository) {
        this.vegetableRepository = vegetableRepository;
    }

    @GetMapping
    public List<Vegetable> getAllVegetables() {
        return vegetableRepository.findAll();
    }
}
