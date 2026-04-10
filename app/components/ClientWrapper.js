"use client";
import { useEffect, useState } from "react";

export default function ClientWrapper({ children }) {
  const [loading, setLoading] = useState(true);
  const [hideSplash, setHideSplash] = useState(false);

  useEffect(() => {
    async function loadApp() {
      try {
        // 🔥 loading theo data thật (có thể thay API thật)
        await fetch("https://jsonplaceholder.typicode.com/todos/1");

        setHideSplash(true); // bắt đầu fade

        setTimeout(() => {
          setLoading(false);
        }, 600);
      } catch (err) {
        console.error(err);
        setLoading(false);
      }
    }

    loadApp();
  }, []);

  return (
    <>
      {loading && <Splash hide={hideSplash} />}

      <div className={`app ${!loading ? "show" : ""}`}>
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

          <g className="pin">
            <path d="M128 24 C88 24 56 56 56 96 C56 150 128 224 128 224 C128 224 200 150 200 96 C200 56 168 24 128 24 Z"
              fill="url(#gradPin)" />
          </g>

          <circle cx="128" cy="96" r="26" fill="#FFE0A3"/>

          <circle className="eye" cx="118" cy="92" r="3.5" fill="#5A3E2B"/>
          <circle className="eye" cx="138" cy="92" r="3.5" fill="#5A3E2B"/>

          <path d="M118 104 Q128 112 138 104"
            stroke="#5A3E2B"
            strokeWidth="2.5"
            strokeLinecap="round"
            fill="none"
          />

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

          <path d="M64 148 Q110 110 152 148"
            stroke="url(#gradBlue)"
            strokeWidth="10"
            strokeLinecap="round"
            fill="none"
          />

          <circle cx="64" cy="148" r="6" fill="#3A86FF"/>

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
          background: white;
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
  margin-top: 20px;
}

/* AI + RẢNH */
.title {
  font-size: 42px;
  font-weight: 800;
  letter-spacing: 1px;
}

/* AI màu xanh */
.ai {
  background: linear-gradient(135deg, #5BC0EB, #3A86FF);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}

/* RẢNH màu cam */
.ranh {
  background: linear-gradient(135deg, #FFB347, #FF8C42);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}

/* SUBTITLE */
.subtitle {
  margin-top: 8px;
  font-size: 14px;
  font-weight: 600;
  color: #9aa0a6;
  letter-spacing: 1px;
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

        .text span {
          font-size: 34px;
          font-weight: 800;
          color: #2b8fd6;
          display: inline-block;
          animation: bounce 1.2s infinite;
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