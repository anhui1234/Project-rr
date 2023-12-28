package com.example.model;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.FetchType;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.Lob;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.Table;

@Entity
@Table(name="shop_category")
public class ShopCategory {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long id_Shop_Category;
	@Column(name="image")
	private String image;
	@ManyToOne(fetch=FetchType.LAZY)
	@JoinColumn(name="id_Category")
	@JsonIgnoreProperties({"hibernateLazyInitializer", "handler"}) 
	private Category category;
	@Column(name="shop_Name",nullable = false)
	private String shop_Name;
	@Column(name="price")
	private int price;
	@Column(name="description")
	private String description;
	public ShopCategory() {
		super();
	}
	public ShopCategory(long id_Shop_Category, String image, Category category, String shop_Name, int price,
			String description) {
		super();
		this.id_Shop_Category = id_Shop_Category;
		this.image = image;
		this.category = category;
		this.shop_Name = shop_Name;
		this.price = price;
		this.description = description;
	}
	public long getId_Shop_Category() {
		return id_Shop_Category;
	}
	public void setId_Shop_Category(long id_Shop_Category) {
		this.id_Shop_Category = id_Shop_Category;
	}
	public String getImage() {
		return image;
	}
	public void setImage(String image) {
		this.image = image;
	}
	public Category getCategory() {
		return category;
	}
	public void setCategory(Category category) {
		this.category = category;
	}
	public String getShop_Name() {
		return shop_Name;
	}
	public void setShop_Name(String shop_Name) {
		this.shop_Name = shop_Name;
	}
	public int getPrice() {
		return price;
	}
	public void setPrice(int price) {
		this.price = price;
	}
	public String getDescription() {
		return description;
	}
	public void setDescription(String description) {
		this.description = description;
	}
	
	
}
