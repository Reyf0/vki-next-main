import { Group } from './entity/Group.entity';
import AppDataSource from './AppDataSource';
import type GroupInterface from '@/types/GroupInterface';
import { ensureDbConnection } from './init';

export const getGroupsDb = async (): Promise<GroupInterface[]> => {
    const ds = await ensureDbConnection();
    const repo = ds.getRepository(Group);

    return await repo.find({ relations: ['students'] });
};

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
