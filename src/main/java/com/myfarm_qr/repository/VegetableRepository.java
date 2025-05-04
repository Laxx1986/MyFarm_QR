package com.myfarm_qr.repository;

import com.myfarm_qr.model.Vegetable;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.UUID;

public interface VegetableRepository extends JpaRepository<Vegetable, UUID> {
}
