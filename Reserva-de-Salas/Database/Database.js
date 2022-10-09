export class DataBase {
    
    static classroomsDB = require('./Classroom/Classrooms.json'); 
    static loginDB = require('./Login/Users.json'); 
    static deptDB = require('./Department/Department.json'); 
    
    constructor(){}

    static searchDepto(center) {
        return this.deptDB.centros.find((centr) => centr.centro === center);
    }

    static searchUsername(name){
        return this.loginDB.users.find((user) => user.name === name);
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

    static searchClassroom(name){
        return this.classroomsDB.classrooms.find((classroom) => classroom.nome === name);
    }

}
