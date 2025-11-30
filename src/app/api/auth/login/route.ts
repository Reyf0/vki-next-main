import { NextRequest } from 'next/server';
import { getUserByEmailDb } from '@/db/userDb';
import { generateAccessToken } from '@/utils/jwt';

export async function POST(request: NextRequest): Promise<Response> {
    try {
        const { email, password } = await request.json();

        if (!email || !password) {
            return new Response(JSON.stringify({
                message: 'Email и пароль обязательны'
            }), {
                status: 400,
                headers: { 'Content-Type': 'application/json' },
            });
        }

        const user = await getUserByEmailDb(email);

        if (!user) {
            return new Response(JSON.stringify({
                message: 'Пользователь не найден'
            }), {
                status: 401,
                headers: { 'Content-Type': 'application/json' },
            });
        }

        if (!user.isActive) {
            return new Response(JSON.stringify({
                message: 'Аккаунт деактивирован'
            }), {
                status: 401,
                headers: { 'Content-Type': 'application/json' },
            });
        }

        if (user.password !== password) {
            return new Response(JSON.stringify({
                message: 'Неверный пароль'
            }), {
                status: 401,
                headers: { 'Content-Type': 'application/json' },
            });
        }

        const token = generateAccessToken(user);

        return new Response(JSON.stringify({
            message: 'Авторизация успешна',
            token,
            user: {
                id: user.id,
                email: user.email,
                fullName: user.fullName,
            },
        }), {
            status: 200,
            headers: { 'Content-Type': 'application/json' },
        });

    } catch (error) {
        console.error('Login error:', error);
        return new Response(JSON.stringify({
            message: 'Внутренняя ошибка сервера'
        }), {
            status: 500,
            headers: { 'Content-Type': 'application/json' },
        });
    }
}