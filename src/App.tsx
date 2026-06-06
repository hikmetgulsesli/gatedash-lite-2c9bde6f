import { useEffect } from 'react';
import {
  GameplayGatedashLite,
  GameSettingsGatedashLite,
} from './screens';
import { useGatedashLiteStore, useGatedashLiteActions } from './features/gatedash-lite/gatedash-lite.store';
import { installBridge } from './test/bridge';

export default function App() {
  const state = useGatedashLiteStore();
  const actions = useGatedashLiteActions();

  useEffect(() => {
    installBridge();
  }, []);

  const runtime = {
    player: state.game.player,
    obstacles: state.game.obstacles,
    shards: state.game.shards,
    score: state.game.score,
    energy: state.game.energy,
    lives: state.game.lives,
    paused: state.game.paused,
  };

  return (
    <div
      data-setfarm-root="baseline"
      data-testid="setfarm-app-root"
      className="relative min-h-screen w-full overflow-hidden bg-slate-50 text-slate-950"
    >
      {state.screen === 'gameplay' && (
        <GameplayGatedashLite
          runtime={runtime}
          actions={{
            'start-game-1': actions.startGame,
            'restart-2': actions.restart,
            'pause-3': actions.pause,
            'settings-4': actions.openSettings,
          }}
        />
      )}
      {state.screen === 'settings' && (
        <GameSettingsGatedashLite
          actions={{
            'close-settings-1': actions.closeSettings,
            'relaxed-2': () => actions.setDifficulty('relaxed'),
            'arcade-3': () => actions.setDifficulty('arcade'),
            'hardcore-4': () => actions.setDifficulty('hardcore'),
            'normal-5': () => actions.setDifficulty('normal'),
            'overdrive-6': () => actions.setDifficulty('overdrive'),
            'save-preferences-7': actions.closeSettings,
            'reset-to-defaults-8': () => actions.setDifficulty('normal'),
            'return-to-game-9': actions.closeSettings,
          }}
        />
      )}
    </div>
  );
}
