GLOBAL MASTER PROMPT
You are a Senior Creative Frontend Engineer at an award-winning digital agency.

You are building the digital flagship website for a fictional Japanese outdoor heritage footwear brand named KIZUNA (絆).

The website is NOT ecommerce.

It is NOT a landing page.

It is an immersive digital museum showcasing craftsmanship.

The user should feel like they are walking through a Japanese architecture exhibition while exploring a handcrafted leather boot.

Everything must feel calm, intentional and premium.

Inspired by

• Snow Peak
• Muji
• Issey Miyake
• Aesop
• Japanese Museums
• Japanese Architecture
• Apple Product Storytelling
• Leica
• Rimowa

Avoid

❌ Startup UI

❌ SaaS cards

❌ Floating gradients

❌ Glassmorphism

❌ Neon

❌ Huge shadows

❌ Over animations

❌ Random motion

❌ Cartoon effects

Use

✓ Large whitespace

✓ Editorial layouts

✓ Japanese typography

✓ Slow animations

✓ Architectural compositions

✓ Natural materials

✓ HDR lighting

✓ Premium photography

✓ Clean code

Technical Stack

React

Vite

TypeScript

TailwindCSS

GSAP

ScrollTrigger

Lenis

React Three Fiber

Drei

React Router

Performance

Performance Score
95-100

Accessibility
100

SEO
100

Best Practices
100

One persistent Canvas.

One Camera.

One HDR Environment.

Never recreate the canvas.

Everything scroll driven.

Never autoplay unnecessary animations.

Only animate

Transform

Opacity

Camera

Light intensity

Everything responsive.

Japanese first.

English second.
WEBSITE SCROLL EXPERIENCE
Hero

↓

Arrival

↓

Philosophy

↓

Craft

↓

Materials

↓

Engineering

↓

Terrain

↓

Collection

↓

Legacy

↓

Contact

↓

Footer

One continuous journey.

Never separate pages visually.

Background morphs.

Camera moves.

Model stays.

3D MODEL RULES
Model Format

GLB

Compression

Draco

Textures

2048

Lighting

HDR

Canvas

Persistent

Render

Demand Rendering

Shadows

Contact Shadows

Tone Mapping

ACES Filmic

Environment

HDR Studio

Model never spins.

Model never floats.

Only

Tiny breathing animation

2px

8 seconds

CAMERA RULES

Default

Position

0

1.2

5.8

Target

Boot Center

FOV

28°

Never exceed

35°

Camera always interpolates.

Never teleports.

SECTION 01
HERO
Goal

Immediately communicate

Japanese craftsmanship.

Silence.

Premium quality.

Timeless engineering.

## Layout

Logo

Navbar

---

Japanese Heading

English Heading

Description

CTA

                     Boot

---

Scroll Indicator

---

Boot occupies

55%

Typography

45%

Background

Warm Washi

#F5F2EC

Layer 1

Solid background

Layer 2

Paper texture

256x256

Opacity

2%

Layer 3

Noise

1%

Layer 4

Vignette

5%

No gradients.

Floor

Concrete.

Very soft.

Large circular pedestal.

No reflections.

Camera
Position

0

1.2

5.8

Target

Boot

FOV

28°
Boot

Standing.

Not floating.

Tiny breathing animation.

0px

↓

2px

↓

0px

Duration

8 seconds

Infinite
Lighting

Warm HDR

Key

Left

Fill

Front

Rim

Behind

Soft Contact Shadows

Scroll Behaviour

When user scrolls

Camera

5.8

↓

4.8

Slow dolly.

No rotation.

Text moves

Opacity

0→1

TranslateY

20px

Boot remains static.

Japanese Typography

Large

旅

Journey Begins

Sub

Crafted for Every Path.
Performance

No videos.

No particles.

No large PNG.

Only CSS textures.

Deliverables

Hero.tsx

Hero.module.css

HeroAnimation.ts

Responsive

Accessibility

SECTION 02
PHILOSOPHY
Goal

Introduce

Japanese philosophy.

Silence.

Craftsmanship.

Background

Paper

#EFE8DF

Texture

Paper

256

Opacity

2%

Large faded Kanji

和

Opacity

4%
Camera

Orbit

15°

Very slowly.

Lighting

Slightly warmer.

Morning becomes

Golden.

Boot

Still center.

No movement.

Camera only.

Scroll Behaviour

Paper slowly becomes warmer.

Typography reveals using

Mask

Opacity

TranslateY

Maximum

20px

Layout

Large heading.

Small editorial paragraph.

Large whitespace.

Performance

No background image.

Only CSS texture.

Deliverables

Responsive

Accessible

Semantic HTML

SECTION 03
CRAFTSMANSHIP
Goal

Show

Leather.

Stitching.

Handmade quality.

Background

Japanese cedar.

#73543E

Texture

512

Opacity

3%

Very subtle.

Camera

Moves close.

Leather fills

70%

Viewport
Lighting

Amber.

Workshop.

Warm.

Highlights stitching.

Boot

No animation.

Camera explores.

Scroll Behaviour

Camera

15°

↓

35°

Moves around leather.

Slow zoom.

Typography

Large

匠

Subheading

"The beauty of precision."

Japanese first.

English second.

Texture Focus

Leather

↓

Stitching

↓

Metal Hooks

↓

Laces

Animation

Only

Opacity

Mask

Camera

Performance

Reuse existing canvas.

Reuse HDR.

No new lights.

No new model.

Deliverables

Craft.tsx

Animations.ts

Responsive Layout

Accessibility

Performance Notes

END OF PART 01

SECTION 04
MATERIALS

## Goal

Transform the experience from craftsmanship into a premium museum exhibition.

The user should now appreciate the materials rather than the construction.

The boot becomes an artifact.

---

## Emotion

Luxury

Silence

Respect

Museum

---

## Background

Transition smoothly from warm cedar into a charcoal exhibition room.

Background Color

#1B1A1A

Layer 01

Solid charcoal

Layer 02

Paper grain

256x256

Opacity 2%

Layer 03

Very subtle vignette

5%

Do NOT use gradients.

Do NOT use black.

Everything should remain slightly warm.

---

## Lighting

Remove warm workshop lighting.

Replace with

Studio Spotlight

Intensity

2.5

Fill

0.5

Very soft rim light

No colorful lighting.

No bloom.

---

## Camera

Position

(0.8,1.3,4.4)

Target

Boot Center

FOV

26°

Slow orbit

35°

↓

65°

Duration

Entire section

---

## Boot

Model remains fixed.

No idle animation.

Only camera moves.

---

## Scroll Behaviour

Section begins

↓

Background fades to charcoal

↓

Camera slowly orbits

↓

Light narrows

↓

Material labels appear

↓

Camera reaches side profile

↓

Section ends

Everything is controlled using one GSAP timeline.

---

## Material Callouts

Leather

天然皮革

Rubber Sole

天然ゴム

Metal Hardware

金属金具

Waterproof

防水構造

Callouts use

1px bronze lines

No cards

No floating tooltips

---

## Typography

Japanese Heading

素材

English

Materials

Large editorial heading

Maximum width

600px

Lots of whitespace.

---

## Motion

Fade

Opacity

TranslateY

20px

Never bounce.

---

## Performance

Reuse existing canvas.

Reuse HDR.

No additional environments.

No duplicated lights.

No unnecessary re-renders.

Target Lighthouse

95-100.
SECTION 05
ENGINEERING

## Goal

Celebrate durability and engineering.

The visitor should now admire how the boot is built.

Not fashion.

Engineering.

---

## Emotion

Precision

Strength

Confidence

---

## Background

Slate Stone

#454441

Texture

512px

Stone

Opacity

2%

No reflections.

---

## Lighting

Cool neutral

HDR remains

Reduce warm tint

Top directional light

Fill

Very soft

---

## Camera

Move lower.

Position

(0,0.6,3.8)

Target

Sole

FOV

24°

Reveal tread.

---

## Scroll Behaviour

Camera lowers.

↓

Boot becomes dominant.

↓

Large typography slides.

↓

Camera slowly tilts upward.

↓

Return to center.

---

## Boot

Remain static.

Camera explores.

Never rotate model.

---

## Typography

耐久性

Durability

防滑

Grip

保護

Protection

Large Japanese.

Tiny English.

---

## Animation

Mask Reveal

Opacity

Camera Dolly

Light Intensity

Nothing else.

---

## Background

Feels like polished architectural stone.

No mountains.

No outdoors.

Keep premium.

---

## Performance

No videos.

No particles.

No HDR changes.

Minimal JavaScript.

SECTION 06
TERRAIN

## Goal

Suggest exploration without literally showing nature.

The imagination should complete the story.

---

## Emotion

Journey

Adventure

Calm

Freedom

---

## Background

Fog.

Soft horizon.

Nothing else.

No forests.

No mountains.

No rivers.

Use CSS radial overlays.

Colors

#CBC7C1

↓

#D8D4CE

↓

#E7E2DA

Fog

Opacity

8%

---

## Lighting

Morning.

Soft.

Neutral.

Low contrast.

---

## Camera

Position

(-0.5,1.0,4.8)

FOV

30°

Slight left angle.

---

## Boot

Rotate

15°

Entire section.

Very slow.

Only once.

---

## Scroll Behaviour

Fog appears.

↓

Background brightens.

↓

Camera moves left.

↓

Boot rotates 15°.

↓

Typography fades.

↓

Fog slowly disappears.

Everything scrubbed.

---

## Typography

旅

Journey

どこまでも

Where Every Path Begins

Editorial.

Minimal.

---

## Animation

Opacity

TranslateY

20px

Camera

Very slow.

No scaling.

---

## Performance

Fog created using CSS.

Never canvas particles.

Never video.

SECTION 07
COLLECTION

## Goal

Display product variations like a museum exhibition.

Never look like an ecommerce grid.

---

## Emotion

Gallery

Architecture

Luxury

---

## Background

Architectural concrete.

#DDD7CF

Texture

Concrete

512px

Opacity

2%

---

## Layout

Three pedestals.

Center boot

Largest.

Side boots

Smaller.

No pricing.

No buttons.

No product cards.

---

## Lighting

Neutral gallery lighting.

Very soft.

Shadow beneath each pedestal.

---

## Camera

Starts

Wide

↓

Moves to center

↓

Moves right

↓

Returns

Entire section

---

## Scroll Behaviour

Pedestals fade in.

↓

Camera moves.

↓

Japanese labels appear.

↓

Pedestal lights brighten.

↓

Camera returns.

---

## Typography

黒

Black Edition

砂

Sand Edition

革

Leather Edition

Japanese first.

English second.

---

## Motion

Only camera.

Opacity.

No spinning products.

No hover rotation.

---

## CTA

Explore Legacy

Instead of

Shop Now

---

## Performance

All boots share same geometry.

Different material instances.

No duplicate models.

Keep GPU memory low.

GLOBAL TRANSITIONS
Hero

↓

Paper

↓

Workshop

↓

Museum

↓

Engineering

↓

Fog

↓

Gallery

Never jump.

Everything crossfades.

Duration

0.8–1.5 seconds

Scroll Scrub

true

Ease

none

Entire homepage uses one master GSAP timeline.

Camera always interpolates.

Lighting always interpolates.

Background colors always interpolate.

The user should never notice section boundaries.

They should feel like they are walking through different rooms of the same Japanese exhibition.
PERFORMANCE RULES
One Canvas.

One Camera.

One HDR.

One Scene.

One Boot.

No duplicated WebGL.

No unnecessary state updates.

No React re-renders.

Lazy load secondary pages.

Use AVIF images.

Use WebP fallback.

Use compressed GLB.

Use KTX2 textures.

Only animate transform and opacity.

Keep JavaScript below 250 KB (excluding 3D assets).

Maintain Lighthouse

Performance 95+

Accessibility 100

SEO 100

CLS under 0.05

LCP under 2.5s

INP under 200ms
PART 03 — KIZUNA_MASTER_BUILD_GUIDE.md
SECTION 08
LEGACY

## Goal

Create an emotional ending that tells the story behind KIZUNA. The section should feel like walking into a quiet Japanese archive where history, philosophy and craftsmanship come together. The boot is no longer a product but a symbol of decades of dedication.

---

## Emotion

Respect

Legacy

Silence

Tradition

Reflection

---

## Background

Transition from concrete gallery into warm handmade Washi paper.

Color

#F4EFE8

Layer 01
Solid color

Layer 02
256x256 paper texture

Opacity
2%

Layer 03
Very subtle architectural shadow using CSS radial gradients.

No photos.

No illustrations.

No patterns.

---

## Camera

Position

(0,1.2,5.5)

Target

Boot Center

FOV

30°

Slowly dolly backwards through entire section.

---

## Boot

Stop all idle movement.

Boot becomes completely still.

Feels like an exhibit.

---

## Lighting

Warm museum lighting.

Reduce contrast.

Soft ambient fill.

Very subtle rim light.

---

## Scroll Behaviour

Camera slowly moves backwards.

↓

Typography fades in.

↓

Large Kanji appears.

↓

Background becomes brighter.

↓

Boot remains perfectly still.

---

## Typography

伝統

Legacy

"Built for generations, not seasons."

Large editorial layout.

Maximum content width 650px.

---

## Motion

Opacity

Mask Reveal

TranslateY 20px

No scaling.

No rotations.

No bounce.

---

## Performance

Reuse all existing assets.

No new lights.

No new HDR.

No new models.
SECTION 09
ABOUT PAGE

## Goal

Design a premium editorial About page inspired by Muji, Snow Peak and Japanese architecture books.

This page should feel like reading a beautifully designed magazine rather than a corporate website.

---

## Layout

Large editorial typography.

Alternating image/text blocks.

Huge whitespace.

Vertical rhythm.

No cards.

---

## Hero

Large Japanese heading.

Small English subtitle.

Boot appears in background at 10% opacity.

---

## Background

Warm Washi paper.

Paper texture

256px

Opacity

2%

---

## Sections

Brand Philosophy

Craftsmanship

Materials

Workshop

Design Process

Sustainability

Future Vision

---

## Motion

Each section fades upward.

20px translate.

Image parallax

Maximum

30px

---

## Performance

Lazy load all images.

Use AVIF.

Semantic HTML.

SEO optimized.

Structured data.

Perfect Lighthouse.

SECTION 10
CONTACT PAGE

## Goal

Create an elegant minimalist contact experience.

Avoid corporate forms.

The page should feel calm and premium.

---

## Background

Charcoal paper

#181818

Paper grain

256px

Opacity

2%

---

## Layout

Left

Contact Form

Right

Large boot silhouette

Single spotlight

---

## Camera

Boot

Side profile

Static.

---

## Lighting

Single top spotlight.

Soft contact shadow.

---

## Form

Name

Email

Subject

Message

Japanese labels.

English placeholder.

Minimal underline inputs.

No rounded fields.

---

## Motion

Input underline expands on focus.

Labels fade.

Submit button slides 4px.

Very subtle.

---

## Performance

No maps.

No embedded Google Maps.

No unnecessary scripts.

Use lightweight SVG icons.

SECTION 11
PRIVACY POLICY

## Goal

Create an editorial legal page that feels consistent with the rest of the brand.

---

## Background

Warm paper.

Minimal.

---

## Typography

Japanese headings.

English body.

Excellent readability.

Maximum width

850px.

---

## Motion

None.

Only fade page transition.

---

## Performance

Pure HTML.

Semantic.

SEO.

Accessible.

SECTION 12
TERMS & CONDITIONS

## Goal

Design a premium legal document rather than a generic template.

Maintain the same editorial spacing and typography used across the website.

---

## Background

Off-white paper.

No textures beyond subtle paper grain.

---

## Typography

Large Japanese section titles.

English content.

Consistent hierarchy.

---

## Motion

Minimal fade on page load.

No scroll animations.

---

## Performance

No JavaScript required beyond global layout.

SECTION 13
FOOTER

## Goal

End the experience quietly.

The footer should feel like the lights of the exhibition slowly turning off.

---

## Background

Charcoal handmade paper.

#161616

Paper grain

256px

Opacity

2%

---

## Boot

Opacity

100%

↓

10%

Slow fade.

No movement.

---

## Layout

Logo

Navigation

Contact

Social

Privacy

Terms

Copyright

Minimal.

---

## Lighting

Very soft ambient.

Almost dark.

---

## Typography

Japanese logo.

English footer links.

Muted colors.

---

## Motion

Links

Underline expands.

Opacity changes.

No scaling.

No glow.

GLOBAL ANIMATION SYSTEM
Animation Language

Everything should feel like breathing.

Never exciting.

Never playful.

Use only

Opacity

Transform

Camera

Light

Rotation

Maximum translate

30px

Maximum scale

1.03

Maximum rotation

15°

Never bounce.

Never elastic.

Never overshoot.

GSAP

ScrollTrigger

scrub:true

ease:"none"

pin sections only when necessary.

Lenis controls all scrolling.

CAMERA JOURNEY
Hero

(0,1.2,5.8)

↓

Philosophy

Orbit 15°

↓

Craft

Close leather

↓

Materials

45° Side

↓

Engineering

Low Sole

↓

Terrain

Left 15°

↓

Collection

Wide Gallery

↓

Legacy

Pull Back

↓

Footer

Static
LIGHTING JOURNEY
Morning

↓

Golden

↓

Workshop Amber

↓

Museum Spotlight

↓

Cool Slate

↓

Fog Morning

↓

Neutral Gallery

↓

Warm Legacy

↓

Dark Gallery
BACKGROUND JOURNEY
Hero

Warm Washi

↓

Paper

↓

Cedar

↓

Museum Charcoal

↓

Slate Stone

↓

Fog

↓

Concrete Gallery

↓

Paper

↓

Charcoal
JAPANESE MICRO-DETAILS
Use Japanese vertically where appropriate.

Examples

旅

匠

和

自然

耐久

革

Keep opacity below 5%.

Never decorative clutter.

Every English heading should have a Japanese counterpart.

Buttons

Discover Collection

↓

コレクションを見る

Contact

↓

お問い合わせ

About

↓

会社概要
FINAL QA CHECKLIST
✓ Lighthouse Performance 95-100

✓ Accessibility 100

✓ SEO 100

✓ Best Practices 100

✓ Responsive Desktop

✓ Responsive Tablet

✓ Responsive Mobile

✓ One Persistent Canvas

✓ One HDR

✓ One Camera

✓ No Memory Leaks

✓ No Layout Shift

✓ Lazy Loaded Assets

✓ Semantic HTML

✓ Keyboard Navigation

✓ ARIA Labels

✓ AVIF Images

✓ Compressed GLB

✓ KTX2 Textures

✓ Route Code Splitting

✓ Tree Shaking

✓ Reduced Motion Support

✓ No Console Errors

✓ Production Build Optimized

✓ Smooth 60 FPS on modern hardware

✓ No unnecessary dependencies
ONE FINAL SUGGESTION (This will make the site feel world-class)

Right now, your guide is around an 8.5/10 for premium quality.

The single biggest upgrade would be to make the homepage feel like one uninterrupted pinned cinematic sequence rather than independent sections.

Instead of:

Hero
↓
Philosophy
↓
Craft
↓
Materials
