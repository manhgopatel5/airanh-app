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
<svg viewBox="0 0 256 256">

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

  {/* PIN */}
  <g className="pin">
    <path
      d="M128 24
         C88 24 56 56 56 96
         C56 150 128 224 128 224
         C128 224 200 150 200 96
         C200 56 168 24 128 24 Z"
      fill="url(#gradPin)"
    />
  </g>

  {/* FACE */}
  <circle cx="128" cy="96" r="26" fill="#FFE0A3"/>

  {/* EYES */}
  <circle className="eye" cx="118" cy="92" r="3.5" fill="#5A3E2B"/>
  <circle className="eye" cx="138" cy="92" r="3.5" fill="#5A3E2B"/>

  {/* SMILE */}
  <path
    d="M118 104 Q128 112 138 104"
    stroke="#5A3E2B"
    strokeWidth="2.5"
    strokeLinecap="round"
    fill="none"
  />

  {/* WIFI WAVES */}
  <path className="wave w1"
    d="M168 64 Q196 84 196 112"
    stroke="url(#gradBlue)"
    strokeWidth="6"
    strokeLinecap="round"
    fill="none"
  />

  <path className="wave w2"
    d="M176 52 Q212 78 212 116"
    stroke="url(#gradBlue)"
    strokeWidth="6"
    strokeLinecap="round"
    fill="none"
  />

  {/* CURVE AI */}
  <path
    d="M64 148 Q110 110 152 148"
    stroke="url(#gradBlue)"
    strokeWidth="10"
    strokeLinecap="round"
    fill="none"
  />

  {/* DOT */}
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

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    overflow: hidden;
    background: #ffffff;
  }

  /* 🔥 nền blur kiểu iOS */
  .bg {
    position: absolute;
    inset: 0;
    background: linear-gradient(135deg, #4aa3df, #8fd3f4);
    filter: blur(120px);
    opacity: 0.6;
    animation: bgMove 8s ease-in-out infinite alternate;
  }

  /* 🚀 LOGO */
  .logo {
    width: 140px;
    height: 140px;
    z-index: 2;

    animation:
      zoom 1.2s ease forwards,
      float 3s ease-in-out infinite,
      glow 2.5s ease-in-out infinite;
  }

  .logo svg {
    width: 100%;
    height: 100%;
  }

  /* 📍 PIN PULSE */
  .pin {
    transform-origin: center;
    animation: pulse 2s infinite ease-in-out;
  }

  /* 👀 MẮT NHÁY */
  .eye {
    transform-origin: center;
    animation: blink 4s infinite;
  }

  /* 📡 SÓNG */
  .wave {
    opacity: 0.6;
  }

  .w1 {
    animation: wave 2s infinite;
  }

  .w2 {
    animation: wave 2s infinite 0.6s;
  }

  /* ✨ TEXT */
  .text {
    z-index: 2;
    margin-top: 16px;
  }

  .text span {
    font-size: 34px;
    font-weight: 800;
    color: #2b8fd6;
    display: inline-block;
    letter-spacing: 2px;

    animation: bounce 1.2s infinite;
  }

  /* ---------- ANIMATION ---------- */

  @keyframes zoom {
    from {
      transform: scale(0.6);
      opacity: 0;
    }
    to {
      transform: scale(1);
      opacity: 1;
    }
  }

  @keyframes float {
    0%,100% { transform: translateY(0); }
    50% { transform: translateY(-6px); }
  }

  @keyframes glow {
    0%,100% { filter: drop-shadow(0 0 6px #4aa3df); }
    50% { filter: drop-shadow(0 0 20px #4aa3df); }
  }

  @keyframes pulse {
    0%,100% { transform: scale(1); }
    50% { transform: scale(1.06); }
  }

  @keyframes blink {
    0%, 90%, 100% { transform: scaleY(1); }
    95% { transform: scaleY(0.1); }
  }

  @keyframes wave {
    0% {
      opacity: 0;
      transform: scale(0.8);
    }
    50% {
      opacity: 1;
    }
    100% {
      opacity: 0;
      transform: scale(1.3);
    }
  }

  @keyframes bounce {
    0%,100% { transform: translateY(0); }
    50% { transform: translateY(-12px); }
  }

  @keyframes bgMove {
    from { transform: translateX(-30px) translateY(-20px); }
    to { transform: translateX(30px) translateY(20px); }
  }
`}</style>
    </div>
  );
}