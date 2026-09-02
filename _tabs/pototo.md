---
layout: page
title: Pototo the Potato 🥔
permalink: /projects/pototo/
order: 7
---

## Pototo the Potato — Redefining your To-Do List 📝

Recently, I encountered a common frustration: the lack of a **single, frictionless platform** that **seamlessly integrates task management** (down to documenting the details or measuring my progress) and **calendar planning**. I tried using several apps (including the flashy, cute ones) but none of them stuck.
Today, I still rely on good old Google Calendar 📆 and my physical notebook 📔 for reliable planning.

This personal struggle became the initial spark 🌟 for my development mission. While my primary need was a single, frictionless platform to seamlessly integrate my own task management and calendar planning, I soon discovered a **deeper** need.

🔎 After conducting **informal user research** with friends, some of them shared about living with ADHD and their profound struggles with task initiation, time-blindness, and missed deadlines. Even simple tasks like doing the laundry or submitting their homework can be easily overlooked. Moreover, they often feel intimidated by "big" tasks and have trouble breaking then down into smaller tasks they can do incrementally, leading to excessive procrastination.
I quickly realized the design principles required to solve their specific challenges (like gamification and task deconstruction) could simultaneously create the low-friction, high-utility tool I needed. This led me to **embark on a mission** to **build** a **better solution** out there.

## A User-Centric Approach 🙆‍♀️

The first sprouts of Pototo are currently growing 🌱. Pototo is a mobile application designed to help users effectively track tasks and manage progress. While originally conceived for individuals with **ADHD** who struggle with **time-blindness**, **attention regulation**, and **task initiation**, the app is also a powerful tool for anyone tackling procrastination and complex planning.
<br>
Existing productivity tools are designed for neurotypical brains, and they are often too rigid or high-maintenance, quickly becoming overwhelming. The core issue is not a lack of motivation, but a lack of tools that account for their specific cognitive architecture. Current apps fail because they are built for neurotypical workflows, turning the tool into another chore rather than a solution. Without a single, compassionate interface to bridge the gap between planning and doing, it's easy to remain stuck in a loop of planning, procrastination, and burnout.

<br>
Pototo leverages an interactive and **gamified system** with key features engineered to minimize friction and promote follow-through:

- **Task Deconstruction 🔨:** Easily break down overwhelming projects into manageable, step-by-step **“mini-tasks”** to overcome task initiation difficulty. Users can label their tasks as "Big", "Normal", or "Easy".
- **Gamified Focus Modes 👾:** Integrated focus timers ⏰ that offer visual progress and incentivized rewards upon completion to sustain attention and boost motivation.
- **Unified Planning & Focus 📆:** Seamless integration of a comprehensive Calendar View (Week/Month/Year) with a focused Daily To-Do List, eliminating the need to juggle multiple apps. Everyday, users will be shown their daily timeline and it will update their progress as they complete tasks along the day.
- **Insightful Progress Tracking 📈:** An automated Reports Section providing clear, visual progress metrics (daily, weekly, monthly, annually) to combat time-blindness and reinforce positive habits. (To be implemented)
- **Progress Avatar 🥔:** A personalized **potato avatar** to provide emotional accountability. The growth and health of the user's potato avatar serves as a compassionate visual representation of their "productivity". (To be implemented)

## Competitive Advantage

Pototo is built as a _“Cognitive Ally”_ that transforms tedious scheduling into a low-friction, interactive
journey, rather than an administrative burden. Traditional apps often feel rigid, becoming overwhelming the moment a user falls behind. Our advantage is a **zero-barrier entry** that removes the high **“setup tax”** the ADHD brain cannot pay. We focus on solving for the most extreme friction
points: time-blindness and task initiation. We are building a tool that fits the user’s natural flow rather than forcing the user to fit the tool’s structure.

## Sneak Peek 👀

<div class="screens-carousel">
  <button type="button" class="screens-nav screens-nav--prev" aria-label="Scroll screenshots left">
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="15 18 9 12 15 6"></polyline></svg>
  </button>
  <div class="screens-track">
    <img src="/assets/img/projects/pototo/eg_screens/1_hello.png" alt="Welcome screen" class="screens-item">
    <img src="/assets/img/projects/pototo/eg_screens/2_onboard1.png" alt="Onboarding screen 1" class="screens-item">
    <img src="/assets/img/projects/pototo/eg_screens/3_onboard3.png" alt="Onboarding screen 2" class="screens-item">
    <img src="/assets/img/projects/pototo/eg_screens/4_onboard4.png" alt="Onboarding screen 3" class="screens-item">
    <img src="/assets/img/projects/pototo/eg_screens/5_onboard_done.png" alt="Onboarding complete" class="screens-item">
    <img src="/assets/img/projects/pototo/eg_screens/6_daily_habit_picker.png" alt="Daily habit picker" class="screens-item">
    <img src="/assets/img/projects/pototo/eg_screens/7_other_plans.png" alt="Other plans" class="screens-item">
    <img src="/assets/img/projects/pototo/eg_screens/8_time_to_potatoes.png" alt="Time to potatoes" class="screens-item">
    <img src="/assets/img/projects/pototo/eg_screens/9_new_activity.png" alt="New activity" class="screens-item">
    <img src="/assets/img/projects/pototo/eg_screens/9_list_view.png" alt="List view" class="screens-item">
    <img src="/assets/img/projects/pototo/eg_screens/10_focus_start.png" alt="Focus mode start" class="screens-item">
    <img src="/assets/img/projects/pototo/eg_screens/11_focus_end.png" alt="Focus mode end" class="screens-item">
  </div>
  <button type="button" class="screens-nav screens-nav--next" aria-label="Scroll screenshots right">
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="9 18 15 12 9 6"></polyline></svg>
  </button>
</div>

<script>
  document.querySelectorAll('.screens-carousel').forEach(function (carousel) {
    var track = carousel.querySelector('.screens-track');
    var prevBtn = carousel.querySelector('.screens-nav--prev');
    var nextBtn = carousel.querySelector('.screens-nav--next');
    function scrollByAmount(direction) {
      track.scrollBy({ left: direction * track.clientWidth * 0.6, behavior: 'smooth' });
    }
    prevBtn.addEventListener('click', function () { scrollByAmount(-1); });
    nextBtn.addEventListener('click', function () { scrollByAmount(1); });

    var edgeBuffer = 48;
    track.querySelectorAll('.screens-item').forEach(function (item) {
      item.addEventListener('mouseenter', function () {
        var trackRect = track.getBoundingClientRect();
        var itemRect = item.getBoundingClientRect();
        var overflowLeft = trackRect.left - itemRect.left;
        var overflowRight = itemRect.right - trackRect.right;
        if (overflowLeft > 0) {
          track.scrollBy({ left: -(overflowLeft + edgeBuffer), behavior: 'smooth' });
        } else if (overflowRight > 0) {
          track.scrollBy({ left: overflowRight + edgeBuffer, behavior: 'smooth' });
        }
      });
    });
  });
</script>

## Challenges

The primary challenges for Pototo are sustaining long-term behavioral retention and achieving a trust-based market entry:

- **Overcoming the Novelty Cliff.** A significant risk for ADHD-centric tools is the drop-off in user
  interest once the initial excitement of a new tool fades. We combat this by conducting a
  thorough user research where we ensure we clearly tackle their pain points.
- **Trust-based market entry.** The productivity market is saturated with generic tools that have
  often disappointed the neurodivergent community. It’s a challenge to gain organic exposure
  within neurodivergent communities. Thus our strategy is a community-first approach,
  partnering with ADHD advocates and educators who understand the need for a tool that
  reduces cognitive load and integrates naturally into a student’s existing workflow.

---

## The Journey 🗻

This journey is in its early stages, but I'm taking a **structured approach** to development:

1.  **Foundational UI/UX Design:** My first strategic step was to ensure a **user-centric design** by completing a comprehensive UI/UX course (certificate at the bottom of the page). This foundational knowledge helps me with the app's design, ensuring an intuitive and low-friction experience.
2.  **Prototyping & Wireframing:** I’m currently in the design phase, creating the wireframes and high-fidelity mockups in **Figma**.
3.  **Frontend Development:** I am simultaneously building the project landing page using **React** and styling it with **TailwindCSS**. This allows me to begin implementing the frontend stack and secure the project's digital presence early on.

---

<!-- <div class="project-hero-image">
  <img src="/assets/img/projects/pototo/uxdesign_certificate.jpg" alt="UI/UX Design Certificate" class="project-image">
</div> -->

---

<a href="/" class="back-link">← Back to Home</a>
