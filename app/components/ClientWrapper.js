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

      <img src="/logo.PNG" className="logo" />

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
    z-index: 2;
    animation: zoom 1.2s ease forwards;
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