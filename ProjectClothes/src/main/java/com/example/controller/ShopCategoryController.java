package com.example.controller;

import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.core.io.ByteArrayResource;
import org.springframework.core.io.ClassPathResource;
import org.springframework.core.io.Resource;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.model.Category;
import com.example.model.ShopCategory;
import com.example.service.ShopCategoryService;
import com.fasterxml.jackson.core.util.ByteArrayBuilder;



@RestController
@RequestMapping("/product")
@CrossOrigin(origins = "http://localhost:3000") 
public class ShopCategoryController {
	@Autowired
	private ShopCategoryService scs;
	@GetMapping
	public ResponseEntity<List<ShopCategory>> getAllShopCategory(){
		List<ShopCategory>lists=scs.getAllShopCategorys();
		return ResponseEntity.ok(lists);
	}
	@GetMapping("/nb")
	public ResponseEntity<List<ShopCategory>> getProductNb(){
		List<ShopCategory>lists=scs.getProductNb();
		return ResponseEntity.ok(lists);
	}
	@PostMapping
	public ResponseEntity<ShopCategory> save(@RequestBody ShopCategory shopCategory) {
		return new ResponseEntity<> (scs.save(shopCategory),HttpStatus.CREATED);
	}
	@GetMapping("{productId}")
	public ResponseEntity<ShopCategory>getShopCategorys(@PathVariable Long productId){
		ShopCategory shopCategory=scs.getShopCategory(productId);
		if(shopCategory !=null) {
			return ResponseEntity.ok(shopCategory);
		}else {
			return ResponseEntity.notFound().build();
		}
	}
	@GetMapping("getimage/{image}")
	public ResponseEntity<ByteArrayResource>getImage(@PathVariable("image")String image){
		if(!image.equals("")||image!=null) {
			try {
				Path fileName=Paths.get("images",image);
				byte[]buffer=Files.readAllBytes(fileName);
				ByteArrayResource byteArrayResource=new ByteArrayResource(buffer);
				return ResponseEntity.ok().contentLength(buffer.length)
						.contentType(MediaType.parseMediaType("image/png"))
						.body(byteArrayResource);
			} catch (Exception e) {
				// TODO: handle exception
			}
		}
		return ResponseEntity.badRequest().build();
	}
}
