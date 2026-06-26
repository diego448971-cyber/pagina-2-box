import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        ink: "#07111f",
        navy: "#0b1830",
        midnight: "#101827",
        gold: "#f4c95d",
        amberSoft: "#ffe7a3",
        cloud: "#f6f8fb",
        mist: "#e5e9f0",
        graphite: "#475569",
        emeraldSoft: "#1f9d69"
      },
      boxShadow: {
        premium: "0 18px 50px rgba(5, 12, 24, 0.14)",
        button: "0 12px 28px rgba(244, 201, 93, 0.24)"
      },
      backgroundImage: {
        "hero-lines":
          "linear-gradient(135deg, rgba(244,201,93,.16), transparent 32%), linear-gradient(180deg, #07111f 0%, #0b1830 58%, #f6f8fb 58%, #f6f8fb 100%)"
      }
    }
  },
  plugins: []
};

export default config;
