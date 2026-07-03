KIZUNA — Scroll Experience & Environment Design Specification v1.0
Core Principle

The homepage is one continuous scene.

It should never feel like multiple pages stacked together.

Instead imagine walking through a Japanese architecture museum where every room has a different atmosphere while the same handcrafted boot remains on display.

The camera, lighting, environment, and background materials change.

The boot stays.

Global Scroll Behaviour
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

Everything uses one GSAP timeline.

No independent animations.

Everything is scroll scrubbed.

scrub:true

ease:none

The animation speed is completely controlled by scrolling.

Persistent Canvas

The biggest performance optimization.

<body>

Navbar

Canvas (fixed)

Sections (HTML)

Footer

</body>

The Three.js Canvas remains fixed.

HTML scrolls.

Camera moves.

Model moves.

Lights move.

No new Canvas.

No remounting.

No multiple WebGL contexts.

HERO
Emotion

Arrival.

Quiet.

Morning.

Minimal.

Environment

Open Japanese gallery.

Nothing behind.

Large negative space.

Background
Warm Washi

↓

Soft Concrete

↓

Morning Mist

No image.

Only CSS.

Layer 1
#F5F2EC
Layer 2

Very subtle paper texture

256px seamless texture

opacity

2%
Layer 3

Noise

0.8%

Barely visible.

Layer 4

Very subtle vignette

5%

Only edges.

Floor

Concrete.

Very light.

Not reflective.

Lighting
HDR Studio

↓

Warm Key

↓

Soft Fill

↓

Tiny Rim

No dramatic shadows.

Camera
Position

0

1.2

5.8

FOV

28°
Boot

Standing naturally.

Very tiny idle motion.

Y

0

↓

2px

↓

0

8 seconds

No rotation.

HERO → PHILOSOPHY

Camera

5.8

↓

4.8

Slow dolly.

Background

Paper becomes slightly warmer.

Opacity changes.

No sudden transition.

Light

Morning

↓

Golden

Typography

Masked reveal.

Opacity only.

Kanji

旅

Appears

3%

opacity.

PHILOSOPHY

Environment

Japanese paper room.

Feels calm.

Background

#EFE9E1

Paper texture.

No gradients.

Camera

15°

Orbit

Boot

Still centered.

Animation

Nothing.

User reads.

PHILOSOPHY → CRAFT

Background slowly darkens.

Paper

↓

Wood.

Camera

Moves left.

15°

↓

35°

Light

Warmer.

CRAFT

Emotion

Workshop.

Environment

Inspired by

Japanese woodworking.

Not literal.

No tables.

No tools.

Only atmosphere.

Background

Dark Cedar

#72543C

Wood texture

512px seamless

opacity

3%

Light

Amber.

Directional.

Highlights leather.

Camera

Moves close.

Leather fills 70%

viewport.

Boot

No movement.

Camera explores.

Texture emphasis

Leather

↓

Stitching

↓

Laces

↓

Metal Hooks
CRAFT → MATERIALS

Wood fades.

Darkness increases.

Light

Narrows.

Spotlight appears.

Camera

Rotates

35°

↓

90°
MATERIALS

Emotion

Museum.

Background

Charcoal

#1B1A1A

Noise

2%

Floor

Invisible.

Lighting

Single spotlight.

Boot

Rotates slowly.

90°

Callouts

Thin bronze lines.

No arrows.

No cards.

Labels fade.

Leather

Rubber

Metal

Membrane
MATERIALS → ENGINEERING

Background

Stone.

Light

Cooler.

Camera

Moves downward.

ENGINEERING

Emotion

Precision.

Environment

Architectural stone.

Background

Slate

#444340

Tiny stone texture.

512px

opacity

2%

Camera

Low angle.

Reveal Sole

Light

Top-down.

Typography

Huge.

耐久性

Durability

Looks engraved.

Animation

Small highlight across tread.

ENGINEERING → TERRAIN

Background becomes colder.

Fog

Appears.

TERRAIN

Emotion

Adventure.

Environment

Fog.

Nothing else.

No mountain.

No trees.

Just atmosphere.

Background

Grey

↓

Mist

↓

Soft Horizon

Created using CSS radial overlays.

Boot

Rotates

15°

Light

Morning.

TERRAIN → COLLECTION

Fog disappears.

Background

Brightens.

COLLECTION

Emotion

Gallery.

Background

Concrete.

Warm.

Floor

Pedestal.

Three platforms.

Boot

Hero

Large.

Others

Smaller.

Lighting

Gallery.

Neutral.

COLLECTION → LEGACY

Background

Paper.

Again.

Feels like returning home.

Camera

Moves backwards.

LEGACY

Emotion

Respect.

Background

Japanese plaster wall.

Very subtle.

Texture

512px

opacity

2%

Boot

Static.

No motion.

Typography

Large.

Minimal.

LEGACY → CONTACT

Everything darkens.

Boot

Becomes silhouette.

CONTACT

Emotion

Night Gallery.

Background

Almost black.

#171717

Texture

Paper grain.

256px

2%

Spotlight

Only on form.

Boot

Backlit.

FOOTER

Background

Charcoal paper.

Logo

Large.

Boot

Opacity

100

↓

10

Camera

Stops.

Camera Path
Wide

↓

Closer

↓

Orbit

↓

Leather

↓

Side

↓

Sole

↓

Three Quarter

↓

Wide

Never spins.

Never teleports.

Light Progression
Morning

↓

Golden

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

↓

Night

Everything feels natural.

Texture Library
Material	Resolution	Opacity	Usage
Washi Paper	256×256	2%	Hero, Philosophy, Legacy
Fine Paper Grain	256×256	1%	Light sections
Cedar Grain	512×512	3%	Craft
Slate Stone	512×512	2%	Engineering
Concrete	512×512	2%	Collection
Charcoal Grain	256×256	2%	Contact, Footer

These are tileable textures applied with CSS backgrounds, not full-screen images.

GSAP Behaviour

One master timeline drives:

Camera position
Camera target
Model rotation (only where needed)
Light intensity
Environment intensity
HTML opacity
HTML translateY
Section pinning

Each chapter occupies approximately one viewport height, with the Hero, Craft, and Materials sections pinned slightly longer (about 150–200% of the viewport height) to let users appreciate the model and textures. Transitions between chapters should overlap by 10–20% so the experience feels continuous rather than segmented.

Lighthouse Optimization Checklist

To preserve 95–100 Performance while delivering a premium experience:

One persistent WebGL canvas for the homepage.
Compressed .glb model (Draco or Meshopt).
KTX2/BasisU compressed textures derived from the existing 2K maps.
Maximum of 3–4 dynamic lights; rely on HDRI and baked materials.
CSS-based background textures instead of large bitmap backgrounds.
No video backgrounds or full-screen canvas effects.
Lazy-load secondary routes and non-critical assets.
Animate only transform, opacity, camera properties, and light intensity.
Disable continuous rendering when idle where practical.
Provide a reduced-motion mode that replaces camera moves with simple fades.

The end result should feel like walking through a series of carefully lit architectural spaces where the environment evolves around the boot, rather than a website that swaps between disconnected sections. That cohesion is what creates the premium impression while remaining technically efficient.