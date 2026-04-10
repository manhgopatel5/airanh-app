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

    window.addEventListener("beforeinstallprompt", (e) => {
      e.preventDefault();
      setPrompt(e);
      setTimeout(() => setShow(true), 1500);
    });

    if (ios) setTimeout(() => setShow(true), 1500);
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
        
        <img src="/logo.PNG" className="logo" />

        <h3>🚀 Cài AI Rảnh</h3>
        <p className="desc">
          Mở nhanh hơn • Không quảng cáo • Trải nghiệm như app thật
        </p>

        {isIOS ? (
          <p className="ios">
            👉 Nhấn <b>Share</b> → <b>Thêm vào màn hình chính</b>
          </p>
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
          background: rgba(0,0,0,0.4);
          display: flex;
          align-items: flex-end;
          animation: fadeIn 0.3s ease;
          z-index: 9999;
        }

        .popup {
          width: 100%;
          background: #fff;
          border-radius: 20px 20px 0 0;
          padding: 20px;
          text-align: center;
          animation: slideUp 0.4s ease;
        }

        .logo {
          width: 60px;
          margin-bottom: 10px;
        }

        h3 {
          margin: 5px 0;
        }

        .desc {
          color: #666;
          font-size: 14px;
          margin-bottom: 15px;
        }

        .install {
          background: #4aa3df;
          color: white;
          border: none;
          padding: 12px;
          border-radius: 10px;
          width: 100%;
          font-weight: bold;
        }

        .later {
          margin-top: 10px;
          background: none;
          border: none;
          color: #999;
        }

        .ios {
          font-size: 14px;
          color: #333;
          margin-bottom: 10px;
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
