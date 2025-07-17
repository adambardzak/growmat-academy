"use client";

import { useEffect } from 'react';
import Clarity from '@microsoft/clarity';

export default function ClarityInit() {
  useEffect(() => {
    const projectId = "sg60zo2vu5";
    Clarity.init(projectId);
  }, []);

  return null;
}
