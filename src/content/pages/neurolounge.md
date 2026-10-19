---
title: NeuroLounge 🧠
permalink: /projects/neurolounge/
tagline: "A pricing calculator and sales dashboard that carry a deal from first click to paid invoice."
colour: "#4F6FA5"
cover: "neurolounge.png"
role: "Design and full-stack build"
stack: "React, TypeScript, Cloudflare Workers, D1, KV, GoHighLevel API"
when: "Sep – Oct 2026"
problem: "Buyers couldn't price a NeuroLounge themselves, and sales had no clean way from a configuration to a paid deal."
process: "Built in phases: the calculator first with GHL as the back office, then a two-way synced admin dashboard, invoicing and catalog editing."
outcome: "A live quote-to-cash system: customers price and book, staff prep, finalize and invoice, all synced to GoHighLevel."
---

A NeuroLounge is a room of brain-health technology from Brainnovation Network: EEG assessments, vibroacoustic chairs, neurofeedback headsets, light therapy. Clinics buy them for patients, and corporations and businesses buy them for their employees or as an amenity for members and guests. Every lounge is different, so every quote used to be a back-and-forth by email.

I built the system that replaces that: a public calculator where any buyer can design their lounge and see the price as they go, and a staff dashboard where the sales team takes each deal from launch call to paid invoice. GoHighLevel (GHL), the team's CRM, stays the record of every sale.

<div class="reel" aria-label="A walkthrough of the calculator and the admin dashboard">
  <div class="reel-bar"><i></i><i></i><i></i></div>
  <div class="reel-view">
    <figure><img src="/assets/img/projects/neurolounge/c1-hero.png" alt="Calculator landing: Build your NeuroLounge"><figcaption>A buyer opens the calculator</figcaption></figure>
    <figure><img src="/assets/img/projects/neurolounge/c2-howyoubuy.png" alt="Step 1, choosing between buying outright and managed equipment"><figcaption>1 · Pick how you buy</figcaption></figure>
    <figure><img src="/assets/img/projects/neurolounge/c3-technology.png" alt="Step 2, assessment technology with a live monthly price"><figcaption>2 · Add equipment, price updates live</figcaption></figure>
    <figure><img src="/assets/img/projects/neurolounge/c6-review.png" alt="Step 4, review your configuration"><figcaption>4 · Review, then book a launch call</figcaption></figure>
    <figure><img src="/assets/img/projects/neurolounge/a1-overview.png" alt="Admin overview with the sales funnel"><figcaption>Staff see the funnel</figcaption></figure>
    <figure><img src="/assets/img/projects/neurolounge/a2-calls.png" alt="Launch calls page with prep notes"><figcaption>Prep for the launch call</figcaption></figure>
    <figure><img src="/assets/img/projects/neurolounge/a7-quote-locked.png" alt="A finalized quote, locked for the customer"><figcaption>Revise, then finalize the quote</figcaption></figure>
    <figure><img src="/assets/img/projects/neurolounge/a9-board.png" alt="People board grouped by sales stage"><figcaption>Every deal by stage, mirrored from GHL</figcaption></figure>
  </div>
</div>
<p class="image-caption">A quick loop through both sides of the system. Customer names are placeholders.</p>

## The Problem

Three groups touch every deal, and each needed something different:

- **Buyers**, from clinics to corporate wellness teams, want to build a lounge, compare buying it outright with a managed monthly plan, and see a real price without booking a call first.
- **Sales staff** need to prep for the launch call, revise the quote with the customer, finalize it and send the invoice.
- **Customer success** follows each paying customer through a 90-day onboarding journey.

One constraint shaped everything: **GHL stays the source of truth.** Reps also move deals there by hand. My system had to keep GHL correct when a customer saves five times, staff edit the quote afterwards, and someone drags a card in the CRM.

## How I Built It

I built it iteratively: one fundamental need at a time, and a new feature only once the thing under it worked well. That gave the project four phases.

<ol class="phases">
  <li><b>The calculator</b><span>Customer-facing first. Sales ran entirely in GHL.</span></li>
  <li><b>An admin platform</b><span>A dashboard with two-way GHL sync, so staff stop fighting the CRM.</span></li>
  <li><b>Invoices and automatic stages</b><span>Send the invoice, and the deal moves itself.</span></li>
  <li><b>Catalog editing and the extras</b><span>Admins change prices themselves. Timelines and notes.</span></li>
</ol>

## Phase 1: The Calculator

The first thing I built was the part customers see. I kept it to four steps: how you buy, technology, ancillary services, review. The price card stays pinned on the right and updates with every click, and the stepper fills in as you go so you always know what is left.

<div class="image-row">
  <div class="image-item image-item--framed">
    <img src="/assets/img/projects/neurolounge/c2-howyoubuy.png" alt="Choosing between owning the lounge and managed equipment">
    <p><em>Step 1: own it, or pay monthly with the equipment managed</em></p>
  </div>
  <div class="image-item image-item--framed">
    <img src="/assets/img/projects/neurolounge/c3-technology.png" alt="Assessment technology list with quantities">
    <p><em>Step 2: the price card follows you down the page</em></p>
  </div>
</div>

The two paths price very differently. Owning is one payment. Managed spreads the equipment over 24 months, with ancillary services, 5% delivery and the first month up front. Showing both side by side, with their trade-offs written plainly, turned the most common sales question into something buyers answer for themselves.

The catalogue is long (36 pieces of technology before any services), so I grouped it into tabs and sections, highlighted picked rows, and kept the running total per section.

<div class="image-row">
  <div class="image-item image-item--framed">
    <img src="/assets/img/projects/neurolounge/c6-review.png" alt="Review step summarising the configuration">
    <p><em>Step 4: one last look before booking</em></p>
  </div>
  <div class="image-item image-item--framed image-item--phone">
    <img src="/assets/img/projects/neurolounge/c7-mobile.jpg" alt="The calculator on a phone, with the price in a bottom bar">
    <p><em>On phones the price moves to a bottom bar</em></p>
  </div>
</div>

Everything autosaves to the browser, so a refresh never loses a half-built lounge. Two buttons send it further: **Print or save quote** and **Schedule launch call**.

At this stage the whole admin side lived in GHL. I set up custom objects for orders and their line items, linked them to contacts and opportunities, and arranged the sales pipeline there. Every saved quote also got a recall link, so a customer could come back and change it, and staff could open the same link to make edits for them.

### What happens when you press save

Behind those two buttons sit two Cloudflare Workers. They are the only part of the system allowed to talk to GHL.

<ol class="flow">
  <li><b>Potential</b><span>customer saves a quote</span></li>
  <li><b>Quote Requested</b><span>customer books a call</span></li>
  <li><b>Call Completed</b><span>staff mark the call done</span></li>
  <li><b>Quoted</b><span>staff finalize</span></li>
  <li><b>Invoiced</b><span>invoice sent</span></li>
  <li><b>Paid</b><span>deal won and closed</span></li>
</ol>
<p class="image-caption">Six sales stages, each with exactly one way in</p>

Four rules keep the records honest:

1. **The browser never sends prices.** It sends item ids and quantities. The Worker prices them from the shared catalogue, so what lands in GHL always matches what the customer saw, and nobody can edit a total in dev tools.
2. **The quote number is the key.** A small KV store maps each quote number to the GHL records it created. Save five times and you update one order, not five.
3. **Stages only move forward.** A customer save never drags a deal backwards, even if a rep already moved it on in GHL. The one designed exception is *Unfinalize*, which staff can use until the invoice goes out.
4. **Links are signed.** Each recall link works for 90 days and renews on every save. Knowing a quote number opens nothing.

Once staff finalize a quote it locks: a customer save gets refused, and their link turns view-only. That one rule removed a whole class of "which version did they agree to?" problems.

## Phase 2: A Better Admin Platform

With the calculator working and quotes coming in, the friction moved to the sales team. Seeing which stage each deal was in, filtering customers, and switching over to customer-journey tracking all took too many clicks in GHL. So I built them a dashboard of their own, with two-way sync to GHL: a change made in either place shows up in the other.

The dashboard sits behind Cloudflare Access, so the team signs in with a one-time code to their work email and there are no passwords for me to store.

<div class="project-hero-image">
  <img src="/assets/img/projects/neurolounge/a1-overview.png" alt="Admin overview: funnel, calls completed and the next call to prepare">
  <p><em>Overview: the funnel from saved configuration to completed call</em></p>
</div>

<div class="image-row">
  <div class="image-item image-item--framed">
    <img src="/assets/img/projects/neurolounge/a9-board.png" alt="People board grouped by sales stage">
    <p><em>People: every deal by stage, with filters and a table view</em></p>
  </div>
  <div class="image-item image-item--framed">
    <img src="/assets/img/projects/neurolounge/a5-journey.png" alt="Customer journey board from onboarded to 90 days">
    <p><em>Journey: paying customers from onboarded to 90 days</em></p>
  </div>
</div>

The biggest change was editing quotes in place. Before, staff edited through the recall link, which opened the calculator on another page. Now they revise a quote directly in the dashboard and send the customer the updated version from there. The calls page puts the next launch call first, with the quote, who is taking it and prep notes, so nobody walks into a call cold.

<div class="image-row">
  <div class="image-item image-item--framed">
    <img src="/assets/img/projects/neurolounge/a2-calls.png" alt="Launch calls with prep notes and past calls">
    <p><em>Calls: prep notes and who's taking it</em></p>
  </div>
  <div class="image-item image-item--framed">
    <img src="/assets/img/projects/neurolounge/a7-quote-locked.png" alt="A finalized quote with its stage tracker">
    <p><em>Quotes: edit, finalize and resend without leaving the page</em></p>
  </div>
</div>

## Phase 3: Invoices That Move the Deal

Next came creating invoices and sending them out from the quote page. The price panel spells out what's due at signing and each month after, matching exactly what GHL will bill.

<div class="project-hero-image">
  <img src="/assets/img/projects/neurolounge/a8-quote-pricing.png" alt="Quote detail with the agreed price and the invoice plan">
  <p><em>The agreed price, and the invoices GHL will send</em></p>
</div>

Stages now move on their own. Send the invoice and the deal moves to Invoiced, in both the dashboard and GHL. Nobody has to remember to drag a card.

## Phase 4: Handing Over the Catalog

Prices live in the Cloudflare database the Workers read from, so every price change used to be a message to me. I added a catalog editor so admins can add items, change prices and reorganise categories themselves. Changes collect in a shared draft until someone publishes them, and quotes that already exist keep their prices.

<div class="project-hero-image">
  <img src="/assets/img/projects/neurolounge/a10-catalog.png" alt="Catalog editor with categories, items and prices">
  <p><em>Catalog: what the calculator offers and what it charges, now editable by admins</em></p>
</div>

Smaller additions grew on top: a timeline of everything that happened on each deal, and notes that sync back to the contact in GHL.

## When Things Break

GHL is a third-party system I don't control, so I designed for it being slow or down:

| If this fails | The system |
| --- | --- |
| GHL is down or slow | still returns the priced quote; the next save repairs the same records |
| The dashboard database | still saves the quote; GHL holds the current state |
| A note or call sync | saves it locally first and shows "Not saved to GHL" with a Retry button |

The principle: write locally first, echo to the external system, and show the sync state to the person who can fix it. The trade-off I'd flag: a GHL outage looks like success to the customer, so staff rely on the dashboard to spot it.

## What I Learned

- **Draw the state machine first.** Naming every stage, who can move it and in which direction made the edge cases designed rather than discovered.
- **One owner per piece of data.** Every copy is either read-only or a one-way echo, so a conflict always has one answer.
- **Retries should be boring.** If pressing save twice is safe by construction, a flaky network stops being scary.

Next, I'd like to retry failed syncs in the background and share one GHL client between the two Workers.
