import ClientWrapper from "./ClientWrapper";
import InstallPWA from "./components/InstallPWA";

export default function RootLayout({ children }) {
  return (
    <html lang="vi">
      <body style={{ margin: 0 }}>
        <ClientWrapper>
          {children}
        </ClientWrapper>
        <InstallPWA />
      </body>
    </html>
  );
}
