export default function Loading() {
  return (
    <div style={styles.container}>
      <img src="/logo.PNG" style={styles.logo} />

      <div style={styles.text}>
        <span className="bounce">A</span>
        <span className="bounce">I</span>
        <span> </span>
        <span className="bounce">R</span>
        <span className="bounce">Ả</span>
        <span className="bounce">N</span>
        <span className="bounce">H</span>
      </div>

      <style jsx>{`
        .bounce {
          display: inline-block;
          animation: bounce 1s infinite;
        }

        .bounce:nth-child(1) { animation-delay: 0s; }
        .bounce:nth-child(2) { animation-delay: 0.1s; }
        .bounce:nth-child(4) { animation-delay: 0.2s; }
        .bounce:nth-child(5) { animation-delay: 0.3s; }
        .bounce:nth-child(6) { animation-delay: 0.4s; }
        .bounce:nth-child(7) { animation-delay: 0.5s; }

        @keyframes bounce {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-10px); }
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
    background: "#fff",
  },
  logo: {
    width: "120px",
    marginBottom: "20px",
    animation: "fade 1s ease-in-out",
  },
  text: {
    fontSize: "28px",
    fontWeight: "bold",
    color: "#4aa3df",
  },
};
