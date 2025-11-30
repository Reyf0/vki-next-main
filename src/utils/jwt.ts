import jwt from 'jsonwebtoken';
import type UserInterface from '@/types/UserInterface';

const JWT_SECRET = process.env.JWT_SECRET || 'your-secret-key';
const JWT_EXPIRES_IN = process.env.JWT_EXPIRES_IN || '7d';

export const generateAccessToken = (user: UserInterface): string => {
    return jwt.sign(
        {
            id: user.id,
            email: user.email,
            fullName: user.fullName,
        },
        JWT_SECRET,
        { expiresIn: JWT_EXPIRES_IN }
    );
};

export const verifyAccessToken = (token: string | undefined): UserInterface | null => {
    if (!token) return null;

    try {
        const decoded = jwt.verify(token, JWT_SECRET) as UserInterface;
        return decoded;
    } catch (error) {
        console.error('JWT verification failed:', error);
        return null;
    }
};
