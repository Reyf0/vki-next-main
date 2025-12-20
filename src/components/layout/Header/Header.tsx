import Menu from '../Menu/Menu'
import UserInterface from "@/types/UserInterface";

interface HeaderProps {
  userFromServer?: UserInterface | null
}

const Header = ({ userFromServer }: HeaderProps): React.ReactElement => (
  <header className="bg-glass-100/80 border-glass-200/20 shadow-glass-sm fixed top-0 z-50 w-full border-b backdrop-blur-md">
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <div className="flex h-24 items-center justify-between">
        <div className="flex min-w-0 flex-1 items-center space-x-2 sm:space-x-4">
          <div className="flex flex-shrink-0 items-center">
            <div className="from-primary-500 to-accent-500 flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-br">
              <span className="font-acrom text-sm font-bold text-white">ВКИ</span>
            </div>
          </div>
          <div className="min-w-0 flex-1">
            <h1 className="font-acrom from-primary-600 to-accent-600 bg-gradient-to-r bg-clip-text text-base leading-tight font-bold text-transparent sm:text-lg">
              Web-разработка
            </h1>
            <p className="font-ptsans text-xs leading-tight text-neutral-500 dark:text-neutral-400">
              Высший колледж информатики НГУ
            </p>
          </div>
        </div>
        <Menu />
      </div>
    </div>
  </header>
)

export default Header
