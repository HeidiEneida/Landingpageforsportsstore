import { motion } from 'motion/react';
import { Mail, Gift } from 'lucide-react';
import { Button } from './ui/button';
import { Input } from './ui/input';

export function Newsletter() {
  return (
    <section className="py-24 bg-gradient-to-br from-purple-600 via-pink-600 to-purple-700 relative overflow-hidden">
      {/* Animated background shapes */}
      <div className="absolute top-10 left-10 w-64 h-64 bg-white/10 rounded-full blur-3xl animate-blob"></div>
      <div className="absolute bottom-10 right-10 w-80 h-80 bg-pink-400/20 rounded-full blur-3xl animate-blob animation-delay-2000"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="max-w-3xl mx-auto text-center text-white"
        >
          <div className="bg-white/20 w-20 h-20 rounded-2xl flex items-center justify-center mx-auto mb-6 backdrop-blur-sm shadow-2xl">
            <Gift className="h-10 w-10" />
          </div>
          
          <h2 className="text-5xl font-bold mb-4">
            ¡Únete a Nuestra Comunidad!
          </h2>
          
          <p className="text-xl mb-10 text-white/95 leading-relaxed">
            Recibe <span className="font-bold">10% de descuento</span> en tu primera compra, acceso exclusivo a nuevas colecciones y consejos de entrenamiento de nuestros expertos
          </p>
          
          <div className="flex flex-col sm:flex-row gap-3 max-w-xl mx-auto mb-6">
            <div className="flex-1 relative">
              <Mail className="absolute left-4 top-1/2 transform -translate-y-1/2 h-5 w-5 text-purple-400" />
              <Input 
                type="email" 
                placeholder="tu@email.com" 
                className="bg-white/95 border-0 text-gray-900 placeholder:text-gray-500 h-14 pl-12 pr-4 rounded-xl shadow-xl"
              />
            </div>
            <Button size="lg" className="bg-gray-900 hover:bg-black text-white px-10 h-14 rounded-xl shadow-xl hover:scale-105 transition-transform">
              Suscribirme
            </Button>
          </div>
          
          <p className="text-sm text-white/80">
            🔒 Tus datos están 100% protegidos. Sin spam, solo contenido valioso.
          </p>
          
          {/* Trust indicators */}
          <div className="flex justify-center items-center gap-8 mt-10 flex-wrap">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-green-400 rounded-full"></div>
              <span className="text-sm">10K+ Suscriptores</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-green-400 rounded-full"></div>
              <span className="text-sm">Ofertas Exclusivas</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-green-400 rounded-full"></div>
              <span className="text-sm">Cancela Cuando Quieras</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}