import ClientWrapper from "./components/ClientWrapper";
import ClientWrapper from "./ClientWrapper";
import InstallPWA from "./components/InstallPWA";

export const metadata = {
  title: "AI Rảnh",
  description: "Kết nối công việc gần bạn",
};

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