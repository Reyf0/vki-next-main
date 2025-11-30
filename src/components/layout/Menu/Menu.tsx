'use client';

import { useState } from 'react';
import { usePathname, useRouter } from 'next/navigation';
import Link from 'next/link';
import useAuth from '@/hooks/useAuth';

const Menu = (): React.ReactElement => {
  const pathname = usePathname();
  const router = useRouter();
  const { user, logout, isAuthenticated } = useAuth();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navItems = [
    { href: '/', label: 'Главная', icon: '🏠' },
    { href: '/groups', label: 'Группы', icon: '👥' },
    { href: '/students', label: 'Студенты', icon: '🎓' },
  ];

  const handleLogout = () => {
    logout();
    if (typeof window !== 'undefined') {
      window.localStorage.removeItem('accessToken');
    }
    router.push('/login');
    setIsMobileMenuOpen(false);
  };

  const closeMobileMenu = () => setIsMobileMenuOpen(false);

  return (
    <>
      <nav className="hidden md:flex items-center space-x-1">
        {navItems.map((item) => {
          const isActive = pathname === item.href || (item.href !== '/' && pathname.startsWith(item.href));
          return (
            <Link
              key={item.href}
              href={item.href}
              className={`
                relative px-4 py-2 rounded-lg font-ptsans font-medium text-sm transition-all duration-300 ease-in-out
                ${isActive
                  ? 'text-primary-600 bg-primary-50 dark:bg-primary-900/20 shadow-lg shadow-primary-500/25'
                  : 'text-neutral-700 dark:text-neutral-300 hover:text-primary-600 hover:bg-neutral-50 dark:hover:bg-neutral-800/50'
                }
                group overflow-hidden
              `}
            >
              <span className="relative z-10 flex items-center space-x-2">
                <span className="text-lg">{item.icon}</span>
                <span>{item.label}</span>
              </span>

              {isActive && (
                <div className="absolute inset-0 bg-gradient-to-r from-primary-500/10 to-accent-500/10 rounded-lg animate-pulse-glow" />
              )}

              <div className="absolute inset-0 bg-gradient-to-r from-primary-500/0 to-accent-500/0 group-hover:from-primary-500/5 group-hover:to-accent-500/5 rounded-lg transition-all duration-300" />
            </Link>
          );
        })}

        <div className="ml-4 pl-4 border-l border-neutral-200 dark:border-neutral-700">
          {isAuthenticated && user ? (
            <div className="flex items-center space-x-3">
              <div className="flex items-center space-x-2 px-3 py-2 bg-neutral-50 dark:bg-neutral-800 rounded-lg">
                <span className="text-lg">👤</span>
                <span className="text-sm font-medium text-neutral-700 dark:text-neutral-300">
                  {user.fullName}
                </span>
              </div>
              <button
                onClick={handleLogout}
                className="px-3 py-2 text-sm font-medium text-red-600 hover:text-red-700 hover:bg-red-50 dark:text-red-400 dark:hover:bg-red-900/20 rounded-lg transition-colors"
              >
                Выйти
              </button>
            </div>
          ) : (
            <Link
              href="/login"
              className="flex items-center space-x-2 px-4 py-2 bg-primary-600 hover:bg-primary-700 text-white rounded-lg font-medium text-sm transition-colors"
            >
              <span className="text-lg">🔐</span>
              <span>Войти</span>
            </Link>
          )}
        </div>
      </nav>

      <div className="md:hidden">
        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="p-2 rounded-lg text-neutral-700 dark:text-neutral-300 hover:bg-neutral-100 dark:hover:bg-neutral-800 transition-colors"
        >
          <span className="text-xl">{isMobileMenuOpen ? '✕' : '☰'}</span>
        </button>
      </div>

      {isMobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-white dark:bg-neutral-900 border-t border-neutral-200 dark:border-neutral-700 shadow-lg z-50">
          <div className="px-4 py-2 space-y-1">
            {navItems.map((item) => {
              const isActive = pathname === item.href || (item.href !== '/' && pathname.startsWith(item.href));
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={closeMobileMenu}
                  className={`
                    flex items-center space-x-3 px-3 py-3 rounded-lg font-ptsans font-medium text-sm transition-colors
                    ${isActive
                      ? 'text-primary-600 bg-primary-50 dark:bg-primary-900/20'
                      : 'text-neutral-700 dark:text-neutral-300 hover:bg-neutral-50 dark:hover:bg-neutral-800'
                    }
                  `}
                >
                  <span className="text-lg">{item.icon}</span>
                  <span>{item.label}</span>
                </Link>
              );
            })}

            <div className="border-t border-neutral-200 dark:border-neutral-700 pt-2 mt-2">
              {isAuthenticated && user ? (
                <div className="space-y-2">
                  <div className="flex items-center space-x-3 px-3 py-2 bg-neutral-50 dark:bg-neutral-800 rounded-lg">
                    <span className="text-lg">👤</span>
                    <div>
                      <div className="text-sm font-medium text-neutral-700 dark:text-neutral-300">
                        {user.fullName}
                      </div>
                      <div className="text-xs text-neutral-500 dark:text-neutral-400">
                        {user.email}
                      </div>
                    </div>
                  </div>
                  <button
                    onClick={handleLogout}
                    className="w-full flex items-center justify-center space-x-2 px-3 py-2 text-sm font-medium text-red-600 hover:text-red-700 hover:bg-red-50 dark:text-red-400 dark:hover:bg-red-900/20 rounded-lg transition-colors"
                  >
                    <span>🚪</span>
                    <span>Выйти</span>
                  </button>
                </div>
              ) : (
                <Link
                  href="/login"
                  onClick={closeMobileMenu}
                  className="flex items-center justify-center space-x-2 w-full px-3 py-3 bg-primary-600 hover:bg-primary-700 text-white rounded-lg font-medium text-sm transition-colors"
                >
                  <span className="text-lg">🔐</span>
                  <span>Войти</span>
                </Link>
              )}
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Menu;
