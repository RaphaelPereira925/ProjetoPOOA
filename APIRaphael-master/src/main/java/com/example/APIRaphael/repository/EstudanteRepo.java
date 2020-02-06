package com.example.APIRaphael.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.APIRaphael.model.Estudante;

public interface EstudanteRepo extends JpaRepository<Estudante, Long> {

	Estudante findById(long id);
	
	List<Estudante> findAll();
	
}