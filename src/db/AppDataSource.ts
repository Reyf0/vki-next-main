import 'reflect-metadata';
import { DataSource } from 'typeorm';
import { Group } from './entity/Group.entity';
import { Student } from './entity/Student.entity';
import { User } from './entity/User.entity';

const AppDataSource = new DataSource({
  type: 'sqlite',
  database: process.env.DB ?? './db/vki-web.db',
  entities: [Group, Student, User],
  synchronize: true,
  logging: false,
});

export default AppDataSource;
