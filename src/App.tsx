import React from 'react';
import { FileCheck, Truck, Clock, Phone, Mail, ChevronRight, Shield } from 'lucide-react';

function App() {
  return (
    <div className="min-h-screen bg-black text-white">
      {/* Header */}
      <header className="fixed w-full bg-black/80 backdrop-blur-sm z-50">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <div className="text-xl font-bold">ПРОПУСК-МОСКВА</div>
          <nav className="hidden md:flex space-x-6">
            <a href="#services" className="hover:text-gray-300">Услуги</a>
            <a href="#contact" className="hover:text-gray-300">Контакты</a>
          </nav>
          <div className="flex items-center space-x-4">
            <a href="tel:+89112876091" className="hover:text-gray-300">8 911 287 60 91</a>
            <button className="bg-white text-black px-4 py-2 rounded hover:bg-gray-200">
              Заказать пропуск
            </button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative h-screen">
        <div className="absolute inset-0">
          <img 
            src="https://images.unsplash.com/photo-1519003722824-194d4455a60c?auto=format&fit=crop&q=80"
            alt="Truck on Moscow Highway"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/60"></div>
        </div>
        <div className="relative container mx-auto px-4 h-full flex items-center">
          <div className="max-w-2xl">
            <h1 className="text-5xl font-bold mb-6">Оформление пропусков для грузового транспорта в Москве</h1>
            <p className="text-xl mb-8">Быстрое и законное оформление пропусков в зоны МКАД, ТТК и СК для грузовых автомобилей и спецтехники</p>
            <button className="bg-white text-black px-8 py-3 rounded-lg text-lg font-semibold hover:bg-gray-200 flex items-center">
              Получить пропуск <ChevronRight className="ml-2" />
            </button>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-20 bg-black" id="services">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center">Наши услуги</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { 
                icon: <FileCheck size={32} />, 
                title: 'Оформление пропусков для грузовых ТС',
                description: 'Быстрое оформление пропусков для грузовых автомобилей массой более 3.5 тонн'
              },
              { 
                icon: <Truck size={32} />, 
                title: 'Пропуска для спецтехники',
                description: 'Оформление разрешений для строительной и специальной техники'
              },
              { 
                icon: <Shield size={32} />, 
                title: 'Официальное оформление',
                description: 'Все пропуска оформляются официально через АМПП'
              }
            ].map((service, index) => (
              <div key={index} className="bg-zinc-800 p-6 rounded-lg">
                <div className="mb-4">{service.icon}</div>
                <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
                <p className="text-gray-400">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-20 bg-zinc-900">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8 text-center">
            {[
              { number: '5000+', label: 'Оформленных пропусков' },
              { number: '98%', label: 'Одобренных заявок' },
              { number: '6+', label: 'Лет успешной работы' },
              { number: '24/7', label: 'Поддержка клиентов' }
            ].map((stat, index) => (
              <div key={index}>
                <div className="text-4xl font-bold mb-2">{stat.number}</div>
                <div className="text-gray-400">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section className="py-20 bg-black" id="contact">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold mb-8">Заявка на оформление пропуска</h2>
            <form className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <input
                  type="text"
                  placeholder="Марка и модель ТС"
                  className="bg-zinc-800 p-3 rounded-lg w-full"
                />
                <input
                  type="text"
                  placeholder="Регистрационный номер"
                  className="bg-zinc-800 p-3 rounded-lg w-full"
                />
              </div>
              <div className="grid md:grid-cols-2 gap-6">
                <select className="bg-zinc-800 p-3 rounded-lg w-full">
                  <option value="">Выберите зону пропуска</option>
                  <option value="mkad">МКАД</option>
                  <option value="ttk">ТТК</option>
                  <option value="sk">СК</option>
                </select>
                <input
                  type="text"
                  placeholder="Срок действия пропуска"
                  className="bg-zinc-800 p-3 rounded-lg w-full"
                />
              </div>
              <div className="grid md:grid-cols-2 gap-6">
                <input
                  type="text"
                  placeholder="Ваше имя"
                  className="bg-zinc-800 p-3 rounded-lg w-full"
                />
                <input
                  type="tel"
                  placeholder="Ваш номер телефона"
                  className="bg-zinc-800 p-3 rounded-lg w-full"
                />
              </div>
              <button className="bg-white text-black px-8 py-3 rounded-lg font-semibold hover:bg-gray-200 w-full md:w-auto">
                Отправить заявку
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-zinc-900 py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <div className="text-xl font-bold mb-4">ПРОПУСК-МОСКВА</div>
              <p className="text-gray-400">Оформление пропусков для грузового транспорта</p>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Контакты</h3>
              <div className="space-y-2 text-gray-400">
                <div className="flex items-center">
                  <Phone size={16} className="mr-2" />
                  8 911 287 60 91
                </div>
                <div className="flex items-center">
                  <Mail size={16} className="mr-2" />
                  asemenov203@mail.ru
                </div>
              </div>
            </div>
          </div>
          <div className="border-t border-zinc-800 mt-12 pt-8 text-center text-gray-400">
            <p>&copy; 2024 ПРОПУСК-МОСКВА - Все права защищены</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;