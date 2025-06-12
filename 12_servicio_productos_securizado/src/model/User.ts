import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity("seguridad")
export class User{
    @PrimaryGeneratedColumn()
    id:number;
    @Column()
    username:string;
    @Column()
    password:string;
    @Column()
    role:string;

    constructor(id:number, username:string, password:string, role:string){
        this.id = id;
        this.username = username;
        this.password = password;
        this.role = role;
    }
}