export interface GameEntity {
  lane: number;
  position: number;
  id: string;
}

export interface GameRuntimeState {
  player: { lane: number; position: number };
  obstacles: GameEntity[];
  shards: GameEntity[];
  score: number;
  energy: number;
  lives: number;
  paused: boolean;
  difficulty: 'relaxed' | 'arcade' | 'hardcore' | 'normal' | 'overdrive';
  gameOver: boolean;
  tick: number;
}

export type GameAction =
  | { type: 'TICK'; delta: number }
  | { type: 'MOVE_LEFT' }
  | { type: 'MOVE_RIGHT' }
  | { type: 'START' }
  | { type: 'RESTART' }
  | { type: 'PAUSE' }
  | { type: 'RESUME' }
  | { type: 'SET_DIFFICULTY'; difficulty: GameRuntimeState['difficulty'] }
  | { type: 'COLLECT_SHARD'; id: string }
  | { type: 'HIT_OBSTACLE'; id: string };

const LANES = 5;
const PLAYFIELD_DEPTH = 1000;

function uid() {
  return Math.random().toString(36).slice(2) + Date.now().toString(36);
}

export function createInitialState(): GameRuntimeState {
  return {
    player: { lane: 2, position: 0 },
    obstacles: [],
    shards: [],
    score: 0,
    energy: 100,
    lives: 3,
    paused: true,
    difficulty: 'normal',
    gameOver: false,
    tick: 0,
  };
}

const DIFFICULTY_CONFIG: Record<
  GameRuntimeState['difficulty'],
  { speed: number; spawnRate: number; shardRate: number }
> = {
  relaxed: { speed: 80, spawnRate: 0.008, shardRate: 0.004 },
  normal: { speed: 140, spawnRate: 0.015, shardRate: 0.006 },
  arcade: { speed: 180, spawnRate: 0.02, shardRate: 0.008 },
  hardcore: { speed: 240, spawnRate: 0.03, shardRate: 0.01 },
  overdrive: { speed: 320, spawnRate: 0.04, shardRate: 0.012 },
};

function spawnEntity(rate: number): GameEntity | null {
  if (Math.random() > rate) return null;
  return {
    lane: Math.floor(Math.random() * LANES),
    position: PLAYFIELD_DEPTH,
    id: uid(),
  };
}

export function gameReducer(state: GameRuntimeState, action: GameAction): GameRuntimeState {
  switch (action.type) {
    case 'START':
      return { ...state, paused: false, gameOver: false };
    case 'RESTART':
      return { ...createInitialState(), difficulty: state.difficulty, paused: false };
    case 'PAUSE':
      return { ...state, paused: true };
    case 'RESUME':
      return { ...state, paused: false };
    case 'SET_DIFFICULTY':
      return { ...state, difficulty: action.difficulty };
    case 'MOVE_LEFT': {
      if (state.paused || state.gameOver) return state;
      const lane = Math.max(0, state.player.lane - 1);
      return { ...state, player: { ...state.player, lane } };
    }
    case 'MOVE_RIGHT': {
      if (state.paused || state.gameOver) return state;
      const lane = Math.min(LANES - 1, state.player.lane + 1);
      return { ...state, player: { ...state.player, lane } };
    }
    case 'TICK': {
      if (state.paused || state.gameOver) return state;
      const cfg = DIFFICULTY_CONFIG[state.difficulty];
      const dt = action.delta / 1000;
      const speed = cfg.speed;

      let obstacles = state.obstacles
        .map((o) => ({ ...o, position: o.position - speed * dt }))
        .filter((o) => o.position > -50);

      let shards = state.shards
        .map((s) => ({ ...s, position: s.position - speed * dt }))
        .filter((s) => s.position > -50);

      const newObstacle = spawnEntity(cfg.spawnRate);
      if (newObstacle) obstacles = [...obstacles, newObstacle];

      const newShard = spawnEntity(cfg.shardRate);
      if (newShard) shards = [...shards, newShard];

      let score = state.score + Math.round(speed * dt * 0.1);
      let energy = Math.min(100, state.energy + 0.2);
      let lives = state.lives;

      // Collision detection
      const playerPos = state.player.position;
      for (const o of obstacles) {
        if (o.lane === state.player.lane && Math.abs(o.position - playerPos) < 20) {
          lives -= 1;
          energy = Math.max(0, energy - 20);
          obstacles = obstacles.filter((x) => x.id !== o.id);
          if (lives <= 0) {
            return { ...state, lives: 0, energy, gameOver: true, paused: true, tick: state.tick + 1 };
          }
        }
      }

      for (const s of shards) {
        if (s.lane === state.player.lane && Math.abs(s.position - playerPos) < 20) {
          score += 50;
          energy = Math.min(100, energy + 10);
          shards = shards.filter((x) => x.id !== s.id);
        }
      }

      return {
        ...state,
        obstacles,
        shards,
        score,
        energy,
        lives,
        tick: state.tick + 1,
      };
    }
    case 'COLLECT_SHARD': {
      const shards = state.shards.filter((s) => s.id !== action.id);
      return { ...state, shards, score: state.score + 50, energy: Math.min(100, state.energy + 10) };
    }
    case 'HIT_OBSTACLE': {
      const obstacles = state.obstacles.filter((o) => o.id !== action.id);
      const lives = state.lives - 1;
      const energy = Math.max(0, state.energy - 20);
      if (lives <= 0) {
        return { ...state, obstacles, lives: 0, energy, gameOver: true, paused: true };
      }
      return { ...state, obstacles, lives, energy };
    }
    default:
      return state;
  }
}
