'use client';

import { useEffect } from 'react';
import gsap from 'gsap';

export const LandingAnimations: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  useEffect(() => {
    // Check if user prefers reduced motion
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) return;

    // Subtle GSAP entrance animations for landing page elements
    const ctx = gsap.context(() => {
      // Hero elements entrance
      gsap.fromTo(
        '.gsap-hero-badge',
        { opacity: 0, y: -15 },
        { opacity: 1, y: 0, duration: 0.6, ease: 'power2.out' }
      );

      gsap.fromTo(
        '.gsap-hero-title',
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: 0.8, delay: 0.1, ease: 'power2.out' }
      );

      gsap.fromTo(
        '.gsap-hero-subtext',
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: 0.8, delay: 0.25, ease: 'power2.out' }
      );

      gsap.fromTo(
        '.gsap-hero-cta',
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: 0.8, delay: 0.4, ease: 'power2.out' }
      );

      // Workflow cards animation
      gsap.fromTo(
        '.gsap-workflow-card',
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 0.6,
          stagger: 0.15,
          ease: 'power2.out',
          delay: 0.5,
        }
      );

      // Preview frame floating entrance
      gsap.fromTo(
        '.gsap-dashboard-preview',
        { opacity: 0, scale: 0.96, y: 30 },
        {
          opacity: 1,
          scale: 1,
          y: 0,
          duration: 1,
          delay: 0.6,
          ease: 'power3.out',
        }
      );
    });

    return () => ctx.revert();
  }, []);

  return <>{children}</>;
};
