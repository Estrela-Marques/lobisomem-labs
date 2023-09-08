import { Request, Response } from "express";
import { prismaClient } from "../database/prismaClient";


export const addTeamChampion =async (request:Request, response:Response) => {
    try {
        const {id_team, id_championship} = request.body
        const teamChampion = await prismaClient.teamChampionship.create({
            data:{
                id_team,
                id_championship,
            }
        })
        return response.status(201).json(teamChampion)
    } catch (error) {
        return response.status(500).json({ error: 'An error occurred while updating the championship.' });   
    }
}