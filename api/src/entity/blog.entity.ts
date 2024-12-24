import { Entity, Column, PrimaryGeneratedColumn,CreateDateColumn,UpdateDateColumn,ManyToOne } from "typeorm";
import { User } from "./user.entity";
@Entity()
export class Blog {
    @PrimaryGeneratedColumn()
    id: number;
  
    @Column()
    title: string;
  
    @Column()
    content: string;
 
    @CreateDateColumn()
    created_on: Date;

    @UpdateDateColumn()
    updated_on: Date;
 
    @ManyToOne(() => User, (user) => user.posts, { onDelete: 'CASCADE' })
    user: User;
  }