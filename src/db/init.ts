import AppDataSource from './AppDataSource';

// eslint-disable-next-line @typescript-eslint/explicit-function-return-type
export const ensureDbConnection = async () => {
    if (!AppDataSource.isInitialized) {
        await AppDataSource.initialize();
    }
    return AppDataSource;
};
