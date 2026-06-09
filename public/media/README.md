# Portfolio media replacement guide

This folder contains visual proof for each technical breakdown.

The current site uses SVG placeholder files so the portfolio can run immediately. Replace them with optimized GIF, WebP, JPG, PNG, or SVG assets without changing the Nuxt architecture.

## Recommended naming

Use project-prefixed names that match `data/projects.ts`:

- `neon-service-corridor-preview.webp`
- `neon-lighting-breakdown.gif`
- `neon-shader-breakdown.webp`
- `neon-level-breakdown.webp`
- `tactical-hud-preview.gif`
- `hud-ui-breakdown.gif`
- `hud-feedback-breakdown.gif`
- `hud-tools-breakdown.webp`
- `stylized-forest-preview.gif`
- `forest-shader-breakdown.gif`
- `forest-interaction-breakdown.gif`
- `forest-level-breakdown.webp`

## Capture rules

- Prefer short GIFs or WebP animations for implemented systems and state changes.
- Prefer still WebP or JPG screenshots for lighting, composition, and level-assembly evidence.
- Keep clips short: 3-6 seconds is usually enough for a production breakdown.
- Avoid decorative clips. Each media item should prove one implemented task.
- Compress GIFs aggressively or use animated WebP when possible.
- Keep still images around 1280px wide unless a detail crop is required.

## Data update

After adding a real asset, update the related `src`, `alt`, and `caption` values in `data/projects.ts`.

Example:

```ts
preview: {
  src: '/media/tactical-hud-preview.gif',
  alt: 'Gameplay GIF showing selected unit state, action cost, and cooldown feedback',
  caption: 'HUD state changes during action selection and command confirmation.'
}
```

The page layout, components, routes, and deployment setup do not need to change when assets are replaced.
