import React from "react";
import User from './Login/Users.json'

export class DataBase {
    
    static classroomsDB = require('./Classroom/Classrooms.json'); 
    static loginDB = require('./Login/Users.json'); 
    
    constructor(){}

    static searchUsername(name){
        return this.loginDB.users.find((user) => user.name === nome);
    }

    static insertClassroom(Centro, Depto, Cap, Nome, Acess, Tipo, Est) { 
        let classroom = {
            centro: Centro,
            departamento: Depto,
            capacidade: Cap,
            nome: Nome,
            acessibilidade: Acess,
            tipo: Tipo,
            estrutura: Est
        }
        
        this.classroomsDB.classrooms.push(classroom);

    }



}
