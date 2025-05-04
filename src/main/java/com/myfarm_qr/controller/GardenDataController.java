package com.myfarm_qr.controller;

import com.myfarm_qr.dto.GardenDataDto;
import com.myfarm_qr.model.GardenData;
import com.myfarm_qr.repository.GardenDataRepository;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api/kert-adatok")
public class GardenDataController {

    private final GardenDataRepository kertAdatRepository;

    public GardenDataController(GardenDataRepository gardenDataRepository) {
        this.kertAdatRepository = gardenDataRepository;
    }

    @PostMapping
    public ResponseEntity<Void> mentes(@RequestBody GardenDataDto dto) {
        GardenData adat = new GardenData();
        adat.setKert(dto.getKert());
        adat.setZoldsegek(dto.getZoldsegek());
        kertAdatRepository.save(adat);
        return ResponseEntity.ok().build();
    }
}

