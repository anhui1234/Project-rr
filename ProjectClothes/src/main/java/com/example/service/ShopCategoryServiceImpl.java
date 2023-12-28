package com.example.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.model.ShopCategory;
import com.example.repository.ShopCategoryRepository;

@Service
public class ShopCategoryServiceImpl implements ShopCategoryService{

	@Autowired
	private ShopCategoryRepository scr;
	@Override
	public List<ShopCategory> getAllShopCategorys() {
		// TODO Auto-generated method stub
		return scr.findAll();
	}

	@Override
	public ShopCategory getShopCategory(long id) {
		// TODO Auto-generated method stub
		return scr.findById(id).orElse(null);
	}

	@Override
	public ShopCategory save(ShopCategory shopCategory) {
		// TODO Auto-generated method stub
		return scr.save(shopCategory);
	}

}
