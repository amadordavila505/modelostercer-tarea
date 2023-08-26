import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, ManyToOne } from 'typeorm';
import { User } from '../users/user.entity'; 
@Entity()
export class Category {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    categoria: string;

    @CreateDateColumn()
    created_at: Date;

    @ManyToOne(() => User, user => user.categories)
    user: User;
}
