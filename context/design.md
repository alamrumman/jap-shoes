DESIGN EXPERIENCE DOCUMENT (DED v1.0)
KIZUNA (絆)
The Digital Flagship of a Japanese Heritage Outdoor Footwear Brand
Core Design Philosophy

The website should never feel like a commercial shoe website.

Instead it should feel like entering a carefully curated Japanese exhibition where a single handcrafted boot tells a story about craftsmanship, engineering and nature.

The boot is never just displayed.

It is explored.

Every section changes the surrounding environment while the boot remains the central artifact.

The experience should be calm, immersive and cinematic.

Design Principles
Japanese Simplicity

Every screen should follow these principles.

Large negative space
Strong typography
Minimal UI
Slow movement
Soft lighting
Natural materials
Editorial composition

Nothing should feel busy.

Nothing should compete with the boot.

Global Background Philosophy
Never use

❌ Gradients

❌ Glassmorphism

❌ Neon

❌ Colorful backgrounds

❌ Animated particles

❌ Video backgrounds

❌ Huge texture images

❌ Large HDRI skies

Everything should be created using:

Solid colors
Tiny seamless textures
Carefully positioned lights
CSS overlays
HDR lighting inside Three.js

This produces a premium look while maintaining excellent Lighthouse scores.

Background Material Library

The website only uses five material families.

01 — Washi Paper

Usage

Hero
Philosophy
About

Color

#F5F1EB

Texture

Extremely subtle handmade paper.

Opacity

2%

Implementation

A 256×256 seamless paper texture tiled with CSS rather than a full-screen image.

This adds depth with virtually no performance cost.

02 — Concrete Gallery

Used for

Hero pedestal
Collection
CTA

Appearance

Warm architectural concrete.

Soft shadows.

Minimal imperfections.

No visible cracks.

Color

#D7D1C7

Implementation

A tiny seamless concrete texture (512×512 max) repeated via CSS.

03 — Cedar Wood

Used for

Craftsmanship

Color

#87664B

Texture

Very fine wood grain.

Opacity

4%

Only enough to create warmth.

04 — Slate Stone

Used for

Engineering

Color

#4B4A48

Texture

Very subtle matte stone.

Almost invisible.

05 — Charcoal Paper

Used for

Footer
Contact

Color

#181818

Texture

Soft grain.

Almost black.

Museum-like.

The 3D Model Philosophy

The boot is the permanent visual anchor.

It should never disappear for most of the homepage.

Instead,

The environment changes around it.

Hero

Background

Large open exhibition space.

Soft morning light.

Warm stone floor.

Light paper wall.

Very subtle atmospheric haze.

Centerpiece

Concrete pedestal.

The boot stands naturally.

Never floating.

Lighting

Warm HDR studio.

Large softbox from left.

Weak rim light.

Tiny contact shadow.

Camera

Slight perspective.

Eye-level.

Animation

Very slow breathing motion.

Position Y

0

↓

2px

↓

0

Duration

8 seconds

No rotation.

The boot feels heavy.

Transition One

As scrolling begins

The pedestal slowly fades.

The camera moves closer.

The environment darkens slightly.

The user feels as if they are walking toward the exhibit.

Philosophy Section

Background

Washi paper.

Warm daylight.

Large Japanese typography in the background.

Opacity

4%

Boot Position

Still centered.

Camera moves

5°

↓

15°

Nothing else moves.

Typography appears using opacity and masking.

Transition Two

Light temperature becomes warmer.

Background slowly transforms from paper into cedar.

No sudden color changes.

Craftsmanship

Environment

Japanese workshop.

Not literal.

Only the feeling.

Background

Dark cedar.

Very subtle wood grain.

The boot becomes much larger.

Camera focuses on

leather
stitching
lace hooks

The leather should occupy almost the full viewport.

No exploded diagrams.

Everything remains elegant.

Transition Three

Camera rotates around the heel.

Environment becomes darker.

Spotlight narrows.

Materials

Background

Museum room.

Almost black.

Spotlight.

The boot rotates

45°

Very slowly.

Callouts fade in.

Leather

↓

Rubber

↓

Metal Hardware

↓

Waterproof Membrane

Callouts use thin lines.

No arrows.

No glowing UI.

Transition Four

Camera moves downward.

Background changes into slate.

The lighting becomes cooler.

Engineering

This section celebrates functionality.

Camera

Low angle.

Reveal sole.

Reveal grip.

Reveal construction.

Background

Matte stone.

Large typography

耐久性

Durability

The text feels engraved.

Transition Five

Camera returns upward.

Background slowly brightens.

Collection

Background

Minimal concrete gallery.

Three simple pedestals.

Nothing else.

Variants

Brown.

Black.

Sand.

The hero boot remains larger.

Other boots stay secondary.

Transition Six

Background fades into soft paper again.

Camera slowly pulls back.

Legacy

Background

Japanese architecture.

Minimal shadows.

No photography.

Only abstract walls.

The boot becomes static.

Like an exhibit.

Contact

Background

Almost black.

One spotlight.

Boot becomes silhouette.

Typography becomes dominant.

Footer

Background

Charcoal paper.

Large logo.

Very subtle grain.

Boot fades into darkness.

Lighting System

Only four lighting setups exist.

Morning

Hero

Warm sunlight.

Workshop

Craft

Amber.

Museum

Materials

Neutral.

Night Gallery

Footer

Cool.

Very soft.

Never use colorful lighting.

Camera Language

The camera never teleports.

It always interpolates.

Sequence

Wide

↓

Closer

↓

Leather

↓

Side

↓

Heel

↓

Sole

↓

Wide

The visitor feels like walking around the exhibit.

Typography Interaction

Typography never flies.

Instead

Fade

Mask

Translate

Maximum

30px
Japanese Graphics

Large Kanji.

Opacity

3–5%

Placed behind typography.

Never decorative clutter.

Examples

匠

旅

和

自然

耐久
Motion System

Allowed

✓ Camera Dolly

✓ Camera Orbit

✓ Opacity

✓ Light Intensity

✓ Small Rotation

✓ Scale (2–4%)

✓ Scroll Scrubbing

Forbidden

✕

Bounce

✕

Elastic

✕

Large Rotations

✕

Infinite Spins

✕

Floating Cards

✕

Parallax Everywhere

Performance Strategy (95–100 Lighthouse)
Three.js
One persistent <Canvas> across the homepage.
Use an optimized .glb with Draco or Meshopt compression.
Keep the original 2K textures; compress them to KTX2/BasisU for GPU-efficient loading.
Bake lighting into textures where possible instead of adding multiple dynamic lights.
Pause rendering when the canvas is off-screen or the tab is inactive.
Use demand-based rendering (frameloop="demand") where continuous animation isn't needed.
Backgrounds
Backgrounds are CSS-driven, not image-driven.
Use tiny seamless textures (256–512 px) repeated with low opacity.
No videos, animated gradients, or large PNG overlays.
Use CSS noise and subtle overlays to create depth.
Images
AVIF first, WebP fallback.
Lazy-load everything below the fold.
Responsive srcset for different screen sizes.
JavaScript
Route-level code splitting.
Lazy-load secondary pages (About, Contact, Terms, Privacy).
Defer analytics and non-essential scripts.
Tree-shake unused dependencies.
CSS
Avoid expensive filters like large blur() effects.
Animate only transform and opacity.
Use CSS variables for theming to reduce duplication.
Accessibility
Respect prefers-reduced-motion by disabling camera motion and using simple fades.
Ensure sufficient contrast on every background.
Keep semantic HTML outside the 3D canvas.
Emotional Journey

The user should feel a progression rather than a sequence of pages:

Arrival

↓

Curiosity

↓

Discovery

↓

Craft

↓

Engineering

↓

Respect

↓

Legacy

↓

Reflection

The boot remains the constant throughout this journey. Every change comes from the environment, camera, light, and typography—not from excessive visual effects. This approach creates a distinctive, premium experience while keeping the implementation lightweight enough to achieve Lighthouse scores in the 95–100 range.
