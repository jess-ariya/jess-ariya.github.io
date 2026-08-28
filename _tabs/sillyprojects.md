---
layout: page
title: Silly Projects 🎨
permalink: /sillyprojects/
order: 11
---

A collection of fun, and creative projects I like to experiment on 🎉

## Phone Stand - A 40-Hour Machine Shop Project 🛠️
Machines used: Manual lathe, milling machine, metal band saws, pedestal grinders, drill presses


<div class="image-gallery image-gallery--grid">
  <div class="image-item">
    <img src="/assets/img/projects/sillyprojects/phonestand/pstand1.JPG" alt="Phone Stand 1" class="project-image">
  </div>
  <div class="image-item">
    <img src="/assets/img/projects/sillyprojects/phonestand/pstand3.JPG" alt="Phone Stand 3" class="project-image">
  </div>
  <div class="image-item">
    <img src="/assets/img/projects/sillyprojects/phonestand/pstand4.JPG" alt="Phone Stand 4" class="project-image">
  </div>
  <div class="image-item">
    <img src="/assets/img/projects/sillyprojects/phonestand/pstand5.JPG" alt="Phone Stand 5" class="project-image">
  </div>
  <div class="image-item">
    <img src="/assets/img/projects/sillyprojects/phonestand/pstand6.JPG" alt="Phone Stand 6" class="project-image">
  </div>
  <div class="image-item">
    <img src="/assets/img/projects/sillyprojects/phonestand/pstand7.JPG" alt="Phone Stand 7" class="project-image">
  </div>
  <div class="image-item">
    <img src="/assets/img/projects/sillyprojects/phonestand/pstand8.JPG" alt="Phone Stand 8" class="project-image">
  </div>
  <div class="image-item">
    <img src="/assets/img/projects/sillyprojects/phonestand/pstand9.JPG" alt="Phone Stand 9" class="project-image">
  </div>
</div>

---

## Watercolour Painting 🎨

A trip to the farmer's market left me staring at a peach and a melon for a little too long — and by that evening I was home trying to mix paint to match them. That afternoon turned into a habit, and somewhere along the way I realized I just love watercolour painting. Tap the peach or the melon to see what they were painted from 👇

<div class="watercolor-carousel">
  <div class="watercolor-track">

    <div class="watercolor-card watercolor-card--flip" tabindex="0" role="button" aria-pressed="false" aria-label="Watercolour painting of a peach. Press to see the reference photo it was painted from.">
      <div class="watercolor-flip-inner">
        <div class="watercolor-flip-face watercolor-flip-front">
          <div class="watercolor-photo" style="background-image: url('/assets/img/projects/sillyprojects/watercolour/peach.jpg');"></div>
          <p class="watercolor-caption">🍑 Peach<span class="watercolor-hint">tap to see the real thing</span></p>
        </div>
        <div class="watercolor-flip-face watercolor-flip-back">
          <div class="watercolor-photo" style="background-image: url('/assets/img/projects/sillyprojects/watercolour/peach-real.jpg');"></div>
          <p class="watercolor-caption">📷 From the farmer's market</p>
        </div>
      </div>
    </div>

    <div class="watercolor-card watercolor-card--flip" tabindex="0" role="button" aria-pressed="false" aria-label="Watercolour painting of a melon. Press to see the reference photo it was painted from.">
      <div class="watercolor-flip-inner">
        <div class="watercolor-flip-face watercolor-flip-front">
          <div class="watercolor-photo" style="background-image: url('/assets/img/projects/sillyprojects/watercolour/melon.jpg');"></div>
          <p class="watercolor-caption">🍈 Melon<span class="watercolor-hint">tap to see the real thing</span></p>
        </div>
        <div class="watercolor-flip-face watercolor-flip-back">
          <div class="watercolor-photo" style="background-image: url('/assets/img/projects/sillyprojects/watercolour/melon-real.jpg');"></div>
          <p class="watercolor-caption">📷 From the farmer's market</p>
        </div>
      </div>
    </div>

    <div class="watercolor-card watercolor-card--flip" tabindex="0" role="button" aria-pressed="false" aria-label="Watercolour painting of a tomato. Press to see the reference photo it was painted from.">
      <div class="watercolor-flip-inner">
        <div class="watercolor-flip-face watercolor-flip-front">
          <div class="watercolor-photo" style="background-image: url('/assets/img/projects/sillyprojects/watercolour/tomato.jpg');"></div>
          <p class="watercolor-caption">🍅 Tomato<span class="watercolor-hint">tap to see the real thing</span></p>
        </div>
        <div class="watercolor-flip-face watercolor-flip-back">
          <div class="watercolor-photo" style="background-image: url('/assets/img/projects/sillyprojects/watercolour/tomato-real.jpg');"></div>
          <p class="watercolor-caption">📷 From the farmer's market</p>
        </div>
      </div>
    </div>

    <div class="watercolor-card">
      <div class="watercolor-photo watercolor-photo--img">
        <img src="/assets/img/projects/sillyprojects/watercolour/oranges.jpg" alt="Watercolour painting of oranges" class="watercolor-img">
      </div>
      <p class="watercolor-caption">🍊 Oranges</p>
    </div>

    <div class="watercolor-card">
      <div class="watercolor-photo watercolor-photo--img">
        <img src="/assets/img/projects/sillyprojects/watercolour/banana.jpg" alt="Watercolour painting of a banana" class="watercolor-img">
      </div>
      <p class="watercolor-caption">🍌 Banana</p>
    </div>

    <div class="watercolor-card">
      <div class="watercolor-photo watercolor-photo--img">
        <img src="/assets/img/projects/sillyprojects/watercolour/sheeps.jpg" alt="Watercolour painting of sheep" class="watercolor-img">
      </div>
      <p class="watercolor-caption">🐑 Sheep</p>
    </div>

  </div>
</div>

<script>
  document.querySelectorAll('.watercolor-card--flip').forEach(function (card) {
    function toggleFlip() {
      var flipped = card.classList.toggle('is-flipped');
      card.setAttribute('aria-pressed', flipped ? 'true' : 'false');
    }
    card.addEventListener('click', toggleFlip);
    card.addEventListener('keydown', function (e) {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        toggleFlip();
      }
    });
  });
</script>

---

<a href="/" class="back-link">← Back to Home</a>
