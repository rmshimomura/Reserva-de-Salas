import React from "react";
import User from './Login/Users.json'

export class DataBase {
    
    static loginDB = require('./Login/Users.json'); 
    
    constructor(){}

    static buscarUsername(nome){
        return this.loginDB.users.find((user) => user.name === nome);
    }

}

// export default DataBase