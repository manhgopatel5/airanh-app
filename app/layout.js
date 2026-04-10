"use client";
import InstallPWA from "./components/InstallPWA";
import { useEffect, useState } from "react";

export default function RootLayout({ children }) {
  const [loading, setLoading] = useState(true);
  const [hideSplash, setHideSplash] = useState(false);

  useEffect(() => {
    // hiển thị splash
    const timer1 = setTimeout(() => {
      setHideSplash(true); // bắt đầu fade out
    }, 2000);

    // xoá splash khỏi DOM
    const timer2 = setTimeout(() => {
      setLoading(false);
    }, 2600);

    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
    };
  }, []);

  return (
    <html>
      <body>
        <>
          {loading && <Splash hide={hideSplash} />}
          
          <div className={`app ${!loading ? "show" : ""}`}>
            {children}
          </div>

          <InstallPWA />

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
      </body>
    </html>
  );
}