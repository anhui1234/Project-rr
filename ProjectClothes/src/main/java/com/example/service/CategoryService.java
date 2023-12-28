package com.example.service;

import java.util.List;

import com.example.model.Category;

public interface CategoryService {
	List<Category>getCategorys();
	Category getCategory(long id);
	Category save(Category category);
}
