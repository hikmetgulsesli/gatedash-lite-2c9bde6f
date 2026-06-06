---
name: Cyber-Arcade Kinetic
colors:
  surface: '#131318'
  surface-dim: '#131318'
  surface-bright: '#39383e'
  surface-container-lowest: '#0e0e13'
  surface-container-low: '#1b1b20'
  surface-container: '#1f1f25'
  surface-container-high: '#2a292f'
  surface-container-highest: '#35343a'
  on-surface: '#e4e1e9'
  on-surface-variant: '#b9cacb'
  inverse-surface: '#e4e1e9'
  inverse-on-surface: '#303036'
  outline: '#849495'
  outline-variant: '#3a494b'
  surface-tint: '#00dbe7'
  primary: '#e1fdff'
  on-primary: '#00363a'
  primary-container: '#00f2ff'
  on-primary-container: '#006a71'
  inverse-primary: '#00696f'
  secondary: '#ebb2ff'
  on-secondary: '#520072'
  secondary-container: '#b600f8'
  on-secondary-container: '#fff6fc'
  tertiary: '#fff6ef'
  on-tertiary: '#452b00'
  tertiary-container: '#ffd49c'
  on-tertiary-container: '#845600'
  error: '#ffb4ab'
  on-error: '#690005'
  error-container: '#93000a'
  on-error-container: '#ffdad6'
  primary-fixed: '#74f5ff'
  primary-fixed-dim: '#00dbe7'
  on-primary-fixed: '#002022'
  on-primary-fixed-variant: '#004f54'
  secondary-fixed: '#f8d8ff'
  secondary-fixed-dim: '#ebb2ff'
  on-secondary-fixed: '#320047'
  on-secondary-fixed-variant: '#74009f'
  tertiary-fixed: '#ffddb3'
  tertiary-fixed-dim: '#ffb950'
  on-tertiary-fixed: '#291800'
  on-tertiary-fixed-variant: '#624000'
  background: '#131318'
  on-background: '#e4e1e9'
  surface-variant: '#35343a'
typography:
  display-lg:
    fontFamily: Geist
    fontSize: 48px
    fontWeight: '800'
    lineHeight: 56px
    letterSpacing: -0.02em
  display-lg-mobile:
    fontFamily: Geist
    fontSize: 32px
    fontWeight: '800'
    lineHeight: 40px
    letterSpacing: -0.02em
  headline-md:
    fontFamily: Geist
    fontSize: 24px
    fontWeight: '700'
    lineHeight: 32px
  body-rt:
    fontFamily: Inter
    fontSize: 16px
    fontWeight: '400'
    lineHeight: 24px
  data-lg:
    fontFamily: JetBrains Mono
    fontSize: 20px
    fontWeight: '700'
    lineHeight: 20px
    letterSpacing: 0.05em
  data-sm:
    fontFamily: JetBrains Mono
    fontSize: 12px
    fontWeight: '500'
    lineHeight: 16px
    letterSpacing: 0.1em
  label-caps:
    fontFamily: Inter
    fontSize: 11px
    fontWeight: '700'
    lineHeight: 12px
    letterSpacing: 0.15em
rounded:
  sm: 0.25rem
  DEFAULT: 0.5rem
  md: 0.75rem
  lg: 1rem
  xl: 1.5rem
  full: 9999px
spacing:
  unit: 4px
  gutter: 16px
  margin-mobile: 16px
  margin-desktop: 32px
  hud-gap: 8px
---

## Brand & Style

This design system is built on a high-octane, neon-infused aesthetic that blends retro arcade energy with cutting-edge digital precision. The brand personality is electric, urgent, and technically advanced, targeting users who crave a gamified, high-performance experience.

The design style utilizes **Glassmorphism** and **High-Contrast** principles. UI elements appear as "HUD" (Heads-Up Display) overlays—semi-transparent, floating panes that allow the high-energy background action to remain visible while maintaining critical legibility. Every interaction is designed to feel like a "spark," using subtle glows and vibrant accents to provide immediate feedback in high-stakes environments.

## Colors

The palette is anchored in a deep space navy background to provide maximum contrast for the glowing interactive elements. 

- **Primary (Cyan Spark):** Used for critical actions, active progress indicators, and primary HUD borders. It should emit a soft outer glow (bloom effect).
- **Secondary (Neon Magenta):** Reserved for accent details, specialized status indicators, and energetic highlights.
- **Tertiary (Hazard Amber):** Used exclusively for warnings, timers reaching zero, or negative constraints to ensure immediate visual triage.
- **Neutral (Deep Space):** The foundational layer, providing a non-distracting canvas that absorbs light and makes the neon elements pop.
- **Surface (Glass):** A semi-transparent white (5-10% opacity) with a heavy backdrop-blur (20px+) to create the glassmorphic effect.

## Typography

The system employs a dual-font strategy. **Geist** and **Inter** handle the functional UI hierarchy, ensuring that navigation and descriptions are professional and legible. **JetBrains Mono** is utilized for all "Data" roles—scores, timers, coordinates, and technical readouts—to reinforce the cyberpunk/digital narrative.

All "Data" and "Label-caps" roles should be treated with high-contrast colors (Primary or White) to ensure they are readable against dark, moving backgrounds.

## Layout & Spacing

This design system uses a **Fluid Grid** model with a "Safe Zone" philosophy. Elements are pinned to the corners or edges of the screen to mimic a game HUD, leaving the center clear for primary content/gameplay.

- **Rhythm:** A strict 4px baseline grid ensures alignment of condensed data points.
- **HUD Elements:** Overlays should use `hud-gap` (8px) for internal stacking.
- **Responsive:** On mobile, margins shrink to 16px, and HUD elements often collapse into a persistent top-bar or bottom-dock. On desktop, elements are distributed to the far corners to maximize the field of view.

## Elevation & Depth

Depth is established through **Backdrop Blurs** and **Glow Tiers** rather than traditional shadows.

1.  **Floor (Z-0):** The Deep Space background.
2.  **HUD Base (Z-10):** Glassmorphic panels with `24px` backdrop-blur and a `1px` inner-stroke of white (10% opacity).
3.  **Active Elements (Z-20):** Primary actions that emit a `4px` to `12px` colored blur (bloom) using the Primary or Secondary color.
4.  **Pop-overs/Modals (Z-30):** Full-screen dimming with a high-intensity Cyan border to pull focus.

Shadows should be "Negative Shadows"—instead of dark casting, use the `primary_color_hex` with low opacity to create an ambient glow beneath floating items.

## Shapes

The shape language balances the "High-Tech" feel with modern approachability. Standard UI containers use a `0.5rem` (8px) radius. However, interactive elements like buttons and progress bar caps can scale up to `rounded-xl` for a smoother, more tactile feel.

Decorative elements, such as corner accents on glass panels, may use 45-degree chamfers (clipped corners) to further the "Arcade Tech" aesthetic.

## Components

- **Compact Buttons:** Sized for speed. Primary buttons feature a solid Cyan fill with black text; on hover, they expand slightly (scale 1.05) and increase their outer glow intensity.
- **HUD Chips:** Small, semi-transparent labels used for status (e.g., "LIVE", "LVL 1"). These use the monospaced font.
- **Progress Bars:** High-contrast tracks. The "filled" portion uses a gradient from Magenta to Cyan. Use a subtle pulse animation for "active" loading states.
- **Input Fields:** Minimalist. Only a bottom border (1px) in the inactive state, turning into a full Cyan glow-box when focused.
- **Cards/Panels:** These are the primary glassmorphic containers. They should always have a 1px border to define their edges against the dark background.
- **Glow-Toggles:** Checkboxes and radios should look like light-switches—dark when off, brilliantly lit when on.