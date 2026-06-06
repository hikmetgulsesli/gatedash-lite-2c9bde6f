import { GameRuntimeState, createInitialState } from '../game/game-runtime';
import { AppState } from '../features/gatedash-lite/gatedash-lite.store';

export function makeGameRuntimeState(overrides?: Partial<GameRuntimeState>): GameRuntimeState {
  return { ...createInitialState(), ...overrides };
}

export function makeAppState(overrides?: Partial<AppState>): AppState {
  return {
    game: makeGameRuntimeState(overrides?.game),
    screen: 'gameplay',
    ...overrides,
  };
}
