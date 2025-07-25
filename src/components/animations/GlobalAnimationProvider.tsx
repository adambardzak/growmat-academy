"use client";

import React from 'react';
import { useEffect } from 'react';
import { AnimatePresence } from 'framer-motion';

// This component provides global animation context
// It should wrap the main content of your app to enable consistent animations

export default function GlobalAnimationProvider({
  children
}: {
  children: React.ReactNode
}) {
  useEffect(() => {
    // Add any global animation settings or preloading logic here
    document.body.classList.add('animation-ready');
    
    return () => {
      document.body.classList.remove('animation-ready');
    };
  }, []);

  return (
    <AnimatePresence mode="wait">
      {children}
    </AnimatePresence>
  );
}
