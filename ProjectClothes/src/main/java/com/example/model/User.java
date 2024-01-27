package com.example.model;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.EnumType;
import jakarta.persistence.Enumerated;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import lombok.Data;

@Entity
@Table(name="User")
@Data
public class User {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private int id_User;
	@Column(name="email")
	private String email;
	@Column(name="username")
	private String username;
	@Column(name="password")
	private String password;
	
	private String role;
	public User() {
		super();
	}
	public User(int id_User, String email, String username, String password, String role) {
		super();
		this.id_User = id_User;
		this.email = email;
		this.username = username;
		this.password = password;
		this.role = role;
	}
	public int getId_User() {
		return id_User;
	}
	public void setId_User(int id_User) {
		this.id_User = id_User;
	}
	public String getEmail() {
		return email;
	}
	public void setEmail(String email) {
		this.email = email;
	}
	public String getUsername() {
		return username;
	}
	public void setUsername(String username) {
		this.username = username;
	}
	public String getPassword() {
		return password;
	}
	public void setPassword(String password) {
		this.password = password;
	}
	public String getRole() {
		return role;
	}
	public void setRole(String role) {
		this.role = role;
	}
	
	
}
