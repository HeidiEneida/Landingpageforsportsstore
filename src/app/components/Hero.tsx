import { motion } from 'motion/react';
import { Button } from './ui/button';

export function Hero() {
  return (
    <section className="relative h-[600px] md:h-[700px] overflow-hidden bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-800">
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1517836357463-d25dfeac3438?w=1920&h=1080&fit=crop')] bg-cover bg-center opacity-20"></div>
      
      <div className="container mx-auto px-4 h-full relative z-10">
        <div className="flex flex-col justify-center items-center text-center h-full">
          {/* Content */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl"
          >
            <motion.span 
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="inline-block bg-white/20 backdrop-blur-sm text-white px-6 py-2 rounded-full text-sm mb-6 border border-white/30"
            >
              ✨ Colección 2024 - Nuevos Diseños
            </motion.span>
            
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6 leading-tight text-white">
              Eleva Tu
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400">
                Estilo Deportivo
              </span>
            </h1>
            
            <p className="text-white/90 mb-10 max-w-2xl mx-auto text-lg md:text-xl">
              Descubre conjuntos deportivos de alta calidad diseñados para mujeres que buscan rendimiento y elegancia en cada movimiento
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-white text-purple-900 hover:bg-gray-100 px-10 py-7 text-lg shadow-2xl">
                Explorar Colección
              </Button>
              <Button size="lg" variant="outline" className="border-2 border-white text-white hover:bg-white/10 backdrop-blur-sm px-10 py-7 text-lg">
                Ver Ofertas
              </Button>
            </div>
            
            {/* Stats */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="grid grid-cols-3 gap-8 mt-16 max-w-2xl mx-auto"
            >
              <div className="backdrop-blur-sm bg-white/10 rounded-2xl p-4 border border-white/20">
                <div className="text-4xl font-bold text-white">500+</div>
                <div className="text-white/80 text-sm">Productos</div>
              </div>
              <div className="backdrop-blur-sm bg-white/10 rounded-2xl p-4 border border-white/20">
                <div className="text-4xl font-bold text-white">10K+</div>
                <div className="text-white/80 text-sm">Clientes Felices</div>
              </div>
              <div className="backdrop-blur-sm bg-white/10 rounded-2xl p-4 border border-white/20">
                <div className="text-4xl font-bold text-white">4.8★</div>
                <div className="text-white/80 text-sm">Calificación</div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute top-20 right-10 w-96 h-96 bg-cyan-400 rounded-full mix-blend-screen filter blur-3xl opacity-20 animate-blob"></div>
      <div className="absolute bottom-20 left-10 w-96 h-96 bg-purple-400 rounded-full mix-blend-screen filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>
      
      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="w-1.5 h-1.5 bg-white rounded-full mt-2"
          />
        </div>
      </motion.div>
    </section>
  );
}