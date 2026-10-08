# Divyesh Challa | Interactive 3D Portfolio

An interactive 3D portfolio built with React, TypeScript, Three.js, and Tailwind CSS. Showcases production-focused web applications, Python microservices, and algorithmic systems.

## Overview

I am a Computing Science student at the University of Alberta focused on building software that solves concrete, everyday problems. This site serves as a central hub for my engineering projects, technical stack, and software experiments.

## Flagship Projects

### 1. Trackr (Career Pipeline & Internship Accelerator)
* End-to-end career platform & pipeline accelerator designed for high-volume Canadian tech co-op and internship recruiting cycles.
* Real-time job ingestion aggregating verified Canadian postings (2027+) with strict freshness and link validation.
* Interactive drag-and-drop Kanban application board with optimistic updates via TanStack Query.
* ATS-tailored Jake's Resume Studio with LaTeX export and AI-driven cover letter generation.
* Interactive voice-enabled STAR behavioral interview simulator with multi-turn questioning and hiring committee debriefs.
* Tech Stack: Next.js 15 (App Router), Go 1.24 (Gin, pgxpool), PostgreSQL 16 (pgvector), Python 3.12 (FastAPI), Google Gemini API, Docker.
* Live Demo: [trackr-portal.vercel.app](https://trackr-portal.vercel.app) • GitHub: [Divyesh-Challa/Trackr](https://github.com/Divyesh-Challa/Trackr)

### 2. SmartCart (Algorithmic Grocery Intelligence)
* Multi-store combinatorial basket optimizer engineered for Canadian supermarket price disparity.
* Calculates real-world Edmonton fuel economics ($1.42/L at 9.5 L/100km) across 3 distinct purchasing plans (Maximum Saver, Best Single Run, and In-Stock Verified).
* Features an interactive digital flyer station and price comparison engine.
* Tech Stack: Python, FastAPI, Combinatorial Algorithms, Tailwind CSS, TypeScript.
* Live Demo: [smartcart-9djq.onrender.com](https://smartcart-9djq.onrender.com) • GitHub: [Divyesh-Challa/SmartCart](https://github.com/Divyesh-Challa/SmartCart)

### 3. Amazon Review Synthesizer (AI Chrome Extension)
* Manifest V3 browser extension and FastAPI microservice that distills cluttered customer reviews into structured product intelligence in under 2.5 seconds.
* Computes an objective 0 to 10 Reliability Score, generates a verified Pros and Cons matrix, and flags recurring hardware defects.
* Tech Stack: Chrome Extension (MV3), Python, FastAPI, NLP/LLM Pipelines, JavaScript.
* GitHub: [Divyesh-Challa/amazon-review-synthesizer](https://github.com/Divyesh-Challa/amazon-review-synthesizer)

## Technical Architecture

* Core Framework: React 18 with TypeScript for strict type safety and component modularity.
* 3D Graphics Engine: Three.js integrated via React Three Fiber (R3F) and React Three Drei for custom GLTF model rendering, lighting shaders, and orbital camera controls.
* Styling: Tailwind CSS with custom gradient utility pipelines and responsive flex and grid layouts.
* Motion and Interactions: Framer Motion scroll triggers paired with react-parallax-tilt for interactive card dynamics.
* Inquiry Pipeline: FormSubmit API integration routing visitor inquiries directly to email.

## Tech Stack Summary

* Languages: Go, Python, TypeScript, JavaScript, SQL, C, HTML5, CSS3
* Frameworks and Libraries: Next.js, React, Gin, FastAPI, Node.js, Three.js, React Three Fiber, Tailwind CSS, Framer Motion
* Databases & Infrastructure: PostgreSQL (pgvector), Redis, Vite, Docker, Git, Unix/Linux Environments, Render, Vercel

## Getting Started

### Prerequisites
* Node.js (v18 or higher recommended)
* npm or yarn

### Installation
1. Clone the repository:
   ```bash
   git clone https://github.com/Divyesh-Challa/divyesh-portfolio.git
   cd divyesh-portfolio
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Run the development server:
   ```bash
   npm run dev
   ```
   Open `http://localhost:5173` in your browser.

4. Build for production:
   ```bash
   npm run build
   ```

## Contact

* Author: Divyesh Challa
* Education: Computing Science, University of Alberta
* Email: divyeshchallavgr@gmail.com
* GitHub: https://github.com/Divyesh-Challa
