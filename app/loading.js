export default function Loading() {
  return (
    <div style={{
      height: "100vh",
      background: "#f5f7fa",
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center"
    }}>

      <img 
        src="/logo.png"
        style={{
          width: 220,
          marginBottom: 20,
          animation: "fadeIn 1.5s ease"
        }}
      />

      <h1 style={{
        fontSize: 28,
        fontWeight: "bold",
        color: "#2daae1",
        animation: "bounce 1s infinite"
      }}>
        AI RẢNH
      </h1>

      <p style={{
        marginTop: 8,
        color: "#888"
      }}>
        Kết nối công việc gần bạn
      </p>

      <style>{`
        @keyframes bounce {
          0%,100% { transform: translateY(0); }
          50% { transform: translateY(-10px); }
        }

        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
      `}</style>

    </div>
  )
}
