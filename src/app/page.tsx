import Link from 'next/link';

const HomePage = (): React.ReactNode => {
  const stats = [
    { number: '500+', label: 'Студентов', icon: '🎓' },
    { number: '25+', label: 'Групп', icon: '👥' },
    { number: '10+', label: 'Преподавателей', icon: '👨‍🏫' },
    { number: '5+', label: 'Лет опыта', icon: '⭐' },
  ];

  const features = [
    {
      title: 'Современные технологии',
      description: 'Обучение самым актуальным технологиям веб-разработки',
      icon: '🚀',
      gradient: 'from-blue-500 to-cyan-500'
    },
    {
      title: 'Практический подход',
      description: 'Реальные проекты и портфолио для будущей карьеры',
      icon: '💻',
      gradient: 'from-green-500 to-emerald-500'
    },
    {
      title: 'Индивидуальная траектория',
      description: 'Персонализированное обучение под ваши цели',
      icon: '🎯',
      gradient: 'from-purple-500 to-pink-500'
    },
  ];

  return (
    <div className="space-y-16">
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary-600 via-primary-700 to-accent-600" />
        <div className="absolute inset-0 opacity-20">
          <div
            className="w-full h-full"
            style={{
              backgroundImage: 'radial-gradient(circle at 1px 1px, rgba(255,255,255,0.15) 1px, transparent 0)',
              backgroundSize: '30px 30px'
            }}
          />
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 lg:py-32">
          <div className="flex flex-col text-center items-center justify-center gap-2">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 text-white text-sm font-medium mb-8 animate-fade-in">
              <span className="w-2 h-2 bg-green-400 rounded-full mr-2 animate-pulse" />
              Добро пожаловать в будущее веб-разработки
            </div>

            <h1 className="text-4xl md:text-6xl lg:text-7xl font-acrom font-bold text-white mb-6 animate-slide-in">
              <span className="block">Высший колледж</span>
              <span className="block bg-clip-text">
                информатики НГУ
              </span>
            </h1>

            <p className="text-xl md:text-2xl text-blue-100 mb-12 max-w-3xl mx-auto text-center leading-relaxed animate-fade-in" style={{ animationDelay: '0.2s' }}>
              Создаем профессионалов в сфере веб-технологий. Современное образование,
              практический опыт и карьера мечты ждут вас здесь.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-fade-in" style={{ animationDelay: '0.4s' }}>
              <Link
                href="/students"
                className="group px-8 py-4 bg-white !text-gray-900 hover:!text-gray-900 font-semibold rounded-xl border-2 border-white/50 hover:bg-blue-50 hover:border-white/70 transition-all duration-300 transform hover:scale-105 shadow-xl shadow-black/20 hover:shadow-2xl hover:shadow-black/30"
              >
                <span className="flex items-center space-x-2">
                  <span>Посмотреть студентов</span>
                  <span className="group-hover:translate-x-1 transition-transform duration-200">→</span>
                </span>
              </Link>

              <Link
                href="/groups"
                className="group px-8 py-4 bg-glass-500/20 backdrop-blur-sm border border-white/30 text-white font-semibold rounded-xl hover:bg-white/10 transition-all duration-300 transform hover:scale-105"
              >
                <span className="flex items-center space-x-2">
                  <span>Изучить группы</span>
                  <span className="group-hover:translate-x-1 transition-transform duration-200">→</span>
                </span>
              </Link>
            </div>
          </div>
        </div>

        <div className="absolute top-1/4 left-1/4 w-32 h-32 bg-white/10 rounded-full blur-xl animate-float" />
        <div className="absolute bottom-1/4 right-1/4 w-24 h-24 bg-blue-300/20 rounded-full blur-xl animate-float" style={{ animationDelay: '2s' }} />
      </section>

      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div
                key={stat.label}
                className="text-center group cursor-pointer"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="inline-flex items-center justify-center w-16 h-16 bg-neutral-700 rounded-2xl mb-4 group-hover:scale-110 transition-transform duration-300 shadow-lg shadow-primary-500/25">
                  <span className="text-2xl">{stat.icon}</span>
                </div>
                <div className="text-3xl font-acrom font-bold text-neutral-900 dark:text-white mb-2">
                  {stat.number}
                </div>
                <div className="text-neutral-600 dark:text-neutral-400 font-ptsans">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-neutral-50 dark:bg-neutral-800/50 rounded-3xl mx-4 sm:mx-6 lg:mx-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-acrom font-bold text-neutral-900 dark:text-white mb-4">
              Почему выбирают нас
            </h2>
            <p className="text-xl text-neutral-600 dark:text-neutral-400 max-w-2xl mx-auto">
              Мы предлагаем современное образование, которое подготовит вас к успешной карьере в IT
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div
                key={feature.title}
                className="group bg-white dark:bg-neutral-800 rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-neutral-200 dark:border-neutral-700"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <div className={`inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br ${feature.gradient} rounded-xl mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <span className="text-2xl">{feature.icon}</span>
                </div>

                <h3 className="text-xl font-acrom font-bold text-neutral-900 dark:text-white mb-4">
                  {feature.title}
                </h3>

                <p className="text-neutral-600 dark:text-neutral-400 font-ptsans leading-relaxed">
                  {feature.description}
                </p>

                <div className={`mt-6 h-1 bg-gradient-to-r ${feature.gradient} rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300`} />
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="bg-gradient-to-r from-primary-600 to-accent-600 rounded-3xl p-12 text-white relative overflow-hidden">
            <div className="absolute inset-0 opacity-10">
              <div
                className="w-full h-full"
                style={{
                  backgroundImage: 'radial-gradient(circle at 1px 1px, rgba(255,255,255,0.3) 1px, transparent 0)',
                  backgroundSize: '20px 20px'
                }}
              />
            </div>

            <div className="relative z-10">
              <h2 className="text-3xl md:text-4xl font-acrom font-bold mb-4">
                Готовы начать свое путешествие?
              </h2>
              <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
                Присоединяйтесь к нашему сообществу и откройте для себя мир современных технологий
              </p>

              <Link
                href="/students"
                className="inline-flex items-center px-8 py-4 bg-white !text-gray-900 hover:!text-gray-900 font-semibold rounded-xl border-2 border-white/50 hover:bg-blue-50 hover:border-white/70 transition-all duration-300 transform hover:scale-105 shadow-xl shadow-black/20 hover:shadow-2xl hover:shadow-black/30"
              >
                <span className="lex items-center space-x-2">
                  <span>Начать обучение</span>
                  <span>🚀</span>
                </span>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
