import { Request, Response } from 'express';
import { prismaClient } from '../database/prismaClient';

export class ChampionshipController {
  async create(request: Request, response: Response) {
    try {
      const { name, startDate, endDate } = request.body;

      const championship = await prismaClient.championship.create({
        data: {
          name,
          startDate,
          endDate,
        },
      });

      return response.json(championship);
    } catch (error) {
      console.error(error);
      return response.status(500).json({ error: 'An error occurred while creating a championship.' });
    }
  }

  async list(request: Request, response: Response) {
    try {
      const championships = await prismaClient.championship.findMany();

      return response.json(championships);
    } catch (error) {
      console.error(error);
      return response.status(500).json({ error: 'An error occurred while fetching championships.' });
    }
  }

  async updateChampionshipById(request: Request, response: Response) {
    try {
      const { id } = request.params;
      const { name, startDate, endDate } = request.body;
  
      const updatedChampionship = await prismaClient.championship.update({
        where: {
          id,
        },
        data: {
          name,
          startDate,
          endDate,
        },
      });
  
      return response.json(updatedChampionship);
    } catch (error) {
      console.error(error);
      return response.status(500).json({ error: 'An error occurred while updating the championship.' });
    }
  }
  
  async deleteChampionshipById(request: Request, response: Response) {
    try {
      const { id } = request.params;
  
      await prismaClient.championship.delete({
        where: {
          id,
        },
      });
  
      return response.status(204).send();
    } catch (error) {
      console.error(error);
      return response.status(500).json({ error: 'An error occurred while deleting the championship.' });
    }
  }  
}
