import React, { useState, useEffect } from 'react';
import { NexusTetris } from './NexusTetris';
import { PacketMuncher } from './PacketMuncher';
import { motion, AnimatePresence } from 'motion/react';
import { Terminal, Shield, ArrowRight, Bug, Zap } from 'lucide-react';

interface Props {
  onComplete: () => void;
  moduleTitle: string;
  moduleIndex: number;
}

export const CyberBreak: React.FC<Props> = ({ onComplete, moduleTitle, moduleIndex }) => {
  const [started, setStarted] = useState(false);
  
  // Decide game based on module index
  const isTetris = moduleIndex % 2 === 0;

  if (!started) {
    return (
      <motion.div 
        key="break-intro"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 1.1 }}
        className="max-w-md w-full glass-panel p-8 text-center"
      >
        <div className="inline-block p-4 rounded-full bg-nexus-accent/10 text-nexus-accent mb-6">
          {isTetris ? <Shield size={48} /> : <Bug size={48} />}
        </div>
        <h2 className="text-2xl font-bold text-white mb-2 uppercase tracking-tighter">Acceso de Fragmento</h2>
        <p className="text-sm text-slate-300 font-mono mb-8 uppercase tracking-widest leading-relaxed">
          Para estabilizar el nodo del módulo <span className="text-nexus-accent">{moduleTitle}</span>, se requiere una <span className="text-nexus-warning">Validación de Sistema</span> manual.
        </p>

        <div className="bg-nexus-bg/50 border border-nexus-border p-4 rounded text-left mb-8 space-y-3">
          <div className="flex items-center gap-2 text-xs font-mono text-nexus-accent">
            <Zap size={14} /> 
            <span>OBJETIVO: {isTetris ? 'Estabilizar 2 líneas de datos' : 'Eliminar 15 rastros de malware'}</span>
          </div>
          <p className="text-[10px] text-slate-500 font-mono uppercase leading-tight">
            {isTetris 
              ? 'Usa las flechas para mover y rotar piezas. No permitas que la pila llegue al límite.' 
              : 'Usa las flechas para moverte por el sistema y recolectar los bits infectados. ¡Evita los virus!'
            }
          </p>
        </div>

        <button 
          onClick={() => setStarted(true)}
          className="nexus-button w-full flex items-center justify-center gap-2 group"
        >
          Iniciar Validación <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
        </button>
      </motion.div>
    );
  }

  return (
    <motion.div 
      key="break-game"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="w-full"
    >
      {isTetris ? (
        <NexusTetris onComplete={onComplete} moduleTitle={moduleTitle} />
      ) : (
        <PacketMuncher onComplete={onComplete} moduleTitle={moduleTitle} />
      )}
    </motion.div>
  );
};
