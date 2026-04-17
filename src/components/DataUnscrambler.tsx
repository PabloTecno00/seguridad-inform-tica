import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Lock, Unlock, Trophy, AlertTriangle, Fingerprint, Brain } from 'lucide-react';

interface Props {
  onComplete: () => void;
  moduleTitle: string;
}

const SYMBOLS = ['$', '#', '@', '&', '!', '?', '%', '=', '+', '*', 'X', 'O'];

export const DataUnscrambler: React.FC<Props> = ({ onComplete, moduleTitle }) => {
  const [cards, setCards] = useState<{ symbol: string, id: number, flipped: boolean, matched: boolean }[]>([]);
  const [flipped, setFlipped] = useState<number[]>([]);
  const [matches, setMatches] = useState(0);
  const [gameOver, setGameOver] = useState(false);
  const [isLocked, setIsLocked] = useState(false);

  const PAIRS = 6;

  useEffect(() => {
    const selectedSymbols = [...SYMBOLS].sort(() => 0.5 - Math.random()).slice(0, PAIRS);
    const deck = [...selectedSymbols, ...selectedSymbols]
      .sort(() => 0.5 - Math.random())
      .map((symbol, i) => ({ symbol, id: i, flipped: false, matched: false }));
    setCards(deck);
  }, []);

  const handleFlip = (id: number) => {
    if (isLocked || flipped.includes(id) || cards[id].matched) return;

    const newFlipped = [...flipped, id];
    setFlipped(newFlipped);

    if (newFlipped.length === 2) {
      setIsLocked(true);
      const [first, second] = newFlipped;
      
      if (cards[first].symbol === cards[second].symbol) {
        // Match
        setTimeout(() => {
          setCards(prev => prev.map(c => 
            (c.id === first || c.id === second) ? { ...c, matched: true } : c
          ));
          setMatches(m => {
            const newMatches = m + 1;
            if (newMatches === PAIRS) {
              setTimeout(onComplete, 1500);
            }
            return newMatches;
          });
          setFlipped([]);
          setIsLocked(false);
        }, 600);
      } else {
        // No match
        setTimeout(() => {
          setFlipped([]);
          setIsLocked(false);
        }, 1000);
      }
    }
  };

  return (
    <div className="flex flex-col items-center justify-center space-y-6 w-full max-w-md mx-auto">
      <div className="text-center space-y-2">
        <div className="flex items-center justify-center gap-2 text-nexus-warning">
          <Brain size={20} className="animate-pulse" />
          <h2 className="text-xl font-bold font-mono tracking-tight uppercase">Descifrado Cuántico</h2>
        </div>
        <p className="text-xs text-slate-400 font-mono uppercase tracking-widest">Módulo: {moduleTitle}</p>
      </div>

      <div className="relative w-full aspect-square glass-panel p-4 bg-black/40 border-nexus-border/30">
        <div className="grid grid-cols-3 gap-3 h-full">
          {cards.map((card) => {
            const isFlipped = flipped.includes(card.id) || card.matched;
            return (
              <motion.div
                key={card.id}
                whileHover={{ scale: card.matched ? 1 : 1.05 }}
                whileTap={{ scale: card.matched ? 1 : 0.95 }}
                onClick={() => handleFlip(card.id)}
                className={`
                  relative cursor-pointer rounded-lg border-2 transition-all duration-500 preserve-3d
                  ${isFlipped ? 'border-nexus-accent bg-nexus-accent/10 border-solid' : 'border-nexus-border bg-nexus-surface border-dashed'}
                  ${card.matched ? 'opacity-40 grayscale-[0.5]' : ''}
                `}
              >
                <div className="absolute inset-0 flex items-center justify-center text-2xl font-bold font-mono">
                  {isFlipped ? (
                    <span className="text-nexus-accent">{card.symbol}</span>
                  ) : (
                    <Fingerprint className="text-nexus-border" size={32} />
                  )}
                </div>
              </motion.div>
            );
          })}
        </div>

        <AnimatePresence>
          {matches === PAIRS && (
            <motion.div 
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              className="absolute inset-0 z-10 flex flex-col items-center justify-center bg-nexus-bg/80 backdrop-blur-sm text-center"
            >
              <Trophy size={48} className="text-nexus-success mb-2" />
              <h3 className="text-2xl font-bold text-nexus-success uppercase tracking-tighter">NODO DESCIFRADO</h3>
              <p className="text-xs text-slate-300 uppercase tracking-widest mt-2">Continuando secuencia...</p>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      <div className="w-full flex items-center justify-between px-4">
        <div className="flex flex-col gap-1">
          <span className="text-[10px] font-mono text-slate-400 uppercase tracking-widest">Sincronización</span>
          <div className="flex gap-1 h-1.5 w-32 bg-nexus-bg border border-nexus-border rounded-full overflow-hidden">
            <div 
              className="h-full bg-nexus-warning transition-all duration-300"
              style={{ width: `${(matches / PAIRS) * 100}%` }}
            />
          </div>
        </div>
        <div className="text-[10px] font-mono text-slate-300 uppercase">
          Empareja las firmas digitales
        </div>
      </div>
    </div>
  );
};
