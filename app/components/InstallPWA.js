"use client";
import { useEffect, useState } from "react";

export default function InstallPWA() {
  const [prompt, setPrompt] = useState(null);
  const [show, setShow] = useState(false);
  const [isIOS, setIsIOS] = useState(false);

  useEffect(() => {
    const dismissed = localStorage.getItem("pwa-dismissed");
    if (dismissed && Date.now() - dismissed < 3 * 24 * 60 * 60 * 1000) return;

    const ua = navigator.userAgent.toLowerCase();
    const ios = /iphone|ipad|ipod/.test(ua);
    setIsIOS(ios);

    const handler = (e) => {
      e.preventDefault();
      setPrompt(e);
      setTimeout(() => setShow(true), 1500);
    };

    window.addEventListener("beforeinstallprompt", handler);

    if (ios) {
      setTimeout(() => setShow(true), 1500);
    }

    return () => {
      window.removeEventListener("beforeinstallprompt", handler);
    };
  }, []);

  const install = async () => {
    if (!prompt) return;
    prompt.prompt();
    await prompt.userChoice;
    setShow(false);
  };

  const close = () => {
    localStorage.setItem("pwa-dismissed", Date.now());
    setShow(false);
  };

  if (!show) return null;

  return (
    <div className="overlay">
      <div className="popup">

        {/* 🔥 SVG LOGO (không cần file PNG nữa) */}
        <div className="logo">
          <svg viewBox="0 0 256 256">
            <circle cx="128" cy="128" r="90" fill="#4aa3df" />
            <text x="128" y="145" textAnchor="middle" fontSize="60" fill="white">AI</text>
          </svg>
        </div>

        <h2 className="title">Cài AI Rảnh</h2>

        <p className="desc">
          Mở nhanh hơn • Không quảng cáo <br />
          Trải nghiệm như app thật
        </p>

        {isIOS ? (
          <div className="iosBox">
            👉 Nhấn <b>Share</b> → <b>Thêm vào màn hình chính</b>
          </div>
        ) : (
          <button className="install" onClick={install}>
            Cài ngay
          </button>
        )}

        <button className="later" onClick={close}>
          Để sau
        </button>
      </div>

      <style jsx>{`
        .overlay {
          position: fixed;
          inset: 0;
          background: rgba(0,0,0,0.5);
          backdrop-filter: blur(8px);
          display: flex;
          align-items: flex-end;
          animation: fadeIn 0.3s ease;
          z-index: 9999;
        }

        .popup {
          width: 100%;
          background: #fff;
          border-radius: 24px 24px 0 0;
          padding: 25px 20px 30px;
          text-align: center;
          animation: slideUp 0.4s ease;
        }

        .logo {
          width: 70px;
          height: 70px;
          margin: 0 auto 10px;
        }

        .logo svg {
          width: 100%;
          height: 100%;
        }

        .title {
          font-size: 22px;
          font-weight: 700;
          margin: 10px 0;
        }

        .desc {
          font-size: 15px;
          color: #666;
          margin-bottom: 20px;
          line-height: 1.5;
        }

        .install {
          background: linear-gradient(135deg, #4aa3df, #2b8fd6);
          color: white;
          border: none;
          padding: 14px;
          border-radius: 12px;
          width: 100%;
          font-size: 16px;
          font-weight: bold;
          box-shadow: 0 5px 15px rgba(74,163,223,0.4);
        }

        .iosBox {
          background: #f5f7fa;
          padding: 12px;
          border-radius: 10px;
          font-size: 14px;
          margin-bottom: 10px;
        }

        .later {
          margin-top: 12px;
          background: none;
          border: none;
          color: #999;
          font-size: 14px;
        }

        @keyframes slideUp {
          from { transform: translateY(100%); }
          to { transform: translateY(0); }
        }

        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
      `}</style>
    </div>
  );
}