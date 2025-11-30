const Footer = (): React.ReactElement => (
  <footer className="bg-neutral-900 dark:bg-neutral-950 text-neutral-300 border-t border-neutral-800">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
        <div className="flex items-center space-x-4">
          <div className="w-8 h-8 bg-gradient-to-br from-primary-500 to-accent-500 rounded-lg flex items-center justify-center">
            <span className="text-white font-acrom font-bold text-sm">ВКИ</span>
          </div>
          <div>
            <p className="font-ptsans text-sm">
              © {new Date().getFullYear()} Высший колледж информатики НГУ
            </p>
            <p className="text-xs text-neutral-500 mt-1">
              Современное образование в сфере информационных технологий
            </p>
          </div>
        </div>

        <div className="flex items-center space-x-6 text-xs">
          <a href="#" className="hover:text-primary-400 transition-colors duration-200">
            Контакты
          </a>
          <a href="#" className="hover:text-primary-400 transition-colors duration-200">
            О нас
          </a>
          <a href="#" className="hover:text-primary-400 transition-colors duration-200">
            Новости
          </a>
        </div>
      </div>

      <div className="mt-8 h-px bg-gradient-to-r from-transparent via-neutral-700 to-transparent" />
    </div>
  </footer>
);

export default Footer;
