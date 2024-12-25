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
    createdAt: Date;

    @UpdateDateColumn()
    updatedAt: Date;
 
    @ManyToOne(() => User, (user) => user.blogs, { onDelete: 'CASCADE' })
    user: User;
  }