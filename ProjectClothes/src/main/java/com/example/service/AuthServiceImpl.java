package com.example.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;

import com.example.dto.SignupRequest;
import com.example.dto.UserDTO;
import com.example.model.User;
import com.example.repository.UserRepository;

@Service
public class AuthServiceImpl implements AuthService {
	@Autowired
	private UserRepository userRepository;

	@Override
	public UserDTO createUser(SignupRequest signupRequest) {
		User user=new User();
		user.setEmail(signupRequest.getEmail());
		user.setUsername(signupRequest.getUsername());
		user.setPassword(new BCryptPasswordEncoder().encode(signupRequest.getPassword()));
		user.setRole("USER");
		User createUser=userRepository.save(user);
		UserDTO userDTO=new UserDTO();
		userDTO.setEmail(createUser.getEmail());
		userDTO.setUsername(createUser.getUsername());
		userDTO.setPassword(createUser.getPassword());
		userDTO.setRole(createUser.getRole());
		return userDTO;
	}
	
}
