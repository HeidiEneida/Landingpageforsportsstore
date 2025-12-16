import { Card } from './ui/card';
import { Badge } from './ui/badge';
import { motion } from 'motion/react';
import { 
  LayoutDashboard, 
  ShoppingBag, 
  Users, 
  TrendingUp, 
  MessageSquare, 
  Star,
  Shield,
  Truck,
  CreditCard,
  Calendar,
  FileText,
  Image as ImageIcon,
  Sparkles
} from 'lucide-react';

const sectionProposals = [
  {
    section: "Hero / Banner Principal",
    elements: ["Slider de imágenes promocionales", "Llamadas a la acción (CTA)", "Ofertas destacadas", "Nueva colección"],
    priority: "Alta",
    icon: LayoutDashboard
  },
  {
    section: "Catálogo de Productos",
    elements: ["Grid de productos con filtros", "Vista rápida de producto", "Comparador de productos", "Wishlist/Favoritos"],
    priority: "Alta",
    icon: ShoppingBag
  },
  {
    section: "Testimonios / Reseñas",
    elements: ["Calificaciones por estrellas", "Comentarios de clientes", "Fotos de clientes", "Verificación de compra"],
    priority: "Media",
    icon: MessageSquare
  },
  {
    section: "Confianza y Seguridad",
    elements: ["Certificados SSL", "Garantía de devolución", "Política de privacidad", "Métodos de pago seguros"],
    priority: "Alta",
    icon: Shield
  }
];

const functionalFeatures = [
  {
    feature: "Carrito de Compras",
    description: "Gestión completa del proceso de compra",
    tags: ["E-commerce", "Esencial"],
    icon: ShoppingBag
  },
  {
    feature: "Sistema de Usuarios",
    description: "Registro, login, perfil de usuario",
    tags: ["Autenticación", "Cuenta"],
    icon: Users
  },
  {
    feature: "Seguimiento de Pedidos",
    description: "Tracking en tiempo real de envíos",
    tags: ["Logística", "UX"],
    icon: Truck
  },
  {
    feature: "Pasarela de Pago",
    description: "Integración con múltiples métodos de pago",
    tags: ["Pagos", "Seguridad"],
    icon: CreditCard
  },
  {
    feature: "Blog / Contenido",
    description: "Artículos sobre deportes y nutrición",
    tags: ["Marketing", "SEO"],
    icon: FileText
  },
  {
    feature: "Galería Multimedia",
    description: "Imágenes 360°, videos de productos",
    tags: ["Visual", "Premium"],
    icon: ImageIcon
  }
];

const contentTypes = [
  {
    type: "Páginas Informativas",
    items: ["Sobre Nosotros", "Contacto", "FAQ", "Términos y Condiciones", "Política de Devoluciones", "Guía de Tallas"],
    color: "from-blue-500 to-cyan-500"
  },
  {
    type: "Marketing y Promoción",
    items: ["Newsletter", "Cupones de descuento", "Programa de lealtad", "Ofertas por temporada", "Black Friday / Cyber Monday"],
    color: "from-purple-500 to-pink-500"
  },
  {
    type: "Recursos Adicionales",
    items: ["Guías de entrenamiento", "Calculadora de IMC", "Planificador de rutinas", "Videos tutoriales", "Eventos deportivos"],
    color: "from-green-500 to-teal-500"
  },
  {
    type: "Social & Comunidad",
    items: ["Integración redes sociales", "Programa de embajadores", "Fotos de clientes", "Hashtag campaigns", "Reviews de influencers"],
    color: "from-orange-500 to-red-500"
  }
];

export function ContentProposals() {
  return (
    <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-4">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-purple-100 to-pink-100 px-4 py-2 rounded-full mb-4">
            <Sparkles className="h-4 w-4 text-purple-600" />
            <span className="text-sm font-semibold text-purple-900">Guía Profesional</span>
          </div>
          <h2 className="text-5xl font-bold mb-4 bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
            Propuestas de Contenido
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg">
            Recomendaciones estratégicas para optimizar tu portal de e-commerce deportivo
          </p>
        </motion.div>

        {/* Secciones Principales */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-20"
        >
          <h3 className="text-3xl font-bold mb-8 flex items-center gap-3">
            <div className="bg-gradient-to-r from-purple-600 to-pink-600 p-3 rounded-xl text-white">
              <LayoutDashboard className="h-6 w-6" />
            </div>
            Secciones Principales del Sitio
          </h3>
          <div className="overflow-x-auto rounded-2xl shadow-2xl">
            <table className="w-full bg-white">
              <thead className="bg-gradient-to-r from-purple-600 to-pink-600 text-white">
                <tr>
                  <th className="px-8 py-5 text-left font-bold">Sección</th>
                  <th className="px-8 py-5 text-left font-bold">Elementos Sugeridos</th>
                  <th className="px-8 py-5 text-left font-bold">Prioridad</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                {sectionProposals.map((item, index) => {
                  const Icon = item.icon;
                  return (
                    <motion.tr 
                      key={index} 
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.1 }}
                      className="hover:bg-purple-50 transition-colors"
                    >
                      <td className="px-8 py-6">
                        <div className="flex items-center gap-3">
                          <div className="bg-gradient-to-br from-purple-100 to-pink-100 p-2 rounded-lg">
                            <Icon className="h-5 w-5 text-purple-600" />
                          </div>
                          <span className="font-semibold text-gray-900">{item.section}</span>
                        </div>
                      </td>
                      <td className="px-8 py-6">
                        <div className="flex flex-wrap gap-2">
                          {item.elements.map((element, idx) => (
                            <Badge key={idx} variant="outline" className="bg-white border-purple-200 text-purple-700 hover:bg-purple-50">
                              {element}
                            </Badge>
                          ))}
                        </div>
                      </td>
                      <td className="px-8 py-6">
                        <Badge 
                          className={
                            item.priority === "Alta" 
                              ? "bg-gradient-to-r from-red-500 to-pink-500 text-white border-0" 
                              : "bg-gradient-to-r from-yellow-400 to-orange-400 text-white border-0"
                          }
                        >
                          {item.priority}
                        </Badge>
                      </td>
                    </motion.tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </motion.div>

        {/* Funcionalidades */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-20"
        >
          <h3 className="text-3xl font-bold mb-8 flex items-center gap-3">
            <div className="bg-gradient-to-r from-purple-600 to-pink-600 p-3 rounded-xl text-white">
              <TrendingUp className="h-6 w-6" />
            </div>
            Funcionalidades Clave
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {functionalFeatures.map((item, index) => {
              const Icon = item.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                >
                  <Card className="p-6 hover:shadow-2xl transition-all duration-300 border-0 shadow-lg bg-white hover:scale-105 h-full">
                    <div className="flex items-start gap-4">
                      <div className="bg-gradient-to-br from-purple-500 to-pink-500 p-3 rounded-xl text-white shadow-lg flex-shrink-0">
                        <Icon className="h-6 w-6" />
                      </div>
                      <div className="flex-1">
                        <h4 className="font-bold text-lg mb-2 text-gray-900">{item.feature}</h4>
                        <p className="text-sm text-gray-600 mb-3 leading-relaxed">{item.description}</p>
                        <div className="flex flex-wrap gap-2">
                          {item.tags.map((tag, idx) => (
                            <Badge key={idx} className="bg-gradient-to-r from-purple-100 to-pink-100 text-purple-700 border-0 text-xs">
                              {tag}
                            </Badge>
                          ))}
                        </div>
                      </div>
                    </div>
                  </Card>
                </motion.div>
              );
            })}
          </div>
        </motion.div>

        {/* Tipos de Contenido */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-20"
        >
          <h3 className="text-3xl font-bold mb-8 flex items-center gap-3">
            <div className="bg-gradient-to-r from-purple-600 to-pink-600 p-3 rounded-xl text-white">
              <FileText className="h-6 w-6" />
            </div>
            Tipos de Contenido por Categoría
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {contentTypes.map((category, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Card className={`p-6 border-0 shadow-xl bg-gradient-to-br ${category.color} text-white h-full`}>
                  <h4 className="font-bold text-2xl mb-6">{category.type}</h4>
                  <ul className="space-y-3">
                    {category.items.map((item, idx) => (
                      <li key={idx} className="flex items-center gap-3 text-sm">
                        <div className="w-2 h-2 rounded-full bg-white shadow-lg flex-shrink-0"></div>
                        <span className="text-white/95">{item}</span>
                      </li>
                    ))}
                  </ul>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* SEO & Analytics Table */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h3 className="text-3xl font-bold mb-8 flex items-center gap-3">
            <div className="bg-gradient-to-r from-purple-600 to-pink-600 p-3 rounded-xl text-white">
              <Star className="h-6 w-6" />
            </div>
            Optimización y Analítica
          </h3>
          <div className="bg-white rounded-2xl shadow-2xl overflow-hidden">
            <table className="w-full">
              <thead className="bg-gradient-to-r from-purple-600 to-pink-600 text-white">
                <tr>
                  <th className="px-8 py-5 text-left font-bold">Área</th>
                  <th className="px-8 py-5 text-left font-bold">Herramientas / Técnicas</th>
                  <th className="px-8 py-5 text-left font-bold">Impacto</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                <tr className="hover:bg-purple-50 transition-colors">
                  <td className="px-8 py-5 font-bold text-gray-900">SEO</td>
                  <td className="px-8 py-5 text-gray-700">Meta tags, Schema markup, URLs amigables, Sitemap XML</td>
                  <td className="px-8 py-5">
                    <Badge className="bg-gradient-to-r from-green-500 to-emerald-500 text-white border-0">Alto</Badge>
                  </td>
                </tr>
                <tr className="hover:bg-purple-50 transition-colors">
                  <td className="px-8 py-5 font-bold text-gray-900">Analytics</td>
                  <td className="px-8 py-5 text-gray-700">Google Analytics 4, Hotjar, Conversion tracking</td>
                  <td className="px-8 py-5">
                    <Badge className="bg-gradient-to-r from-green-500 to-emerald-500 text-white border-0">Alto</Badge>
                  </td>
                </tr>
                <tr className="hover:bg-purple-50 transition-colors">
                  <td className="px-8 py-5 font-bold text-gray-900">Performance</td>
                  <td className="px-8 py-5 text-gray-700">Lazy loading, CDN, Compresión de imágenes, Caché</td>
                  <td className="px-8 py-5">
                    <Badge className="bg-gradient-to-r from-green-500 to-emerald-500 text-white border-0">Alto</Badge>
                  </td>
                </tr>
                <tr className="hover:bg-purple-50 transition-colors">
                  <td className="px-8 py-5 font-bold text-gray-900">Accesibilidad</td>
                  <td className="px-8 py-5 text-gray-700">ARIA labels, Contraste de colores, Navegación por teclado</td>
                  <td className="px-8 py-5">
                    <Badge className="bg-gradient-to-r from-yellow-400 to-orange-400 text-white border-0">Medio</Badge>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </motion.div>
      </div>
    </section>
  );
}