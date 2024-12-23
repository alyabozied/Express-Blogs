import { Entity, Column, PrimaryGeneratedColumn,CreateDateColumn,UpdateDateColumn } from "typeorm";

@Entity()
export class User {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    firstName: string;

    @Column()
    lastName: string;
    
    @CreateDateColumn()
    created_on: Date;

    @UpdateDateColumn()
    updated_on: Date;
    
    @Column()
    email: string;
    
    
    @Column({ select: false })
    password: string;
    
}