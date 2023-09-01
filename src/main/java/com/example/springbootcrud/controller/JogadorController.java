package com.example.springbootcrud.controller;

import com.example.springbootcrud.model.Jogador;
import com.example.springbootcrud.repository.JogadorRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/jogadores")
public class JogadorController {

    @Autowired
    private JogadorRepository jogadorRepository;

    // Obter todos os jogadores
    @GetMapping
    public List<Jogador> getAllJogadores() {
        return jogadorRepository.findAll();
    }

    // Obter um jogador por ID
    @GetMapping("/{id}")
    public Jogador getJogadorById(@PathVariable Long id) {
        return jogadorRepository.findById(id).orElse(null);
    }

    // Criar um novo jogador
    @PostMapping
    public Jogador createJogador(@RequestBody Jogador jogador) {
        return jogadorRepository.save(jogador);
    }

    // Atualizar um jogador por ID
    @PutMapping("/{id}")
    public Jogador updateJogador(@PathVariable Long id, @RequestBody Jogador jogador) {
        jogador.setId(id);
        return jogadorRepository.save(jogador);
    }

    // Excluir um jogador por ID
    @DeleteMapping("/{id}")
    public void deleteJogador(@PathVariable Long id) {
        jogadorRepository.deleteById(id);
    }
}
