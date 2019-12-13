import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class User {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({ length: 50 })
    login: string;

    @Column({ length: 500 })
    password: string;

    @Column({ length: 300 })
    name: string;

    @Column()
    homeCityId: number;
}
