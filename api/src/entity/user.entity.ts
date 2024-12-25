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
    createdAt: Date;

    @UpdateDateColumn()
    updatedAt: Date;
    
    @Column({unique: true})
    email: string;
    
    
    @Column()
    password: string;

    @OneToMany(() => Blog, (blog) => blog.user, { cascade: true })
    blogs: Blog[];
}