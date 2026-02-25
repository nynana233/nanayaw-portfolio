# Components

Reusable Vue components used throughout the website.

## Components

### Logo.vue
Default Nuxt logo component (not currently used in app, kept for testing).

### SkillSetTab.vue
Individual tab pane for skills showcase. Controls visibility via `isActive` data property.

**Props:**
- `src` (String, required): Icon filename
- `selected` (Boolean, optional): Initial active state

### SkillSetTabs.vue
Tab navigation component. Manages child tabs via `this.$children` in `mounted()`.

### SocialMedia.vue
Fixed sidebar with social media links (LinkedIn, GitHub). Uses GSAP for entrance animation.
