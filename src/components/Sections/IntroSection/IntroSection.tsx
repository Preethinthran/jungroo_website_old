import React, { useEffect, useRef, useState } from 'react';
import ResponsiveNavMenu from '../../OptionsMenu/ResponsiveNavMenu';
import { useNavigate, useLocation } from 'react-router-dom';
// Define the structure of a Particle for TypeScript
interface IParticle {
  x: number;
  y: number;
  baseX: number;
  baseY: number;
  size: number;
  color: string;
  scatteredColor: string;
  life: number;
  velocityX: number;
  velocityY: number;
  friction: number;
  springFactor: number;
  draw: (ctx: CanvasRenderingContext2D) => void;
  update: (
    ctx: CanvasRenderingContext2D,
    mousePositionRef: React.MutableRefObject<{ x: number; y: number }>,
    isTouching: boolean
  ) => boolean;
}




// Particle class with TypeScript types
class Particle implements IParticle {
  x: number;
  y: number;
  baseX: number;
  baseY: number;
  size: number;
  color: string;
  scatteredColor: string;
  life: number;
  velocityX: number;
  velocityY: number;
  friction: number;
  springFactor: number;




  constructor(x: number, y: number, baseX: number, baseY: number, size: number, color: string) {
    this.x = x;
    this.y = y;
    this.baseX = baseX;
    this.baseY = baseY;
    this.size = size;
    this.color = color;
    this.scatteredColor = '#0050d0';
    this.life = Math.random() * 100 + 50;
    this.velocityX = 0;
    this.velocityY = 0;
    this.friction = 0.95;
    this.springFactor = 0.05;
  }




  draw(ctx: CanvasRenderingContext2D) {
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
    ctx.closePath();
    ctx.fillStyle = this.color;
    ctx.fill();
  }




  update(
    ctx: CanvasRenderingContext2D,
    mousePositionRef: React.MutableRefObject<{ x: number; y: number }>,
    isTouching: boolean
  ): boolean {
    const dx = mousePositionRef.current.x - this.x;
    const dy = mousePositionRef.current.y - this.y;
    const distance = Math.sqrt(dx * dx + dy * dy);
    const maxDistance = 60; // Smaller hover radius




    if (distance < maxDistance && (isTouching || !('ontouchstart' in window))) {
      const force = (maxDistance - distance) / maxDistance;
      const angle = Math.atan2(dy, dx);
      const forceX = Math.cos(angle) * force * 5;
      const forceY = Math.sin(angle) * force * 5;




      this.velocityX -= forceX;
      this.velocityY -= forceY;




      this.color = this.scatteredColor;
    } else {
      const returnDx = this.baseX - this.x;
      const returnDy = this.baseY - this.y;




      // Apply spring force to return to original position
      this.velocityX += returnDx * this.springFactor;
      this.velocityY += returnDy * this.springFactor;
    }




    // Apply friction
    this.velocityX *= this.friction;
    this.velocityY *= this.friction;




    // Update position
    this.x += this.velocityX;
    this.y += this.velocityY;




    this.draw(ctx);




    this.life--;
    return this.life <= 0;
  }
}




const IntroSection: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);
  const particlesRef = useRef<IParticle[]>([]);
  const animationFrameIdRef = useRef<number>(0);
  const mousePositionRef = useRef({ x: 0, y: 0 });
  const isTouchingRef = useRef(false);
  // const [isMenuOpen, setIsMenuOpen] = useState(false);

  // --- START: MODIFICATION FOR SCROLLED HEADER ---
  // State to track if the user has scrolled
  const [isScrolled, setIsScrolled] = useState(false);

  // Effect to add and remove the scroll event listener
  useEffect(() => {
    const handleScroll = () => {
      // Set state to true if scrolled more than 10px, otherwise false
      setIsScrolled(window.scrollY > 10);
    };

    // Add listener when component mounts
    window.addEventListener('scroll', handleScroll);

    // Cleanup: remove listener when component unmounts
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []); // Empty dependency array means this effect runs only once on mount
  // --- END: MODIFICATION FOR SCROLLED HEADER ---


  // All CSS is embedded here for a self-contained component
  const styles = `
    :root {
      --black: #000000;
      --white: #ffffff;
      --transparent: transparent;
      --background: #06041b;
      --accent: #0050d0;
      --circle-start: #a0d9f8;
      --circle-end: #3a5bbf;
    }
    
    * {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
    }
    
    body {
      font-family: Roboto, Helvetica, Arial, sans-serif;
      overflow-x: hidden;
      background-color: var(--background);
      color: white;
    }




    body.no-scroll {
      overflow: hidden;
    }
    
    @keyframes aurora {
      from {
        background-position: 50% 50%, 50% 50%;
      }
      to {
        background-position: 350% 50%, 350% 50%;
      }
    }
    
    /* --- START: HEADER STYLE MODIFICATIONS --- */
    header {
      position: fixed;
      top: 0;
      left: 0;
      width: 100%;
      display: flex;
      height: 84px;
      justify-content: space-between;
      align-items: center;
      padding: 1.5rem 2rem;
      backdrop-filter: blur(8px);
      z-index: 100;
      /* Initially transparent background */
      background-color: transparent;
      /* Smooth transition for the background color change */
      transition: background-color 0.4s ease-in-out;
    }

    /* New class to apply when scrolled */
    header.scrolled {
        /* Solid background color on scroll */
        background-color: var(--background);
    }
    /* --- END: HEADER STYLE MODIFICATIONS --- */
    
    .logo {
      height: 30px;
    }
    
    nav {
      display: flex;
      gap: 2rem;
    }
    
    nav a {
      color: rgba(255, 255, 255, 1);
      text-decoration: none;
      font-size: 0.88rem;
      font-weight: 400;
      transition: color 0.2s ease;
      cursor:pointer;
    }
    
    nav a:hover {
      color: rgba(255, 255, 255, 0.8);
    }
    
    .aurora-container {
      position: relative;
      display: flex;
      flex-direction: column;
      height: 100vh;
      width: 100%;
      align-items: center;
      justify-content: center;
      background-color: var(--background);
      overflow: hidden;
    }
    
    .aurora-effect {
      --dark-gradient: repeating-linear-gradient(100deg, var(--black) 0%, var(--black) 7%, var(--transparent) 10%, var(--transparent) 12%, var(--black) 16%);
      --aurora: repeating-linear-gradient(100deg, #0050d0 10%, rgba(0, 80, 208, 0.7) 15%, rgba(0, 80, 208, 0.5) 20%, rgba(0, 80, 208, 0.4) 25%, #0050d0 30%);
      
      position: fixed;
      inset: -10px;
      background-image: var(--dark-gradient), var(--aurora);
      background-size: 300% 200%;
      background-position: 50% 50%, 50% 50%;
      filter: blur(10px);
      opacity: 0.5;
      pointer-events: none;
      will-change: transform;
      mask-image: radial-gradient(ellipse at 100% 0%, black 10%, var(--transparent) 70%);
    }
    
    .aurora-effect::after {
      content: "";
      position: absolute;
      inset: 0;
      background-image: var(--dark-gradient), var(--aurora);
      background-size: 200% 100%;
      background-attachment: fixed;
      animation: aurora 60s linear infinite;
      mix-blend-mode: difference;
    }
    
    .content {
      position: relative;
      display: flex;
      flex-direction: column;
      gap: 0.75rem;
      align-items: flex-start;
      justify-content: center;
      padding: 1rem 2rem;
      text-align: left;
      z-index: 1;
      max-width: 1200px;
      width: 100%;
      height: 100%;
    }
    
    .content-container {
      display: flex;
      align-items: center;
      justify-content: space-between;
      width: 100%;
      max-width: 1500px;
    }
    
    .text-container {
      flex: 1;
      display: flex;
      flex-direction: column;
      gap: 0.5rem;
      padding-top:50px;
    }
    
    .headline {
      font-size: 3.5rem;
      font-weight: 500;
      line-height: 1.3;
      letter-spacing: -0.02em;
      opacity: 0;
      transform: translateY(20px);
      background: linear-gradient(90deg, #ffffff 0%, #949494 100%);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      background-clip: text;
      text-fill-color: transparent;
      white-space: nowrap;
    }
    
    .headline-1 {
      animation: fadeUp 0.8s cubic-bezier(0.2, 0.6, 0.3, 1) 0.3s forwards;
    }
    
    .headline-2 {
      animation: fadeUp 0.8s cubic-bezier(0.2, 0.6, 0.3, 1) 0.8s forwards;
    }
    
    .headline-3 {
      animation: fadeUp 0.8s cubic-bezier(0.2, 0.6, 0.3, 1) 1.3s forwards;
    }
    
    @keyframes fadeUp {
      to {
        opacity: 1;
        transform: translateY(0);
      }
    }
    
    .infinity-container {
      position: relative;
      width: 650px;
      height: 550px;
      margin-left: 40px;
      margin-top:80px;
      opacity: 0;
      animation: fadeIn 1s ease 0.5s forwards;
    }
    
    @keyframes fadeIn {
      to {
        opacity: 1;
      }
    }
    
    #infinity-canvas {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      pointer-events: auto;
      touch-action: none;
    }
    
    .hover-button {
      position: relative;
      isolation: isolate;
      padding: 0.875rem 1.5rem;
      margin-top: 2rem;
      border-radius: 1.5rem;
      background-color: rgba(43, 55, 80, 0.1);
      backdrop-filter: blur(12px);
      font-weight: 600;
      font-size: 1rem;
      color: white;
      cursor: pointer;
      border: none;
      overflow: hidden;
      opacity: 0;
      transform: translateY(20px);
      animation: fadeUp 0.8s cubic-bezier(0.2, 0.6, 0.3, 1) 1.8s forwards;
      width: fit-content;
      display: inline-block;
      font-family: Roboto, Helvetica, Arial, sans-serif;
    }
    
    .hover-button::before {
      content: '';
      position: absolute;
      inset: 0;
      border-radius: inherit;
      pointer-events: none;
      z-index: 1;
      box-shadow: 
        inset 0 0 0 1px rgba(170, 202, 255, 0.2),
        inset 0 0 16px 0 rgba(170, 202, 255, 0.1),
        inset 0 -3px 12px 0 rgba(170, 202, 255, 0.15),
        0 1px 3px 0 rgba(0, 0, 0, 0.5),
        0 4px 12px 0 rgba(0, 0, 0, 0.45);
      mix-blend-mode: multiply;
      transition: transform 0.3s;
    }
    
    .hover-button:active::before {
      transform: scale(0.975);
    }
    
    .hover-button .circle {
      position: absolute;
      width: 12px;
      height: 12px;
      transform: translate(-50%, -50%);
      border-radius: 50%;
      pointer-events: none;
      z-index: -1;
      opacity: 0;
      filter: blur(8px);
      transition: opacity 0.3s;
    }
    
    .hover-button .circle.fade-in {
      opacity: 0.75;
    }
    
    .hover-button .circle.fade-out {
      opacity: 0;
      transition-duration: 1.2s;
    }




    .menu-button {
      display: none;
      background: none;
      border: none;
      color: white;
      font-size: 1.5rem;
      cursor: pointer;
      z-index: 1;
    }




    /* Mobile Menu Styles */
    .mobile-menu-container {
      position: fixed;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      z-index: 200;
      pointer-events: none;
      opacity: 0;
      transition: opacity 0.3s ease-in-out;
    }




    .mobile-menu-container.open {
      pointer-events: auto;
      opacity: 1;
    }




    .mobile-menu-overlay {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background-color: rgba(0, 0, 0, 0.0);
      
    }




    .mobile-menu {
      position: absolute;
      top: 0;
      right: 0;
      width: 70%;
      max-width: 260px;
      height: 100%;
      background-color: rgba(255, 255, 255, 0.95);
      backdrop-filter: blur(10px);
      box-shadow: -5px 0 15px rgba(0, 0, 0, 0.2);
      transform: translateX(100%);
      transition: transform 0.3s ease-in-out;
      display: flex;
      flex-direction: column;
      padding: 1.5rem;
      border-left: 1px solid rgba(255, 255, 255, 0.2);
      z-index: 201;
      border: 1px solid rgba(255, 255, 255, 0.2);
    }




    .mobile-menu-container.open .mobile-menu {
      transform: translateX(0);
    }




    .close-menu-button {
      background: none;
      border: none;
      color: var(--background);
      font-size: 2.5rem;
      line-height: 1;
      cursor: pointer;
      align-self: flex-end;
      padding: 0;
      margin-bottom: 2rem;
    }




    .mobile-nav {
      display: none;
      flex-direction: column;
      gap: 1.5rem;
    }




    .mobile-nav a {
      color: rgba(255, 255, 255, 0.95);
      text-decoration: none;
      font-size: 1.1rem;
      font-weight: 500;
      padding: 0.5rem;
      transition: color 0.2s ease;
    }




    .mobile-nav a:hover {
      color: var(--accent);
    }
    @media (max-width: 1300px) {
      .headline {
        font-size: 3rem;
      }
    }
    /* Responsive adjustments */
    @media (max-width: 1000px) {
      
      .content-container {
        flex-direction: column;
        align-items: center;
        justify-content: center;
      }




      .text-container {
        order: 2;
        align-items: center;
        padding-top: 0;
      }




      .infinity-container {
        order: 1;
        width: 350px;
        height: 350px;
        margin-left: 0;
        margin-top: -6rem;
        margin-bottom: -4rem;
      }
      
      .superscript {
        position: absolute;
        top: -5px;
        right: -20px;
        color: transparent;
        font-size: 1rem;
        animation: shimmer 0.5s forwards;
        animation-delay: 3.2s;
      }
  
      .superscript::before {
        --bar-width: 25%;
        content: "";
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%) scaleY(0);
        width: 150%;
        height: 250%;
        background: linear-gradient(to right, white var(--bar-width), transparent var(--bar-width) calc(100% - var(--bar-width)), white calc(100% - var(--bar-width)));
        animation: bar-scale 0.25s linear forwards;
        animation-delay: 3.0s;
      }
  
      .superscript::after {
        --size: 4rem;
        content: "";
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%) scale(0);
        width: var(--size);
        height: var(--size);
        background: radial-gradient(circle at center, rgb(252 249 241 / 94%) 0% 7%, transparent 7% 100%), conic-gradient(transparent 0deg 18deg, var(--sparkle-color) 18deg, transparent 20deg 40deg, var(--sparkle-color) 40deg, transparent 43deg 87deg, var(--sparkle-color) 87deg, transparent 95deg 175deg, var(--sparkle-color) 175deg, transparent 178deg 220deg, var(--sparkle-color) 220deg, transparent 222deg 270deg, var(--sparkle-color) 270deg, transparent 275deg 300deg, var(--sparkle-color) 300deg, transparent 303deg 360deg);
        border-radius: 50%;
        clip-path: polygon(50% 0, 59% 27%, 85% -2%, 100% 50%, 50% 100%, 0 50%, 31% 35%);
        filter: blur(1px);
        animation: sparkle 0.4s linear forwards;
        animation-delay: 3.4s;
      }
      
      .headline {
        font-size: 2.35rem;
        white-space: normal;
        text-align: center;
      }
    }
    
    @media (max-width: 900px) {
      header{
        padding:1.5rem 1rem;
      }
      .desktop-nav {
        display: none;
      }
      .mobile-nav {
        display: block;
      }
      .headline {
        font-size: 2rem;
      }
    }
  `;




  /*
  // Effect to prevent body scroll when menu is open
  useEffect(() => {
    if (isMenuOpen) {
      document.body.classList.add('no-scroll');
    } else {
      document.body.classList.remove('no-scroll');
    }
    return () => {
      document.body.classList.remove('no-scroll');
    };
  }, [isMenuOpen]);
  */




  // Effect for Infinity Canvas Animation
  useEffect(() => {
    const canvas = canvasRef.current;
    const container = containerRef.current;
    if (!canvas || !container) return;




    const ctx = canvas.getContext('2d');
    if (!ctx) return;




    const updateCanvasSize = () => {
      const rect = container.getBoundingClientRect();
      canvas.width = rect.width;
      canvas.height = rect.height;
    };




    const getInfinityPoints = () => {
      const points = [];
      const centerX = canvas.width / 2;
      const centerY = canvas.height / 2;
      const radiusX = canvas.width / 3.2;
      const radiusY = canvas.height / 3.2;
      const thickness = 20;




      for (let t = 0; t <= 2 * Math.PI; t += 0.0025) {
        const denominator = 1 + Math.sin(t) * Math.sin(t);
        const x = centerX + (radiusX * Math.cos(t)) / denominator;
        const y = centerY + (radiusY * Math.sin(t) * Math.cos(t)) / denominator;




        for (let i = 0; i < 4; i++) {
          const angle = Math.random() * Math.PI * 2;
          const distance = Math.random() * thickness;
          const offsetX = Math.cos(angle) * distance;
          const offsetY = Math.sin(angle) * distance;
          points.push({ x: x + offsetX, y: y + offsetY });
        }
      }
      return points;
    };




    const initParticles = () => {
      const points = getInfinityPoints();
      const totalPoints = points.length;
      const particlesCount = 1800;
      const newParticles: IParticle[] = [];




      for (let i = 0; i < particlesCount; i++) {
        const pointIndex = Math.floor(Math.random() * totalPoints);
        const point = points[pointIndex];
        const offsetX = (Math.random() - 0.5) * 2;
        const offsetY = (Math.random() - 0.5) * 2;
        const size = Math.random() * 1.2 + 0.5;
        const colorRandom = Math.random();
        let color;
        if (colorRandom < 0.7) color = '#0050d0';
        else if (colorRandom < 0.9) color = '#60a5fa';
        else color = '#93c5fd';
        newParticles.push(new Particle(point.x + offsetX, point.y + offsetY, point.x + offsetX, point.y + offsetY, size, color));
      }
      particlesRef.current = newParticles;
    };




    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      particlesRef.current = particlesRef.current.filter(
        (p) => !p.update(ctx, mousePositionRef, isTouchingRef.current)
      );




      const minParticles = 1800;
      if (particlesRef.current.length < minParticles) {
          const pointsToAdd = minParticles - particlesRef.current.length;
          const points = getInfinityPoints();
          for (let i = 0; i < pointsToAdd; i++) {
              const randomPoint = points[Math.floor(Math.random() * points.length)];
              const offsetX = (Math.random() - 0.5) * 2;
              const offsetY = (Math.random() - 0.5) * 2;
              const size = Math.random() * 1.2 + 0.5;
              const colorRandom = Math.random();
              let color;
              if (colorRandom < 0.7) color = '#0050d0';
              else if (colorRandom < 0.9) color = '#60a5fa';
              else color = '#93c5fd';
              particlesRef.current.push(new Particle(randomPoint.x + offsetX, randomPoint.y + offsetY, randomPoint.x + offsetX, randomPoint.y + offsetY, size, color));
          }
      }




      animationFrameIdRef.current = requestAnimationFrame(animate);
    };




    updateCanvasSize();
    initParticles();
    animate();




    const handleResize = () => {
        updateCanvasSize();
        initParticles();
    };
    
    const handleMove = (x: number, y: number) => {
        const rect = canvas.getBoundingClientRect();
        mousePositionRef.current.x = x - rect.left;
        mousePositionRef.current.y = y - rect.top;
    };




    const handleMouseMove = (e: MouseEvent) => handleMove(e.clientX, e.clientY);
    const handleTouchMove = (e: TouchEvent) => {
        if (e.touches.length > 0) {
            e.preventDefault();
            handleMove(e.touches[0].clientX, e.touches[0].clientY);
        }
    };
    const handleMouseLeave = () => {
        if (!('ontouchstart' in window)) {
            mousePositionRef.current = { x: 0, y: 0 };
        }
    };
    const handleTouchStart = () => { isTouchingRef.current = true; };
    const handleTouchEnd = () => {
        isTouchingRef.current = false;
        mousePositionRef.current = { x: 0, y: 0 };
    };




    window.addEventListener('resize', handleResize);
    canvas.addEventListener('mousemove', handleMouseMove);
    canvas.addEventListener('touchmove', handleTouchMove, { passive: false });
    canvas.addEventListener('mouseleave', handleMouseLeave);
    canvas.addEventListener('touchstart', handleTouchStart, { passive: true });
    canvas.addEventListener('touchend', handleTouchEnd);




    // Cleanup function
    return () => {
      cancelAnimationFrame(animationFrameIdRef.current);
      window.removeEventListener('resize', handleResize);
      canvas.removeEventListener('mousemove', handleMouseMove);
      canvas.removeEventListener('touchmove', handleTouchMove);
      canvas.removeEventListener('mouseleave', handleMouseLeave);
      canvas.removeEventListener('touchstart', handleTouchStart);
      canvas.removeEventListener('touchend', handleTouchEnd);
    };
  }, []);




  // Effect for Hover Button
  useEffect(() => {
    const button = buttonRef.current;
    if (!button) return;




    let isListening = false;
    let lastAdded = 0;




    const createCircle = (x: number, y: number) => {
      const buttonWidth = button.offsetWidth;
      const xPos = x / buttonWidth;
      const color = `linear-gradient(to right, var(--circle-start) ${xPos * 100}%, var(--circle-end) ${xPos * 100}%)`;




      const circle = document.createElement('div');
      circle.className = 'circle';
      circle.style.left = `${x}px`;
      circle.style.top = `${y}px`;
      circle.style.background = color;
      
      button.appendChild(circle);




      setTimeout(() => circle.classList.add('fade-in'), 0);
      setTimeout(() => {
        circle.classList.add('fade-out');
        circle.classList.remove('fade-in');
      }, 1000);
      setTimeout(() => circle.remove(), 2200);
    };




    const handlePointerMove = (event: PointerEvent) => {
      if (!isListening) return;
      const currentTime = Date.now();
      if (currentTime - lastAdded > 100) {
        lastAdded = currentTime;
        const rect = button.getBoundingClientRect();
        const x = event.clientX - rect.left;
        const y = event.clientY - rect.top;
        createCircle(x, y);
      }
    };




    const handlePointerEnter = () => { isListening = true; };
    const handlePointerLeave = () => { isListening = false; };




    button.addEventListener('pointermove', handlePointerMove);
    button.addEventListener('pointerenter', handlePointerEnter);
    button.addEventListener('pointerleave', handlePointerLeave);




    // Cleanup function
    return () => {
      button.removeEventListener('pointermove', handlePointerMove);
      button.removeEventListener('pointerenter', handlePointerEnter);
      button.removeEventListener('pointerleave', handlePointerLeave);
    };
  }, []);
  const navigate = useNavigate();
  const location = useLocation();

  const handleNavClick = (id: string) => {
    if (location.pathname === '/') {
      const el = document.getElementById(id);
      if (el) {
        el.scrollIntoView({ behavior: 'smooth' });
      }
    } else {
      // Add scrollToId to state only during navigation, not on refresh
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };
  return (
    <>
      <style>{styles}</style>
      {/* Conditionally apply the 'scrolled' class based on state */}
      <header className={isScrolled ? 'scrolled' : ''}>
      <img
      src='/assets/logo.webp'
      alt="Jungroo"
      className="logo"
      style={{ cursor: 'pointer' }}
      fetchPriority="high"
      onClick={() => {
        navigate('/');
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }}/>
        <nav className="desktop-nav">
          <a href="#our-services" onClick={(e) => { e.preventDefault(); handleNavClick('our-services'); }}>Our Services</a>
          <a href="https://products.jungroo.com" target="_blank" rel="noopener noreferrer">
    Our Products
  </a>

          <a href="#case-studies" onClick={(e) => { e.preventDefault(); handleNavClick('case-studies'); }}>Case Studies</a>
          <a href="#contact-us" onClick={(e) => { e.preventDefault(); handleNavClick('contact-us'); }}>Contact Us</a>
        </nav>
        <div className="mobile-nav">
          <ResponsiveNavMenu />
        </div>
      </header>
      <main className="aurora-container">
        <div className="aurora-effect"></div>
        <div className="content">
          <div className="content-container">
            <div className="text-container">
              <h1 className="headline headline-1">We Turn Your Ideas into Reality.</h1>
              <h2 className="headline headline-2">Intelligent Tech.</h2>
              <h2 className="headline headline-3">Real Business Impact.</h2>
              
              <sup className="superscript"></sup>
            </div>
            <div ref={containerRef} className="infinity-container">
              <canvas ref={canvasRef} id="infinity-canvas"></canvas>
            </div>
          </div>
        </div>
      </main>
    </>
  );
};




export default IntroSection;