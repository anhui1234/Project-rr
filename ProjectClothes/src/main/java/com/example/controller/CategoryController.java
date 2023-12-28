package com.example.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.service.CategoryService;
import com.example.model.Category;
@RestController
@RequestMapping("/category")
public class CategoryController {
	@Autowired
	private CategoryService cs;
	@GetMapping
	public List<Category>getCategory(){
		return cs.getCategorys()
;	}
	@PostMapping
	public ResponseEntity<Category> save(@RequestBody Category category) {
		return new ResponseEntity<> (cs.save(category),HttpStatus.CREATED);
	}
}
