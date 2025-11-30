import { ensureDbConnection } from './init';
import { User } from './entity/User.entity';
import type UserInterface from '@/types/UserInterface';

export const getUsersDb = async (): Promise<UserInterface[]> => {
    const ds = await ensureDbConnection();
    const repo = ds.getRepository(User);

    return await repo.find();
};

export const getUserByIdDb = async (id: number) => {
    const ds = await ensureDbConnection();
    const repo = ds.getRepository(User);

    return await repo.findOne({
        where: { id },
    });
};

export const getUserByEmailDb = async (email: string) => {
    const ds = await ensureDbConnection();
    const repo = ds.getRepository(User);

    return await repo.findOne({
        where: { email },
    });
};

export const addUserDb = async (fields: Omit<UserInterface, 'id'>) => {
    const ds = await ensureDbConnection();
    const repo = ds.getRepository(User);

    const user = await repo.save({
        ...fields,
    });

    return user;
};

export const createTestUsersDb = async () => {
    const existingUsers = await getUsersDb();

    if (existingUsers.length > 0) {
        return existingUsers;
    }

    const testUsers = [
        {
            email: 'admin@example.com',
            fullName: 'Администратор',
            password: 'admin123', // В реальном приложении пароль должен быть хэширован
            isActive: true,
        },
        {
            email: 'user@example.com',
            fullName: 'Пользователь',
            password: 'user123',
            isActive: true,
        },
    ];

    const createdUsers: UserInterface[] = [];

    for (const userData of testUsers) {
        const user = await addUserDb(userData);
        createdUsers.push(user);
    }

    return createdUsers;
};
