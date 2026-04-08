/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Shield, 
  Lock, 
  UserCheck, 
  EyeOff, 
  AlertTriangle, 
  HeartPulse, 
  Timer, 
  CheckCircle2, 
  XCircle, 
  ChevronRight, 
  Terminal,
  Copy,
  Info,
  ArrowRight,
  Zap
} from 'lucide-react';
import { CHALLENGES, Challenge, Task, THEORY_DOSSIER, TheorySection } from './constants';

type Screen = 'intro' | 'game' | 'end' | 'bonus';

export default function App() {
  const [screen, setScreen] = useState<Screen>('intro');
  const [userName, setUserName] = useState('');
  const [currentChallengeIdx, setCurrentChallengeIdx] = useState(0);
  const [currentTaskIdx, setCurrentTaskIdx] = useState(0);
  const [timeLeft, setTimeLeft] = useState(120 * 60); // 120 minutes
  const [isTimerActive, setIsTimerActive] = useState(false);
  const [score, setScore] = useState(0);
  const [errors, setErrors] = useState(0);
  const [unlockedFragments, setUnlockedFragments] = useState<string[]>([]);
  const [feedback, setFeedback] = useState<{ type: 'success' | 'error', message: string } | null>(null);
  const [showHint, setShowHint] = useState(false);
  const [startTime, setStartTime] = useState<number | null>(null);
  const [showDossier, setShowDossier] = useState(false);
  const [sortingOrder, setSortingOrder] = useState<number[]>([]);
  const [patternInput, setPatternInput] = useState('');
  const [textInput, setTextInput] = useState('');
  const [toggles, setToggles] = useState<boolean[]>([]);
  const [sliderValue, setSliderValue] = useState(50);

  // Timer logic
  useEffect(() => {
    let interval: NodeJS.Timeout;
    if (isTimerActive && timeLeft > 0) {
      interval = setInterval(() => {
        setTimeLeft((prev) => prev - 1);
      }, 1000);
    } else if (timeLeft === 0) {
      setScreen('end');
      setIsTimerActive(false);
    }
    return () => clearInterval(interval);
  }, [isTimerActive, timeLeft]);

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
  };

  const handleStart = () => {
    if (userName.trim()) {
      setScreen('game');
      setIsTimerActive(true);
      setStartTime(Date.now());
    }
  };

  const currentChallenge = CHALLENGES[currentChallengeIdx];
  const currentTask = currentChallenge.tasks[currentTaskIdx];

  // Reset task-specific state when task changes
  useEffect(() => {
    if (currentTask.type === 'sorting') {
      const initialOrder = currentTask.options?.map((_, i) => i) || [];
      // Shuffle the initial order so it's not already correct
      const shuffled = [...initialOrder].sort(() => Math.random() - 0.5);
      // Ensure it's not accidentally the correct order
      if (JSON.stringify(shuffled) === JSON.stringify(currentTask.correctAnswer)) {
        shuffled.reverse();
      }
      setSortingOrder(shuffled);
    } else {
      setSortingOrder([]);
    }
    setPatternInput('');
    setTextInput('');
    setToggles(new Array(currentTask.data?.toggleCount || 0).fill(false));
    setSliderValue(currentTask.data?.initialSlider || 50);
  }, [currentChallengeIdx, currentTaskIdx, currentTask.type, currentTask.options, currentTask.correctAnswer, currentTask.data]);

  const handleAnswer = (answer: any) => {
    if (feedback) return; // Prevent double answering

    let processedAnswer = answer;
    let processedCorrect = currentTask.correctAnswer;

    const isCorrect = JSON.stringify(processedAnswer) === JSON.stringify(processedCorrect);

    if (isCorrect) {
      setFeedback({ type: 'success', message: currentTask.explanation });
      setScore(prev => prev + 1);
    } else {
      setFeedback({ type: 'error', message: `Incorrecto. ${currentTask.explanation}` });
      setErrors(prev => prev + 1);
    }
  };

  const nextStep = () => {
    setFeedback(null);
    setShowHint(false);

    if (currentTaskIdx < currentChallenge.tasks.length - 1) {
      setCurrentTaskIdx(prev => prev + 1);
    } else {
      // Challenge completed
      if (!unlockedFragments.includes(currentChallenge.codeFragment)) {
        setUnlockedFragments(prev => [...prev, currentChallenge.codeFragment]);
      }
      
      if (currentChallengeIdx < CHALLENGES.length - 1) {
        setCurrentChallengeIdx(prev => prev + 1);
        setCurrentTaskIdx(0);
      } else {
        // All challenges completed
        setIsTimerActive(false);
        setScreen('end');
      }
    }
  };

  const copyResults = () => {
    const timeSpent = startTime ? formatTime(Math.floor((Date.now() - startTime) / 1000)) : 'N/A';
    const report = `
=== INFORME DE EVALUACIÓN NEXUS ===
Analista: ${userName}
Resultado: ${score}/${CHALLENGES.reduce((acc, c) => acc + c.tasks.length, 0)} aciertos
Errores: ${errors}
Tiempo empleado: ${timeSpent}
Código de acceso: ${unlockedFragments.join('')}
Estado: ${unlockedFragments.length === CHALLENGES.length ? 'VERIFICADO' : 'INCOMPLETO'}
===================================
    `.trim();
    
    navigator.clipboard.writeText(report);
    alert('Resultados copiados al portapapeles.');
  };

  return (
    <div className="min-h-screen flex flex-col relative">
      {/* Background Grid */}
      <div className="fixed inset-0 pointer-events-none opacity-20 bg-[linear-gradient(to_right,#374a5e_1px,transparent_1px),linear-gradient(to_bottom,#374a5e_1px,transparent_1px)] bg-[size:4rem_4rem]"></div>

      {/* Header (Sticky) */}
      {screen !== 'intro' && (
        <header className="sticky top-0 z-50 bg-nexus-surface/90 backdrop-blur-md border-b border-nexus-border px-6 py-3 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-2 text-nexus-accent font-mono font-bold tracking-tighter">
              <Terminal size={20} />
              <span>NEXUS_SYSTEM</span>
            </div>
            <div className="h-4 w-[1px] bg-nexus-border"></div>
            <div className="text-xs font-mono text-slate-300 uppercase tracking-widest hidden sm:block">
              Analista: <span className="text-nexus-accent">{userName}</span>
            </div>
          </div>

          <div className="flex items-center gap-6">
            <button 
              onClick={() => setShowDossier(true)}
              className="flex items-center gap-2 text-xs font-mono text-nexus-accent hover:text-white transition-colors border border-nexus-accent/30 px-3 py-1 rounded"
            >
              <Info size={14} /> DOSSIER TEÓRICO
            </button>
            <div className="flex items-center gap-2 text-nexus-warning font-mono">
              <Timer size={18} />
              <span className={timeLeft < 300 ? 'animate-pulse text-nexus-danger' : ''}>
                {formatTime(timeLeft)}
              </span>
            </div>
            <div className="flex gap-1">
              {CHALLENGES.map((_, i) => (
                <div 
                  key={i} 
                  className={`w-2 h-2 rounded-full transition-all duration-500 ${
                    i < currentChallengeIdx ? 'bg-nexus-success shadow-[0_0_8px_#00ff9d]' : 
                    i === currentChallengeIdx ? 'bg-nexus-accent animate-pulse' : 'bg-nexus-border'
                  }`}
                />
              ))}
            </div>
          </div>
        </header>
      )}

      <main className="flex-1 flex flex-col items-center justify-center p-6 relative z-10">
        <AnimatePresence mode="wait">
          {screen === 'intro' && (
            <motion.div 
              key="intro"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className="max-w-2xl w-full glass-panel p-8 sm:p-12"
            >
              <div className="text-center mb-10">
                <motion.div 
                  initial={{ scale: 0.8 }}
                  animate={{ scale: 1 }}
                  transition={{ type: 'spring', damping: 12 }}
                  className="inline-block p-4 rounded-full bg-nexus-accent/10 text-nexus-accent mb-6"
                >
                  <Shield size={64} />
                </motion.div>
                <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tighter mb-2 text-white">
                  NEXUS <span className="text-nexus-accent">CORP.</span>
                </h1>
                <p className="text-slate-300 font-mono text-sm uppercase tracking-[0.3em]">
                  División de Inteligencia Digital
                </p>
              </div>

              <div className="space-y-6 mb-10">
                <div className="p-4 bg-nexus-bg border-l-2 border-nexus-accent font-mono text-sm leading-relaxed text-slate-300">
                  <p className="mb-4">
                    <span className="text-nexus-accent font-bold">MENSAJE ENTRANTE:</span> Has alcanzado el nivel ULTRA MAESTRO.
                  </p>
                  <p>
                    Debes superar 40 módulos críticos de seguridad para obtener el código de acceso final. Tienes 120 minutos antes de la autodestrucción del terminal.
                  </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="flex items-start gap-3 p-3 rounded bg-white/5 border border-white/10">
                    <Lock className="text-nexus-accent shrink-0" size={18} />
                    <span className="text-xs text-slate-300">Protege dispositivos y contraseñas.</span>
                  </div>
                  <div className="flex items-start gap-3 p-3 rounded bg-white/5 border border-white/10">
                    <UserCheck className="text-nexus-accent shrink-0" size={18} />
                    <span className="text-xs text-slate-300">Gestiona tu identidad y reputación.</span>
                  </div>
                  <div className="flex items-start gap-3 p-3 rounded bg-white/5 border border-white/10">
                    <EyeOff className="text-nexus-accent shrink-0" size={18} />
                    <span className="text-xs text-slate-300">Configura la privacidad total.</span>
                  </div>
                  <div className="flex items-start gap-3 p-3 rounded bg-white/5 border border-white/10">
                    <HeartPulse className="text-nexus-accent shrink-0" size={18} />
                    <span className="text-xs text-slate-300">Mantén el bienestar digital.</span>
                  </div>
                </div>
              </div>

              <div className="space-y-4">
                <label className="block text-xs font-mono text-slate-400 uppercase tracking-widest">
                  Identificación del Analista
                </label>
                <input 
                  type="text" 
                  placeholder="Introduce tu nombre..."
                  className="nexus-input"
                  value={userName}
                  onChange={(e) => setUserName(e.target.value)}
                  onKeyDown={(e) => e.key === 'Enter' && handleStart()}
                />
                <button 
                  onClick={handleStart}
                  disabled={!userName.trim()}
                  className="nexus-button w-full flex items-center justify-center gap-2"
                >
                  Iniciar Protocolo <ArrowRight size={16} />
                </button>
              </div>
            </motion.div>
          )}

          {screen === 'game' && (
            <motion.div 
              key="game"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="max-w-4xl w-full grid grid-cols-1 lg:grid-cols-12 gap-6"
            >
              {/* Sidebar Info */}
              <div className="lg:col-span-4 space-y-6">
                <div className="glass-panel p-6">
                  <h2 className="text-xs font-mono text-slate-400 uppercase tracking-widest mb-4">Misión Actual</h2>
                  <div className="flex items-center gap-3 mb-2">
                    <div className="p-2 rounded bg-nexus-accent/10 text-nexus-accent">
                      {currentChallengeIdx % 6 === 0 && <Shield size={24} />}
                      {currentChallengeIdx % 6 === 1 && <Lock size={24} />}
                      {currentChallengeIdx % 6 === 2 && <UserCheck size={24} />}
                      {currentChallengeIdx % 6 === 3 && <EyeOff size={24} />}
                      {currentChallengeIdx % 6 === 4 && <AlertTriangle size={24} />}
                      {currentChallengeIdx % 6 === 5 && <HeartPulse size={24} />}
                    </div>
                    <div>
                      <h3 className="font-bold text-white leading-tight">{currentChallenge.title}</h3>
                      <p className="text-xs text-nexus-accent font-mono">{currentChallenge.topic}</p>
                    </div>
                  </div>
                  <p className="text-sm text-slate-300 leading-relaxed mt-4">
                    {currentChallenge.description}
                  </p>
                </div>

                <div className="glass-panel p-6">
                  <h2 className="text-xs font-mono text-slate-400 uppercase tracking-widest mb-4">Código de Acceso</h2>
                  <div className="grid grid-cols-8 sm:grid-cols-10 gap-1 sm:gap-2">
                    {CHALLENGES.map((c, i) => (
                      <div 
                        key={i}
                        className={`aspect-square flex items-center justify-center font-mono text-[8px] border ${
                          unlockedFragments.includes(c.codeFragment) 
                            ? 'border-nexus-accent text-nexus-accent bg-nexus-accent/10 shadow-[0_0_10px_rgba(0,242,255,0.2)]' 
                            : 'border-nexus-border text-slate-500'
                        }`}
                      >
                        {unlockedFragments.includes(c.codeFragment) ? c.codeFragment : '?'}
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Main Challenge Area */}
              <div className="lg:col-span-8">
                <div className="glass-panel p-8 min-h-[500px] flex flex-col">
                  <div className="flex justify-between items-center mb-8">
                    <span className="text-xs font-mono text-nexus-accent bg-nexus-accent/10 px-2 py-1 rounded">
                      TAREA {currentTaskIdx + 1} / {currentChallenge.tasks.length}
                    </span>
                    <div className="flex items-center gap-2 text-xs font-mono text-slate-400">
                      <Zap size={14} className="text-nexus-warning" />
                      <span>Dificultad: Media</span>
                    </div>
                  </div>

                  <div className="flex-1">
                    <h2 className="text-xl font-semibold text-white mb-6 leading-snug">
                      {currentTask.question}
                    </h2>

                    <div className="space-y-3">
                      {currentTask.type === 'multiple-choice' || currentTask.type === 'scenario' || currentTask.type === 'spot-the-error' ? (
                        currentTask.options?.map((option, idx) => (
                          <button
                            key={idx}
                            onClick={() => handleAnswer(idx)}
                            disabled={!!feedback}
                            className={`w-full text-left p-4 rounded border transition-all duration-200 group flex items-center gap-4 ${
                              feedback 
                                ? idx === currentTask.correctAnswer 
                                  ? 'border-nexus-success bg-nexus-success/10 text-nexus-success' 
                                  : 'border-nexus-border opacity-50'
                                : 'border-nexus-border hover:border-nexus-accent hover:bg-nexus-accent/5 text-slate-300 hover:text-nexus-accent'
                            }`}
                          >
                            <div className={`w-6 h-6 rounded-full border flex items-center justify-center text-[10px] font-mono shrink-0 ${
                              feedback && idx === currentTask.correctAnswer ? 'border-nexus-success' : 'border-nexus-border group-hover:border-nexus-accent'
                            }`}>
                              {String.fromCharCode(65 + idx)}
                            </div>
                            <span>{option}</span>
                          </button>
                        ))
                      ) : currentTask.type === 'sorting' ? (
                        <div className="space-y-2">
                          {sortingOrder.map((originalIdx, displayIdx) => (
                            <div 
                              key={originalIdx} 
                              className="p-4 bg-nexus-bg border border-nexus-border rounded flex items-center justify-between group"
                            >
                              <span className="text-slate-300">{currentTask.options?.[originalIdx]}</span>
                              <div className="flex gap-2">
                                <button 
                                  disabled={!!feedback || displayIdx === 0}
                                  onClick={() => {
                                    const newOrder = [...sortingOrder];
                                    [newOrder[displayIdx - 1], newOrder[displayIdx]] = [newOrder[displayIdx], newOrder[displayIdx - 1]];
                                    setSortingOrder(newOrder);
                                  }}
                                  className="p-1 text-slate-500 hover:text-nexus-accent disabled:opacity-20"
                                >
                                  ↑
                                </button>
                                <button 
                                  disabled={!!feedback || displayIdx === sortingOrder.length - 1}
                                  onClick={() => {
                                    const newOrder = [...sortingOrder];
                                    [newOrder[displayIdx + 1], newOrder[displayIdx]] = [newOrder[displayIdx], newOrder[displayIdx + 1]];
                                    setSortingOrder(newOrder);
                                  }}
                                  className="p-1 text-slate-500 hover:text-nexus-accent disabled:opacity-20"
                                >
                                  ↓
                                </button>
                              </div>
                            </div>
                          ))}
                          <button 
                            onClick={() => handleAnswer(sortingOrder)}
                            disabled={!!feedback}
                            className="nexus-button w-full mt-4"
                          >
                            Confirmar Orden
                          </button>
                        </div>
                      ) : currentTask.type === 'pattern' ? (
                        <div className="space-y-6">
                          <div className="grid grid-cols-3 gap-4 max-w-[240px] mx-auto">
                            {currentTask.data?.grid.map((num: number) => (
                              <button
                                key={num}
                                onClick={() => setPatternInput(prev => prev + num)}
                                disabled={!!feedback}
                                className={`aspect-square rounded-full border-2 flex items-center justify-center font-mono text-lg transition-all ${
                                  patternInput.includes(num.toString()) 
                                    ? 'border-nexus-accent bg-nexus-accent/20 text-nexus-accent' 
                                    : 'border-nexus-border text-slate-400 hover:border-nexus-accent/50'
                                }`}
                              >
                                {num}
                              </button>
                            ))}
                          </div>
                          <div className="text-center font-mono text-nexus-accent tracking-[0.5em] h-6">
                            {patternInput.split('').map(() => '●').join(' ')}
                          </div>
                          <div className="flex gap-2">
                            <button 
                              onClick={() => setPatternInput('')}
                              disabled={!!feedback}
                              className="flex-1 px-4 py-2 border border-nexus-border text-xs font-mono text-slate-400 hover:text-white"
                            >
                              REINICIAR
                            </button>
                            <button 
                              onClick={() => handleAnswer(patternInput)}
                              disabled={!!feedback || !patternInput}
                              className="flex-[2] nexus-button"
                            >
                              VERIFICAR PATRÓN
                            </button>
                          </div>
                        </div>
                      ) : currentTask.type === 'text-input' ? (
                        <div className="space-y-4">
                          <div className="p-6 bg-black/40 border border-nexus-border rounded font-mono text-nexus-accent text-center text-2xl tracking-widest">
                            {currentTask.data?.displayCode || '---'}
                          </div>
                          <input 
                            type="text"
                            value={textInput}
                            onChange={(e) => setTextInput(e.target.value.toUpperCase())}
                            onKeyDown={(e) => e.key === 'Enter' && handleAnswer(textInput)}
                            placeholder="Introduce el código descifrado..."
                            className="nexus-input text-center"
                            autoFocus
                          />
                          <button 
                            onClick={() => handleAnswer(textInput)}
                            disabled={!!feedback || !textInput}
                            className="nexus-button w-full"
                          >
                            VERIFICAR CÓDIGO
                          </button>
                        </div>
                      ) : currentTask.type === 'toggle-grid' ? (
                        <div className="space-y-6">
                          <p className="text-xs font-mono text-slate-400 text-center uppercase tracking-widest">
                            Configuración de Puertos / Firewall
                          </p>
                          <div className="grid grid-cols-4 gap-4 max-w-[300px] mx-auto">
                            {toggles.map((state, idx) => (
                              <button
                                key={idx}
                                onClick={() => {
                                  const newToggles = [...toggles];
                                  newToggles[idx] = !newToggles[idx];
                                  setToggles(newToggles);
                                }}
                                disabled={!!feedback}
                                className={`aspect-square rounded border-2 flex flex-col items-center justify-center transition-all ${
                                  state 
                                    ? 'border-nexus-success bg-nexus-success/20 text-nexus-success' 
                                    : 'border-nexus-border text-slate-400'
                                }`}
                              >
                                <span className="text-[10px] font-mono mb-1">P{idx + 1}</span>
                                <div className={`w-3 h-3 rounded-full ${state ? 'bg-nexus-success shadow-[0_0_8px_#00ff9d]' : 'bg-slate-800'}`}></div>
                              </button>
                            ))}
                          </div>
                          <button 
                            onClick={() => handleAnswer(toggles)}
                            disabled={!!feedback}
                            className="nexus-button w-full"
                          >
                            APLICAR CONFIGURACIÓN
                          </button>
                        </div>
                      ) : currentTask.type === 'slider' ? (
                        <div className="space-y-8 py-4">
                          <div className="flex justify-between items-end mb-2">
                            <span className="text-xs font-mono text-slate-400">{currentTask.data?.minLabel || 'MIN'}</span>
                            <span className="text-4xl font-bold text-nexus-accent font-mono">{sliderValue}%</span>
                            <span className="text-xs font-mono text-slate-400">{currentTask.data?.maxLabel || 'MAX'}</span>
                          </div>
                          <input 
                            type="range"
                            min="0"
                            max="100"
                            step="1"
                            value={sliderValue}
                            onChange={(e) => setSliderValue(parseInt(e.target.value))}
                            disabled={!!feedback}
                            className="w-full h-2 bg-nexus-border rounded-lg appearance-none cursor-pointer accent-nexus-accent"
                          />
                          <div className="p-4 bg-nexus-accent/5 border border-nexus-accent/20 rounded text-center text-xs text-nexus-accent font-mono">
                            OBJETIVO: AJUSTAR AL NIVEL ÓPTIMO DE SEGURIDAD
                          </div>
                          <button 
                            onClick={() => handleAnswer(sliderValue)}
                            disabled={!!feedback}
                            className="nexus-button w-full"
                          >
                            CALIBRAR SISTEMA
                          </button>
                        </div>
                      ) : null}
                    </div>
                  </div>

                  {/* Feedback & Hint */}
                  <div className="mt-8 space-y-4">
                    {feedback && (
                      <motion.div 
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        className={`p-4 rounded border ${
                          feedback.type === 'success' ? 'bg-nexus-success/10 border-nexus-success text-nexus-success' : 'bg-nexus-danger/10 border-nexus-danger text-nexus-danger'
                        }`}
                      >
                        <div className="flex items-start gap-3">
                          {feedback.type === 'success' ? <CheckCircle2 size={20} /> : <XCircle size={20} />}
                          <div className="text-sm leading-relaxed">
                            <p className="font-bold mb-1">{feedback.type === 'success' ? '¡Correcto!' : 'Error detectado'}</p>
                            <p>{feedback.message}</p>
                          </div>
                        </div>
                      </motion.div>
                    )}

                    {!feedback && (
                      <div className="flex flex-col items-start gap-2">
                        <button 
                          onClick={() => setShowHint(!showHint)}
                          className="text-xs font-mono text-nexus-warning hover:text-white transition-colors flex items-center gap-1"
                        >
                          <Info size={14} /> {showHint ? 'Ocultar pista' : 'Solicitar pista (Sin penalización)'}
                        </button>
                        {showHint && (
                          <motion.div 
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            className="text-xs text-nexus-warning/80 italic bg-nexus-warning/5 p-2 border-l border-nexus-warning"
                          >
                            {currentTask.hint}
                          </motion.div>
                        )}
                      </div>
                    )}

                    {feedback && (
                      <button 
                        onClick={nextStep}
                        className="nexus-button w-full flex items-center justify-center gap-2 group"
                      >
                        Continuar <ChevronRight size={18} className="group-hover:translate-x-1 transition-transform" />
                      </button>
                    )}
                  </div>
                </div>
              </div>
            </motion.div>
          )}

          {screen === 'end' && (
            <motion.div 
              key="end"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="max-w-2xl w-full glass-panel p-10 text-center"
            >
              <div className="mb-8">
                <div className="inline-block p-4 rounded-full bg-nexus-success/10 text-nexus-success mb-6">
                  <CheckCircle2 size={64} />
                </div>
                <h1 className="text-4xl font-bold text-white mb-2">MISIÓN COMPLETADA</h1>
                <p className="text-slate-300 font-mono text-sm uppercase tracking-widest">
                  Protocolo de Acceso Finalizado
                </p>
              </div>

              <div className="grid grid-cols-2 gap-4 mb-10">
                <div className="bg-nexus-bg p-4 border border-nexus-border rounded">
                  <div className="text-2xl font-bold text-nexus-accent">{score}</div>
                  <div className="text-[10px] font-mono text-slate-400 uppercase">Aciertos</div>
                </div>
                <div className="bg-nexus-bg p-4 border border-nexus-border rounded">
                  <div className="text-2xl font-bold text-nexus-danger">{errors}</div>
                  <div className="text-[10px] font-mono text-slate-400 uppercase">Errores</div>
                </div>
                <div className="bg-nexus-bg p-4 border border-nexus-border rounded">
                  <div className="text-2xl font-bold text-nexus-warning">{formatTime(120 * 60 - timeLeft)}</div>
                  <div className="text-[10px] font-mono text-slate-400 uppercase">Tiempo</div>
                </div>
                <div className="bg-nexus-bg p-4 border border-nexus-border rounded">
                  <div className="text-2xl font-bold text-nexus-success">{unlockedFragments.join('') || '---'}</div>
                  <div className="text-[10px] font-mono text-slate-400 uppercase">Código</div>
                </div>
              </div>

              <div className="space-y-4">
                <button 
                  onClick={copyResults}
                  className="nexus-button w-full flex items-center justify-center gap-2"
                >
                  <Copy size={18} /> Copiar Informe para el Profesor
                </button>
                <p className="text-xs text-slate-400">
                  Copia el informe y pégalo en el documento de entrega de la asignatura.
                </p>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </main>

      {/* Footer Decoration */}
      <footer className="p-4 text-center text-[10px] font-mono text-slate-400 uppercase tracking-[0.5em] pointer-events-none">
        Nexus Security Intelligence Division &copy; 2026 // Secure Connection Established
      </footer>

      {/* Dossier Modal */}
      <AnimatePresence>
        {showDossier && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center p-6 bg-black/80 backdrop-blur-sm"
          >
            <motion.div 
              initial={{ scale: 0.9, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              className="max-w-3xl w-full max-h-[80vh] glass-panel overflow-hidden flex flex-col"
            >
              <div className="p-6 border-b border-nexus-border flex items-center justify-between bg-nexus-surface">
                <div className="flex items-center gap-3 text-nexus-accent">
                  <Info size={24} />
                  <h2 className="text-xl font-bold font-mono tracking-tight">DOSSIER DE CONSULTA TEÓRICA</h2>
                </div>
                <button 
                  onClick={() => setShowDossier(false)}
                  className="text-slate-400 hover:text-white transition-colors"
                >
                  <XCircle size={24} />
                </button>
              </div>
              <div className="flex-1 overflow-y-auto p-8 space-y-10 bg-nexus-bg/50">
                {THEORY_DOSSIER.map((section) => (
                  <section key={section.id} className="prose prose-invert max-w-none">
                    <h2 className="text-nexus-accent font-mono border-b border-nexus-accent/20 pb-2 mb-4">
                      {section.title}
                    </h2>
                    <div 
                      className="text-slate-300 text-sm leading-relaxed space-y-4"
                      dangerouslySetInnerHTML={{ __html: section.content }}
                    />
                  </section>
                ))}
              </div>
              <div className="p-4 border-t border-nexus-border bg-nexus-surface text-center">
                <button 
                  onClick={() => setShowDossier(false)}
                  className="nexus-button"
                >
                  Cerrar Dossier
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
