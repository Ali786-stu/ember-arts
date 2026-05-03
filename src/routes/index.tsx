import React, { Suspense, lazy } from "react";
import { createFileRoute } from "@tanstack/react-router";
import { Loader } from "@/components/Loader";
import { CustomCursor } from "@/components/CustomCursor";
import { Particles } from "@/components/Particles";
import { Navbar } from "@/components/Navbar";
import { SmoothScroll } from "@/components/SmoothScroll";
import { Hero } from "@/components/sections/Hero";
import { About } from "@/components/sections/About";

// Lazy Load heavy sections below the fold
const Experience = lazy(() => import("@/components/sections/Experience").then(m => ({ default: m.Experience })));
const Skills = lazy(() => import("@/components/sections/Skills").then(m => ({ default: m.Skills })));
const Portfolio = lazy(() => import("@/components/sections/Portfolio").then(m => ({ default: m.Portfolio })));
const Certificates = lazy(() => import("@/components/sections/Certificates").then(m => ({ default: m.Certificates })));
const Education = lazy(() => import("@/components/sections/Education").then(m => ({ default: m.Education })));
const Contact = lazy(() => import("@/components/sections/Contact").then(m => ({ default: m.Contact })));
const GravitySection = lazy(() => import("@/components/sections/GravitySection").then(m => ({ default: m.GravitySection })));
const Footer = lazy(() => import("@/components/Footer").then(m => ({ default: m.Footer })));

export const Route = createFileRoute("/")({
  component: Index,
});

function Index() {
  return (
    <div className="relative min-h-screen bg-background overflow-x-hidden">
      <Loader />
      <CustomCursor />
      <SmoothScroll />
      <Particles />
      <Navbar />
      <main className="relative z-10">
        <Hero />
        <About />
        <Suspense fallback={null}>
          <Experience />
          <Skills />
          <Portfolio />
          <Certificates />
          <Education />
          <Contact />
          <GravitySection />
        </Suspense>
      </main>
      <Suspense fallback={null}>
        <Footer />
      </Suspense>
    </div>
  );
}
