# Alpine Layer

A Nuxt layer for Alpine.js + TypeScript code, built independently of Nuxt's
Vue/Vite pipeline (similar to https://dev.to/wtho/get-started-with-alpinejs-and-typescript-4dgf)
and shipped as a plain static `<script>` bundle.

## Structure

```
layers/alpine/
  nuxt.config.ts        # empty config; marks this dir as a Nuxt layer so its public/ is merged in
  tsconfig.json          # standalone TS config for src/ (DOM lib, no Vue/Nuxt globals)
  build.mjs              # esbuild script: bundles src/main.ts -> public/js/alpine.bundle.js
  src/
    main.ts              # entry point: sets window.Alpine, imports components, calls Alpine.start()
    global.d.ts           # declares the Window.Alpine type
    components/
      counter.ts          # example Alpine.data() component
  public/js/
    alpine.bundle.js      # generated output, served statically (do not edit directly)
    alpine.bundle.js.map
```

## How it works

- Nuxt layers automatically merge each layer's `public/` directory into the
  app's static assets, so anything built into `layers/alpine/public/js/` is
  served as-is (no Vite/Vue processing) at `/js/...`.
- `build.mjs` bundles `src/main.ts` with esbuild into a single IIFE file.
  Minified when `NODE_ENV=production`, with sourcemaps otherwise.
- The root `package.json` runs this via the `build-js` script, which is
  chained into both `dev` and `build` (alongside the existing `build-css`
  step), so the bundle is always regenerated before Nuxt starts/builds.
- `layers/alpine` is added to `extends` in the root `nuxt.config.ts`.

## Adding new Alpine code

Add a new `.ts` file under `src/` (e.g. `src/components/foo.ts`) using
`Alpine.data(...)` / `Alpine.store(...)`, then import it from `src/main.ts`.
Re-run `pnpm run build-js` (or `dev`/`build`) to regenerate the bundle.

## Using the bundle in a page/layout

```ts
useHead({
  script: [{ src: '/js/alpine.bundle.js', defer: true }]
})
```

Or register it globally via `app.head.script` in the root `nuxt.config.ts`.
