import { motion } from 'motion/react';
import { Truck, Shield, RefreshCw, Headphones } from 'lucide-react';

const features = [
  {
    icon: Truck,
    title: "Envío Gratis",
    description: "En compras superiores a $150.000"
  },
  {
    icon: Shield,
    title: "Compra Segura",
    description: "Protección garantizada en cada transacción"
  },
  {
    icon: RefreshCw,
    title: "Devoluciones Fáciles",
    description: "30 días para cambios y devoluciones"
  },
  {
    icon: Headphones,
    title: "Soporte 24/7",
    description: "Asistencia profesional en todo momento"
  }
];

export function Features() {
  return (
    <section className="py-16 bg-gradient-to-r from-purple-900 via-indigo-900 to-purple-900 text-white relative overflow-hidden">
      {/* Decorative background */}
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1461896836934-ffe607ba8211?w=1920&h=400&fit=crop')] bg-cover bg-center opacity-5"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="flex flex-col items-center text-center group"
              >
                <div className="bg-gradient-to-br from-pink-500 to-purple-600 p-5 rounded-2xl mb-4 group-hover:scale-110 group-hover:rotate-3 transition-all duration-300 shadow-xl">
                  <Icon className="h-8 w-8" />
                </div>
                <h3 className="font-bold text-xl mb-2">{feature.title}</h3>
                <p className="text-sm text-purple-200">{feature.description}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}