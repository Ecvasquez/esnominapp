import { objectId } from "mongodb";
import { mongoDBClient } from "./../config/mongodb.js";

// metodos de la API

// Listar la informacion
export const getALL = async () => {
    return await mongoDBClient.db('s13g07').collection('tareas').find();
}