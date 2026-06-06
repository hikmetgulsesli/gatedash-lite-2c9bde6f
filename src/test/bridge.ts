import { getState, subscribe, setAppState, AppState, dispatchGame } from '../features/gatedash-lite/gatedash-lite.store';
import { createInitialState, GameAction } from '../game/game-runtime';

declare global {
  interface Window {
    app: {
      getState: () => AppState;
      subscribe: (fn: () => void) => () => void;
      dispatch: (action: GameAction) => void;
      reset: () => void;
    };
  }
}

export function installBridge() {
  if (typeof window === 'undefined') return;
  window.app = {
    getState: () => getState(),
    subscribe: (fn) => subscribe(fn),
    dispatch: (action) => {
      dispatchGame(action);
    },
    reset: () => {
      setAppState({ game: createInitialState(), screen: 'gameplay' });
    },
  };
}
