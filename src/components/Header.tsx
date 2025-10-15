import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Header: React.FC = () => {
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [mobileSubmenu, setMobileSubmenu] = useState<string | null>(null);

  const systemsItems = [
    { name: "АВТОПОЛИВ ДЛЯ ДОМА", href: "/home-irrigation" },
    { name: "АВТОПОЛИВ ДЛЯ БИЗНЕСА", href: "/business-irrigation" },
    { name: "АВТОПОЛИВ ДЛЯ ПАРКОВ И СКВЕРОВ", href: "/parks-irrigation" }
  ];

  const equipmentItems = [
    { name: "КОНТРОЛЛЕРЫ ДЛЯ АВТОПОЛИВА", href: "/controllers" },
    { name: "ЭЛЕКТРОМАГНИТНЫЕ КЛАПАНЫ ДЛЯ ПОЛИВА", href: "/valves" },
    { name: "ФОРСУНКИ. СОПЛА", href: "/nozzles" },
    { name: "РОТОРНЫЕ ДОЖДЕВАТЕЛИ", href: "/rotors" },
    { name: "КОРПУСА ДОЖДЕВАТЕЛЕЙ", href: "/corpus" },
    { name: "MP ROTATOR. РОТАТОРНЫЕ ГОЛОВКИ", href: "/mp-rotator" },
    { name: "КАПЕЛЬНЫЙ ПОЛИВ", href: "#drip-irrigation" },
    { name: "НАСОСНОЕ ОБОРУДОВАНИЕ", href: "#pump-equipment" },
    { name: "ЕМКОСТИ", href: "#tanks" }
  ];

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between py-4 md:py-6">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link to="/" onClick={() => setMobileMenuOpen(false)}>
              <img 
                src="/images/logos/logon.png" 
                alt="ПОЛИТЕХНИКА" 
                className="h-8 md:h-10 w-auto object-contain hover:opacity-80 transition-opacity duration-300"
              />
            </Link>
          </div>
          
          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center justify-between flex-1 ml-12 relative">
            {/* СИСТЕМЫ АВТОПОЛИВА с выпадающим меню */}
            <div 
              className="relative"
              onMouseEnter={() => setActiveDropdown('systems')}
              onMouseLeave={() => setActiveDropdown(null)}
            >
              <Link 
                to="/systems"
                className="text-gray-700 hover:text-gray-800 transition-all duration-300 font-light uppercase text-sm tracking-widest hover:scale-105 cursor-pointer"
              >
                СИСТЕМЫ АВТОПОЛИВА
              </Link>
              <div className={`absolute top-full left-0 pt-1 w-64 bg-white rounded-lg shadow-xl border border-gray-200 z-50 transition-all duration-300 ease-in-out transform ${
                activeDropdown === 'systems' 
                  ? 'opacity-100 translate-y-0 scale-100' 
                  : 'opacity-0 -translate-y-2 scale-95 pointer-events-none'
              }`}>
                <div className="py-2">
                  {systemsItems.map((item, index) => (
                    item.href.startsWith('/') ? (
                      <Link
                        key={index}
                        to={item.href}
                        className="block px-4 py-2 text-gray-700 hover:bg-green-50 hover:text-green-600 transition-colors duration-200 text-sm"
                      >
                        {item.name}
                      </Link>
                    ) : (
                      <a
                        key={index}
                        href={item.href}
                        className="block px-4 py-2 text-gray-700 hover:bg-green-50 hover:text-green-600 transition-colors duration-200 text-sm"
                      >
                        {item.name}
                      </a>
                    )
                  ))}
                </div>
              </div>
            </div>

            {/* ОБОРУДОВАНИЕ с выпадающим меню */}
            <div 
              className="relative"
              onMouseEnter={() => setActiveDropdown('equipment')}
              onMouseLeave={() => setActiveDropdown(null)}
            >
              <Link 
                to="/equipment"
                className="text-gray-700 hover:text-gray-800 transition-all duration-300 font-light uppercase text-sm tracking-widest hover:scale-105 cursor-pointer"
              >
                ОБОРУДОВАНИЕ
              </Link>
              <div className={`absolute top-full left-0 pt-1 w-80 bg-white rounded-lg shadow-xl border border-gray-200 z-50 transition-all duration-300 ease-in-out transform ${
                activeDropdown === 'equipment' 
                  ? 'opacity-100 translate-y-0 scale-100' 
                  : 'opacity-0 -translate-y-2 scale-95 pointer-events-none'
              }`}>
                <div className="py-2">
                  {equipmentItems.map((item, index) => (
                    item.href.startsWith('/') ? (
                      <Link
                        key={index}
                        to={item.href}
                        className="block px-4 py-2 text-gray-700 hover:bg-green-50 hover:text-green-600 transition-colors duration-200 text-sm"
                      >
                        {item.name}
                      </Link>
                    ) : (
                      <a
                        key={index}
                        href={item.href}
                        className="block px-4 py-2 text-gray-700 hover:bg-green-50 hover:text-green-600 transition-colors duration-200 text-sm"
                      >
                        {item.name}
                      </a>
                    )
                  ))}
                </div>
              </div>
            </div>

            <Link to="/lawns" className="text-gray-700 hover:text-gray-800 transition-all duration-300 font-light uppercase text-sm tracking-widest hover:scale-105">ГАЗОН</Link>
            <a href="#works" className="text-gray-700 hover:text-gray-800 transition-all duration-300 font-light uppercase text-sm tracking-widest hover:scale-105">НАШИ РАБОТЫ</a>
          </nav>

          {/* Mobile menu button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 rounded-md text-gray-700 hover:text-gray-900 hover:bg-gray-100 focus:outline-none"
            aria-label="Меню"
          >
            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              {mobileMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <div className="lg:hidden border-t border-gray-200 py-4">
            <div className="space-y-1">
              {/* СИСТЕМЫ АВТОПОЛИВА */}
              <div>
                <button
                  onClick={() => setMobileSubmenu(mobileSubmenu === 'systems' ? null : 'systems')}
                  className="w-full flex items-center justify-between px-3 py-2 text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50 rounded-md"
                >
                  <span>СИСТЕМЫ АВТОПОЛИВА</span>
                  <svg
                    className={`ml-2 h-5 w-5 transform transition-transform ${mobileSubmenu === 'systems' ? 'rotate-180' : ''}`}
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                {mobileSubmenu === 'systems' && (
                  <div className="pl-4 space-y-1 mt-1">
                    {systemsItems.map((item, index) => (
                      item.href.startsWith('/') ? (
                        <Link
                          key={index}
                          to={item.href}
                          onClick={() => setMobileMenuOpen(false)}
                          className="block px-3 py-2 text-sm text-gray-600 hover:text-green-600 hover:bg-green-50 rounded-md"
                        >
                          {item.name}
                        </Link>
                      ) : (
                        <a
                          key={index}
                          href={item.href}
                          onClick={() => setMobileMenuOpen(false)}
                          className="block px-3 py-2 text-sm text-gray-600 hover:text-green-600 hover:bg-green-50 rounded-md"
                        >
                          {item.name}
                        </a>
                      )
                    ))}
                  </div>
                )}
              </div>

              {/* ОБОРУДОВАНИЕ */}
              <div>
                <button
                  onClick={() => setMobileSubmenu(mobileSubmenu === 'equipment' ? null : 'equipment')}
                  className="w-full flex items-center justify-between px-3 py-2 text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50 rounded-md"
                >
                  <span>ОБОРУДОВАНИЕ</span>
                  <svg
                    className={`ml-2 h-5 w-5 transform transition-transform ${mobileSubmenu === 'equipment' ? 'rotate-180' : ''}`}
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                {mobileSubmenu === 'equipment' && (
                  <div className="pl-4 space-y-1 mt-1">
                    {equipmentItems.map((item, index) => (
                      item.href.startsWith('/') ? (
                        <Link
                          key={index}
                          to={item.href}
                          onClick={() => setMobileMenuOpen(false)}
                          className="block px-3 py-2 text-sm text-gray-600 hover:text-green-600 hover:bg-green-50 rounded-md"
                        >
                          {item.name}
                        </Link>
                      ) : (
                        <a
                          key={index}
                          href={item.href}
                          onClick={() => setMobileMenuOpen(false)}
                          className="block px-3 py-2 text-sm text-gray-600 hover:text-green-600 hover:bg-green-50 rounded-md"
                        >
                          {item.name}
                        </a>
                      )
                    ))}
                  </div>
                )}
              </div>

              <Link
                to="/lawns"
                onClick={() => setMobileMenuOpen(false)}
                className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50 rounded-md"
              >
                ГАЗОН
              </Link>
              <a
                href="#works"
                onClick={() => setMobileMenuOpen(false)}
                className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50 rounded-md"
              >
                НАШИ РАБОТЫ
              </a>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
