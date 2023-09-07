import { Request, Response } from 'express';
import { prismaClient } from '../database/prismaClient';

export class PlayerController {
  async create(request: Request, response: Response) {
    try {
      const { name, age, teamId } = request.body;

      const player = await prismaClient.player.create({
        data: {
          name,
          age,
          teamId,
        },
      });

      return response.json(player);
    } catch (error) {
      console.error(error);
      return response.status(500).json({ error: 'An error occurred while creating a player.' });
    }
  }

  async list(request: Request, response: Response) {
    try {
      const players = await prismaClient.player.findMany();

      return response.json(players);
    } catch (error) {
      console.error(error);
      return response.status(500).json({ error: 'An error occurred while fetching players.' });
    }
  }

  async getPlayerById(request: Request, response: Response) {
    const { id } = request.params;

    try {
      const player = await prismaClient.player.findUnique({
        where: {
          id,
        },
      });

      if (!player) {
        return response.status(404).json({ error: 'Player not found.' });
      }

      return response.json(player);
    } catch (error) {
      console.error(error);
      return response.status(500).json({ error: 'An error occurred while fetching the player.' });
    }
  }

  async updatePlayerById(request: Request, response: Response) {
    const { id } = request.params;
    const { name, age, teamId } = request.body;

    try {
      const player = await prismaClient.player.update({
        where: {
          id,
        },
        data: {
          name,
          age,
          teamId,
        },
      });

      return response.json(player);
    } catch (error) {
      console.error(error);
      return response.status(500).json({ error: 'An error occurred while updating the player.' });
    }
  }

  async deletePlayerById(request: Request, response: Response) {
    const { id } = request.params;

    try {
      const playerDelete = await prismaClient.player.delete({
        where: {
          id,
        },
      });

      return response.status(204).send();
    } catch (error) {
      console.error(error);
      return response.status(500).json({ error: 'An error occurred while deleting the player.' });
    }
  }
}
