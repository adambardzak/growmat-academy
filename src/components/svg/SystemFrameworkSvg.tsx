import React from "react";

const SystemFrameworkSvg: React.FC = () => {
  return (
    <svg
      width="100%"
      height="100%"
      viewBox="0 0 400 300"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect width="400" height="300" rx="20" fill="#0F172A" />
      
      {/* Clean background */}
      <circle cx="200" cy="150" r="70" fill="#111827" />
      
      {/* Simple clock design */}
      <circle cx="200" cy="150" r="60" stroke="#4ADE80" strokeWidth="2" fill="transparent" />
      
      {/* Clock markers */}
      <line x1="200" y1="100" x2="200" y2="110" stroke="#4ADE80" strokeWidth="2" />
      <line x1="250" y1="150" x2="240" y2="150" stroke="#4ADE80" strokeWidth="2" />
      <line x1="200" y1="200" x2="200" y2="190" stroke="#4ADE80" strokeWidth="2" />
      <line x1="150" y1="150" x2="160" y2="150" stroke="#4ADE80" strokeWidth="2" />
      
      {/* Clock hands */}
      <line x1="200" y1="150" x2="200" y2="110" stroke="#4ADE80" strokeWidth="2.5" strokeLinecap="round" />
      <line x1="200" y1="150" x2="230" y2="150" stroke="#4ADE80" strokeWidth="2.5" strokeLinecap="round" />
      <circle cx="200" cy="150" r="4" fill="#4ADE80" />
      
      {/* Clean time indicator */}
      <rect x="175" y="210" width="50" height="24" rx="12" fill="#111827" stroke="#4ADE80" strokeWidth="1" />
      <text x="185" y="226" fontFamily="sans-serif" fontSize="14" fill="#4ADE80" fontWeight="bold">30m</text>
      
      {/* Simple system squares */}
      <rect x="100" y="100" width="30" height="30" rx="4" stroke="#4ADE80" strokeWidth="2" fill="transparent" />
      <rect x="100" y="170" width="30" height="30" rx="4" stroke="#4ADE80" strokeWidth="2" fill="transparent" />
      <rect x="270" y="100" width="30" height="30" rx="4" stroke="#4ADE80" strokeWidth="2" fill="transparent" />
      <rect x="270" y="170" width="30" height="30" rx="4" stroke="#4ADE80" strokeWidth="2" fill="transparent" />
      
      {/* Connection lines */}
      <line x1="130" y1="115" x2="160" y2="135" stroke="#4ADE80" strokeWidth="1.5" strokeDasharray="4 2" />
      <line x1="130" y1="185" x2="160" y2="165" stroke="#4ADE80" strokeWidth="1.5" strokeDasharray="4 2" />
      <line x1="240" y1="135" x2="270" y2="115" stroke="#4ADE80" strokeWidth="1.5" strokeDasharray="4 2" />
      <line x1="240" y1="165" x2="270" y2="185" stroke="#4ADE80" strokeWidth="1.5" strokeDasharray="4 2" />
    </svg>
  );
};

export default SystemFrameworkSvg;
