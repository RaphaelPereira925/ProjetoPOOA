package com.example.APIRaphael.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.APIRaphael.model.Escola;

public interface EscolaRepo extends JpaRepository<Escola, Long> {
	
}