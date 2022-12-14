export class DataBase {
    
    static classroomsDB = require('./Classroom/Classrooms.json'); 
    static loginDB = require('./Login/Users.json'); 
    static deptDB = require('./Department/Department.json'); 
    static structureDB = require('./Structure/Structure.json');
    static accessibilityDB = require('./Accessibility/Accessibility.json');
    static roomTypeDB = require('./RoomType/RoomType.json');
    static teacherDB = require('./Teacher/Teacher.json');
    
    constructor(){}

    static searchDepto(center) {
        return this.deptDB.centros.find((centr) => centr.centro === center);
    }

    static searchAllCenters(){
        return this.deptDB.centros.map((centro) => centro.centro);
    }

    static searchUsername(name){
        return this.loginDB.users.find((user) => user.name === name);
    }

    static searchRoomType(){
        return this.roomTypeDB.roomTypes;
    }

    static searchAccessibility(){
        return this.accessibilityDB.accessibilities;
    }

    static searchStructure(){
        return this.structureDB.structures;
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

    static searchTeacher(name) {
        return this.teacherDB.teachers.find((teacher) => teacher.nome === name);
    }

    static updateClassroom(oldName, classroomObject) {
        this.classroomsDB.classrooms = this.classroomsDB.classrooms.map((classroom) => {
            if (classroom.nome === oldName) {
                return classroomObject;
            }
            return classroom;
        });
    }

    static removeClassroom(name) {
        this.classroomsDB.classrooms = this.classroomsDB.classrooms.filter((classroom) => classroom.nome !== name);
    }

}
