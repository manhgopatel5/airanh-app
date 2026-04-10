"use client";
import { useEffect, useState } from "react";

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
      setHideSplash(true); // fade splash

      setTimeout(() => {
        setShowApp(true); // show app
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
<svg viewBox="0 0 360 220">

  <defs>
    <linearGradient id="gBlue" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0%" stopColor="#7cc0d8"/>
      <stop offset="100%" stopColor="#4a90e2"/>
    </linearGradient>

    <linearGradient id="gOrange" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0%" stopColor="#f7b45a"/>
      <stop offset="100%" stopColor="#f08c3a"/>
    </linearGradient>
  </defs>

  {/* A */}
  <path className="a"
    d="M40 150 Q90 40 140 150"
    stroke="url(#gBlue)"
    strokeWidth="18"
    strokeLinecap="round"
    fill="none"
  />

  {/* arrow */}
  <path className="arrow"
    d="M90 125 L90 90 M90 90 L70 110 M90 90 L110 110"
    stroke="url(#gBlue)"
    strokeWidth="12"
    strokeLinecap="round"
  />

  {/* dot */}
  <circle className="dot" cx="165" cy="55" r="12" fill="url(#gBlue)" />

  {/* line */}
  <path className="iline"
    d="M165 75 L165 150"
    stroke="url(#gBlue)"
    strokeWidth="18"
    strokeLinecap="round"
  />

  {/* curve */}
  <path className="curve"
    d="M165 150 Q210 120 230 150"
    stroke="url(#gBlue)"
    strokeWidth="18"
    strokeLinecap="round"
    fill="none"
  />

  {/* pin */}
  <path className="pin"
    d="M230 60 C190 60 170 90 170 120 C170 170 230 210 230 210 C230 210 290 170 290 120 C290 90 270 60 230 60 Z"
    fill="url(#gOrange)"
  />

  {/* face */}
  <circle cx="230" cy="120" r="22" fill="#ffe0a3"/>
  <circle cx="220" cy="115" r="3" fill="#5a3e2b"/>
  <circle cx="240" cy="115" r="3" fill="#5a3e2b"/>

  <path
    d="M220 130 Q230 138 240 130"
    stroke="#5a3e2b"
    strokeWidth="3"
    fill="none"
    strokeLinecap="round"
  />

  {/* waves */}
  <path className="wave w1"
    d="M270 80 Q310 110 310 150"
    stroke="url(#gBlue)"
    strokeWidth="10"
    strokeLinecap="round"
    fill="none"
  />

  <path className="wave w2"
    d="M285 70 Q340 110 340 160"
    stroke="url(#gBlue)"
    strokeWidth="10"
    strokeLinecap="round"
    fill="none"
  />

</svg>
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

        /* 🔥 FADE OUT */
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

        /* 🔥 LOGO ANIMATION MỚI */

.logo {
  width: 260px;
  margin-bottom: 10px;
  cursor: pointer;
}

/* DOT bay nhẹ */
.dot {
  animation: dotMove 2.5s ease-in-out infinite;
}

@keyframes dotMove {
  0%,100% { transform: translateY(0); }
  50% { transform: translateY(10px); }
}

/* curve sống */
.curve {
  animation: draw 2s ease-in-out infinite alternate;
}

@keyframes draw {
  from { stroke-dasharray: 0 200; }
  to { stroke-dasharray: 200 0; }
}

/* pin thở */
.pin {
  transform-origin: center;
  animation: pulse 2s infinite;
}

/* sóng lan */
.wave {
  opacity: 0.5;
}

.w1 {
  animation: wave 2s infinite;
}

.w2 {
  animation: wave 2s infinite 0.6s;
}

@keyframes wave {
  0% { opacity: 0; transform: scale(0.8); }
  50% { opacity: 1; }
  100% { opacity: 0; transform: scale(1.4); }
}

/* CLICK EFFECT */
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
        /* 🔥 BRAND TEXT */
.brand {
  z-index: 2;
  text-align: center;
  margin-top: 24px;
}

/* TITLE */
.title {
  font-size: 52px; /* 🔥 to hơn */
  font-weight: 800;
  letter-spacing: 1px;
  font-family: "Inter", sans-serif;
}

/* AI màu xanh giống ảnh */
.ai {
  background: linear-gradient(135deg, #6fb7d6, #3a86ff);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}

/* RẢNH màu cam giống ảnh */
.ranh {
  background: linear-gradient(135deg, #f6b35a, #f08c3a);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}

/* SUBTITLE */
.subtitle {
  margin-top: 10px;
  font-size: 16px;
  font-weight: 600;
  color: #9e9e9e;
  letter-spacing: 1.5px;
}

/* 🔥 ANIMATION nhẹ */
.title {
  animation: fadeUp 0.8s ease;
}

.subtitle {
  animation: fadeUp 1s ease;
}

@keyframes fadeUp {
  from {
    opacity: 0;
    transform: translateY(10px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

        

        @keyframes zoom {
          from { transform: scale(0.6); opacity: 0; }
          to { transform: scale(1); opacity: 1; }
        }

        @keyframes float {
          0%,100% { transform: translateY(0); }
          50% { transform: translateY(-6px); }
        }

        @keyframes pulse {
          0%,100% { transform: scale(1); }
          50% { transform: scale(1.06); }
        }

        @keyframes blink {
          0%,90%,100% { transform: scaleY(1); }
          95% { transform: scaleY(0.1); }
        }

        @keyframes wave {
          0% { opacity: 0; transform: scale(0.8); }
          50% { opacity: 1; }
          100% { opacity: 0; transform: scale(1.3); }
        }

        @keyframes bounce {
          0%,100% { transform: translateY(0); }
          50% { transform: translateY(-12px); }
        }

        @keyframes bgMove {
          from { transform: translateX(-30px); }
          to { transform: translateX(30px); }
        }
      `}</style>
    </div>
  );
}