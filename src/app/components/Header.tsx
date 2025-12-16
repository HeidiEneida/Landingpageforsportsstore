import { Search, ShoppingCart, Menu, User, X } from 'lucide-react';
import { Button } from './ui/button';
import { useState } from 'react';

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-white/95 backdrop-blur-lg supports-[backdrop-filter]:bg-white/90 shadow-sm">
      <div className="container mx-auto px-4">
        <div className="flex h-20 items-center justify-between">
          {/* Logo */}
          <div className="flex items-center">
            <button 
              className="lg:hidden mr-4 p-2 hover:bg-gray-100 rounded-lg transition-colors"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
            <a href="/" className="flex items-center space-x-3 group">
              <div className="bg-gradient-to-br from-purple-600 to-pink-600 p-2 rounded-xl group-hover:scale-110 transition-transform">
                <svg className="h-8 w-8 text-white" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2L2 7v10c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V7l-10-5z"/>
                </svg>
              </div>
              <div className="hidden md:block">
                <span className="text-2xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                  ActiveWear
                </span>
                <p className="text-xs text-gray-500">Premium Sports Fashion</p>
              </div>
            </a>
          </div>

          {/* Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            <a href="#productos" className="text-sm font-medium hover:text-purple-600 transition-colors relative group">
              Productos
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-purple-600 group-hover:w-full transition-all"></span>
            </a>
            <a href="#mujer" className="text-sm font-medium hover:text-purple-600 transition-colors relative group">
              Mujer
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-purple-600 group-hover:w-full transition-all"></span>
            </a>
            <a href="#hombre" className="text-sm font-medium hover:text-purple-600 transition-colors relative group">
              Hombre
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-purple-600 group-hover:w-full transition-all"></span>
            </a>
            <a href="#colecciones" className="text-sm font-medium hover:text-purple-600 transition-colors relative group">
              Colecciones
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-purple-600 group-hover:w-full transition-all"></span>
            </a>
            <a href="#ofertas" className="text-sm font-bold text-white bg-gradient-to-r from-pink-500 to-purple-600 px-4 py-2 rounded-full hover:shadow-lg hover:scale-105 transition-all">
              🔥 Ofertas
            </a>
          </nav>

          {/* Actions */}
          <div className="flex items-center space-x-2">
            <div className="hidden md:flex items-center bg-gray-100 rounded-full px-4 py-2.5 hover:bg-gray-200 transition-colors">
              <Search className="h-4 w-4 text-gray-500" />
              <input 
                type="text" 
                placeholder="Buscar productos..." 
                className="bg-transparent border-none outline-none ml-2 w-40 text-sm placeholder:text-gray-500"
              />
            </div>
            <Button variant="ghost" size="icon" className="md:hidden hover:bg-purple-50">
              <Search className="h-5 w-5" />
            </Button>
            <Button variant="ghost" size="icon" className="hover:bg-purple-50">
              <User className="h-5 w-5" />
            </Button>
            <Button variant="ghost" size="icon" className="relative hover:bg-purple-50">
              <ShoppingCart className="h-5 w-5" />
              <span className="absolute -top-1 -right-1 bg-gradient-to-r from-pink-500 to-purple-600 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center font-bold shadow-lg">
                0
              </span>
            </Button>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden py-4 border-t">
            <nav className="flex flex-col space-y-3">
              <a href="#productos" className="px-4 py-2 hover:bg-purple-50 rounded-lg transition-colors">
                Productos
              </a>
              <a href="#mujer" className="px-4 py-2 hover:bg-purple-50 rounded-lg transition-colors">
                Mujer
              </a>
              <a href="#hombre" className="px-4 py-2 hover:bg-purple-50 rounded-lg transition-colors">
                Hombre
              </a>
              <a href="#colecciones" className="px-4 py-2 hover:bg-purple-50 rounded-lg transition-colors">
                Colecciones
              </a>
              <a href="#ofertas" className="px-4 py-2 bg-gradient-to-r from-pink-500 to-purple-600 text-white rounded-lg font-bold text-center">
                🔥 Ofertas
              </a>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}