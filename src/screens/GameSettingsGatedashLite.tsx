// AUTO-GENERATED from Stitch — DO NOT modify layout or CSS
// Screen: Game Settings - GateDash Lite
// 
// AGENT INSTRUCTIONS:
// 1. DO NOT change className values or layout structure
// 2. Add useState for dynamic values (replace hardcoded text)
// 3. Wire interactive controls through the typed actions prop
// 4. Replace placeholder data with props/state

import { Bolt, Gauge, Keyboard, LogOut, Save, TriangleAlert, X } from "lucide-react";


export type GameSettingsGatedashLiteActionId = "close-settings-1" | "relaxed-2" | "arcade-3" | "hardcore-4" | "normal-5" | "overdrive-6" | "save-preferences-7" | "reset-to-defaults-8" | "return-to-game-9";

export interface GameSettingsGatedashLiteProps {
  actions?: Partial<Record<GameSettingsGatedashLiteActionId, () => void>>;

}

export function GameSettingsGatedashLite({ actions }: GameSettingsGatedashLiteProps) {
  return (
    <>
      {/* Blurred Gameplay Background (Z-0) */}
      <div className="fixed inset-0 z-0 bg-cover bg-center brightness-[0.35] blur-md scale-[1.02]" data-alt="A high-octane, neon-infused retro arcade space shooter gameplay scene. Vivid cyan and magenta laser blasts crisscross a deep, starry void. Glowing polygonal enemy ships and a sleek player fighter are frozen in action, emitting intense particle effects. The overall mood is electric, urgent, and technically advanced, with a strong high-contrast, glowing glassmorphism aesthetic." style={{backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuDi-xeIr0qB86W7qV5ZY59-eVlJTWKZLTUThyR7g_5Rze9gnrv3xTOMEHp9KTwQlraTPAZESVCZ7tlxtCEbYUILG4OGKTkIDvdyRTQEdsOhPDzPGjwUY7Ug2Gmi2tb7PaJMCCTNsMr4IFvksu2yeJ9kXyYliyP5XUvIMd2mR9JcwYkVPNY40Tgs4xc5ihtrDft8ak5nt6y2QkyU86TQJBTE1CE4lJEHFKq94w1O2pmcQTDFEAggoqXpxDdUC5PpFT0LWlfZtKyvTJA')"}}>
      </div>
      {/* Modal Overlay Container (Z-30) */}
      <div className="fixed inset-0 z-30 flex items-center justify-center p-gutter md:p-margin-desktop bg-surface-container-lowest/60 backdrop-blur-xl">
      {/* Settings Modal Card */}
      <div className="w-full max-w-[520px] bg-surface-container/70 backdrop-blur-2xl border border-primary-fixed-dim rounded-xl shadow-[0_0_50px_rgba(0,219,231,0.15)] flex flex-col overflow-hidden relative transform transition-colors">
      {/* Atmospheric inner glow */}
      <div className="absolute inset-0 pointer-events-none shadow-[inset_0_0_60px_rgba(0,219,231,0.05)] z-0"></div>
      {/* Scanline effect */}
      <div className="absolute inset-0 pointer-events-none scanline-overlay opacity-[0.15] z-0"></div>
      {/* Header */}
      <div className="px-margin-mobile md:px-margin-desktop py-margin-mobile border-b border-white/10 relative z-10 flex justify-between items-center bg-surface-container-high/40">
      <div>
      <h1 className="font-headline-md text-headline-md text-primary drop-shadow-[0_0_8px_rgba(0,219,231,0.6)] tracking-wide">GAME SETTINGS</h1>
      <p className="font-label-caps text-label-caps text-on-surface-variant mt-1 opacity-80">SYS.CONFIG // GATE_DASH_OS</p>
      </div>
      <button aria-label="Close settings" className="text-on-surface-variant hover:text-primary transition-colors hover:drop-shadow-[0_0_8px_rgba(0,219,231,0.5)] focus:outline-none focus:ring-2 focus:ring-primary/50 rounded-full p-1" type="button" data-action-id="close-settings-1" onClick={actions?.["close-settings-1"]}>
      <X aria-hidden={true} focusable="false" />
      </button>
      </div>
      {/* Content Body */}
      <div className="p-margin-mobile md:p-margin-desktop flex flex-col gap-margin-desktop relative z-10">
      {/* Difficulty Toggles */}
      <div className="flex flex-col gap-hud-gap">
      <label className="font-label-caps text-label-caps text-secondary tracking-widest drop-shadow-[0_0_4px_rgba(235,178,255,0.4)] flex items-center gap-2">
      <TriangleAlert className="text-[14px]" aria-hidden={true} focusable="false" />
                              DIFFICULTY PROTOCOL
                          </label>
      <div className="grid grid-cols-3 gap-unit p-1 bg-surface-container-highest/40 rounded-lg border border-white/5">
      <button className="bg-transparent text-on-surface-variant font-data-sm text-data-sm py-2 rounded hover:bg-white/5 hover:text-white transition-colors text-center focus:outline-none" type="button" data-action-id="relaxed-2" onClick={actions?.["relaxed-2"]}>RELAXED</button>
      <button className="bg-secondary-container/20 text-secondary-fixed border border-secondary-fixed font-data-sm text-data-sm py-2 rounded shadow-[0_0_15px_rgba(182,0,248,0.3)] transition-colors text-center relative overflow-hidden focus:outline-none" type="button" data-action-id="arcade-3" onClick={actions?.["arcade-3"]}>
      <span className="relative z-10">ARCADE</span>
      <div className="absolute inset-0 bg-secondary opacity-10 animate-pulse z-0"></div>
      </button>
      <button className="bg-transparent text-on-surface-variant font-data-sm text-data-sm py-2 rounded hover:bg-white/5 hover:text-white transition-colors text-center focus:outline-none" type="button" data-action-id="hardcore-4" onClick={actions?.["hardcore-4"]}>HARDCORE</button>
      </div>
      </div>
      {/* Game Speed Toggles */}
      <div className="flex flex-col gap-hud-gap">
      <label className="font-label-caps text-label-caps text-primary tracking-widest drop-shadow-[0_0_4px_rgba(0,219,231,0.4)] flex items-center gap-2">
      <Gauge className="text-[14px]" aria-hidden={true} focusable="false" />
                              SIMULATION SPEED
                          </label>
      <div className="grid grid-cols-2 gap-unit p-1 bg-surface-container-highest/40 rounded-lg border border-white/5">
      <button className="bg-primary-container/20 text-primary border border-primary-fixed-dim font-data-sm text-data-sm py-2 rounded shadow-[0_0_15px_rgba(0,219,231,0.3)] transition-colors text-center focus:outline-none" type="button" data-action-id="normal-5" onClick={actions?.["normal-5"]}>NORMAL</button>
      <button className="bg-transparent text-on-surface-variant font-data-sm text-data-sm py-2 rounded hover:bg-white/5 hover:text-white transition-colors text-center focus:outline-none flex justify-center items-center gap-1" type="button" data-action-id="overdrive-6" onClick={actions?.["overdrive-6"]}>
                                  OVERDRIVE
                                  <Bolt className="text-[12px] text-tertiary-fixed-dim opacity-50" aria-hidden={true} focusable="false" />
      </button>
      </div>
      </div>
      {/* Input Help Diagram */}
      <div className="flex flex-col gap-hud-gap">
      <label className="font-label-caps text-label-caps text-on-surface-variant tracking-widest flex items-center gap-2">
      <Keyboard className="text-[14px]" aria-hidden={true} focusable="false" />
                              INPUT TELEMETRY
                          </label>
      <div className="bg-surface-container-highest/30 rounded-lg p-gutter border border-white/5 flex flex-col sm:flex-row gap-gutter items-center shadow-[inset_0_0_20px_rgba(0,0,0,0.5)]">
      {/* Movement Grid */}
      <div className="flex-1 flex flex-col items-center gap-2 w-full">
      <div className="font-label-caps text-label-caps text-on-surface-variant/70 mb-1">NAVIGATION</div>
      <div className="grid grid-cols-3 grid-rows-2 gap-1 w-[96px]">
      <div className="col-start-2 w-full aspect-square border border-white/10 border-b-white/20 rounded bg-surface-container flex items-center justify-center text-on-surface font-data-sm text-data-sm shadow-[0_2px_4px_rgba(0,0,0,0.5)]">W</div>
      <div className="col-start-1 row-start-2 w-full aspect-square border border-white/10 border-b-white/20 rounded bg-surface-container flex items-center justify-center text-on-surface font-data-sm text-data-sm shadow-[0_2px_4px_rgba(0,0,0,0.5)]">A</div>
      <div className="col-start-2 row-start-2 w-full aspect-square border border-white/10 border-b-white/20 rounded bg-surface-container flex items-center justify-center text-on-surface font-data-sm text-data-sm shadow-[0_2px_4px_rgba(0,0,0,0.5)]">S</div>
      <div className="col-start-3 row-start-2 w-full aspect-square border border-white/10 border-b-white/20 rounded bg-surface-container flex items-center justify-center text-on-surface font-data-sm text-data-sm shadow-[0_2px_4px_rgba(0,0,0,0.5)]">D</div>
      </div>
      </div>
      {/* Divider */}
      <div className="hidden sm:block w-[1px] h-16 bg-white/10"></div>
      <div className="block sm:hidden w-full h-[1px] bg-white/10"></div>
      {/* Action Bar */}
      <div className="flex-1 flex flex-col items-center gap-2 w-full">
      <div className="font-label-caps text-label-caps text-primary/70 mb-1">DASH / FIRE</div>
      <div className="w-full max-w-[140px] h-[36px] mt-0 sm:mt-[18px] border border-primary/20 border-b-primary/40 rounded bg-primary-container/10 flex items-center justify-center text-primary font-data-sm text-data-sm shadow-[0_2px_8px_rgba(0,219,231,0.15)] relative overflow-hidden">
      <span className="relative z-10 tracking-widest">SPACE</span>
      <div className="absolute inset-x-0 bottom-0 h-[2px] bg-primary blur-[2px]"></div>
      </div>
      </div>
      </div>
      </div>
      </div>
      {/* Footer Actions */}
      <div className="px-margin-mobile md:px-margin-desktop py-gutter border-t border-white/10 flex flex-col gap-gutter bg-surface-container-lowest/40 relative z-10">
      <button className="w-full py-4 bg-primary-fixed-dim text-on-primary-fixed font-data-lg text-data-lg rounded-md shadow-[0_0_20px_rgba(0,219,231,0.4)] hover:scale-[1.02] hover:shadow-[0_0_30px_rgba(0,219,231,0.6)] hover:brightness-125 transition-colors duration-200 flex items-center justify-center gap-3 focus:outline-none focus:ring-2 focus:ring-white" type="button" data-action-id="save-preferences-7" onClick={actions?.["save-preferences-7"]}>
      <Save  style={{fontVariationSettings: "'FILL' 1"}} aria-hidden={true} focusable="false" />
                          SAVE PREFERENCES
                      </button>
      <div className="flex flex-col-reverse sm:flex-row justify-between items-center gap-4 sm:gap-0 mt-2">
      <button className="font-label-caps text-label-caps text-on-surface-variant hover:text-white transition-colors underline decoration-white/20 underline-offset-4 focus:outline-none" type="button" data-action-id="reset-to-defaults-8" onClick={actions?.["reset-to-defaults-8"]}>
                              RESET TO DEFAULTS
                          </button>
      <button className="font-label-caps text-label-caps text-on-surface-variant hover:text-primary transition-colors flex items-center gap-1 focus:outline-none group" type="button" data-action-id="return-to-game-9" onClick={actions?.["return-to-game-9"]}>
                              RETURN TO GAME
                              <LogOut className="text-[16px] group-hover:translate-x-1 transition-transform" aria-hidden={true} focusable="false" />
      </button>
      </div>
      </div>
      </div>
      </div>
    </>
  );
}
