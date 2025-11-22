import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from 'typeorm';

@Entity()
export class Student {
    @PrimaryGeneratedColumn()
    id!: number;

    @Column()
    firstName!: string;

    @Column()
    lastName!: string;

    @Column({ nullable: true })
    middleName!: string;

    @Column()
    groupId!: number;

    @ManyToOne('Group', (group: any) => group.students)
    group!: any;
}
