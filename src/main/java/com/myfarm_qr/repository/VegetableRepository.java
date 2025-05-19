package com.myfarm_qr.repository;

import com.myfarm_qr.model.Vegetable;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;
import java.util.UUID;

public interface VegetableRepository extends JpaRepository<Vegetable, UUID> {
    List<Vegetable> findByNameIn(List<String> names);

}
