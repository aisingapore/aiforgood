"use client";

import { useEffect } from "react";

import { ScrollProgress } from "@/components/scroll-progress";
import { SectionNav } from "@/components/section-nav";
import { ScrollToTop } from "@/components/scroll-to-top";
import { Navbar } from "@/components/navbar";
import { HeroSection } from "@/components/hero-section";
import { ChallengeSection } from "@/components/challenge-section";
import { TheoryOfChangeSection } from "@/components/theory-of-change-section";
import { Sdg4Section } from "@/components/sdg4-section";
import { ImpactSection } from "@/components/impact-section";
import { ProgrammesSection } from "@/components/programmes-section";
import { AllianceSection } from "@/components/alliance-section";
import { CollaborationSection } from "@/components/collaboration-section";
import { GallerySection } from "@/components/gallery-section";
import { ContactSection } from "@/components/contact-section";
import { SiteFooter } from "@/components/site-footer";

export default function Home() {
  // Scroll-reveal. Two observers: one adds `.visible` when an element enters
  // the viewport, the other strips it once the element has fully left, so the
  // animation replays on the way back.
  useEffect(() => {
    const reveal = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) entry.target.classList.add("visible");
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -40px 0px" },
    );

    const unreveal = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) entry.target.classList.remove("visible");
        });
      },
      { threshold: 0 },
    );

    const targets = document.querySelectorAll(
      ".reveal, .reveal-left, .reveal-right, .reveal-scale, .heading-underline",
    );
    targets.forEach((el) => {
      reveal.observe(el);
      unreveal.observe(el);
    });

    return () => {
      reveal.disconnect();
      unreveal.disconnect();
    };
  }, []);

  // Material-style click ripple, delegated from the document so any element
  // carrying `.ripple` gets one without wiring up its own handler.
  useEffect(() => {
    const onClick = (event: MouseEvent) => {
      const host = (event.target as HTMLElement | null)?.closest(".ripple");
      if (!host) return;

      const rect = host.getBoundingClientRect();
      const size = Math.max(rect.width, rect.height);
      const left = event.clientX - rect.left - size / 2;
      const top = event.clientY - rect.top - size / 2;

      const circle = document.createElement("span");
      circle.className = "ripple-circle";
      circle.style.cssText = `width:${size}px;height:${size}px;left:${left}px;top:${top}px`;
      host.appendChild(circle);
      circle.addEventListener("animationend", () => circle.remove());
    };

    document.addEventListener("click", onClick);
    return () => document.removeEventListener("click", onClick);
  }, []);

  return (
    <>
      <ScrollProgress />
      <SectionNav />
      <ScrollToTop />
      <main className="min-h-screen">
        <Navbar />
        <HeroSection />
        <ChallengeSection />
        <TheoryOfChangeSection />
        <Sdg4Section />
        <ImpactSection />
        <ProgrammesSection />
        <AllianceSection />
        <CollaborationSection />
        <GallerySection />
        <ContactSection />
        <SiteFooter />
      </main>
    </>
  );
}
