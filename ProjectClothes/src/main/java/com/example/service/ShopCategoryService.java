package com.example.service;

import java.util.List;


import com.example.model.ShopCategory;

public interface ShopCategoryService {
	List<ShopCategory>getAllShopCategorys();
	ShopCategory getShopCategory(long id);
	ShopCategory save(ShopCategory shopCategory);
	List<ShopCategory>getProductNb();
}
