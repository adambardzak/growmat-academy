import React from "react";

const QuickVideoSvg: React.FC = () => {
  return (
    <svg
      width="100%"
      height="100%"
      viewBox="0 0 400 300"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect width="400" height="300" rx="20" fill="#0F172A" />
      
      {/* Simple background element */}
      <circle cx="200" cy="150" r="100" fill="#111827" />
      
      {/* Simplified phone */}
      <rect x="165" y="90" width="70" height="140" rx="12" stroke="#4ADE80" strokeWidth="2.5" fill="#0F172A" />
      <rect x="170" y="100" width="60" height="120" rx="6" fill="#0F172A" stroke="#4ADE80" strokeWidth="1" strokeOpacity="0.5" />
      
      {/* Simple play button */}
      <circle cx="200" cy="150" r="26" fill="#4ADE80" fillOpacity="0.2" stroke="#4ADE80" strokeWidth="2" />
      <polygon points="190,135 190,165 215,150" fill="#4ADE80" />
      
      {/* Clean time indicator */}
      <rect x="260" y="140" width="50" height="20" rx="10" fill="#0F172A" stroke="#4ADE80" strokeWidth="1" />
      <text x="269" y="155" fontFamily="sans-serif" fontSize="12" fill="#4ADE80" fontWeight="bold">10:00</text>
      
      {/* Simple growth chart */}
      <line x1="100" y1="200" x2="100" y2="160" stroke="#4ADE80" strokeWidth="2" strokeLinecap="round" />
      <line x1="120" y1="200" x2="120" y2="140" stroke="#4ADE80" strokeWidth="2" strokeLinecap="round" />
      <line x1="140" y1="200" x2="140" y2="120" stroke="#4ADE80" strokeWidth="2" strokeLinecap="round" />
    </svg>
  );
};

export default QuickVideoSvg;
