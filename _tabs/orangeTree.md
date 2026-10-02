---
layout: page
title: Orange Garden 🍊
permalink: /projects/orangeTree/
order: 4
---

Orange Garden is a calm task tracker where every project grows into an impressionist tree: tasks bloom as blossoms, turn gold when started and ripen orange when done. It began as a pixel-art side project called Orange Tree, and this is the story of building it twice.

Live at [myorangetree.web.app](https://myorangetree.web.app).

<div class="project-video">
  <video width="100%" controls muted playsinline loop preload="metadata" poster="/assets/img/projects/orangeTree/v2/01-garden.png">
    <source src="/assets/img/projects/orangeTree/v2/walkthrough.webm" type="video/webm">
  </video>
  <p><em>A 20-second walkthrough of Orange Garden</em></p>
</div>

## The Why
Most productivity apps look generic and largely the same. I wanted my own task app, one I could use right away and actually enjoy opening.

Around then I watched a talk by Jenny Wen, Anthropic's Design Lead, about [not trusting the process](https://www.youtube.com/watch?v=4u94juYwLLM). The textbook path (research, interviews, endless whiteboarding, then the perfect app) is often just an idealised blueprint. So I set out to build on drive, intuition and fun instead, and see where that led.

## Version 1: Orange Tree
The spark was simple: **what if Jira were a bit more fun?** I love orange trees, how bright round fruit lights up green foliage and flowers turn into oranges. That life cycle became the metaphor: flowers for tasks not started, green oranges for tasks in progress, ripe oranges for tasks done.

I sketched rough wireframes on paper, messy but enough to get moving. Then I set up Firebase for data and went straight into React, CSS and Vite.

<div class="project-hero-image">
  <img src="/assets/img/projects/orangeTree/wireframeSketch.jpg" alt="Quick sketch on paper: a lo-fi wireframe" class="project-image">
  <p><em>Fig 1: Quick sketch on paper of a super lo-fi wireframe</em></p>
</div>

I wanted it playful and colourful but also rustic and cozy, so I chose pixel art. I designed backgrounds, trees and UI components in Figma.

<div class="image-gallery">
  <div class="image-item image-item--auto">
    <img src="/assets/img/projects/orangeTree/bg_draft_pixelated.png" alt="Creating pixel art in Figma" class="project-image project-image--tile">
    <p><em>Fig 2: Creating pixel art in Figma</em></p>
  </div>
  <div class="image-item image-item--auto">
    <img src="/assets/img/projects/orangeTree/bg_draft.png" alt="Background draft" class="project-image project-image--tile">
    <p><em>Fig 3: Background draft</em></p>
  </div>
  <div class="image-item image-item--auto">
    <img src="/assets/img/projects/orangeTree/draft_compelte.png" alt="Draft of component placement in the background" class="project-image project-image--tile">
    <p><em>Fig 4: Draft of component placements in the background</em></p>
  </div>
</div>

<div class="project-hero-image">
  <img src="/assets/img/projects/orangeTree/component_draft.png" alt="UI components on Figma" class="project-image">
  <p><em>Fig 5: UI components on Figma</em></p>
</div>

When pixel art in Figma got tedious, I moved to Procreate with a custom pixel brush built from a YouTube tutorial, and redrew skies and backgrounds. I also standardised a colour palette and type.

<div class="project-hero-image">
  <img src="/assets/img/projects/orangeTree/skies_bgtask.png" alt="Pixel art redesigns on Procreate" class="project-image">
  <p><em>Fig 6: Pixel art redesigns on Procreate</em></p>
</div>

<div class="project-hero-image">
  <img src="/assets/img/projects/orangeTree/colors_v2.png" alt="v1 colour palette and typography" class="project-image">
  <p><em>Fig 7: v1 palette and typography</em></p>
</div>

<div class="image-gallery">
  <div class="image-item image-item--auto">
    <img src="/assets/img/projects/orangeTree/main_page.png" alt="v1 main page" class="project-image project-image--tile">
    <p><em>Fig 8: v1 main page</em></p>
  </div>
  <div class="image-item image-item--auto">
    <img src="/assets/img/projects/orangeTree/project_page.png" alt="v1 project workspace" class="project-image project-image--tile">
    <p><em>Fig 9: v1 project workspace</em></p>
  </div>
  <div class="image-item image-item--auto">
    <img src="/assets/img/projects/orangeTree/task_page.png" alt="v1 task detail page" class="project-image project-image--tile">
    <p><em>Fig 10: v1 task detail</em></p>
  </div>
</div>

## What Wasn't Working
Coming back with fresh eyes, the charm was there but the tool wasn't. Intuition got me started; it didn't tell me when to stop adding.

* **Hand-drawn assets didn't scale.** Every tree, sky and state was a pixel-art file to draw and maintain, so the visuals and the product moved at different speeds.
* **Too much on screen.** Placeholder pages (Profile, Settings, People, Collaborators), duration estimates, a 5-level urgency scale and a multi-step create wizard added load without adding use.
* **Metaphor in the wrong places.** Buttons spoke in garden terms, so you had to decode the UI before using it.
* **Ideas that didn't earn their place.** "Orange Desserts" for finished projects was fun, but it was a whole asset pipeline for a moment you see rarely.
* **The code was one tangle.** UI, data and Firebase calls were mixed together, which made each change risky.

So I kept the metaphor and rebuilt almost everything around it.

## The Redesign: Orange Garden
The rebuild swapped pixel art for Claude Monet: colourful but minimal, calm enough to use every day. This time I wrote every product, design and engineering decision into one plan before building, and treated it as the source of truth.

**Principles.** Keep it simple and low in cognitive load. Plain labels on anything you click ("New project", "Mark done"); the garden metaphor lives only in headings and empty states ("Harvest", "Nothing planted yet").

**Palette.** Calm neutrals from *Water Lilies* and *Garden at Giverny*, plus one strong accent, the orange sun of *Impression, Sunrise*, which doubles as the brand. Colour always means something (status, priority, trees). The one decorative use is a soft painted background of a dozen blurred brushstrokes, capped at 75% opacity so all text stays readable over it.

| Token | Hex | Role |
|---|---|---|
| paper | `#F6F1E7` | Page background |
| ink | `#2A2733` | Text (12.99:1 on paper) |
| sun | `#E8702A` | Accent, done fruit, focus ring |
| blossom | `#E9B3C6` | To-do blossom |
| gold | `#E8B84A` | In-progress fruit |
| poppy | `#B23A2B` | Danger |

Every contrast ratio is computed, not eyeballed, and pastels never appear as text: each has a darker `-ink` partner.

**Type.** Fraunces with its "soft" axis for headings and project names; Inter for everything else; a 5-step scale from 14 to 40px.

<div class="project-hero-image">
  <img src="/assets/img/projects/orangeTree/v2/04-styleguide.png" alt="Style guide showing every colour token and UI component" class="project-image">
  <p><em>Fig 11: The Monet palette, type and component kit</em></p>
</div>

**Generative trees.** Instead of drawing every tree, the code paints them. Each tree is SVG built from overlapping brush dabs, seeded from the project's id so it is unique and stays the same as it grows. Light falls from the top-left. One mark per task: a pink five-petal blossom, then golden fruit, then orange fruit. The canopy grows in three steps with task count, and an empty project is a bare sapling.

## The App Today
Three screens, one metaphor: a task is a blossom (to do), golden fruit (in progress) or a ripe orange (done). When every fruit is ripe, you harvest the project.

### The Garden (Home)
<div class="project-hero-image">
  <img src="/assets/img/projects/orangeTree/v2/01-garden-full.png" alt="The garden: Up next, a tree per project, and the Harvest shelf" class="project-image">
  <p><em>Fig 12: The garden, from Up next down to Harvest</em></p>
</div>

Each active project is a tree, nearest due date first. Above them, **Up next** gathers up to five tasks across all projects (in progress, overdue, due within 3 days, high priority), and you can tick them off right there. Harvested projects rest in a collapsed **Harvest** shelf as fully ripe trees, replacing v1's desserts.

### A Project
<div class="project-hero-image">
  <img src="/assets/img/projects/orangeTree/v2/02-project.png" alt="Portfolio site project with its task list and tree" class="project-image">
  <p><em>Fig 13: A project, with its list and its tree</em></p>
</div>

One list grouped In progress, To do, Done, sorted automatically by priority then due date, so there is no drag-and-drop to manage. The list and the tree are linked: hover a task and its blossom glows; click a fruit and its task opens. When the last task is done, the app asks: "All ripe — harvest this project?"

### A Task
<div class="project-hero-image">
  <img src="/assets/img/projects/orangeTree/v2/03-task-panel.png" alt="Task panel with its checklist" class="project-image">
  <p><em>Fig 14: The task panel and its checklist</em></p>
</div>

The task opens as a side panel (full screen on mobile) with title, status, priority, due date, notes and a checklist, the successor to v1's mini-tasks. Everything autosaves. Ticking the first checklist item starts the task; ticking the last offers to finish it. The one reward moment: the fruit swells and ripens when a task is done.

<div class="image-gallery">
  <div class="image-item image-item--auto">
    <img src="/assets/img/projects/orangeTree/v2/05-mobile-garden.png" alt="The garden on a phone" class="project-image project-image--tile">
    <p><em>Fig 15: Garden on mobile</em></p>
  </div>
  <div class="image-item image-item--auto">
    <img src="/assets/img/projects/orangeTree/v2/06-mobile-project.png" alt="A project on a phone" class="project-image project-image--tile">
    <p><em>Fig 16: Project on mobile</em></p>
  </div>
  <div class="image-item image-item--auto">
    <img src="/assets/img/projects/orangeTree/v2/07-mobile-task.png" alt="A task on a phone" class="project-image project-image--tile">
    <p><em>Fig 17: Task on mobile</em></p>
  </div>
</div>

**Small things that matter:** Undo on deletes and completions; keyboard shortcuts (N, ↑ ↓, X, ?); works offline and syncs later; try it as a guest and upgrade to Google sign-in without losing anything; installable to your home screen.

## Under the Hood
The code is split into four layers, and lint fails the build if one reaches upward:

1. **domain** — pure TypeScript rules: ordering, dates, Up next, tree geometry. No React, no Firebase.
2. **data** — the only code that knows about storage: one interface, two adapters (Firestore + Auth, or an in-browser store for demos and tests).
3. **features** — the UI: garden, project, task, tree, account, plus a small component kit.
4. **app** — routes, layout, providers.

Writes are local-first, so the UI never waits on the network. Accessibility is a baseline, not a pass at the end: WCAG 2.1 AA contrast, status never shown by colour alone, a spoken summary for every tree ("Portfolio: 3 done, 2 in progress, 4 to do"), 44px touch targets and reduced-motion support. Unit, end-to-end flow and security-rule tests run in CI, and it is hosted on Firebase's free plan.

**Stack:** React 19, TypeScript, Vite, React Router, Tailwind CSS v4 (locked to the Monet tokens), Radix, Firebase, Vitest.

## Reflections
Not trusting the process got the project started; it was the right call for v1. But the second time, a little process (one written plan, a locked set of tokens) is what made it feel finished. Intuition chose the metaphor; constraints made it usable.

* **Cut more than you add.** Removing the wizard, placeholder pages and desserts did more for the app than any new feature.
* **Let the metaphor decorate, not label.** Plain buttons, garden headings.
* **Generate, don't hand-draw, what grows.** Code-painted trees scale to any project; pixel art couldn't.

**Next:** a dusky *Impression, Sunrise* dark theme, which the tokens are already structured for.

If you have any thoughts or feedback you'd like to share, I'm more than happy to hear them!

---

### References:
[Don't Trust the Process - Jenny Wen, Anthropic Design Lead](https://www.youtube.com/watch?v=4u94juYwLLM)

---

<a href="/" class="back-link">← Back to Home</a>
