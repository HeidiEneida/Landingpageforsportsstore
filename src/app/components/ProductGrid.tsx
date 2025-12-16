import { motion } from 'motion/react';
import { ShoppingCart, Heart, Eye } from 'lucide-react';
import { Button } from './ui/button';
import { Card } from './ui/card';
import { Badge } from './ui/badge';

interface Product {
  id: number;
  name: string;
  category: string;
  price: number;
  originalPrice?: number;
  image: string;
  badge?: string;
  badgeColor?: string;
  colors?: string[];
}

const products: Product[] = [
  {
    id: 1,
    name: "White Breeze Set",
    category: "Mujer - Yoga",
    price: 89999,
    originalPrice: 129999,
    image: "https://images.unsplash.com/photo-1647244949200-5877a6695c17?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3b21hbiUyMHlvZ2ElMjBhY3RpdmV3ZWFyJTIwd2hpdGV8ZW58MXx8fHwxNzY1ODQyODE1fDA&ixlib=rb-4.1.0&q=80&w=1080",
    badge: "OFERTA",
    badgeColor: "bg-red-500",
    colors: ["#FFFFFF", "#FFB6C1", "#87CEEB"]
  },
  {
    id: 2,
    name: "Aqua Flow Set",
    category: "Mujer - Natación",
    price: 119999,
    image: "https://images.unsplash.com/photo-1720135320234-5bff3451f455?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3b21hbiUyMHN3aW1taW5nJTIwZml0bmVzcyUyMGJsdWV8ZW58MXx8fHwxNzY1ODQyODE2fDA&ixlib=rb-4.1.0&q=80&w=1080",
    badge: "NUEVO",
    badgeColor: "bg-gradient-to-r from-purple-500 to-pink-500",
    colors: ["#4169E1", "#000000", "#FF6347"]
  },
  {
    id: 3,
    name: "Sunset Orbit Set",
    category: "Mujer - Training",
    price: 94999,
    image: "https://images.unsplash.com/photo-1571019613723-c7e5b75bd4c6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3b21hbiUyMHdvcmtvdXQlMjBvcmFuZ2UlMjBzcG9ydHN3ZWFyfGVufDF8fHx8MTc2NTg0MjgxNnww&ixlib=rb-4.1.0&q=80&w=1080",
    colors: ["#FF8C00", "#000000", "#696969"]
  },
  {
    id: 4,
    name: "Onyx Motion Set",
    category: "Mujer - Running",
    price: 179999,
    image: "https://images.unsplash.com/photo-1764971590992-6cb000c079ac?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3b21hbiUyMGJsYWNrJTIwYXRobGV0aWMlMjB3ZWFyfGVufDF8fHx8MTc2NTg0MjgxNnww&ixlib=rb-4.1.0&q=80&w=1080",
    badge: "POPULAR",
    badgeColor: "bg-purple-600",
    colors: ["#000000", "#808080", "#FFFFFF"]
  },
  {
    id: 5,
    name: "Match Point Classic",
    category: "Hombre - Tenis",
    price: 149999,
    image: "https://images.unsplash.com/photo-1641578784369-bf2a6e0ef5f8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtYW4lMjB0ZW5uaXMlMjBzcG9ydHMlMjBvdXRmaXR8ZW58MXx8fHwxNzY1ODQyODE3fDA&ixlib=rb-4.1.0&q=80&w=1080",
    colors: ["#000000", "#FFFFFF", "#1E90FF"]
  },
  {
    id: 6,
    name: "Urban Runner Burgundy",
    category: "Hombre - Running",
    price: 134999,
    originalPrice: 169999,
    image: "https://images.unsplash.com/photo-1620354865993-63b0a6091a54?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtYW4lMjBydW5uaW5nJTIwYnVyZ3VuZHklMjBzcG9ydHN3ZWFyfGVufDF8fHx8MTc2NTg0MjgxN3ww&ixlib=rb-4.1.0&q=80&w=1080",
    badge: "OFERTA",
    badgeColor: "bg-red-500",
    colors: ["#800020", "#000000", "#696969"]
  },
  {
    id: 7,
    name: "White Coast Chic",
    category: "Mujer - Lifestyle",
    price: 79999,
    image: "https://images.unsplash.com/photo-1641840007671-06412f440b65?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3b21hbiUyMHdoaXRlJTIwY2FzdWFsJTIwYWN0aXZld2VhcnxlbnwxfHx8fDE3NjU4NDI4MTh8MA&ixlib=rb-4.1.0&q=80&w=1080",
    colors: ["#FFFFFF", "#F5F5DC", "#FFB6C1"]
  },
  {
    id: 8,
    name: "Night Warrior Gear",
    category: "Hombre - Basketball",
    price: 159999,
    image: "https://images.unsplash.com/photo-1712160456791-10f21f38badd?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtYW4lMjBiYXNrZXRiYWxsJTIwYXRobGV0aWMlMjBnZWFyfGVufDF8fHx8MTc2NTg0MjgxOHww&ixlib=rb-4.1.0&q=80&w=1080",
    badge: "NUEVO",
    badgeColor: "bg-gradient-to-r from-purple-500 to-pink-500",
    colors: ["#FFA500", "#000000", "#FFFFFF"]
  },
];

export function ProductGrid() {
  return (
    <section className="py-20 bg-gradient-to-b from-white to-gray-50" id="productos">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-block bg-gradient-to-r from-purple-600 to-pink-600 text-white px-4 py-1 rounded-full text-sm mb-4">
              Colección Premium
            </span>
            <h2 className="text-5xl font-bold mb-4 bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
              Productos Destacados
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto text-lg">
              Descubre nuestra selección exclusiva de ropa deportiva diseñada para elevar tu rendimiento y estilo
            </p>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {products.map((product, index) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="group overflow-hidden border-0 shadow-xl hover:shadow-2xl transition-all duration-500 bg-white rounded-3xl">
                <div className="relative overflow-hidden bg-gray-100">
                  <img 
                    src={product.image} 
                    alt={product.name}
                    className="w-full h-80 object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  {product.badge && (
                    <Badge className={`absolute top-4 left-4 ${product.badgeColor} text-white border-0 shadow-lg px-3 py-1`}>
                      {product.badge}
                    </Badge>
                  )}
                  
                  {/* Quick Actions Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300 flex items-end justify-center pb-6 gap-2">
                    <Button size="icon" className="rounded-full bg-white text-gray-900 hover:bg-gray-100 shadow-lg transform translate-y-4 group-hover:translate-y-0 transition-all duration-300">
                      <Heart className="h-5 w-5" />
                    </Button>
                    <Button size="icon" className="rounded-full bg-white text-gray-900 hover:bg-gray-100 shadow-lg transform translate-y-4 group-hover:translate-y-0 transition-all duration-300 delay-75">
                      <Eye className="h-5 w-5" />
                    </Button>
                    <Button size="icon" className="rounded-full bg-gradient-to-r from-purple-600 to-pink-600 text-white hover:from-purple-700 hover:to-pink-700 shadow-lg transform translate-y-4 group-hover:translate-y-0 transition-all duration-300 delay-150">
                      <ShoppingCart className="h-5 w-5" />
                    </Button>
                  </div>
                </div>
                
                <div className="p-5">
                  <p className="text-xs text-purple-600 font-semibold mb-2 uppercase tracking-wider">
                    {product.category}
                  </p>
                  <h3 className="font-bold text-lg mb-3 group-hover:text-purple-600 transition-colors">
                    {product.name}
                  </h3>
                  
                  {/* Color Options */}
                  <div className="flex items-center gap-2 mb-4">
                    {product.colors?.map((color, idx) => (
                      <button
                        key={idx}
                        className="w-6 h-6 rounded-full border-2 border-gray-300 hover:border-purple-600 transition-colors shadow-sm hover:scale-110 transform"
                        style={{ backgroundColor: color }}
                        aria-label={`Color ${idx + 1}`}
                      />
                    ))}
                  </div>
                  
                  {/* Price */}
                  <div className="flex items-center gap-3">
                    <span className="text-2xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                      ${(product.price / 1000).toFixed(3)}
                    </span>
                    {product.originalPrice && (
                      <span className="text-sm text-gray-400 line-through">
                        ${(product.originalPrice / 1000).toFixed(3)}
                      </span>
                    )}
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <Button size="lg" className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white px-12 py-6 text-lg shadow-xl hover:shadow-2xl transition-all">
            Ver Toda la Colección
          </Button>
        </motion.div>
      </div>
    </section>
  );
}