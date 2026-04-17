import React, { useState } from 'react';
import { NexusTetris } from './NexusTetris';
import { PacketMuncher } from './PacketMuncher';
import { NexusDefender } from './NexusDefender';
import { DataUnscrambler } from './DataUnscrambler';
import { motion, AnimatePresence } from 'motion/react';
import { Terminal, Shield, ArrowRight, Bug, Zap, Rocket, Brain } from 'lucide-react';

interface Props {
  onComplete: () => void;
  moduleTitle: string;
  moduleIndex: number;
}

export const CyberBreak: React.FC<Props> = ({ onComplete, moduleTitle, moduleIndex }) => {
  const [started, setStarted] = useState(false);
  
  // Decide game based on module index (4 choices now)
  const gameType = moduleIndex % 4;

  const renderIntroIcon = () => {
    switch(gameType) {
      case 0: return <Shield size={48} />;
      case 1: return <Bug size={48} />;
      case 2: return <Rocket size={48} />;
      case 3: return <Brain size={48} />;
      default: return <Zap size={48} />;
    }
  };

  const introText = () => {
    switch(gameType) {
      case 0: return {
        obj: "Estabilizar 2 líneas de datos",
        instr: "Usa las flechas para mover y rotar piezas. Estabiliza el flujo antes de que se desborde."
      };
      case 1: return {
        obj: "Eliminar 15 rastros de malware",
        instr: "Recoléctalos todos evitando los virus que patrullan el sistema."
      };
      case 2: return {
        obj: "Neutralizar 10 amenazas entrantes",
        instr: "Usa las flechas para moverte y Espacio para disparar el firewall activo."
      };
      case 3: return {
        obj: "Sincronizar 6 pares de firmas",
        instr: "Memoria y precisión: encuentra los pares de claves idénticas para abrir el nodo."
      };
      default: return { obj: "", instr: "" };
    }
  };

  const { obj, instr } = introText();

  return (
    <AnimatePresence mode="wait">
      {!started ? (
        <motion.div 
          key="break-intro"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 1.1 }}
          className="max-w-md w-full glass-panel p-8 text-center"
        >
          <div className="inline-block p-4 rounded-full bg-nexus-accent/10 text-nexus-accent mb-6">
            {renderIntroIcon()}
          </div>
          <h2 className="text-2xl font-bold text-white mb-2 uppercase tracking-tighter">Validación de Nodo</h2>
          <p className="text-sm text-slate-300 font-mono mb-8 uppercase tracking-widest leading-relaxed">
            Módulo <span className="text-nexus-accent">{moduleIndex + 1}</span>: <span className="text-white">{moduleTitle}</span>
          </p>

          <div className="bg-nexus-bg/50 border border-nexus-border p-4 rounded text-left mb-8 space-y-3">
            <div className="flex items-center gap-2 text-xs font-mono text-nexus-warning">
              <Zap size={14} /> 
              <span>OBJETIVO: {obj}</span>
            </div>
            <p className="text-[10px] text-slate-500 font-mono uppercase leading-tight">
              {instr}
            </p>
          </div>

          <button 
            onClick={() => setStarted(true)}
            className="nexus-button w-full flex items-center justify-center gap-2 group"
          >
            Sincronizar <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
          </button>
        </motion.div>
      ) : (
        <motion.div 
          key="break-game"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="w-full"
        >
          {gameType === 0 && <NexusTetris onComplete={onComplete} moduleTitle={moduleTitle} />}
          {gameType === 1 && <PacketMuncher onComplete={onComplete} moduleTitle={moduleTitle} />}
          {gameType === 2 && <NexusDefender onComplete={onComplete} moduleTitle={moduleTitle} />}
          {gameType === 3 && <DataUnscrambler onComplete={onComplete} moduleTitle={moduleTitle} />}
        </motion.div>
      )}
    </AnimatePresence>
  );
};
