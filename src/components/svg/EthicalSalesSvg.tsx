import React from "react";

const EthicalSalesSvg: React.FC = () => {
  return (
    <svg
      width="100%"
      height="100%"
      viewBox="0 0 400 300"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect width="400" height="300" rx="20" fill="#0F172A" />
      
      {/* Simple background */}
      <circle cx="200" cy="150" r="80" fill="#111827" />
      
      {/* Handshake icon - simple and clean */}
      <rect x="160" y="140" width="80" height="20" rx="4" fill="#4ADE80" fillOpacity="0.3" />
      
      {/* Left hand */}
      <path
        d="M160 150 L180 130 L190 140 L170 160 Z"
        fill="#0F172A" 
        stroke="#4ADE80" 
        strokeWidth="2"
      />
      
      {/* Right hand */}
      <path
        d="M240 150 L220 130 L210 140 L230 160 Z"
        fill="#0F172A"
        stroke="#4ADE80"
        strokeWidth="2"
      />
      
      {/* Clean check mark */}
      <circle cx="200" cy="90" r="24" fill="transparent" stroke="#4ADE80" strokeWidth="2" />
      <path d="M185 90 L195 100 L215 80" stroke="#4ADE80" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
      
      {/* Simple balance scale for ethics */}
      <line x1="200" y1="190" x2="200" y2="220" stroke="#4ADE80" strokeWidth="2" />
      <line x1="170" y1="220" x2="230" y2="220" stroke="#4ADE80" strokeWidth="2" />
      <circle cx="170" cy="210" r="8" fill="transparent" stroke="#4ADE80" strokeWidth="2" />
      <circle cx="230" cy="210" r="8" fill="transparent" stroke="#4ADE80" strokeWidth="2" />
      
      {/* Ethical label */}
      <rect x="175" y="240" width="50" height="22" rx="11" fill="#111827" stroke="#4ADE80" strokeWidth="1" />
      <text x="182" y="256" fontFamily="sans-serif" fontSize="12" fill="#4ADE80" fontWeight="bold">Etické</text>
    </svg>
  );
};

export default EthicalSalesSvg;
