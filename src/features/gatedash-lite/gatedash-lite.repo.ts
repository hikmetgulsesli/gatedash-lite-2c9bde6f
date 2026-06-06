const PREFS_KEY = 'gatedash-lite_prefs';
const HIGH_SCORE_KEY = 'gatedash-lite_highscore';

export interface PersistedPrefs {
  difficulty: 'relaxed' | 'arcade' | 'hardcore' | 'normal' | 'overdrive';
}

export function loadPrefs(): PersistedPrefs | null {
  try {
    const raw = localStorage.getItem(PREFS_KEY);
    if (!raw) return null;
    return JSON.parse(raw) as PersistedPrefs;
  } catch {
    return null;
  }
}

export function savePrefs(prefs: PersistedPrefs) {
  try {
    localStorage.setItem(PREFS_KEY, JSON.stringify(prefs));
  } catch {
    // ignore
  }
}

export function loadHighScore(): number {
  try {
    const raw = localStorage.getItem(HIGH_SCORE_KEY);
    if (!raw) return 0;
    const val = Number(raw);
    return Number.isFinite(val) ? val : 0;
  } catch {
    return 0;
  }
}

export function saveHighScore(score: number) {
  try {
    const current = loadHighScore();
    if (score > current) {
      localStorage.setItem(HIGH_SCORE_KEY, String(score));
    }
  } catch {
    // ignore
  }
}
