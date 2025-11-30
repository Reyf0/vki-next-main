import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import type UserInterface from '@/types/UserInterface';

interface AuthState {
    user: UserInterface | null;
    isAuthenticated: boolean;
    setUser: (user: UserInterface | null) => void;
    logout: () => void;
}

const useAuth = create<AuthState>()(
    persist(
        (set) => ({
            user: null,
            isAuthenticated: false,
            setUser: (user: UserInterface | null) => {
                set({
                    user,
                    isAuthenticated: !!user,
                });
            },
            logout: () => {
                set({
                    user: null,
                    isAuthenticated: false,
                });
            },
        }),
        {
            name: 'auth-storage',
            partialize: (state) => ({
                user: state.user,
                isAuthenticated: state.isAuthenticated,
            }),
        }
    )
);

export default useAuth;