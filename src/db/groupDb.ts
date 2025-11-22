import { Group } from './entity/Group.entity';
import AppDataSource from './AppDataSource';
import type GroupInterface from '@/types/GroupInterface';
import { ensureDbConnection } from './init';

/**
 * Получение групп
 */
export const getGroupsDb = async (): Promise<GroupInterface[]> => {
    const ds = await ensureDbConnection();
    const repo = ds.getRepository(Group);

    return await repo.find({ relations: ['students'] });
};

/**
 * Добавление группы
 */
export const addGroupsDb = async (
    groupFields: Omit<GroupInterface, 'id'>
): Promise<GroupInterface> => {
    const ds = await ensureDbConnection();
    const repo = ds.getRepository(Group);

    const newGroup = await repo.save({
        ...groupFields,
    });

    return newGroup;
};
