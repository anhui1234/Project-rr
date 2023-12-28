package com.example.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.example.model.ShopCategory;
@Repository
public interface ShopCategoryRepository extends JpaRepository<ShopCategory, Long> {

}
