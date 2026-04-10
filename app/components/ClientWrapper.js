"use client";
import { useEffect, useState } from "react";
import Logo from "./components/Logo";

export default function ClientWrapper({ children }) {
  const [showApp, setShowApp] = useState(false);
  const [hideSplash, setHideSplash] = useState(false);

  useEffect(() => {
    async function loadApp() {
      const start = Date.now();

      await fetch("https://jsonplaceholder.typicode.com/todos/1");

      const elapsed = Date.now() - start;
      const delay = Math.max(1500 - elapsed, 0);

      setTimeout(() => {
        setHideSplash(true);

        setTimeout(() => {
          setShowApp(true);
        }, 600);

      }, delay);
    }

    loadApp();
  }, []);

  return (
    <>
      <Splash hide={hideSplash} />

      <div className={`app ${showApp ? "show" : ""}`}>
        {children}
      </div>

      <style jsx global>{`
        .app {
          opacity: 0;
          transform: scale(1.02);
          transition: all 0.6s ease;
        }

        .app.show {
          opacity: 1;
          transform: scale(1);
        }
      `}</style>
    </>
  );
}

function Splash({ hide }) {
  return (
    <div className={`splash ${hide ? "hide" : ""}`}>
      
      <div className="bg"></div>

      <div
        className="logo"
        onClick={(e) => e.currentTarget.classList.toggle("active")}
      >
        <Logo size={260} />
      </div>

      <div className="brand">
        <div className="title">
          <span className="ai">AI</span>
          <span className="ranh"> RẢNH</span>
        </div>

        <div className="subtitle">
          KẾT NỐI CÔNG VIỆC GẦN BẠN
        </div>
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
          background: #ffffff;
          overflow: hidden;
        }

        .splash.hide {
          opacity: 0;
          transform: scale(1.1);
          filter: blur(10px);
          transition: all 0.6s ease;
        }

        .bg {
          position: absolute;
          inset: 0;
          background: linear-gradient(135deg, #4aa3df, #8fd3f4);
          filter: blur(120px);
          opacity: 0.6;
          animation: bgMove 8s infinite alternate;
        }

        .logo {
          width: 260px;
          margin-bottom: 10px;
          cursor: pointer;
        }

        .dot {
          animation: dotMove 2.5s ease-in-out infinite;
        }

        @keyframes dotMove {
          0%,100% { transform: translateY(0); }
          50% { transform: translateY(10px); }
        }

        .curve {
          animation: draw 2s ease-in-out infinite alternate;
        }

        @keyframes draw {
          from { stroke-dasharray: 0 200; }
          to { stroke-dasharray: 200 0; }
        }

        .pin {
          transform-origin: center;
          animation: pulse 2s infinite;
        }

        .wave {
          opacity: 0.5;
        }

        .w1 { animation: wave 2s infinite; }
        .w2 { animation: wave 2s infinite 0.6s; }

        @keyframes wave {
          0% { opacity: 0; transform: scale(0.8); }
          50% { opacity: 1; }
          100% { opacity: 0; transform: scale(1.4); }
        }

        .logo.active .pin {
          animation: explode 0.5s ease;
        }

        @keyframes explode {
          0% { transform: scale(1); }
          50% { transform: scale(1.3); }
          100% { transform: scale(1); }
        }

        .logo.active .dot {
          transform: translateY(-20px) scale(1.2);
          transition: 0.4s;
        }

        .brand {
          z-index: 2;
          text-align: center;
          margin-top: 24px;
        }

        .title {
          font-size: 52px;
          font-weight: 800;
          font-family: "Inter", sans-serif;
        }

        .ai {
          background: linear-gradient(135deg, #6fb7d6, #3a86ff);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }

        .ranh {
          background: linear-gradient(135deg, #f6b35a, #f08c3a);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }

        .subtitle {
          margin-top: 10px;
          font-size: 16px;
          font-weight: 600;
          color: #9e9e9e;
        }

        @keyframes bgMove {
          from { transform: translateX(-30px); }
          to { transform: translateX(30px); }
        }
      `}</style>
    </div>
  );
}