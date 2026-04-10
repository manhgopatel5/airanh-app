"use client";
import { useEffect, useState } from "react";

export default function ClientWrapper({ children }) {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2500);

    return () => clearTimeout(timer);
  }, []);

  return loading ? <Splash /> : children;
}

function Splash() {
  return (
    <div className="splash">
      <div className="bg"></div>

<div className="logo">
  <svg viewBox="0 0 256 256" xmlns="http://www.w3.org/2000/svg">
    
    <defs>
      <linearGradient id="gradPin" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0%" stopColor="#FFB347"/>
        <stop offset="100%" stopColor="#FF8C42"/>
      </linearGradient>

      <linearGradient id="gradBlue" x1="0" y1="0" x2="1" y2="1">
        <stop offset="0%" stopColor="#5BC0EB"/>
        <stop offset="100%" stopColor="#3A86FF"/>
      </linearGradient>
    </defs>

    <path d="M128 24 C88 24 56 56 56 96 C56 150 128 224 128 224 C128 224 200 150 200 96 C200 56 168 24 128 24 Z"
      fill="url(#gradPin)"/>

    <circle cx="128" cy="96" r="26" fill="#FFE0A3"/>

    <circle cx="118" cy="92" r="3.5" fill="#5A3E2B"/>
    <circle cx="138" cy="92" r="3.5" fill="#5A3E2B"/>

    <path d="M118 104 Q128 112 138 104"
      stroke="#5A3E2B"
      strokeWidth="2.5"
      strokeLinecap="round"
      fill="none"/>

    <path d="M168 64 Q196 84 196 112"
      stroke="url(#gradBlue)"
      strokeWidth="6"
      strokeLinecap="round"
      fill="none"/>

    <path d="M176 52 Q212 78 212 116"
      stroke="url(#gradBlue)"
      strokeWidth="6"
      strokeLinecap="round"
      fill="none"
      opacity="0.7"/>

    <path d="M64 148 Q110 110 152 148"
      stroke="url(#gradBlue)"
      strokeWidth="10"
      strokeLinecap="round"
      fill="none"/>

    <circle cx="64" cy="148" r="6" fill="#3A86FF"/>

  </svg>
</div>

      <div className="text">
        <span>A</span>
        <span>I</span>
        <span> </span>
        <span>R</span>
        <span>Ả</span>
        <span>N</span>
        <span>H</span>
      </div>

     <style jsx>{`
  .splash {
    position: fixed;
    inset: 0;
    z-index: 9999;
    background: white;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    overflow: hidden;
  }

  .bg {
    position: absolute;
    inset: 0;
    background: linear-gradient(135deg, #4aa3df, #8fd3f4);
    filter: blur(100px);
    opacity: 0.5;
  }

  .logo {
  width: 120px;
  height: 120px;
  z-index: 2;
  animation: zoom 1.2s ease forwards, float 3s ease-in-out infinite;
}

.logo svg {
  width: 100%;
  height: 100%;
}

  .text {
    z-index: 2;
  }

  .text span {
    font-size: 32px;
    font-weight: bold;
    color: #2b8fd6;
    display: inline-block;
    animation: bounce 1.2s infinite;
  }

  @keyframes zoom {
    from { transform: scale(0.6); opacity: 0; }
    to { transform: scale(1); opacity: 1; }
  }

  @keyframes bounce {
    0%,100% { transform: translateY(0); }
    50% { transform: translateY(-12px); }
  }
`}</style>
    </div>
  );
}