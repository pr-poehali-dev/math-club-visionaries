import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import Icon from "@/components/ui/icon";

export default function Index() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-background/90 backdrop-blur-sm border-b border-primary/20 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center">
                <span className="text-primary-foreground font-bebas text-lg">В</span>
              </div>
              <span className="font-bebas text-2xl">ВИЗИОНЕРЫ</span>
            </div>
            <div className="hidden md:flex space-x-6">
              <a href="#main" className="hover:text-primary transition-colors">Главная</a>
              <a href="#about" className="hover:text-primary transition-colors">О клубе</a>
              <a href="#events" className="hover:text-primary transition-colors">Мероприятия</a>
              <a href="#news" className="hover:text-primary transition-colors">Новости</a>
              <a href="#gallery" className="hover:text-primary transition-colors">Галерея</a>
              <a href="#contacts" className="hover:text-primary transition-colors">Контакты</a>
            </div>
            <Button className="md:hidden" variant="ghost" size="sm">
              <Icon name="Menu" size={20} />
            </Button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="main" className="min-h-screen flex items-center justify-center relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-background to-background"></div>
        <div className="container mx-auto px-4 text-center relative z-10">
          <h1 className="font-bebas text-6xl md:text-8xl lg:text-9xl mb-6 tracking-wider">
            ВИЗИОНЕРЫ
          </h1>
          <p className="font-bebas text-2xl md:text-3xl mb-8 text-primary">
            ТЕ, КТО МЕНЯЮТ МИР!
          </p>
          <p className="text-lg md:text-xl mb-12 max-w-2xl mx-auto opacity-90">
            Математический клуб для тех, кто видит красоту в числах и стремится к совершенству в науке
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="font-bebas text-lg px-8">
              ПРИСОЕДИНИТЬСЯ
            </Button>
            <Button size="lg" variant="outline" className="font-bebas text-lg px-8">
              УЗНАТЬ БОЛЬШЕ
            </Button>
          </div>
        </div>
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <Icon name="ChevronDown" size={24} className="text-primary" />
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-card">
        <div className="container mx-auto px-4">
          <h2 className="font-bebas text-4xl md:text-6xl text-center mb-16 text-primary">
            О КЛУБЕ
          </h2>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="font-bebas text-3xl mb-6">НАША МИССИЯ</h3>
              <p className="text-lg mb-6 leading-relaxed">
                Мы объединяем людей, увлечённых математикой, для совместного изучения, 
                решения сложных задач и развития аналитического мышления.
              </p>
              <p className="text-lg leading-relaxed">
                Наш клуб — это пространство для интеллектуального роста, где каждый 
                может раскрыть свой потенциал и внести вклад в развитие математической науки.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-6">
              <Card className="text-center p-6 hover:scale-105 transition-transform">
                <Icon name="Users" size={32} className="mx-auto mb-4 text-primary" />
                <h4 className="font-bebas text-xl mb-2">СООБЩЕСТВО</h4>
                <p className="text-sm">Единомышленники</p>
              </Card>
              <Card className="text-center p-6 hover:scale-105 transition-transform">
                <Icon name="Brain" size={32} className="mx-auto mb-4 text-primary" />
                <h4 className="font-bebas text-xl mb-2">РАЗВИТИЕ</h4>
                <p className="text-sm">Постоянный рост</p>
              </Card>
              <Card className="text-center p-6 hover:scale-105 transition-transform">
                <Icon name="Trophy" size={32} className="mx-auto mb-4 text-primary" />
                <h4 className="font-bebas text-xl mb-2">ДОСТИЖЕНИЯ</h4>
                <p className="text-sm">Результаты</p>
              </Card>
              <Card className="text-center p-6 hover:scale-105 transition-transform">
                <Icon name="Lightbulb" size={32} className="mx-auto mb-4 text-primary" />
                <h4 className="font-bebas text-xl mb-2">ИННОВАЦИИ</h4>
                <p className="text-sm">Новые идеи</p>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Events Section */}
      <section id="events" className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="font-bebas text-4xl md:text-6xl text-center mb-16 text-primary">
            МЕРОПРИЯТИЯ
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="hover:scale-105 transition-transform">
              <CardHeader>
                <div className="flex items-center justify-between mb-2">
                  <Badge variant="secondary" className="font-bebas">ЕЖЕНЕДЕЛЬНО</Badge>
                  <Icon name="Calendar" size={20} className="text-primary" />
                </div>
                <CardTitle className="font-bebas text-xl">МАТЕМАТИЧЕСКИЕ СЕМИНАРЫ</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm mb-4">
                  Еженедельные встречи для обсуждения актуальных проблем математики
                </p>
                <Button size="sm" variant="outline" className="w-full">
                  Записаться
                </Button>
              </CardContent>
            </Card>

            <Card className="hover:scale-105 transition-transform">
              <CardHeader>
                <div className="flex items-center justify-between mb-2">
                  <Badge variant="secondary" className="font-bebas">ЕЖЕМЕСЯЧНО</Badge>
                  <Icon name="Users" size={20} className="text-primary" />
                </div>
                <CardTitle className="font-bebas text-xl">ОЛИМПИАДЫ</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm mb-4">
                  Соревнования по решению сложных математических задач
                </p>
                <Button size="sm" variant="outline" className="w-full">
                  Участвовать
                </Button>
              </CardContent>
            </Card>

            <Card className="hover:scale-105 transition-transform">
              <CardHeader>
                <div className="flex items-center justify-between mb-2">
                  <Badge variant="secondary" className="font-bebas">СПЕЦИАЛЬНЫЕ</Badge>
                  <Icon name="Star" size={20} className="text-primary" />
                </div>
                <CardTitle className="font-bebas text-xl">ЛЕКЦИИ ЭКСПЕРТОВ</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm mb-4">
                  Встречи с ведущими математиками и учёными
                </p>
                <Button size="sm" variant="outline" className="w-full">
                  Узнать больше
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* News Section */}
      <section id="news" className="py-20 bg-card">
        <div className="container mx-auto px-4">
          <h2 className="font-bebas text-4xl md:text-6xl text-center mb-16 text-primary">
            НОВОСТИ
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="hover:scale-105 transition-transform">
              <CardContent className="p-6">
                <div className="flex items-center gap-2 mb-3">
                  <Icon name="Clock" size={16} className="text-primary" />
                  <span className="text-sm text-muted-foreground">15 сентября 2024</span>
                </div>
                <h3 className="font-bebas text-xl mb-3">ПОБЕДА В ОЛИМПИАДЕ</h3>
                <p className="text-sm">
                  Наша команда заняла первое место в региональной математической олимпиаде
                </p>
              </CardContent>
            </Card>

            <Card className="hover:scale-105 transition-transform">
              <CardContent className="p-6">
                <div className="flex items-center gap-2 mb-3">
                  <Icon name="Clock" size={16} className="text-primary" />
                  <span className="text-sm text-muted-foreground">10 сентября 2024</span>
                </div>
                <h3 className="font-bebas text-xl mb-3">НОВЫЙ СЕМЕСТР</h3>
                <p className="text-sm">
                  Начинается новый семестр с обновлённой программой и новыми преподавателями
                </p>
              </CardContent>
            </Card>

            <Card className="hover:scale-105 transition-transform">
              <CardContent className="p-6">
                <div className="flex items-center gap-2 mb-3">
                  <Icon name="Clock" size={16} className="text-primary" />
                  <span className="text-sm text-muted-foreground">5 сентября 2024</span>
                </div>
                <h3 className="font-bebas text-xl mb-3">ЛЕТНЯЯ ШКОЛА</h3>
                <p className="text-sm">
                  Успешно завершилась летняя математическая школа с участием 50 студентов
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section id="gallery" className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="font-bebas text-4xl md:text-6xl text-center mb-16 text-primary">
            ГАЛЕРЕЯ
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="aspect-square bg-gradient-to-br from-primary/20 to-primary/5 rounded-lg flex items-center justify-center hover:scale-105 transition-transform">
              <Icon name="Image" size={32} className="text-primary" />
            </div>
            <div className="aspect-square bg-gradient-to-br from-primary/15 to-primary/5 rounded-lg flex items-center justify-center hover:scale-105 transition-transform">
              <Icon name="Camera" size={32} className="text-primary" />
            </div>
            <div className="aspect-square bg-gradient-to-br from-primary/25 to-primary/5 rounded-lg flex items-center justify-center hover:scale-105 transition-transform">
              <Icon name="Users" size={32} className="text-primary" />
            </div>
            <div className="aspect-square bg-gradient-to-br from-primary/10 to-primary/5 rounded-lg flex items-center justify-center hover:scale-105 transition-transform">
              <Icon name="Award" size={32} className="text-primary" />
            </div>
            <div className="aspect-square bg-gradient-to-br from-primary/30 to-primary/5 rounded-lg flex items-center justify-center hover:scale-105 transition-transform md:col-span-2">
              <Icon name="BookOpen" size={48} className="text-primary" />
            </div>
            <div className="aspect-square bg-gradient-to-br from-primary/20 to-primary/5 rounded-lg flex items-center justify-center hover:scale-105 transition-transform">
              <Icon name="Zap" size={32} className="text-primary" />
            </div>
            <div className="aspect-square bg-gradient-to-br from-primary/15 to-primary/5 rounded-lg flex items-center justify-center hover:scale-105 transition-transform">
              <Icon name="Target" size={32} className="text-primary" />
            </div>
          </div>
        </div>
      </section>

      {/* Contacts Section */}
      <section id="contacts" className="py-20 bg-card">
        <div className="container mx-auto px-4">
          <h2 className="font-bebas text-4xl md:text-6xl text-center mb-16 text-primary">
            КОНТАКТЫ
          </h2>
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h3 className="font-bebas text-3xl mb-8">СВЯЖИТЕСЬ С НАМИ</h3>
              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <Icon name="MapPin" size={24} className="text-primary" />
                  <div>
                    <p className="font-semibold">Адрес</p>
                    <p className="text-muted-foreground">г. Москва, ул. Образования, д. 42</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <Icon name="Phone" size={24} className="text-primary" />
                  <div>
                    <p className="font-semibold">Телефон</p>
                    <p className="text-muted-foreground">+7 (495) 123-45-67</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <Icon name="Mail" size={24} className="text-primary" />
                  <div>
                    <p className="font-semibold">Email</p>
                    <p className="text-muted-foreground">info@vizionery.ru</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <Icon name="Clock" size={24} className="text-primary" />
                  <div>
                    <p className="font-semibold">Время работы</p>
                    <p className="text-muted-foreground">Пн-Пт: 9:00 - 21:00</p>
                  </div>
                </div>
              </div>
            </div>
            <Card className="p-8">
              <h4 className="font-bebas text-2xl mb-6">НАПИШИТЕ НАМ</h4>
              <div className="space-y-4">
                <input 
                  type="text" 
                  placeholder="Ваше имя" 
                  className="w-full p-3 rounded-lg bg-background border border-primary/20 focus:border-primary outline-none"
                />
                <input 
                  type="email" 
                  placeholder="Email" 
                  className="w-full p-3 rounded-lg bg-background border border-primary/20 focus:border-primary outline-none"
                />
                <textarea 
                  placeholder="Ваше сообщение" 
                  rows={4}
                  className="w-full p-3 rounded-lg bg-background border border-primary/20 focus:border-primary outline-none resize-none"
                ></textarea>
                <Button className="w-full font-bebas text-lg">
                  ОТПРАВИТЬ
                </Button>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-secondary py-12">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <div className="flex items-center justify-center space-x-2 mb-6">
              <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center">
                <span className="text-primary-foreground font-bebas text-xl">В</span>
              </div>
              <span className="font-bebas text-3xl">ВИЗИОНЕРЫ</span>
            </div>
            <p className="font-bebas text-lg text-primary mb-4">ТЕ, КТО МЕНЯЮТ МИР!</p>
            <p className="text-muted-foreground mb-6">
              Математический клуб для развития аналитического мышления
            </p>
            <div className="flex justify-center space-x-6">
              <Icon name="Facebook" size={24} className="text-primary hover:scale-110 transition-transform cursor-pointer" />
              <Icon name="Twitter" size={24} className="text-primary hover:scale-110 transition-transform cursor-pointer" />
              <Icon name="Instagram" size={24} className="text-primary hover:scale-110 transition-transform cursor-pointer" />
              <Icon name="Youtube" size={24} className="text-primary hover:scale-110 transition-transform cursor-pointer" />
            </div>
            <div className="mt-8 pt-8 border-t border-primary/20">
              <p className="text-sm text-muted-foreground">
                © 2024 Математический клуб "Визионеры". Все права защищены.
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}