import 'reflect-metadata';
import {DataSource, DataSourceOptions} from 'typeorm';
import { Group } from './entity/Group.entity';
import { Student } from './entity/Student.entity';
import { User } from './entity/User.entity';

const timeout = 30000;

const AppDataSource = new DataSource({
    type: 'postgres',
    url: process.env.DATABASE_URL!, // <-- важно
    ssl: {
        rejectUnauthorized: false,
    },
    extra: {
        connectionTimeoutMillis: timeout,
    },
    synchronize: process.env.NODE_ENV !== 'production',
    migrationsRun: process.env.NODE_ENV === 'production',
    logging: false,
    entities: [Student, Group, User],
});


export default AppDataSource;
