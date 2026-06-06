import { useState, useEffect, useRef, useCallback } from 'react';
import {
  GameRuntimeState,
  GameAction,
  gameReducer,
  createInitialState,
} from '../../game/game-runtime';

export type Screen = 'gameplay' | 'settings';

export interface AppState {
  game: GameRuntimeState;
  screen: Screen;
}

function createAppState(): AppState {
  return {
    game: createInitialState(),
    screen: 'gameplay',
  };
}

let globalState = createAppState();
const listeners = new Set<() => void>();

function emit() {
  listeners.forEach((fn) => fn());
}

export function dispatchGame(action: GameAction) {
  globalState = {
    ...globalState,
    game: gameReducer(globalState.game, action),
  };
  emit();
}

export function setScreen(screen: Screen) {
  globalState = { ...globalState, screen };
  emit();
}

export function setAppState(next: AppState) {
  globalState = next;
  emit();
}

export function getState(): AppState {
  return globalState;
}

export function subscribe(listener: () => void) {
  listeners.add(listener);
  return () => listeners.delete(listener);
}

export function useGatedashLiteStore() {
  const [state, setState] = useState<AppState>(globalState);
  useEffect(() => {
    const listener = () => setState(globalState);
    const unsub = subscribe(listener);
    return () => { unsub(); };
  }, []);
  return state;
}

export function useGatedashLiteActions() {
  const rafRef = useRef<number | null>(null);
  const lastTimeRef = useRef<number>(0);

  const startLoop = useCallback(() => {
    if (rafRef.current !== null) return;
    lastTimeRef.current = performance.now();
    const step = (time: number) => {
      const delta = time - lastTimeRef.current;
      lastTimeRef.current = time;
      dispatchGame({ type: 'TICK', delta });
      rafRef.current = requestAnimationFrame(step);
    };
    rafRef.current = requestAnimationFrame(step);
  }, []);

  const stopLoop = useCallback(() => {
    if (rafRef.current !== null) {
      cancelAnimationFrame(rafRef.current);
      rafRef.current = null;
    }
  }, []);

  useEffect(() => {
    startLoop();
    return () => stopLoop();
  }, [startLoop, stopLoop]);

  return {
    moveLeft: () => dispatchGame({ type: 'MOVE_LEFT' }),
    moveRight: () => dispatchGame({ type: 'MOVE_RIGHT' }),
    startGame: () => dispatchGame({ type: 'START' }),
    restart: () => dispatchGame({ type: 'RESTART' }),
    pause: () => dispatchGame({ type: 'PAUSE' }),
    resume: () => dispatchGame({ type: 'RESUME' }),
    setDifficulty: (d: GameRuntimeState['difficulty']) =>
      dispatchGame({ type: 'SET_DIFFICULTY', difficulty: d }),
    openSettings: () => setScreen('settings'),
    closeSettings: () => setScreen('gameplay'),
    startLoop,
    stopLoop,
  };
}

export type GatedashLiteActions = ReturnType<typeof useGatedashLiteActions>;
