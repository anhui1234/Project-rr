package com.example.dto;

import jakarta.persistence.Column;
import lombok.Data;
@Data
public class UserDTO {
	private int id_User;
	
	private String email;
	
	private String username;
	
	private String password;

	private String role;

	public UserDTO(int id_User, String email, String username, String password, String role) {
		super();
		this.id_User = id_User;
		this.email = email;
		this.username = username;
		this.password = password;
		this.role = role;
	}

	public UserDTO() {
		super();
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
