'use client';

import React, { useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export const LandingAnimations: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  useEffect(() => {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) return;

    const ctx = gsap.context(() => {
      // ─── Hero Entrance ──────────────────────────────────────────────────────
      gsap.fromTo(
        '.gsap-hero-badge',
        { opacity: 0, y: -16, filter: 'blur(4px)' },
        { opacity: 1, y: 0, filter: 'blur(0px)', duration: 0.7, ease: 'power2.out' }
      );

      gsap.fromTo(
        '.gsap-hero-title',
        { opacity: 0, y: 24 },
        { opacity: 1, y: 0, duration: 0.9, delay: 0.12, ease: 'power3.out' }
      );

      gsap.fromTo(
        '.gsap-hero-subtext',
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: 0.8, delay: 0.28, ease: 'power2.out' }
      );

      gsap.fromTo(
        '.gsap-hero-cta',
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: 0.8, delay: 0.42, ease: 'power2.out' }
      );

      gsap.fromTo(
        '.gsap-hero-trust',
        { opacity: 0, y: 12 },
        { opacity: 1, y: 0, duration: 0.7, delay: 0.56, ease: 'power2.out' }
      );

      // ─── Invoice Visualization ───────────────────────────────────────────────
      gsap.fromTo(
        '.gsap-hero-visual',
        { opacity: 0, scale: 0.94, y: 30 },
        { opacity: 1, scale: 1, y: 0, duration: 1.1, delay: 0.2, ease: 'power3.out' }
      );

      // Floating AI cards staggered entrance
      gsap.fromTo(
        '.gsap-hero-card',
        { opacity: 0, scale: 0.88, y: 10 },
        {
          opacity: 1,
          scale: 1,
          y: 0,
          duration: 0.7,
          delay: 0.6,
          stagger: 0.12,
          ease: 'back.out(1.5)',
        }
      );

      // ─── Problem Section ──────────────────────────────────────────────────────
      gsap.fromTo(
        '.gsap-problem-card',
        { opacity: 0, y: 40 },
        {
          opacity: 1,
          y: 0,
          duration: 0.7,
          stagger: 0.15,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: '.gsap-problem-card',
            start: 'top 85%',
            toggleActions: 'play none none none',
          },
        }
      );

      // ─── Workflow Cards (HowItWorks) ──────────────────────────────────────────
      gsap.fromTo(
        '.gsap-workflow-card',
        { opacity: 0, y: 36, scale: 0.97 },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 0.65,
          stagger: 0.12,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: '.gsap-workflow-card',
            start: 'top 85%',
            toggleActions: 'play none none none',
          },
        }
      );

      // ─── Pipeline Nodes ───────────────────────────────────────────────────────
      gsap.fromTo(
        '.gsap-pipeline-node',
        { opacity: 0, y: 24, scale: 0.92 },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 0.6,
          stagger: 0.08,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: '.gsap-pipeline-node',
            start: 'top 85%',
            toggleActions: 'play none none none',
          },
        }
      );

      // ─── Dashboard Preview ────────────────────────────────────────────────────
      gsap.fromTo(
        '.gsap-dashboard-preview',
        { opacity: 0, scale: 0.97, y: 32 },
        {
          opacity: 1,
          scale: 1,
          y: 0,
          duration: 1,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: '.gsap-dashboard-preview',
            start: 'top 85%',
            toggleActions: 'play none none none',
          },
        }
      );

      // ─── Benefits Cards ───────────────────────────────────────────────────────
      gsap.fromTo(
        '.gsap-benefit-card',
        { opacity: 0, y: 30, scale: 0.97 },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 0.65,
          stagger: 0.1,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: '.gsap-benefit-card',
            start: 'top 85%',
            toggleActions: 'play none none none',
          },
        }
      );

      // ─── Generic sections fade-in ─────────────────────────────────────────────
      gsap.utils.toArray<Element>('.gsap-section').forEach((section) => {
        gsap.fromTo(
          section,
          { opacity: 0, y: 20 },
          {
            opacity: 1,
            y: 0,
            duration: 0.7,
            ease: 'power2.out',
            scrollTrigger: {
              trigger: section,
              start: 'top 90%',
              toggleActions: 'play none none none',
            },
          }
        );
      });
    });

    return () => {
      ctx.revert();
      ScrollTrigger.getAll().forEach((st) => st.kill());
    };
  }, []);

  return <>{children}</>;
};
