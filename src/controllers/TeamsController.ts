import { Request, Response } from 'express';
import { prismaClient } from '../database/prismaClient';

export class TeamsController {
  async create(request: Request, response: Response) {
    try {
      const { name, foundation } = request.body;

      const team = await prismaClient.team.create({
        data: {
          name,
          foundation,
        },
      });

      return response.json(team);
    } catch (error) {
      console.error(error);
      return response.status(500).json({ error: 'An error occurred while creating a team.' });
    }
  }
}