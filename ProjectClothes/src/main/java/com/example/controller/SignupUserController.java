package com.example.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.example.dto.SignupRequest;
import com.example.dto.UserDTO;
import com.example.service.AuthService;

@RestController
public class SignupUserController {
	@Autowired
	private AuthService authService;
	@PostMapping("/register")
	public ResponseEntity<?> createUser(@RequestBody SignupRequest signupRequest){
		UserDTO createUser=authService.createUser(signupRequest);
		if(createUser==null) 
			return new ResponseEntity<>("User is not created, try it again",HttpStatus.BAD_REQUEST);
		
		return new ResponseEntity<>(createUser,HttpStatus.CREATED);
		
	}
}
