import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { Heart, Calendar, Camera, Music } from 'lucide-react';
import PhotoGallery from './components/PhotoGallery';
import ScrollIndicator from './components/ScrollIndicator';

function App() {
  useEffect(() => {
    // Smooth scrolling for anchor links
    const handleSmoothScroll = (e: Event) => {
      const target = e.target as HTMLAnchorElement;
      if (target.hash) {
        e.preventDefault();
        const element = document.querySelector(target.hash);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }
    };

    const links = document.querySelectorAll('a[href^="#"]');
    links.forEach(link => link.addEventListener('click', handleSmoothScroll));

    return () => {
      links.forEach(link => link.removeEventListener('click', handleSmoothScroll));
    };
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-romantic-cream via-romantic-blush to-white">
      <ScrollIndicator />
      
      {/* Hero Section */}
      <section className="min-h-screen relative flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{
            // 🖼️ Usando sua foto como fundo - foto do show
            backgroundImage: `linear-gradient(rgba(244, 63, 94, 0.1), rgba(88, 27, 58, 0.1)), url('https://i.imgur.com/5bwlRE3.png')`
          }}
        />
        
        <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="mb-8"
          >
            <motion.h1 
              className="font-vibes text-6xl md:text-8xl text-rose-600 mb-4"
              animate={{ 
                textShadow: [
                  "0 0 10px rgba(244, 63, 94, 0.3)",
                  "0 0 20px rgba(244, 63, 94, 0.5)",
                  "0 0 10px rgba(244, 63, 94, 0.3)"
                ]
              }}
              transition={{ repeat: Infinity, duration: 3 }}
            >
             Feliz Dia dos Namorados, meu amor
            </motion.h1>
            
            <motion.p 
              className="font-playfair text-xl md:text-2xl text-rose-700 italic"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5, duration: 1 }}
            >
              Um pouco da nossa história
            </motion.p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 1, duration: 0.8 }}
            className="relative inline-block"
          >
            <div className="w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-8 border-white shadow-2xl mx-auto">
              <img
                // 🖼️ Usando sua foto romântica com flores como foto principal
                src="https://i.imgur.com/3vRG2YB.jpeg"
                alt="Nosso amor"
                className="w-full h-full object-cover"
              />
            </div>
            
            <motion.div
              className="absolute -top-4 -right-4 w-16 h-16 bg-gradient-to-r from-rose-500 to-pink-500 rounded-full flex items-center justify-center shadow-lg"
              animate={{ rotate: 360 }}
              transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
            >
              <Heart className="text-white" size={24} fill="currentColor" />
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.5, duration: 0.8 }}
            className="mt-12"
          >
            <a
              href="#timeline"
              className="inline-flex items-center gap-2 bg-gradient-to-r from-rose-500 to-pink-500 text-white px-8 py-4 rounded-full font-playfair text-lg hover:from-rose-600 hover:to-pink-600 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
            >
              <Heart size={20} />
              Até agora...
            </a>
          </motion.div>
        </div>

        <motion.div
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
        >
          <div className="w-1 h-16 bg-gradient-to-b from-rose-500 to-transparent rounded-full" />
        </motion.div>
      </section>

      {/* Timeline Section */}
      <section id="timeline" className="py-20 px-6">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="font-dancing text-5xl md:text-6xl text-rose-600 mb-4">
              Momentos Especiais
            </h2>
            <p className="font-playfair text-lg text-rose-700 max-w-2xl mx-auto">
              Cada momento ao seu lado é uma página especial na nossa história. 
              Aqui estão alguns dos momentos mais preciosos da nossa jornada juntos.
            </p>
          </motion.div>

          <div className="space-y-16">
            {[
              {
                icon: Calendar,
                title: "Nosso Primeiro Encontro",
                date: "Algo por volta de março/2022",
                description: "Eu não imaginava que em plena aula de fisica experimental, eu ia conhecer uma menina tão única e que me fez enxergar o mundo com outros olhos, chegou com o seu jeitinho, falante, opininando e bom, eu me apaixonei desde aquele momento, me apaixonei não só por você, mas pelo seu jeito, e dai pra frente..."
              },
              {
                icon: Heart,
                title: "Primeira saída",
                date: "18/05/2024",
                description: "Boliche, sorvete de rolo e cinema, sem dúvidas na época, pra duas pessoas que mal se conheciam, foi um bom primeiro encontro"
              },
              {
                icon: Camera,
                title: "Primeiro Rolê no Sitio",
                date: "07/07/2024",
                description: "Esse dia foi muito legal, conseguiu conhecer minha máfia(familia) além de altos rolês no meio do sitio, com uma menina com as pernas toda a disposição de pernilongo"
              },
              {
                icon: Camera,
                title: "AOOOO BARRETÃO!",
                date: "24/08/2024",
                description: "Dispensa comentários, que noite incrivel e lugar mágico, acho que foi um start pra uma tradição nossa, tradição essa que eu inventei e vou colocar em prática"
              },
              {
                icon: Calendar,
                title: "Quer namorar cmg?",
                date: "08/12/2024",
                description: "Tá, esse dia foi um pouco chocante, mas, foi a minha melhor decisão, uma história que já vinha sendo construida a uns meses, mas agora, finalmente com uma data fixa"
              },
              {
                icon: Heart,
                title: "NOSSO DIA A DIA",
                date: "Todos os dias",
                description: "Nossas vidas são bem malucas, com rotinas diferentes, costumes e gostos diferentes, mas ao longo desse tempo eu percebi, que a gente é bom pra tirar o melhor das coisas, as vezes mais pertos, outra hora mais distantes, mas, sempre um pelo outro, é bonito isso, bom é isso"
              },
            ].map((moment, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                className={`flex flex-col md:flex-row items-center gap-8 ${
                  index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                }`}
              >
                <div className="flex-1">
                  <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 shadow-lg border border-rose-200">
                    <div className="flex items-center gap-4 mb-4">
                      <div className="w-12 h-12 bg-gradient-to-r from-rose-500 to-pink-500 rounded-full flex items-center justify-center">
                        <moment.icon className="text-white" size={24} />
                      </div>
                      <div>
                        <h3 className="font-dancing text-2xl text-rose-600">{moment.title}</h3>
                        <p className="font-playfair text-rose-500 italic">{moment.date}</p>
                      </div>
                    </div>
                    <p className="font-playfair text-gray-700 leading-relaxed">
                      {moment.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Photo Gallery Section */}
      <section id="gallery" className="py-20 px-6 bg-gradient-to-r from-romantic-cream to-romantic-blush">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="font-dancing text-5xl md:text-6xl text-rose-600 mb-4">
              Mini Galeria de Fotos
            </h2>
            <p className="font-playfair text-lg text-rose-700 max-w-2xl mx-auto">
              Cada foto guarda um pedacinho da nossa história. Clique nas imagens para reviver esses momentos especiais.
            </p>
          </motion.div>

          <PhotoGallery />
        </div>
      </section>

      {/* Love Letter Section */}
      <section className="py-20 px-6">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="bg-white/90 backdrop-blur-sm rounded-3xl p-12 shadow-2xl border border-rose-200 relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-rose-200 to-transparent rounded-bl-full" />
            <div className="absolute bottom-0 left-0 w-24 h-24 bg-gradient-to-tr from-pink-200 to-transparent rounded-tr-full" />
            
            <div className="relative z-10">
              <motion.div
                className="text-center mb-8"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
              >
                <Heart className="text-rose-500 mx-auto mb-4" size={48} fill="currentColor" />
                <h2 className="font-dancing text-4xl md:text-5xl text-rose-600 mb-4">
                  Carta de Amor
                </h2>
              </motion.div>

              <motion.div
                className="space-y-6 text-center"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
              >
                <p className="font-playfair text-lg text-gray-700 leading-relaxed italic">
                  "Meu amor, não existem palavras suficientes para expressar o que você significa para mim. 
                  Você é a luz dos meus dias(branquela desse jeito tbm), minha companheira pros momentos bons e ruins,
                  e minha alegria em todas as situações."
                </p>
                
                <p className="font-playfair text-lg text-gray-700 leading-relaxed italic">
                  "Cada dia ao seu lado é um presente, cada sorriso seu é a razão da minha felicidade. 
                  Obrigado por tornar minha vida mais colorida, mais doce, mais completa."
                </p>
                
                <p className="font-playfair text-lg text-gray-700 leading-relaxed italic">
                  "Que nossa história continue sendo escrita com muito amor, carinho e cumplicidade. 
                  Você é minha para sempre, minha branquela, meu grande amor."
                </p>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Final Message */}
      <section className="py-20 px-6 bg-gradient-to-r from-rose-500 via-pink-500 to-rose-600">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.h2 
              className="font-vibes text-6xl md:text-8xl text-white mb-8"
              animate={{ 
                scale: [1, 1.05, 1],
                textShadow: [
                  "0 0 20px rgba(255, 255, 255, 0.3)",
                  "0 0 30px rgba(255, 255, 255, 0.5)",
                  "0 0 20px rgba(255, 255, 255, 0.3)"
                ]
              }}
              transition={{ repeat: Infinity, duration: 4 }}
            >
              Para sempre com você
            </motion.h2>
            
            <motion.div
              className="flex items-center justify-center gap-4 mb-8"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.3, duration: 0.8 }}
            >
              <Heart className="text-white animate-pulse" size={32} fill="currentColor" />
              <p className="font-dancing text-3xl md:text-4xl text-white">
                Te amo infinitamente!
              </p>
              <Heart className="text-white animate-pulse" size={32} fill="currentColor" />
            </motion.div>

            <motion.p
              className="font-playfair text-xl text-white/90 italic"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.6, duration: 0.8 }}
            >
              Feliz Dia dos Namorados, meu bem! 💕
            </motion.p>
          </motion.div>
        </div>
      </section>

    </div>
  );
}

export default App;