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

      {/* 🔥 LOGO SVG */}
      <div className="logo">
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

  {/* A nét cong */}
  <path
    d="M40 150 
       Q90 40 140 150"
    stroke="url(#gBlue)"
    strokeWidth="18"
    strokeLinecap="round"
    fill="none"
  />

  {/* mũi tên trong A */}
  <path
    d="M90 125 L90 90 
       M90 90 L70 110 
       M90 90 L110 110"
    stroke="url(#gBlue)"
    strokeWidth="12"
    strokeLinecap="round"
  />

  {/* i */}
  <circle cx="165" cy="55" r="12" fill="url(#gBlue)" />
  <path
    d="M165 75 L165 150"
    stroke="url(#gBlue)"
    strokeWidth="18"
    strokeLinecap="round"
  />

  {/* nét nối i → pin */}
  <path
    d="M165 150 
       Q210 120 230 150"
    stroke="url(#gBlue)"
    strokeWidth="18"
    strokeLinecap="round"
    fill="none"
  />

  {/* pin */}
  <path
    d="M230 60
       C190 60 170 90 170 120
       C170 170 230 210 230 210
       C230 210 290 170 290 120
       C290 90 270 60 230 60 Z"
    fill="url(#gOrange)"
  />

  {/* mặt */}
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

  {/* sóng */}
  <path
    d="M270 80 Q310 110 310 150"
    stroke="url(#gBlue)"
    strokeWidth="10"
    strokeLinecap="round"
    fill="none"
  />

  <path
    d="M285 70 Q340 110 340 160"
    stroke="url(#gBlue)"
    strokeWidth="10"
    strokeLinecap="round"
    fill="none"
    opacity="0.6"
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

        .logo {
          width: 140px;
          height: 140px;
          z-index: 2;
          animation: zoom 1.2s ease forwards, float 3s infinite;
        }

        .logo svg {
          width: 100%;
          height: 100%;
        }

        .pin {
          animation: pulse 2s infinite;
        }

        .eye {
          animation: blink 4s infinite;
          transform-origin: center;
        }

        .wave {
          opacity: 0.6;
        }

        .w1 { animation: wave 2s infinite; }
        .w2 { animation: wave 2s infinite 0.6s; }

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