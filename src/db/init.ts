import AppDataSource from './AppDataSource';

export const ensureDbConnection = async () => {
    if (!AppDataSource.isInitialized) {
        await AppDataSource.initialize();
    }
    return AppDataSource;
};
