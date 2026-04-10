"use client";
import InstallPWA from "./components/InstallPWA";
import { useEffect, useState } from "react";

export default function RootLayout({ children }) {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2500); // thời gian splash

    return () => clearTimeout(timer);
  }, []);

  return (
  <html lang="vi">
    <head>
      <link rel="manifest" href="/manifest.json" />
      <meta name="theme-color" content="#4aa3df" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
    </head>

    <body style={{ margin: 0 }}>
      <div className="app">
        {loading ? <Splash /> : children}
        <InstallPWA />
      </div>

      {/* animation chuyển cảnh */}
      <style jsx global>{`
        .app {
          animation: fadeIn 0.6s ease;
        }

        @keyframes fadeIn {
          from { opacity: 0; transform: scale(0.98); }
          to { opacity: 1; transform: scale(1); }
        }
      `}</style>
    </body>
  </html>
);

function Splash() {
  return (
    <div className="splash">

      {/* Background blur gradient */}
      <div className="bg"></div>

      {/* Logo */}
      <img src="/logo.PNG" className="logo" />

      {/* Text */}
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
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          overflow: hidden;
        }

        /* nền kiểu iOS blur */
        .bg {
          position: absolute;
          inset: 0;
          background: linear-gradient(135deg, #4aa3df, #8fd3f4);
          filter: blur(80px);
          opacity: 0.6;
          animation: bgMove 6s infinite alternate;
        }

        /* logo zoom + glow */
        .logo {
          width: 120px;
          z-index: 1;
          animation: zoom 1.5s ease forwards, glow 2s infinite;
        }

        /* text bounce đẹp hơn */
        .text span {
          font-size: 32px;
          font-weight: bold;
          color: #2b8fd6;
          display: inline-block;
          animation: bounce 1.2s infinite;
        }

        .text span:nth-child(1) { animation-delay: 0s }
        .text span:nth-child(2) { animation-delay: 0.1s }
        .text span:nth-child(4) { animation-delay: 0.2s }
        .text span:nth-child(5) { animation-delay: 0.3s }
        .text span:nth-child(6) { animation-delay: 0.4s }
        .text span:nth-child(7) { animation-delay: 0.5s }

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

        @keyframes glow {
          0%, 100% { filter: drop-shadow(0 0 5px #4aa3df); }
          50% { filter: drop-shadow(0 0 20px #4aa3df); }
        }

        @keyframes bounce {
          0%,100% { transform: translateY(0); }
          50% { transform: translateY(-12px); }
        }

        @keyframes bgMove {
          from { transform: translateX(-20px); }
          to { transform: translateX(20px); }
        }
      `}</style>
    </div>
  );
}

const styles = {
  container: {
    height: "100vh",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    background: "#ffffff",
  },
  logo: {
    width: "140px",
    marginBottom: "20px",
    animation: "fade 1s ease-in-out",
  },
  text: {
    fontSize: "32px",
    fontWeight: "bold",
    color: "#4aa3df",
  },
};
