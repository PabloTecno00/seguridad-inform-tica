import React, { useState, useEffect, useCallback, useRef } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Zap, Target, Shield, Trophy, Bug, AlertTriangle } from 'lucide-react';

interface Props {
  onComplete: () => void;
  moduleTitle: string;
}

const GRID_SIZE = 15;
const CELL_SIZE = 20;

export const PacketMuncher: React.FC<Props> = ({ onComplete, moduleTitle }) => {
  const [player, setPlayer] = useState({ x: 1, y: 1 });
  const [dots, setDots] = useState<{ x: number, y: number }[]>([]);
  const [ghosts, setGhosts] = useState<{ x: number, y: number }[]>([]);
  const [gameOver, setGameOver] = useState(false);
  const [score, setScore] = useState(0);
  const requestRef = useRef<number>();
  const lastTimeRef = useRef<number>(0);
  const moveCounter = useRef<number>(0);
  const moveInterval = 200;

  const GOAL = 15;

  // Simple maze (1 is wall, 0 is path)
  const maze = [
    [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],
    [1,0,0,0,0,0,0,1,0,0,0,0,0,0,1],
    [1,0,1,1,0,1,0,1,0,1,0,1,1,0,1],
    [1,0,0,0,0,1,0,0,0,1,0,0,0,0,1],
    [1,1,1,0,1,1,1,0,1,1,1,0,1,1,1],
    [1,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
    [1,0,1,0,1,1,0,1,0,1,1,0,1,0,1],
    [1,0,0,0,0,1,0,0,0,1,0,0,0,0,1],
    [1,0,1,1,0,1,1,1,1,1,0,1,1,0,1],
    [1,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
    [1,1,1,0,1,1,1,1,1,1,1,0,1,1,1],
    [1,0,0,0,0,1,0,0,0,1,0,0,0,0,1],
    [1,0,1,1,0,1,0,1,0,1,0,1,1,0,1],
    [1,0,0,0,0,0,0,1,0,0,0,0,0,0,1],
    [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],
  ];

  useEffect(() => {
    const newDots = [];
    for(let y=0; y<GRID_SIZE; y++) {
      for(let x=0; x<GRID_SIZE; x++) {
        if(maze[y][x] === 0) newDots.push({x, y});
      }
    }
    setDots(newDots.slice(0, GOAL)); // Limit dots for quick game
    setGhosts([
      { x: GRID_SIZE - 2, y: GRID_SIZE - 2 },
      { x: GRID_SIZE - 2, y: 1 }
    ]);
  }, []);

  const movePlayer = (dx: number, dy: number) => {
    if (gameOver || score >= GOAL) return;
    const nx = player.x + dx;
    const ny = player.y + dy;
    if (nx >= 0 && nx < GRID_SIZE && ny >= 0 && ny < GRID_SIZE && maze[ny][nx] === 0) {
      setPlayer({ x: nx, y: ny });
      
      // Eat dot
      const dotIdx = dots.findIndex(d => d.x === nx && d.y === ny);
      if (dotIdx !== -1) {
        setDots(prev => prev.filter((_, i) => i !== dotIdx));
        setScore(prev => {
          const newScore = prev + 1;
          if (newScore >= GOAL) {
            setTimeout(onComplete, 1500);
          }
          return newScore;
        });
      }
    }
  };

  const moveGhosts = useCallback(() => {
    if (gameOver || score >= GOAL) return;
    setGhosts(prev => prev.map(g => {
      const dirs = [{x:1,y:0}, {x:-1,y:0}, {x:0,y:1}, {x:0,y:-1}];
      const possible = dirs.filter(d => {
        const nx = g.x + d.x;
        const ny = g.y + d.y;
        return nx >= 0 && nx < GRID_SIZE && ny >= 0 && ny < GRID_SIZE && maze[ny][nx] === 0;
      });
      const move = possible[Math.floor(Math.random() * possible.length)];
      if (!move) return g;
      return { x: g.x + move.x, y: g.y + move.y };
    }));
  }, [gameOver, score]);

  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === 'ArrowLeft') movePlayer(-1, 0);
      if (e.key === 'ArrowRight') movePlayer(1, 0);
      if (e.key === 'ArrowUp') movePlayer(0, -1);
      if (e.key === 'ArrowDown') movePlayer(0, 1);
    };
    window.addEventListener('keydown', handleKey);
    return () => window.removeEventListener('keydown', handleKey);
  }, [player, dots, gameOver, score]);

  useEffect(() => {
    // Check collision with ghosts
    if (ghosts.some(g => g.x === player.x && g.y === player.y)) {
      setGameOver(true);
    }
  }, [player, ghosts]);

  const update = useCallback((time: number = 0) => {
    const deltaTime = time - lastTimeRef.current;
    lastTimeRef.current = time;

    if (!gameOver && score < GOAL) {
      moveCounter.current += deltaTime;
      if (moveCounter.current > moveInterval) {
        moveGhosts();
        moveCounter.current = 0;
      }
    }
    requestRef.current = requestAnimationFrame(update);
  }, [moveGhosts, gameOver, score]);

  useEffect(() => {
    requestRef.current = requestAnimationFrame(update);
    return () => {
      if (requestRef.current) cancelAnimationFrame(requestRef.current);
    };
  }, [update]);

  return (
    <div className="flex flex-col items-center justify-center space-y-6 w-full max-w-md mx-auto">
      <div className="text-center space-y-2">
        <div className="flex items-center justify-center gap-2 text-nexus-accent">
          <Bug size={20} className="animate-pulse" />
          <h2 className="text-xl font-bold font-mono tracking-tight uppercase">Depuración de Malware</h2>
        </div>
        <p className="text-xs text-slate-400 font-mono uppercase tracking-widest">
          Módulo: {moduleTitle}
        </p>
      </div>

      <div className="relative glass-panel p-2 bg-black/60 border-nexus-accent/30 shadow-[0_0_30px_rgba(0,242,255,0.1)]">
        <div 
          className="grid gap-0"
          style={{ 
            gridTemplateColumns: `repeat(${GRID_SIZE}, ${CELL_SIZE}px)`,
            gridTemplateRows: `repeat(${GRID_SIZE}, ${CELL_SIZE}px)`,
          }}
        >
          {maze.map((row, y) => (
            row.map((cell, x) => (
              <div 
                key={`${x}-${y}`} 
                className="relative"
                style={{ 
                  width: CELL_SIZE, 
                  height: CELL_SIZE,
                  backgroundColor: cell === 1 ? '#1f2d3d' : 'transparent',
                  border: cell === 1 ? '1px solid #374a5e' : 'none'
                }}
              >
                {dots.some(d => d.x === x && d.y === y) && (
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-1.5 h-1.5 rounded-full bg-nexus-accent animate-pulse" />
                  </div>
                )}
                {player.x === x && player.y === y && (
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-4 h-4 rounded-full bg-nexus-warning shadow-[0_0_10px_#ffcc00] z-20" />
                  </div>
                )}
                {ghosts.some(g => g.x === x && g.y === y) && (
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-4 h-4 rounded-full bg-nexus-danger animate-bounce z-10 shadow-[0_0_10px_#ff2d55]" />
                  </div>
                )}
              </div>
            ))
          ))}
        </div>

        {/* Overlay Screens */}
        <AnimatePresence>
          {score >= GOAL && (
            <motion.div 
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              className="absolute inset-0 z-10 flex flex-col items-center justify-center bg-nexus-bg/80 backdrop-blur-sm text-center"
            >
              <Trophy size={48} className="text-nexus-success mb-2" />
              <h3 className="text-2xl font-bold text-nexus-success">VIRUS ELIMINADO</h3>
              <p className="text-xs text-slate-300 uppercase tracking-widest mt-2">Continuando protocolo...</p>
            </motion.div>
          )}

          {gameOver && (
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="absolute inset-0 z-10 flex flex-col items-center justify-center bg-nexus-bg/90 backdrop-blur-sm text-center p-4"
            >
              <AlertTriangle size={48} className="text-nexus-danger mb-2" />
              <h3 className="text-xl font-bold text-nexus-danger uppercase">Sistema Infectado</h3>
              <button 
                onClick={() => {
                  setPlayer({ x: 1, y: 1 });
                  setScore(0);
                  setGameOver(false);
                  const newDots = [];
                  for(let y=0; y<GRID_SIZE; y++) {
                    for(let x=0; x<GRID_SIZE; x++) {
                      if(maze[y][x] === 0) newDots.push({x, y});
                    }
                  }
                  setDots(newDots.slice(0, GOAL));
                }}
                className="mt-4 nexus-button py-2 px-4 text-xs"
              >
                Reintentar Limpieza
              </button>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      <div className="w-full flex items-center justify-between px-4">
        <div className="flex flex-col gap-1">
          <span className="text-[10px] font-mono text-slate-400 uppercase tracking-widest">Infección</span>
          <div className="flex gap-1 h-1.5 w-32 bg-nexus-bg border border-nexus-border rounded-full overflow-hidden">
            <div 
              className="h-full bg-nexus-accent transition-all duration-300"
              style={{ width: `${(score / GOAL) * 100}%` }}
            />
          </div>
        </div>
        <div className="flex gap-2 text-[10px] font-mono text-slate-300">
           Usa las FLECHAS para moverte
        </div>
      </div>
      
      {/* Mobile Controls */}
      <div className="grid grid-cols-3 gap-2 sm:hidden">
        <div />
        <button onTouchStart={() => movePlayer(0, -1)} className="p-4 bg-nexus-surface border border-nexus-border rounded">&uarr;</button>
        <div />
        <button onTouchStart={() => movePlayer(-1, 0)} className="p-4 bg-nexus-surface border border-nexus-border rounded">&larr;</button>
        <button onTouchStart={() => movePlayer(0, 1)} className="p-4 bg-nexus-surface border border-nexus-border rounded">&darr;</button>
        <button onTouchStart={() => movePlayer(1, 0)} className="p-4 bg-nexus-surface border border-nexus-border rounded">&rarr;</button>
      </div>
    </div>
  );
};
