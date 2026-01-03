---
layout: page
title: SeedBot 🌱
permalink: /projects/seedbot/
order: 5
---

## The Problem

The BC greenhouse vegetable farming sector represents eight percent of agricultural cash receipts in BC (Government of British Columbia and Government of Canada). Unfortunately, roughly fifty percent of the seeds planted in greenhouses do not reach fruit bearing age.

<div class="project-hero-image">
  <img src="/assets/img/projects/traffibot/seed_1.png" alt="Journey from seed to plate" class="project-image">
</div>

Seed sorting technology is common in the farming sector, but it is limited in a variety of ways. Many methods of predicting plant traits and disease status require time consuming or destructive methods. Technologies that use non-destructive, high throughput methods are limited in what they can assess. Insporos' goal is to bridge this gap, thereby reducing the losses in the BC greenhouse sector.

For our capstone project, we partnered with **Insporos Inc.**, a developer of a seed-sorting technology designed to improve modern greenhouse operations. Their goal is to solve this problem.


## Scope and Objective
The project’s overarching vision is to enable high-throughput seed sorting based on predicted plant traits, targeting a capacity of 200,000 seeds per day.
<br>
To support this, our primary objective was to design and build an automated test bench for Insporos. This system allows for rapid technological iteration and data collection for algorithmic refinement. While sensor selection remained outside the project scope, our focus was on automating the end-to-end scanning and labeling workflow to bridge the gap between manual testing and industrial-scale throughput.

## Requirements
The system was engineered against four critical pillars to ensure industrial viability:

1. **User Experience:** The interface and hardware workflow are optimized for technicians accustomed to high-tech laboratory environments, ensuring intuitive operation and minimal training time
2. **Precision & Accuracy:** To ensure data integrity, the system must maintain high repeatability, with a physical measurement margin of error not exceeding ±0.1mm
3. **Contamination Control:** The system must be sanitizable and the design prioritizes sanitization protocols to prevent cross-contamination or the transmission of seed-borne pathogens between batches
4. **Seed Integrity:** The automation process must ensure non-destructive handling, maintaining the physical and biological viability of every seed throughout the scanning and labeling cycle

## Our Prototype

For our test bench prototype, we prioritised iteration, scalability, and user-friendliness. The prototype will streamline our sponsor's workflow by automating repetitive tasks such as seed movement, scanning, and providing the sensors with a convenient placement.

<div class="project-hero-image">
  <img src="/assets/img/projects/traffibot/seed_2.png" alt="Seedbot Prototype" class="project-image">
</div>

Our final design meets all requirements. It comprises a 3-axis gantry from Zaber which moves a high-resolution camera, RGBW LED ring light, and the sensors required (let's call them Bob and Alice), line laser, vacuum valve, pressure sensor and a dispensing needle tip with vacuum suction.

#### Take a look at this short 12 second video on how it works:

<div class="project-video">
  <iframe 
    width="100%" 
    height="400" 
    src="https://www.youtube.com/embed/UorzVzRqjPw" 
    title="Seedbot Operational Plan" 
    frameborder="0" 
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
    allowfullscreen>
  </iframe>
</div>

#### Video Explanation:
The gantry moves above a black anodized aluminium plate with the interrogated seeds spread out on it and the camera feed is processed to detect the seeds one by one. Once a seed is detected, the RGBW LED ring light will illuminate it with red, green, blue and white light and the
camera will take a photo of the seed under each lighting. The line laser is used to accurately measure the height, as the sensors
require precise focal distance above the seed for optimal scanning. Then, the gantry will move such that
the sensor Bob is centred above the seed and the spectrometer will make a
measurement, the same will be repeated for the sensor Alice. Finally, the dispensing needle will suction
onto the seed such that it picks it up and the gantry will remove the seed to a designated well in
a microwell plate. 
<br>

#### System Level Diagram of the Seed Scanning Process

<div class="project-hero-image">
  <img src="/assets/img/projects/traffibot/seed_3.png" alt="System level diagram of the seed scanning process" class="project-image">
  <p><em>Figure: System level diagram of the seed scanning process.</em></p>
</div>
This design's simplicity makes it highly robust. By moving the sensors over the stationary seeds instead of moving the seeds to stationary sensors we decreased the risk of dropping or losing the seeds, since they only need to be moved once into the microwell plate. The types and arrangement of the sensors can be quickly changed by changing the mount that attaches them to the gantry, which makes the prototype versatile. It is also easy for the operator to load the seeds for interrogation since they are simply spread out by hand on the platform.

#### A video live from our robot demo here:

<div class="project-video">
  <iframe 
    width="100%" 
    height="400" 
    src="https://www.youtube.com/embed/oVhCLcLitak" 
    title="Seedbot Working Robot Demo" 
    frameborder="0" 
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
    allowfullscreen>
  </iframe>
</div>

<br>

## Challenges and Future Plan
There are still limitations and challenges remaining in our system. Presently, only one seed can
be scanned and measured at a time, which restricts the throughput. Additionally, the integration
of several sensors into the system is pending.
In our next step, we aim to enhance throughput to approximately 200,000 seeds per day. This
will involve the integration and verification of additional sensors over the summer. Furthermore,
a rigorous cleaning protocol ought to be implemented to prevent potential contamination
---

<a href="/" class="back-link">← Back to Home</a> 