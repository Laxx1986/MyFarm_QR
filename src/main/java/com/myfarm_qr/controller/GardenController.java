package com.myfarm_qr.controller;

import com.myfarm_qr.model.GardenVegetableRequest;
import org.springframework.web.bind.annotation.*;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import com.myfarm_qr.model.Garden;
import com.myfarm_qr.service.*;

import java.util.List;
import java.util.UUID;

@RestController
@RequestMapping("/api/gardens")
public class GardenController {

    @Autowired
    private GardenService gardenService;
    @GetMapping
    public ResponseEntity<List<Garden>> getAllGardens() {
        return ResponseEntity.ok(gardenService.getAllGardens());
    }

    @PostMapping("/save")
    @PreAuthorize("hasRole('USER')")
    public ResponseEntity<String> saveGardenVegetables(@RequestBody GardenVegetableRequest request) {
        gardenService.saveGardenVegetables(request);
        return ResponseEntity.ok("A zöldségek sikeresen lementve!");
    }

    @GetMapping("/{id}")
    public ResponseEntity<Garden> getGardenById(@PathVariable UUID id) {
        return gardenService.getGardenById(id)
                .map(ResponseEntity::ok)
                .orElseGet(() -> ResponseEntity.notFound().build());
    }

}
