package com.example.model;

import java.util.Set;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.FetchType;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.OneToMany;
import jakarta.persistence.Table;

@Entity
@Table(name="Category")
public class Category {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private long  id_Category;
	@Column(name="Categoryl")
	private String Categoryl;
	@OneToMany(fetch = FetchType.LAZY,mappedBy = "category")
	private Set<ShopCategory>product;
	public Category() {
		super();
	}
	public Category(long id_Category, String categoryl) {
		super();
		this.id_Category = id_Category;
		Categoryl = categoryl;
	}
	public long getId_Category() {
		return id_Category;
	}
	public void setId_Category(long id_Category) {
		this.id_Category = id_Category;
	}
	public String getCategoryl() {
		return Categoryl;
	}
	public void setCategoryl(String categoryl) {
		Categoryl = categoryl;
	}
	

}
