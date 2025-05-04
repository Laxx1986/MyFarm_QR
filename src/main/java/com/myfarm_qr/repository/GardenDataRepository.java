package com.myfarm_qr.repository;

import com.myfarm_qr.model.GardenData;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.UUID;

public interface GardenDataRepository extends JpaRepository<GardenData, UUID> {
}

