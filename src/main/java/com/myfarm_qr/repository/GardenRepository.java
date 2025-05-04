package com.myfarm_qr.repository;

import com.myfarm_qr.model.Garden;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.UUID;

public interface GardenRepository extends JpaRepository<Garden, UUID> {
}
