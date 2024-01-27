package com.example.service;

import com.example.dto.SignupRequest;
import com.example.dto.UserDTO;

public interface AuthService {
	UserDTO createUser(SignupRequest signupRequest);
}
