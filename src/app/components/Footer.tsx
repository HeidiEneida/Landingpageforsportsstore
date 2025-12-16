import { Facebook, Instagram, Twitter, Youtube, Mail, MapPin, Phone } from 'lucide-react';
import { Button } from './ui/button';
import { Input } from './ui/input';

export function Footer() {
  return (
    <footer className="bg-gray-900 text-white pt-20 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Company Info */}
          <div>
            <div className="flex items-center space-x-3 mb-6">
              <div className="bg-gradient-to-br from-purple-600 to-pink-600 p-2 rounded-xl">
                <svg className="h-8 w-8 text-white" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2L2 7v10c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V7l-10-5z"/>
                </svg>
              </div>
              <div>
                <span className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                  ActiveWear
                </span>
              </div>
            </div>
            <p className="text-gray-400 text-sm mb-6 leading-relaxed">
              La mejor selección de ropa deportiva premium. Innovación, calidad y estilo para atletas que buscan la excelencia.
            </p>
            <div className="flex gap-3">
              <a href="#" className="bg-white/10 p-3 rounded-xl hover:bg-gradient-to-r hover:from-purple-600 hover:to-pink-600 transition-all hover:scale-110">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="bg-white/10 p-3 rounded-xl hover:bg-gradient-to-r hover:from-purple-600 hover:to-pink-600 transition-all hover:scale-110">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="bg-white/10 p-3 rounded-xl hover:bg-gradient-to-r hover:from-purple-600 hover:to-pink-600 transition-all hover:scale-110">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="bg-white/10 p-3 rounded-xl hover:bg-gradient-to-r hover:from-purple-600 hover:to-pink-600 transition-all hover:scale-110">
                <Youtube className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-bold text-lg mb-6 text-white">Comprar</h4>
            <ul className="space-y-3 text-sm text-gray-400">
              <li><a href="#" className="hover:text-purple-400 transition-colors hover:translate-x-1 inline-block">Mujer</a></li>
              <li><a href="#" className="hover:text-purple-400 transition-colors hover:translate-x-1 inline-block">Hombre</a></li>
              <li><a href="#" className="hover:text-purple-400 transition-colors hover:translate-x-1 inline-block">Accesorios</a></li>
              <li><a href="#" className="hover:text-purple-400 transition-colors hover:translate-x-1 inline-block">Ofertas</a></li>
              <li><a href="#" className="hover:text-purple-400 transition-colors hover:translate-x-1 inline-block">Nueva Colección</a></li>
            </ul>
          </div>

          {/* Customer Service */}
          <div>
            <h4 className="font-bold text-lg mb-6 text-white">Ayuda</h4>
            <ul className="space-y-3 text-sm text-gray-400">
              <li><a href="#" className="hover:text-purple-400 transition-colors hover:translate-x-1 inline-block">Centro de Ayuda</a></li>
              <li><a href="#" className="hover:text-purple-400 transition-colors hover:translate-x-1 inline-block">Seguimiento de Pedido</a></li>
              <li><a href="#" className="hover:text-purple-400 transition-colors hover:translate-x-1 inline-block">Guía de Tallas</a></li>
              <li><a href="#" className="hover:text-purple-400 transition-colors hover:translate-x-1 inline-block">Devoluciones y Cambios</a></li>
              <li><a href="#" className="hover:text-purple-400 transition-colors hover:translate-x-1 inline-block">Preguntas Frecuentes</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-bold text-lg mb-6 text-white">Contacto</h4>
            <ul className="space-y-4 text-sm text-gray-400">
              <li className="flex items-start gap-3">
                <MapPin className="h-5 w-5 text-purple-400 flex-shrink-0 mt-0.5" />
                <span>Calle Principal #123<br />Bogotá, Colombia</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="h-5 w-5 text-purple-400 flex-shrink-0" />
                <span>+57 300 123 4567</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="h-5 w-5 text-purple-400 flex-shrink-0" />
                <span>info@activewear.com</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-gray-400">
              © 2024 <span className="text-purple-400 font-semibold">ActiveWear</span>. Todos los derechos reservados.
            </p>
            <div className="flex gap-6 text-sm text-gray-400">
              <a href="#" className="hover:text-purple-400 transition-colors">Términos y Condiciones</a>
              <a href="#" className="hover:text-purple-400 transition-colors">Política de Privacidad</a>
              <a href="#" className="hover:text-purple-400 transition-colors">Cookies</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}