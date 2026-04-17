import React, { useState, useEffect, useCallback, useRef } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Zap, Shield, Trophy, Target, AlertTriangle, Rocket } from 'lucide-react';

interface Props {
  onComplete: () => void;
  moduleTitle: string;
}

const WIDTH = 300;
const HEIGHT = 400;
const PLAYER_SIZE = 30;
const BULLET_SIZE = 5;
const ENEMY_SIZE = 25;

export const NexusDefender: React.FC<Props> = ({ onComplete, moduleTitle }) => {
  const [playerX, setPlayerX] = useState(WIDTH / 2 - PLAYER_SIZE / 2);
  const [bullets, setBullets] = useState<{ x: number, y: number, id: number }[]>([]);
  const [enemies, setEnemies] = useState<{ x: number, y: number, id: number, health: number }[]>([]);
  const [score, setScore] = useState(0);
  const [gameOver, setGameOver] = useState(false);
  const lastTimeRef = useRef<number>(0);
  const enemySpawnTimer = useRef<number>(0);
  const bulletIdCounter = useRef(0);
  const enemyIdCounter = useRef(0);
  
  const GOAL = 10;

  const movePlayer = (dir: number) => {
    if (gameOver || score >= GOAL) return;
    setPlayerX(prev => Math.max(0, Math.min(WIDTH - PLAYER_SIZE, prev + dir * 15)));
  };

  const shoot = useCallback(() => {
    if (gameOver || score >= GOAL) return;
    setBullets(prev => [
      ...prev, 
      { x: playerX + PLAYER_SIZE / 2 - BULLET_SIZE / 2, y: HEIGHT - 40, id: bulletIdCounter.current++ }
    ]);
  }, [playerX, gameOver, score]);

  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === 'ArrowLeft') movePlayer(-1);
      if (e.key === 'ArrowRight') movePlayer(1);
      if (e.key === ' ' || e.key === 'ArrowUp') shoot();
    };
    window.addEventListener('keydown', handleKey);
    return () => window.removeEventListener('keydown', handleKey);
  }, [playerX, gameOver, score, shoot]);

  const update = useCallback((time: number) => {
    const deltaTime = time - lastTimeRef.current;
    lastTimeRef.current = time;

    if (!gameOver && score < GOAL) {
      // Spawn enemies
      enemySpawnTimer.current += deltaTime;
      if (enemySpawnTimer.current > 1500) {
        setEnemies(prev => [
          ...prev, 
          { 
            x: Math.random() * (WIDTH - ENEMY_SIZE), 
            y: -ENEMY_SIZE, 
            id: enemyIdCounter.current++,
            health: 1
          }
        ]);
        enemySpawnTimer.current = 0;
      }

      // Move bullets
      setBullets(prev => prev.map(b => ({ ...b, y: b.y - 5 })).filter(b => b.y > -10));

      // Move enemies
      setEnemies(prev => {
        const next = prev.map(e => ({ ...e, y: e.y + 1 }));
        if (next.some(e => e.y > HEIGHT - 40)) {
          setGameOver(true);
        }
        return next;
      });

      // Collisions
      setEnemies(prevEnemies => {
        let hitEnemies = [...prevEnemies];
        setBullets(prevBullets => {
          let activeBullets = [...prevBullets];
          
          prevBullets.forEach(b => {
            const hitIdx = hitEnemies.findIndex(e => 
              b.x < e.x + ENEMY_SIZE &&
              b.x + BULLET_SIZE > e.x &&
              b.y < e.y + ENEMY_SIZE &&
              b.y + BULLET_SIZE > e.y
            );
            
            if (hitIdx !== -1) {
              hitEnemies.splice(hitIdx, 1);
              activeBullets = activeBullets.filter(bull => bull.id !== b.id);
              setScore(s => {
                const newScore = s + 1;
                if (newScore >= GOAL) {
                  setTimeout(onComplete, 1500);
                }
                return newScore;
              });
            }
          });
          
          return activeBullets;
        });
        return hitEnemies;
      });
    }

    requestAnimationFrame(update);
  }, [gameOver, score, onComplete]);

  useEffect(() => {
    const anim = requestAnimationFrame(update);
    return () => cancelAnimationFrame(anim);
  }, [update]);

  return (
    <div className="flex flex-col items-center justify-center space-y-6 w-full max-w-md mx-auto">
      <div className="text-center space-y-2">
        <div className="flex items-center justify-center gap-2 text-nexus-accent">
          <Rocket size={20} className="animate-pulse" />
          <h2 className="text-xl font-bold font-mono tracking-tight uppercase">Defensa de Servidor</h2>
        </div>
        <p className="text-xs text-slate-400 font-mono uppercase tracking-widest">Módulo: {moduleTitle}</p>
      </div>

      <div className="relative glass-panel bg-black/60 border-nexus-accent/30 overflow-hidden shadow-[0_0_30px_rgba(0,242,255,0.1)]" style={{ width: WIDTH, height: HEIGHT }}>
        {/* Stars background */}
        <div className="absolute inset-0 opacity-20 pointer-events-none">
          {Array.from({ length: 20 }).map((_, i) => (
            <div 
              key={i} 
              className="absolute bg-white rounded-full"
              style={{ 
                width: 1, 
                height: 1, 
                left: `${(i * 17) % 100}%`, 
                top: `${(i * 23) % 100}%` 
              }}
            />
          ))}
        </div>

        {/* Player */}
        <div 
          className="absolute bottom-4 flex flex-col items-center transition-all duration-75"
          style={{ left: playerX, width: PLAYER_SIZE }}
        >
          <div className="w-4 h-6 bg-nexus-accent rounded-t-full shadow-[0_0_15px_#00f2ff]" />
          <div className="w-full h-2 bg-nexus-accent/80 rounded" />
          <div className="flex justify-between w-full">
            <div className="w-2 h-4 bg-nexus-danger/50 rounded-b" />
            <div className="w-2 h-4 bg-nexus-danger/50 rounded-b" />
          </div>
        </div>

        {/* Bullets */}
        {bullets.map(b => (
          <div 
            key={b.id}
            className="absolute bg-nexus-warning rounded-full shadow-[0_0_5px_#ffcc00]"
            style={{ left: b.x, top: b.y, width: BULLET_SIZE, height: BULLET_SIZE * 2 }}
          />
        ))}

        {/* Enemies */}
        {enemies.map(e => (
          <div 
            key={e.id}
            className="absolute flex items-center justify-center"
            style={{ left: e.x, top: e.y, width: ENEMY_SIZE, height: ENEMY_SIZE }}
          >
            <Shield size={ENEMY_SIZE} className="text-nexus-danger animate-pulse" />
          </div>
        ))}

        {/* Overlay Screens */}
        <AnimatePresence>
          {score >= GOAL && (
            <motion.div 
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              className="absolute inset-0 z-10 flex flex-col items-center justify-center bg-nexus-bg/80 backdrop-blur-sm text-center"
            >
              <Trophy size={48} className="text-nexus-success mb-2" />
              <h3 className="text-2xl font-bold text-nexus-success uppercase tracking-tighter">Amenaza Neutralizada</h3>
              <p className="text-xs text-slate-300 uppercase tracking-widest mt-2">Acceso concedido...</p>
            </motion.div>
          )}

          {gameOver && (
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="absolute inset-0 z-10 flex flex-col items-center justify-center bg-nexus-bg/90 backdrop-blur-sm text-center p-4"
            >
              <AlertTriangle size={48} className="text-nexus-danger mb-2" />
              <h3 className="text-xl font-bold text-nexus-danger uppercase">Servidor Caído</h3>
              <button 
                onClick={() => {
                  setEnemies([]);
                  setBullets([]);
                  setScore(0);
                  setGameOver(false);
                }}
                className="mt-4 nexus-button py-2 px-4 text-xs"
              >
                Reiniciar Defensa
              </button>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      <div className="w-full flex items-center justify-between px-4">
        <div className="flex flex-col gap-1">
          <span className="text-[10px] font-mono text-slate-400 uppercase tracking-widest">Integridad</span>
          <div className="flex gap-1 h-1.5 w-32 bg-nexus-bg border border-nexus-border rounded-full overflow-hidden">
            <div 
              className="h-full bg-nexus-accent transition-all duration-300"
              style={{ width: `${(score / GOAL) * 100}%` }}
            />
          </div>
        </div>
        <div className="flex flex-col items-end gap-1">
          <div className="flex gap-1 text-[10px] font-mono text-slate-300 uppercase">
             &larr; &rarr; Mover | Space/&uarr; Fuego
          </div>
        </div>
      </div>

      {/* Mobile Controls */}
      <div className="grid grid-cols-3 gap-2 sm:hidden w-full px-4">
        <button onTouchStart={() => movePlayer(-1)} className="p-4 bg-nexus-surface border border-nexus-border rounded active:bg-nexus-accent/20">&larr;</button>
        <button onTouchStart={() => shoot()} className="p-4 bg-nexus-surface border border-nexus-border rounded active:bg-nexus-accent/20">FIRE</button>
        <button onTouchStart={() => movePlayer(1)} className="p-4 bg-nexus-surface border border-nexus-border rounded active:bg-nexus-accent/20">&rarr;</button>
      </div>
    </div>
  );
};
