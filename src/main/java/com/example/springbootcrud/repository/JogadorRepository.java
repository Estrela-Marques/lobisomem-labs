package com.example.springbootcrud.repository;

import com.example.springbootcrud.model.Jogador;
import org.springframework.data.jpa.repository.JpaRepository;

public interface JogadorRepository extends JpaRepository<Jogador, Long> {
}
