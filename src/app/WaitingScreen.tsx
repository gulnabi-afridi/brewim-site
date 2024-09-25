import React, { useEffect, useRef } from "react";
import Image from "next/image";
import styles from "./WaitingScreen.module.css";

const WaitingScreen: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const context = canvas.getContext("2d");
    if (!context) return;

    const setCanvasSize = () => {
      if (canvas) {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
      }
    };

    setCanvasSize();

    let particlesArray: Particle[] = [];
    const numberOfParticles = 200;

    class Particle {
      x: number;
      y: number;
      size: number;
      color: string;
      speedX: number;
      speedY: number;

      constructor(
        x: number,
        y: number,
        size: number,
        color: string,
        speedX: number,
        speedY: number
      ) {
        this.x = x;
        this.y = y;
        this.size = size;
        this.color = color;
        this.speedX = speedX;
        this.speedY = speedY;
      }

      draw() {
        if (!context) return;
        context.beginPath();
        context.arc(this.x, this.y, this.size, 0, Math.PI * 2, false);
        context.fillStyle = this.color;
        context.fill();
      }

      update() {
        this.x += this.speedX;
        this.y += this.speedY;

        if (this.x > canvas?.width!) this.x = 0;
        if (this.x < 0) this.x = canvas?.width!;
        if (this.y > canvas?.height!) this.y = 0;
        if (this.y < 0) this.y = canvas?.height!;
      }
    }

    function init() {
      particlesArray = [];
      for (let i = 0; i < numberOfParticles; i++) {
        let size = Math.random() * 2 + 0.5;
        let x = Math.random() * (canvas?.width || window.innerWidth);
        let y = Math.random() * (canvas?.height || window.innerHeight);
        let color = `rgba(255, 255, 255, ${Math.random() * 0.5 + 0.2})`;
        let speedX = Math.random() * 0.5 - 0.25;
        let speedY = Math.random() * 0.5 - 0.25;
        particlesArray.push(new Particle(x, y, size, color, speedX, speedY));
      }
    }

    function animate() {
      if (!context || !canvas) return;
      context.clearRect(0, 0, canvas.width, canvas.height);
      for (let i = 0; i < particlesArray.length; i++) {
        particlesArray[i].update();
        particlesArray[i].draw();
      }
      requestAnimationFrame(animate);
    }

    init();
    animate();

    const handleResize = () => {
      setCanvasSize();
      init();
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div className={styles.container}>
      <canvas ref={canvasRef} className={styles.canvas}></canvas>
      <Image
        src="/waiting-screen/bwen_old.png"
        alt="Background"
        fill
        style={{ objectFit: "cover" }}
        quality={100}
      />
      <div className={styles.content}>
        <h1>Baby Wen is landing</h1>
        <p>Stay connected</p>
        <div className={styles.icons}>
          <a
            href="https://dexscreener.com/solana/4ujzg9dgpne4fy1clvqx8n13qfupptkojlpxfpdaxrlq"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              src="/waiting-screen/dexscreener_logo_DEX.png"
              alt="Dexscreener Logo"
              width={50}
              height={50}
            />
          </a>
          <a
            href="https://twitter.com/BabyWenDAO"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              src="/waiting-screen/X_logo.png"
              alt="X Logo"
              width={50}
              height={50}
            />
          </a>
          <a
            href="https://discord.gg/TfG3jYTzeY"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              src="/waiting-screen/Discord_Logo.png"
              alt="Discord Logo"
              width={50}
              height={50}
            />
          </a>
          <a
            href="https://t.me/BabyWenCoins"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              src="/waiting-screen/telegram_logo.png"
              alt="Telegram Logo"
              width={50}
              height={50}
            />
          </a>
        </div>
        <a
          href="https://baby-wen.xyz/"
          target="_blank"
          rel="noopener noreferrer"
          className={styles.link}
        >
          Access to old website
        </a>
      </div>
    </div>
  );
};

export default WaitingScreen;
