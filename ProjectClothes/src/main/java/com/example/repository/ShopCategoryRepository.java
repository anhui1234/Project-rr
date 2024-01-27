package com.example.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import com.example.model.ShopCategory;
@Repository
public interface ShopCategoryRepository extends JpaRepository<ShopCategory, Long> {
	@Query(value = "select * from shop_category s where s.priority=1 ",nativeQuery=true )
	List<ShopCategory>getProductNb();
}
