import { Entity, Column, PrimaryGeneratedColumn,CreateDateColumn,UpdateDateColumn ,OneToMany} from "typeorm";
import { Blog } from "./blog.entity";
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
    
    @Column({unique: true})
    email: string;
    
    
    @Column()
    password: string;

    @OneToMany(() => Blog, (blog) => blog.user, { cascade: true })
    posts: Blog[];
}