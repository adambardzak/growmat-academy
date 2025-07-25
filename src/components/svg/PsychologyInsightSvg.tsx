import React from "react";

const PsychologyInsightSvg: React.FC = () => {
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

      {/* Clean minimalist brain outline */}
      <path
        d="M170,110 C165,105 160,105 155,110 C150,115 150,125 155,130 C150,135 150,145 155,150 C150,155 150,165 155,170 C160,175 165,175 170,170"
        stroke="#4ADE80"
        strokeWidth="2.5"
        fill="transparent"
        strokeLinejoin="round"
        strokeLinecap="round"
      />

      <path
        d="M230,110 C235,105 240,105 245,110 C250,115 250,125 245,130 C250,135 250,145 245,150 C250,155 250,165 245,170 C240,175 235,175 230,170"
        stroke="#4ADE80"
        strokeWidth="2.5"
        fill="transparent"
        strokeLinejoin="round"
        strokeLinecap="round"
      />

      {/* Center connecting line */}
      <path
        d="M170,110 C180,100 195,100 200,100 C205,100 220,100 230,110 M170,170 C180,180 195,180 200,180 C205,180 220,180 230,170"
        stroke="#4ADE80"
        strokeWidth="2.5"
        fill="transparent"
        strokeLinejoin="round"
        strokeLinecap="round"
      />

      {/* Simple eye icon */}
      <ellipse
        cx="200"
        cy="70"
        rx="25"
        ry="15"
        stroke="#4ADE80"
        strokeWidth="2"
        fill="transparent"
      />
      <circle cx="200" cy="70" r="6" fill="#4ADE80" />

      {/* Modern data visualization */}
      <line
        x1="150"
        y1="220"
        x2="250"
        y2="220"
        stroke="#4ADE80"
        strokeWidth="1"
      />
      <line
        x1="150"
        y1="220"
        x2="150"
        y2="190"
        stroke="#4ADE80"
        strokeWidth="1"
      />

      <path
        d="M150,210 L170,200 L190,215 L210,190 L230,195 L250,205"
        stroke="#4ADE80"
        strokeWidth="2.5"
        fill="transparent"
        strokeLinecap="round"
        strokeLinejoin="round"
      />

      {/* Psychology label */}
      <rect
        x="160"
        y="230"
        width="80"
        height="24"
        rx="12"
        fill="#111827"
        stroke="#4ADE80"
        strokeWidth="1"
      />
      <text
        x="170"
        y="246"
        fontFamily="sans-serif"
        fontSize="12"
        fill="#4ADE80"
        fontWeight="bold"
      >
        Psychologie
      </text>
    </svg>
  );
};

export default PsychologyInsightSvg;
