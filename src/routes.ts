import { Router } from 'express';
import { PlayerController } from './controllers/PlayerController'
import { TeamsController } from './controllers/TeamsController';
import { ChampionshipController } from './controllers/ChampionshipController';

const router = Router();
const playerController = new PlayerController();
const teamsController = new TeamsController();
const championshipController = new ChampionshipController(); 


// Rota para criar um novo jogador (POST)
router.post('/players', playerController.create);

// Rota para listar todos os jogadores (GET)
router.get('/players', playerController.list);

// Rota para buscar um jogador pelo ID (GET)
router.get('/players/:id', playerController.getPlayerById);

// Rota para atualizar um jogador pelo ID (PUT)
router.put('/players/:id', playerController.updatePlayerById);

// Rota para excluir um jogador pelo ID (DELETE)
router.delete('/players/:id', playerController.deletePlayerById);

// Rota para criar um novo time (POST)
router.post('/teams', teamsController.create); // Atualize o nome do controlador aqui

// Rotas para campeonatos
router.post('/championships', championshipController.create);
router.get('/championships', championshipController.list);


// Rotas para para atualização e exclusão de campeonatos
router.put('/championships/:id', championshipController.updateChampionshipById);
router.delete('/championships/:id', championshipController.deleteChampionshipById);

export { router };
