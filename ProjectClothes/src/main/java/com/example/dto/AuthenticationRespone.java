package com.example.dto;

import lombok.AllArgsConstructor;
import lombok.Data;

@Data
@AllArgsConstructor
public class AuthenticationRespone {
	private String jwt;

	public AuthenticationRespone(String jwt) {
		super();
		this.jwt = jwt;
	}

	public AuthenticationRespone() {
		super();
	}

	public String getJwt() {
		return jwt;
	}

	public void setJwt(String jwt) {
		this.jwt = jwt;
	}
	
}
