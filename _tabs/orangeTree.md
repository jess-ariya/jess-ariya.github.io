---
layout: page
title: Orange Tree 🍊
permalink: /projects/orangeTree/
order: 4
---

## The Why
Most productivity or project management apps look a bit boring, generic, and largely the same.
I wanted to make my own quick task-app that I could use ASAP. I had also just watched an interesting talk by Anthropic’s Design Lead, Jenny Wen, about “not trusting the process” (Youtube link referenced below). 
<br>

What process? The **traditional design roadmap**: starting with user research, endless whiteboarding, user interviews, discussions, and boom - you magically create the perfect app. In reality, that path is often… just a supposedly ideal blueprint.
Fueled by my curiosity to build something without a formal design process, I decided to create something entirely on my drive, intuition, and some fun.

## The Process
The initial spark for the project came from a simple idea: **what if I made Jira a bit more fun?** I love the aesthetic of orange trees, how each bright round fruit adds joy to the luscious green foliage, and how the pretty flowers eventually bloom into vibrant oranges. That became the foundation of my “Orange Tree” project.
<br>

I started with rough wireframes on paper. They were messy and maybe not entirely legible, but they provided exactly enough momentum to push me forward.
<div class="project-hero-image">
  <img src="/assets/img/projects/orangeTree/wireframeSketch.jpg" alt="Quick sketch on paper: a lo-fi wireframe" class="project-image">
  <p><em>Fig 1: Quick sketch on paper of a super lo-fi wireframe</em></p>
</div>

From there, I set up a Firebase backend (using Firebase to host the data) and jumped straight into coding the frontend using React, CSS, and Vite for fast tooling. 

## The Idea & Initial Design
The best part of this intuition-led approach was that I kept getting fun, silly ideas as I built. I knew I wanted the app to have a playful, colorful feel full of whimsy, but I also wanted it to have a rustic, cozy vibe.

What better way to achieve that than drawing inspiration from pixel art! I jumped into Figma to design the backgrounds, the trees, and all the cute little UI components to bring that vision to life.

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


*Spoiler: A lot of improvements have been made since this point.*

## The Progress

After letting the idea rest (and marinate in my subconscious for a bit), I revisited the project with fresh eyes and realized - holy moly, there was a lot of room for improvement.

First, I hit a **workflow bottleneck**: creating pure pixel art in Figma was becoming **tedious and inefficient**. To fix this, I switched to **Procreate** to make the UI components. I researched how to create a **custom** pixel brush from a YouTube tutorial since there is no official pixel brush offered in the app. While I’m still iterating on the assets to achieve the exact "whimsical and rustic” feel I envisioned, this tooling switch gave me the freedom to redesign the core visual components, including the skies and more dedicated backgrounds.

<div class="project-hero-image">
  <img src="/assets/img/projects/orangeTree/skies_bgtask.png" alt="Pixel art redesigns on Procreate" class="project-image">
  <p><em>Fig 6: Pixel art redesigns on Procreate</em></p>
</div>

The app needed a stricter underlying structure so it wouldn't feel disjointed. I standardized the color palette and typography to bring true visual cohesion to the entire experience.
<div class="project-hero-image">
  <img src="/assets/img/projects/orangeTree/colors_v2.png" alt="Standardized the colour palette and typography" class="project-image">
  <p><em>Fig 7: Standardized the colour palette and typography</em></p>
</div>

Finally, I took this new design system and went back under the hood to overhaul the UI and UX. I focused on removing friction, smoothing out the component transitions, and making the entire user journey feel significantly more intuitive and rewarding.

### The Main/Home Page
<div class="project-hero-image">
  <img src="/assets/img/projects/orangeTree/main_page.png" alt="The main page" class="project-image">
  <p><em>Fig 9: The main page</em></p>
</div>
The main page shows the overview of the user’s projects. The projects are represented by orange trees on the left hill. When a project is completed, the tree is transformed into a **dessert** made from the oranges harvested during the process, serving as a visual trophy of their productivity.

### The Project Page
<div class="project-hero-image">
  <img src="/assets/img/projects/orangeTree/project_page.png" alt="The project workspace" class="project-image">
  <p><em>Fig 10: The project workspace</em></p>
</div>

The user manages all the tasks in each project here.
The state of the tasks is reflected in the life cycle of the tree: 
* **Flowers**: Symbolize tasks that have not been started
* **Unripe Green Oranges**: Represents tasks currently in progress
* **Ripe Oranges**: Signal completed tasks
The final rewarding part of the “Orange Tree” metaphor is the **Harvest**. 

### The Task Detail Page
<div class="project-hero-image">
  <img src="/assets/img/projects/orangeTree/task_page.png" alt="Task detail page" class="project-image">
  <p><em>Fig 11: Task detail page</em></p>
</div>
To prevent overwhelm, each task can be further broken down into mini-tasks. For example, a "Grocery Shopping" task can be atomized into an ingredient list, or a large "Exam Prep" task can be divided into specific study topics.


<br>

<div class="project-video">
  <iframe 
    width="100%" 
    height="400" 
    src="https://www.youtube.com/embed/9ZMCWZzw4Eg?rel=0" 
    title="Orange Tree Demo" 
    frameborder="0" 
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
    allowfullscreen
    loading="lazy"
    referrerpolicy="strict-origin-when-cross-origin">
  </iframe>
</div>

If you have any thoughts or feedback you’d like to share, I’m more than happy to hear them!

---

### References:
[Don’t Trust the Process - Jenny Wen, Anthropic Design Lead](https://www.youtube.com/watch?v=4u94juYwLLM)

---

<a href="/" class="back-link">← Back to Home</a>