import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, X } from 'lucide-react';

// 🖼️ Suas fotos pessoais do casal
const photos = [
  {
    id: 1,
    src: "https://i.imgur.com/eS9f7Pa.jpeg",
    alt: "Momento especial no show - vocês dois se divertindo juntos"
  },
  {
    id: 2,
    src: "https://i.imgur.com/cUI69bt.jpeg",
    alt: "Momento romântico com flores - declaração de amor"
  },
  {
    id: 3,
    src: "https://i.imgur.com/XAdjfQo.jpeg",
    alt: "Selfie apaixonada - sorrisos genuínos de felicidade"
  },
  {
    id: 4,
    src: "https://i.imgur.com/fXhu5La.jpeg",
    alt: "Mais um momento de carinho e cumplicidade"
  },
  {
    id: 5,
    src: "https://i.imgur.com/3vRG2YB.jpeg",
    alt: "Aventura na estrada - viagem juntos"
  },
    {
    id: 6,
    src: "https://i.imgur.com/95YQHup.jpeg",
    alt: "Aventura na estrada - viagem juntos"
  }
  // 🖼️ PARA ADICIONAR MAIS FOTOS: Copie o formato acima e adicione novas fotos aqui
  // {
  //   id: 6,
  //   src: "/src/assets/SUA_NOVA_FOTO.jpg",
  //   alt: "Descrição da sua foto"
  // },
];

const PhotoGallery: React.FC = () => {
  const [selectedPhoto, setSelectedPhoto] = useState<number | null>(null);

  const nextPhoto = () => {
    if (selectedPhoto !== null) {
      setSelectedPhoto((selectedPhoto + 1) % photos.length);
    }
  };

  const prevPhoto = () => {
    if (selectedPhoto !== null) {
      setSelectedPhoto(selectedPhoto === 0 ? photos.length - 1 : selectedPhoto - 1);
    }
  };

  return (
    <>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4 max-w-4xl mx-auto">
        {photos.map((photo, index) => (
          <motion.div
            key={photo.id}
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            whileHover={{ scale: 1.05 }}
            className="relative overflow-hidden rounded-2xl aspect-square cursor-pointer group"
            onClick={() => setSelectedPhoto(index)}
          >
            <img
              src={photo.src}
              alt={photo.alt}
              className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            <div className="absolute inset-0 bg-rose-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          </motion.div>
        ))}
      </div>

      <AnimatePresence>
        {selectedPhoto !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black bg-opacity-90 z-50 flex items-center justify-center p-4"
            onClick={() => setSelectedPhoto(null)}
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              className="relative max-w-4xl max-h-full"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={() => setSelectedPhoto(null)}
                className="absolute top-4 right-4 z-10 bg-white/20 backdrop-blur-sm rounded-full p-2 text-white hover:bg-white/30 transition-colors"
              >
                <X size={24} />
              </button>
              
              <button
                onClick={prevPhoto}
                className="absolute left-4 top-1/2 -translate-y-1/2 z-10 bg-white/20 backdrop-blur-sm rounded-full p-2 text-white hover:bg-white/30 transition-colors"
              >
                <ChevronLeft size={24} />
              </button>
              
              <button
                onClick={nextPhoto}
                className="absolute right-4 top-1/2 -translate-y-1/2 z-10 bg-white/20 backdrop-blur-sm rounded-full p-2 text-white hover:bg-white/30 transition-colors"
              >
                <ChevronRight size={24} />
              </button>
              
              <img
                src={photos[selectedPhoto].src}
                alt={photos[selectedPhoto].alt}
                className="w-full h-full object-contain rounded-lg"
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default PhotoGallery;