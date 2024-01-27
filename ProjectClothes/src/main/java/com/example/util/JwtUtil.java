package com.example.util;

import java.security.Key;
import java.util.Date;
import java.util.HashMap;
import java.util.Map;
import java.util.function.Function;

import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.stereotype.Component;

import io.jsonwebtoken.Claims;
import io.jsonwebtoken.Jwts;
import io.jsonwebtoken.SignatureAlgorithm;
import io.jsonwebtoken.io.Decoders;
import io.jsonwebtoken.security.Keys;

@Component
public class JwtUtil {
	public static final String SECRET="e85fe07bff87e64e641c54ebc1c96dae23a2efa6b82e08032185e5a735896471";
	public String extractUsername(String token) {
		return extractClaim(token,Claims::getSubject);
	}
	public Date extractExpiration(String token) {
		return extractClaim(token,Claims::getExpiration);
	}
	public <T>T extractClaim(String token,Function<Claims,T>claimResolver){
		final Claims claims=extractAllClaims(token);
		return claimResolver.apply(claims);
	}
	private Claims extractAllClaims(String token) {
		// TODO Auto-generated method stub
		return Jwts.
				parser()
				.setSigningKey(getSignKey())
				.parseClaimsJws(token)
				.getBody();
	}
	private boolean isTokenExpired(String token) {
		return extractExpiration(token).before(new Date());
				
	}
	private Boolean validateToken(String token, UserDetails userDetails) {
		final String username=extractUsername(token);
		return (username.equals(userDetails.getUsername())&&!isTokenExpired(token));
	}
	private Key getSignKey() {
		byte []keyBytes=Decoders.BASE64.decode(SECRET);
		return Keys.hmacShaKeyFor(keyBytes);
	}
	public String generateToken(String userName) {
		Map<String,Object>claims=new HashMap<>();
		return createToken(claims,userName);
	}
	@SuppressWarnings("deprecation")
	private String createToken(Map<String, Object> claims, String userName) {
		// TODO Auto-generated method stub
		return Jwts.builder()
				.setClaims(claims)
				.setSubject(userName)
				.setIssuedAt(new Date(System.currentTimeMillis()))
				.setExpiration(new Date(System.currentTimeMillis()+1000*60*30))
				.signWith(SignatureAlgorithm.HS256, getSignKey()).compact();
	}
}
