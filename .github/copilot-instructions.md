# GitHub Copilot Instructions

## Project Overview

This is Nana Yaw's personal portfolio website built with Nuxt 2, Vue 2, and TypeScript. The site showcases software engineering skills with a focus on Kotlin, Swift, Scala, and Python.

## Tech Stack

- **Framework**: Nuxt 2.15.3 (Vue 2)
- **Language**: TypeScript
- **Styling**: Tailwind CSS (PostCSS7 compat) + SCSS
- **Fonts**: DM Sans (primary), Monaco (code/monospace)
- **Animation**: GSAP 3
- **Testing**: Jest 26 + @vue/test-utils v1
- **Node**: v18.20.8 (requires `NODE_OPTIONS=--openssl-legacy-provider`)

## Code Style & Best Practices

### General

- Follow industry-standard patterns without over-engineering
- Keep components simple and focused
- Remove unused imports, commented code, and dead code
- Use meaningful variable and function names
- Add JSDoc comments only for complex functions

### Vue/Nuxt Conventions

- Use Vue 2 Composition API patterns: `Vue.extend()`
- Prefer `mounted()` over `created()` for DOM access (e.g., `this.$children`)
- Use `v-show` for conditional rendering with frequent toggles
- Use TypeScript type annotations for method parameters
- Component files: `<template>` → `<script>` → `<style>`

### GSAP Animations

- Import: `import gsap, { Power2 } from 'gsap'`
- Use `gsap.from()` and `gsap.to()`, NOT deprecated `TweenMax`
- Always cast refs to `Element` when using with GSAP: `this.$refs.foo as Element`

### Testing

- Use `mount()` for components that access `$children` (parent components)
- Use `shallowMount()` for isolated component tests
- Always `await wrapper.vm.$nextTick()` after mutations that affect DOM
- Test file pattern: `ComponentName.spec.js`
- Place test files in `/test` directory

### Styling

- Primary font: DM Sans (body, headings)
- Monospace font: Monaco (code blocks only)
- Use Tailwind utilities first, custom SCSS for complex patterns
- Scoped styles in components: `<style lang="scss" scoped>`
- Global styles in `/assets/styles/scss/`

### File Organization

```
components/       → Reusable Vue components
pages/           → Nuxt page components (routes)
layouts/         → Page layouts
assets/
  ├─ css/        → Main entry point
  ├─ styles/scss/→ SCSS partials
  ├─ svg/        → SVG assets
  └─ fonts/      → Custom fonts
static/          → Static assets (PDFs, favicon, etc.)
plugins/         → Vue plugins
test/            → Jest tests
```

## Common Patterns

### Component with GSAP Animation

```vue
<script lang="ts">
import Vue from 'vue'
import gsap, { Power2 } from 'gsap'

export default Vue.extend({
  mounted() {
    const element = this.$refs.myRef as Element
    gsap.from(element, {
      duration: 0.7,
      y: 50,
      autoAlpha: 0,
      ease: Power2.easeOut,
    })
  },
})
</script>
```

### Tab Component Pattern

Parent (`SkillSetTabs.vue`) manages `tabs` array via `this.$children` in `mounted()`, child (`SkillSetTab.vue`) controls visibility via `isActive` data property.

## Known Issues & Constraints

- **Path with spaces**: Project path contains a space — avoid `node-gyp` native builds
- **Node version**: Must use Node 18.20.8 with `NODE_OPTIONS=--openssl-legacy-provider`
- **PostCSS**: Locked to v7 for Tailwind CSS PostCSS7 compat
- **Build failures**: `deasync`/`fibers` native compilation fails due to path issue

## Development Commands

```bash
yarn dev        # Start dev server
yarn build      # Production build
yarn generate   # Static site generation
yarn test       # Run Jest tests
yarn lint       # ESLint + Stylelint
```

## Git Workflow

- Conventional commits: `chore:`, `feat:`, `fix:`, etc.
- Husky pre-commit: runs lint-staged (ESLint + Stylelint + Prettier)
- Commitlint enforces conventional commit format

## Accessibility & SEO

- Always include `alt` attributes on images
- Use semantic HTML (`<main>`, `<aside>`, `<nav>`)
- Include `aria-label` for icon-only links
- Meta tags configured in `nuxt.config.js`

## When Making Changes

1. Check for existing patterns before creating new ones
2. Update tests when modifying component behavior
3. Run `yarn lint --fix` before committing
4. Ensure `yarn test` passes
5. Test both homepage (`/`) and skills page (`/language-skill`)
