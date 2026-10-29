# Implementation Plan: Premium Software Engineer Aesthetic Upgrade

## 1. Visual Foundation & Design Tokens
The goal is to move from 'plain minimalist' to 'premium studio' (Day) and 'gaming' to 'professional toolkit' (Night).

### 1.1 Color Palette Refinement (`src/app/globals.css`)
- **Day Theme**: Shift from slightly yellow/beige to a more sophisticated "Studio" palette.
    - `--color-paper`: `#fbfaf8` $\rightarrow$ `#ffffff` (Clean white) or `#fafafa` (Soft white).
    - `--color-surface`: `#f4f1ec` $\rightarrow$ `#f5f5f7` (Apple-style soft grey).
    - `--color-ink`: `#16140f` $\rightarrow$ `#1d1d1f` (Deep onyx).
    - `--color-muted`: `#6a675f` $\rightarrow$ `#86868b` (Professional grey).
    - `--color-line`: `#e3dfd8` $\rightarrow$ `#e5e5e7` (Subtle divider).
    - `--color-accent`: `#b23c11` $\rightarrow$ `#0066cc` or a sophisticated deep indigo `#4f46e5`. Let's go with a premium Indigo `#4f46e5`.

- **Night Theme**: Shift from high-contrast RGB to "Deep Tooling" (think JetBrains/VS Code high-end).
    - `--color-paper`: `#12100e` $\rightarrow$ `#0a0a0a` (True deep black).
    - `--color-surface`: `#1b1815` $\rightarrow$ `#161618` (Dark charcoal).
    - `--color-ink`: `#f2efe9` $\rightarrow$ `#efefef` (Off-white).
    - `--color-muted`: `#9a958c` $\rightarrow$ `#a1a1aa` (Cool grey).
    - `--color-line`: `#2a2622` $\rightarrow$ `#27272a` (Dark divider).
    - `--color-accent`: `#e2703a` $\rightarrow$ `#818cf8` (Soft indigo).

### 1.2 Typography & Spacing
- **Line Height**: Update `leading-relaxed` (1.625) to a consistent `1.6` for body text.
- **Spacing Rhythm**: Ensure all margins/paddings are multiples of `8px` (e.g., `mt-3` [12px] $\rightarrow$ `mt-4` [16px]).

## 2. Component Upgrades

### 2.1 Section Wrapper (`src/components/section.tsx`)
- **Typography**: Increase `h2` line-height from `1.15` to `1.25`.
- **Layout**: Refine the gutter width and rule thickness.

### 2.2 Hero Section (`src/components/hero.tsx`)
- **Visual Balance**: 
    - Update `h1` line-height to `1.1` for a tighter, more professional look.
    - Refine the `FACTS` grid layout.
- **Interactions**: Add a subtle hover state to the action buttons (scale + opacity).

### 2.3 Projects (`src/components/projects.tsx`)
- **Card Layout**: 
    - Replace the simple `border-b` with a subtle background shift on hover in day mode.
    - Improve the "stack" presentation (chips instead of text separated by dots).
- **Technical Presentation**: Enhance the visual weight of the project title vs the "kind" label.

### 2.4 Experience (`src/components/experience.tsx`)
- **Hierarchy**:
    - Make the `role` more prominent.
    - Refine the "Current" badge to be more subtle (less saturation).
    - Improve the spacing between roles for better scannability.

## 3. Interactions & Animations

### 3.1 Refined CSS Transitions
- **Decision**: Stick to pure CSS to avoid `framer-motion` bundle size, but use `cubic-bezier(0.4, 0, 0.2, 1)` for all transitions to achieve that 'Apple-like' smoothness.
- **Subtle Reveals**: 
    - Add a slight fade-in and slide-up (10px instead of 26px) for a more elegant entrance.
    - Refine the `night-sky` animations to be slower and less distracting (lower opacity).

### 3.2 Night Theme 'Professional' Shift
- **RGB Elements**: Reduce the saturation of the `rgb-pan` animations. Shift from "Gaming Neon" to "Software Tooling" gradients (e.g., deep blues, purples, and teals).
- **Grid**: Reduce the opacity of the `night-grid` to `0.02` to make it a whisper rather than a feature.

## 4. Step-by-Step Implementation Strategy

1.  **Phase 1: Tokens**: Update `globals.css` with the new color palette and base typography.
2.  **Phase 2: Layouts**: Apply 8dp spacing rhythm and typography updates to `Section`, `Hero`, `Projects`, and `Experience`.
3.  **Phase 3: Component Polish**:
    - Implement Project "stack chips".
    - Refine Experience hierarchy.
    - Polish Hero action buttons.
4.  **Phase 4: Motion Refinement**: Update all transitions to `cubic-bezier`, slow down night animations, and refine the reveal offset.
5.  **Phase 5: Accessibility Audit**: Verify contrast ratios (WCAG AA) for the new palette.
