import { Router } from 'express';
import { createPlayer, deletePlayerById, findPlayer, getPlayerById, updatePlayerById } from './controllers/PlayerController';
import { createTeam, deleteTeamById, findTeams, getTeamById, updateTeamById } from './controllers/TeamsController';
import { createChampionship, deleteChampionshipById, findChampionship, updateChampionshipById } from './controllers/ChampionshipController';

const router = Router();

// Rota para criar um novo jogador
router.post('/players', createPlayer);

// Rota para listar todos os jogadores
router.get('/players', findPlayer);

// Rota para buscar um jogador pelo ID
router.get('/players/:id', getPlayerById);

// Rota para atualizar um jogador pelo ID
router.put('/players/:id', updatePlayerById);

// Rota para excluir um jogador pelo ID
router.delete('/players/:id', deletePlayerById);

// Rota para criar um novo time
router.post('/teams', createTeam); // Atualize o nome do controlador aqui

// Rota para para atualização de time
router.put('/teams/:id', updateTeamById);

//Rota para listar todos os times
router.get('/teams', findTeams);

// Rota para buscar um time pelo ID
router.get('/teams/:id', getTeamById);

// Rota para deletar um time por ID
router.delete('/teams/:id', deleteTeamById)

// Rotas para cria um novo campeonato
router.post('/championships', createChampionship);

//Rota para listar todos os campeonatos
router.get('/championships', findChampionship);

// Rota para para atualização de campeonatos
router.put('/championships/:id', updateChampionshipById);

// Rota para deletar campeonato pelo ID
router.delete('/championships/:id', deleteChampionshipById);

export { router };