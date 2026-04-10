export default function Logo({ size = 260 }) {
  return (
    <div style={{ width: size }}>
      <svg viewBox="0 0 360 220">

        <defs>
          <linearGradient id="gBlue" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#7cc0d8"/>
            <stop offset="100%" stopColor="#4a90e2"/>
          </linearGradient>

          <linearGradient id="gOrange" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#f7b45a"/>
            <stop offset="100%" stopColor="#f08c3a"/>
          </linearGradient>
        </defs>

        <path className="a"
          d="M40 150 Q90 40 140 150"
          stroke="url(#gBlue)"
          strokeWidth="18"
          strokeLinecap="round"
          fill="none"
        />

        <path className="arrow"
          d="M90 125 L90 90 M90 90 L70 110 M90 90 L110 110"
          stroke="url(#gBlue)"
          strokeWidth="12"
          strokeLinecap="round"
        />

        <circle className="dot" cx="165" cy="55" r="12" fill="url(#gBlue)" />

        <path className="iline"
          d="M165 75 L165 150"
          stroke="url(#gBlue)"
          strokeWidth="18"
          strokeLinecap="round"
        />

        <path className="curve"
          d="M165 150 Q210 120 230 150"
          stroke="url(#gBlue)"
          strokeWidth="18"
          strokeLinecap="round"
          fill="none"
        />

        <path className="pin"
          d="M230 60 C190 60 170 90 170 120 C170 170 230 210 230 210 C230 210 290 170 290 120 C290 90 270 60 230 60 Z"
          fill="url(#gOrange)"
        />

        <circle cx="230" cy="120" r="22" fill="#ffe0a3"/>
        <circle cx="220" cy="115" r="3" fill="#5a3e2b"/>
        <circle cx="240" cy="115" r="3" fill="#5a3e2b"/>

        <path
          d="M220 130 Q230 138 240 130"
          stroke="#5a3e2b"
          strokeWidth="3"
          fill="none"
          strokeLinecap="round"
        />

        <path className="wave w1"
          d="M270 80 Q310 110 310 150"
          stroke="url(#gBlue)"
          strokeWidth="10"
          strokeLinecap="round"
          fill="none"
        />

        <path className="wave w2"
          d="M285 70 Q340 110 340 160"
          stroke="url(#gBlue)"
          strokeWidth="10"
          strokeLinecap="round"
          fill="none"
        />

      </svg>
    </div>
  );
}