package com.example.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.model.Category;
import com.example.repository.CategoryRepository;
@Service
public class CategoryServiceImpl implements CategoryService{
	@Autowired
	CategoryRepository cr;
	
	@Override
	public List<Category> getCategorys() {
		// TODO Auto-generated method stub
		return (List<Category>)cr.findAll();
	}

	@Override
	public Category getCategory(long id) {
		// TODO Auto-generated method stub
		return cr.findById(id).get();
	}

	@Override
	public Category save(Category category) {
		// TODO Auto-generated method stub
		return cr.save(category);
	}

}
