import React from 'react';
import AnimatedElement from './AnimatedElement';

const BrandsSection: React.FC = () => {
  const brands = [
    { name: "HUNTER", logo: "/images/photos/hunter_logo.jpg" },
    { name: "RAIN BIRD", logo: "/images/photos/rainbird_logo.png" },
    { name: "IRRITROL", logo: "/images/photos/irritrol_logo.png" },
    { name: "TORO", logo: "/images/photos/toro_logo.jpg" }
  ];

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedElement animationType="fade-up" delay={100}>
          <h2 className="text-3xl md:text-4xl font-bold text-green-700 mb-12 text-center">
            Мы работаем с ведущими производителями
          </h2>
        </AnimatedElement>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {brands.map((brand, index) => (
            <AnimatedElement key={index} animationType="fade-up" delay={200 + index * 100}>
              <div className="bg-white rounded-xl p-6 flex items-center justify-center h-40 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
                <img 
                  src={brand.logo} 
                  alt={brand.name} 
                  className={`max-w-full object-contain ${
                    brand.name === "IRRITROL" || brand.name === "TORO" ? "max-h-32" : "max-h-24"
                  }`} 
                />
              </div>
            </AnimatedElement>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BrandsSection;

