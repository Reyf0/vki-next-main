import Menu from '../Menu/Menu';

const Header = (): React.ReactElement => (
  <header className="fixed top-0 w-full z-50 backdrop-blur-md bg-glass-100/80 border-b border-glass-200/20 shadow-glass-sm">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="flex justify-between items-center h-24">
        <div className="flex items-center space-x-2 sm:space-x-4 min-w-0 flex-1">
          <div className="flex items-center flex-shrink-0">
            <div className="w-8 h-8 bg-gradient-to-br from-primary-500 to-accent-500 rounded-lg flex items-center justify-center">
              <span className="text-white font-acrom font-bold text-sm">ВКИ</span>
            </div>
          </div>
          <div className="min-w-0 flex-1">
            <h1 className="text-base sm:text-lg font-acrom font-bold bg-gradient-to-r from-primary-600 to-accent-600 bg-clip-text text-transparent leading-tight">
              Web-разработка
            </h1>
            <p className="text-xs text-neutral-600 dark:text-neutral-400 font-ptsans leading-tight">
              Высший колледж информатики НГУ
            </p>
          </div>
        </div>
        <Menu />
      </div>
    </div>
  </header>
);

export default Header;
