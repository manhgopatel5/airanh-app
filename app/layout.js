import InstallPWA from "./components/InstallPWA";
import ClientWrapper from "./components/ClientWrapper";

export default function RootLayout({ children }) {
  return (
    <html lang="vi">
      <head>
        <link rel="manifest" href="/manifest.json" />
        <meta name="theme-color" content="#4aa3df" />
      </head>

      <body style={{ margin: 0, overflow: "hidden" }}>
        <ClientWrapper>
          {children}
        </ClientWrapper>

        <InstallPWA />
      </body>
    </html>
  );
}