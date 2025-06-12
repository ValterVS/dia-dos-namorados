import React, { useState, useRef, useEffect } from 'react';
import { Play, Pause, Volume2 } from 'lucide-react';
import { motion } from 'framer-motion';

// 🎵 Música: "Realidade ou Fantasia" - Henrique e Juliano
// Nota: Para usar a música original, você precisará hospedar o arquivo MP3 em seu servidor
// Por enquanto, usando um placeholder. Substitua pela URL real do arquivo de áudio
const MUSIC_URL = "https://www.soundjay.com/misc/sounds/bell-ringing-05.wav"; // Placeholder - substitua pela música real

const MusicPlayer: React.FC = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [volume, setVolume] = useState(0.3); // 🔊 Volume inicial baixo para não incomodar
  const audioRef = useRef<HTMLAudioElement>(null);

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.volume = volume;
      audioRef.current.loop = true; // 🔄 Música em loop para tocar continuamente
    }
  }, [volume]);

  const togglePlay = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause();
      } else {
        audioRef.current.play().catch(() => {
          // Handle autoplay restrictions
          console.log('Autoplay foi bloqueado pelo navegador - clique no botão para tocar');
        });
      }
      setIsPlaying(!isPlaying);
    }
  };

  const handleVolumeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newVolume = parseFloat(e.target.value);
    setVolume(newVolume);
    if (audioRef.current) {
      audioRef.current.volume = newVolume;
    }
  };

  return (
    <motion.div 
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      className="fixed bottom-6 right-6 z-50"
    >
      <div className="bg-white/90 backdrop-blur-sm rounded-full p-4 shadow-lg border border-rose-200">
        <div className="flex items-center gap-3">
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={togglePlay}
            className="w-12 h-12 bg-gradient-to-r from-rose-500 to-pink-500 rounded-full flex items-center justify-center text-white shadow-lg"
            title="Realidade ou Fantasia - Henrique e Juliano"
          >
            {isPlaying ? <Pause size={20} /> : <Play size={20} />}
          </motion.button>
          
          <div className="flex items-center gap-2">
            <Volume2 size={16} className="text-rose-600" />
            <input
              type="range"
              min="0"
              max="1"
              step="0.1"
              value={volume}
              onChange={handleVolumeChange}
              className="w-20 h-2 bg-rose-200 rounded-lg appearance-none cursor-pointer"
              title="Controle de volume"
            />
          </div>
        </div>
        
        {/* Título da música */}
        <div className="text-xs text-rose-600 text-center mt-2 font-playfair">
          🎵 Realidade ou Fantasia
        </div>
        
        <audio
          ref={audioRef}
          onPlay={() => setIsPlaying(true)}
          onPause={() => setIsPlaying(false)}
          onEnded={() => setIsPlaying(false)}
          preload="metadata"
        >
          {/* 🎵 ALTERE AQUI: Substitua pela URL real da música "Realidade ou Fantasia" */}
          <source src="../assets/realidadeoufantasia.mp3" type="audio/mpeg" />
          {/* 
          Para a música real, você precisará:
          1. Fazer download da música "Realidade ou Fantasia" - Henrique e Juliano
          2. Converter para MP3 se necessário
          3. Hospedar o arquivo em seu servidor ou usar um serviço de hospedagem
          4. Substituir a URL acima pela URL real do arquivo
          5. Alterar o type para "audio/mpeg" se for MP3
          
          Exemplo:
          <source src="/src/assets/realidade-ou-fantasia.mp3" type="audio/mpeg" />
          */}
          Seu navegador não suporta o elemento de áudio.
        </audio>
      </div>
    </motion.div>
  );
};

export default MusicPlayer;