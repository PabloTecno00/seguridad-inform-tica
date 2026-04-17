import React, { useState, useEffect, useCallback, useRef } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Zap, Target, Shield, Trophy, AlertTriangle } from 'lucide-react';

interface Props {
  onComplete: () => void;
  moduleTitle: string;
}

const COLS = 10;
const ROWS = 16;
const BLOCK_SIZE = 20;

const TETROMINOS = {
  I: { shape: [[0, 0, 0, 0], [1, 1, 1, 1], [0, 0, 0, 0], [0, 0, 0, 0]], color: '#00f2ff' },
  J: { shape: [[1, 0, 0], [1, 1, 1], [0, 0, 0]], color: '#0066ff' },
  L: { shape: [[0, 0, 1], [1, 1, 1], [0, 0, 0]], color: '#ff9900' },
  O: { shape: [[1, 1], [1, 1]], color: '#ffff00' },
  S: { shape: [[0, 1, 1], [1, 1, 0], [0, 0, 0]], color: '#00ff9d' },
  T: { shape: [[0, 1, 0], [1, 1, 1], [0, 0, 0]], color: '#cc00ff' },
  Z: { shape: [[1, 1, 0], [0, 1, 1], [0, 0, 0]], color: '#ff2d55' },
};

type TetrominoKey = keyof typeof TETROMINOS;

export const NexusTetris: React.FC<Props> = ({ onComplete, moduleTitle }) => {
  const [grid, setGrid] = useState<string[][]>(Array.from({ length: ROWS }, () => Array(COLS).fill('')));
  const [activePiece, setActivePiece] = useState<{ pos: { x: number, y: number }, type: TetrominoKey, shape: number[][] } | null>(null);
  const [linesCleared, setLinesCleared] = useState(0);
  const [gameOver, setGameOver] = useState(false);
  const [isPaused, setIsPaused] = useState(false);
  const requestRef = useRef<number>();
  const lastTimeRef = useRef<number>(0);
  const dropCounter = useRef<number>(0);
  const dropInterval = 800;
  
  const GOAL = 2; // Very short for a module break

  const spawnPiece = useCallback(() => {
    const keys = Object.keys(TETROMINOS) as TetrominoKey[];
    const type = keys[Math.floor(Math.random() * keys.length)];
    const shape = TETROMINOS[type].shape;
    const pos = { x: Math.floor(COLS / 2) - Math.floor(shape[0].length / 2), y: 0 };
    
    // Check collision on spawn
    for (let y = 0; y < shape.length; y++) {
      for (let x = 0; x < shape[y].length; x++) {
        if (shape[y][x] && grid[pos.y + y]?.[pos.x + x] !== '') {
          setGameOver(true);
          return null;
        }
      }
    }
    
    setActivePiece({ pos, type, shape });
    return { pos, type, shape };
  }, [grid]);

  const collision = (pos: { x: number, y: number }, shape: number[][]) => {
    for (let y = 0; y < shape.length; y++) {
      for (let x = 0; x < shape[y].length; x++) {
        if (shape[y][x]) {
          const newX = pos.x + x;
          const newY = pos.y + y;
          if (newX < 0 || newX >= COLS || newY >= ROWS || (newY >= 0 && grid[newY][newX] !== '')) {
            return true;
          }
        }
      }
    }
    return false;
  };

  const rotate = (shape: number[][]) => {
    const rotated = shape[0].map((_, i) => shape.map(row => row[i]).reverse());
    return rotated;
  };

  const handleLevelComplete = useCallback(() => {
    // Small delay for satisfaction
    setTimeout(() => {
      onComplete();
    }, 1500);
  }, [onComplete]);

  const merge = useCallback(() => {
    if (!activePiece) return;
    const newGrid = [...grid.map(row => [...row])];
    activePiece.shape.forEach((row, y) => {
      row.forEach((value, x) => {
        if (value) {
          if (activePiece.pos.y + y >= 0) {
            newGrid[activePiece.pos.y + y][activePiece.pos.x + x] = TETROMINOS[activePiece.type].color;
          }
        }
      });
    });

    // Clear lines
    let cleared = 0;
    const filteredGrid = newGrid.filter(row => {
      const isFull = row.every(cell => cell !== '');
      if (isFull) cleared++;
      return !isFull;
    });

    while (filteredGrid.length < ROWS) {
      filteredGrid.unshift(Array(COLS).fill(''));
    }

    setGrid(filteredGrid);
    setLinesCleared(prev => {
      const total = prev + cleared;
      if (total >= GOAL) {
        setIsPaused(true);
        handleLevelComplete();
      }
      return total;
    });
    spawnPiece();
  }, [activePiece, grid, spawnPiece, handleLevelComplete]);

  const drop = useCallback(() => {
    if (!activePiece || gameOver || isPaused) return;
    const newPos = { ...activePiece.pos, y: activePiece.pos.y + 1 };
    if (!collision(newPos, activePiece.shape)) {
      setActivePiece(prev => prev ? { ...prev, pos: newPos } : null);
    } else {
      merge();
    }
  }, [activePiece, gameOver, isPaused, merge]);

  const move = (dir: number) => {
    if (!activePiece || gameOver || isPaused) return;
    const newPos = { ...activePiece.pos, x: activePiece.pos.x + dir };
    if (!collision(newPos, activePiece.shape)) {
      setActivePiece(prev => prev ? { ...prev, pos: newPos } : null);
    }
  };

  const manualRotate = () => {
    if (!activePiece || gameOver || isPaused) return;
    const rotatedShape = rotate(activePiece.shape);
    if (!collision(activePiece.pos, rotatedShape)) {
      setActivePiece(prev => prev ? { ...prev, shape: rotatedShape } : null);
    }
  };

  const fastDrop = () => {
    drop();
  };

  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === 'ArrowLeft') move(-1);
      if (e.key === 'ArrowRight') move(1);
      if (e.key === 'ArrowUp') manualRotate();
      if (e.key === 'ArrowDown') fastDrop();
    };
    window.addEventListener('keydown', handleKey);
    return () => window.removeEventListener('keydown', handleKey);
  }, [activePiece, gameOver, isPaused]);

  useEffect(() => {
    if (!activePiece && !gameOver) {
      spawnPiece();
    }
  }, [activePiece, gameOver, spawnPiece]);

  const update = useCallback((time: number = 0) => {
    const deltaTime = time - lastTimeRef.current;
    lastTimeRef.current = time;

    if (!isPaused && !gameOver) {
      dropCounter.current += deltaTime;
      if (dropCounter.current > dropInterval) {
        drop();
        dropCounter.current = 0;
      }
    }
    requestRef.current = requestAnimationFrame(update);
  }, [drop, gameOver, isPaused]);

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
          <Zap size={20} className="animate-pulse" />
          <h2 className="text-xl font-bold font-mono tracking-tight uppercase">Validación de Perímetro</h2>
        </div>
        <p className="text-xs text-slate-400 font-mono uppercase tracking-widest">
          Módulo: {moduleTitle}
        </p>
      </div>

      <div className="relative glass-panel p-1 bg-black/40 border-nexus-accent/30 shadow-[0_0_30px_rgba(0,242,255,0.1)]">
        {/* Game Grid */}
        <div 
          className="grid gap-px bg-nexus-border/20"
          style={{ 
            gridTemplateColumns: `repeat(${COLS}, ${BLOCK_SIZE}px)`,
            gridTemplateRows: `repeat(${ROWS}, ${BLOCK_SIZE}px)`,
          }}
        >
          {grid.map((row, y) => (
            row.map((cell, x) => {
              let color = cell;
              if (activePiece) {
                const py = y - activePiece.pos.y;
                const px = x - activePiece.pos.x;
                if (py >= 0 && py < activePiece.shape.length && px >= 0 && px < activePiece.shape[py].length) {
                  if (activePiece.shape[py][px]) {
                    color = TETROMINOS[activePiece.type].color;
                  }
                }
              }
              return (
                <div 
                  key={`${x}-${y}`} 
                  className="w-full h-full rounded-sm transition-colors duration-100"
                  style={{ backgroundColor: color || 'transparent' }}
                />
              );
            })
          ))}
        </div>

        {/* Overlay Screens */}
        <AnimatePresence>
          {linesCleared >= GOAL && (
            <motion.div 
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              className="absolute inset-0 z-10 flex flex-col items-center justify-center bg-nexus-bg/80 backdrop-blur-sm text-center"
            >
              <Trophy size={48} className="text-nexus-success mb-2" />
              <h3 className="text-2xl font-bold text-nexus-success">FRAGMENTO SEGURO</h3>
              <p className="text-xs text-slate-300 uppercase tracking-widest mt-2">Continuando protocolo...</p>
            </motion.div>
          )}

          {gameOver && linesCleared < GOAL && (
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="absolute inset-0 z-10 flex flex-col items-center justify-center bg-nexus-bg/90 backdrop-blur-sm text-center p-4"
            >
              <AlertTriangle size={48} className="text-nexus-danger mb-2" />
              <h3 className="text-xl font-bold text-nexus-danger uppercase">Perímetro Comprometido</h3>
              <button 
                onClick={() => {
                  setGrid(Array.from({ length: ROWS }, () => Array(COLS).fill('')));
                  setLinesCleared(0);
                  setGameOver(false);
                  spawnPiece();
                }}
                className="mt-4 nexus-button py-2 px-4 text-xs"
              >
                Reiniciar Validación
              </button>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      <div className="w-full flex items-center justify-between px-4">
        <div className="flex flex-col gap-1">
          <span className="text-[10px] font-mono text-slate-400 uppercase tracking-widest">Progreso</span>
          <div className="flex gap-1">
            {Array.from({ length: GOAL }).map((_, i) => (
              <div 
                key={i} 
                className={`w-8 h-1 rounded-full ${i < linesCleared ? 'bg-nexus-success' : 'bg-nexus-border'}`}
              />
            ))}
          </div>
        </div>
        <div className="flex gap-2">
           <div className="p-2 border border-nexus-border rounded text-[10px] font-mono text-slate-300">
             &larr; &rarr; Mover
           </div>
           <div className="p-2 border border-nexus-border rounded text-[10px] font-mono text-slate-300">
             &uarr; Rotar
           </div>
        </div>
      </div>
      
      {/* Mobile Controls */}
      <div className="grid grid-cols-3 gap-2 sm:hidden">
        <button onTouchStart={() => move(-1)} className="p-4 bg-nexus-surface border border-nexus-border rounded">&larr;</button>
        <button onTouchStart={() => manualRotate()} className="p-4 bg-nexus-surface border border-nexus-border rounded">&uarr;</button>
        <button onTouchStart={() => move(1)} className="p-4 bg-nexus-surface border border-nexus-border rounded">&rarr;</button>
        <div />
        <button onTouchStart={() => fastDrop()} className="p-4 bg-nexus-surface border border-nexus-border rounded">&darr;</button>
        <div />
      </div>
    </div>
  );
};
