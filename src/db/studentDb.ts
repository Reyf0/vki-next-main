import { ensureDbConnection } from './init';
import { Student } from './entity/Student.entity';
import type StudentInterface from '@/types/StudentInterface';
import getRandomFio from '@/utils/getRandomFio';

export const getStudentsDb = async (): Promise<StudentInterface[]> => {
    const ds = await ensureDbConnection();
    const repo = ds.getRepository(Student);

    return await repo.find({ relations: ['group'] });
};

export const getStudentByIdDb = async (id: number) => {
    const ds = await ensureDbConnection();
    const repo = ds.getRepository(Student);

    return await repo.findOne({
        where: { id },
        relations: ['group'],
    });
};

export const deleteStudentDb = async (id: number) => {
    const ds = await ensureDbConnection();
    const repo = ds.getRepository(Student);

    await repo.delete(id);
    return id;
};

export const addStudentDb = async (fields: Omit<StudentInterface, 'id'>) => {
    const ds = await ensureDbConnection();
    const repo = ds.getRepository(Student);

    const student = await repo.save({
        ...fields,
    });

    return student;
};

export const addRandomStudentsDb = async (amount: number = 10) => {
    const results: StudentInterface[] = [];

    for (let i = 0; i < amount; i++) {
        const fio = getRandomFio();
        const student = await addStudentDb({
            ...fio,
            contacts: 'contact',
            groupId: 1,
        });
        results.push(student);
    }

    return results;
};
