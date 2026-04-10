import ClientWrapper from "./components/ClientWrapper";
import InstallPWA from "./components/InstallPWA";

export default function RootLayout({ children }) {
  return (
    <html lang="vi">
      <head>
        {/* PWA */}
        <link rel="manifest" href="/manifest.json" />
        <meta name="theme-color" content="#4aa3df" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </head>

      <body style={{ margin: 0 }}>
        <ClientWrapper>
          {children}
        </ClientWrapper>

        <InstallPWA />
      </body>
    </html>
  );
}