import { useEffect, useRef } from 'react';

interface Star {
  x: number;
  y: number;
  size: number;
  opacity: number;
  speed: number;
}

interface ShootingStar {
  x: number;
  y: number;
  vx: number;
  vy: number;
  life: number;
  decay: number;
}

export const StarrySky = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const animationRef = useRef<number>();
  const starsRef = useRef<Star[]>([]);
  const shootingStarsRef = useRef<ShootingStar[]>([]);
  const particlesRef = useRef<{x: number, y: number, vx: number, vy: number, life: number}[]>([]);
  const lastFrameTimeRef = useRef(0);
  const isAnimatingRef = useRef(false);
  const isInViewRef = useRef(true);
  const reduceMotionRef = useRef(false);
  const frameIntervalRef = useRef(1000 / 30);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Configurar canvas
    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      createStars();
      if (reduceMotionRef.current) {
        drawStaticFrame();
      }
    };

    const calculateStarCount = () => {
      const area = canvas.width * canvas.height;
      const baseCount = Math.floor(area / 12000);
      return Math.max(60, Math.min(160, baseCount));
    };

    // Criar estrelas fixas
    const createStars = () => {
      const stars: Star[] = [];
      const numStars = calculateStarCount();

      for (let i = 0; i < numStars; i++) {
        stars.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          size: Math.random() * 1.8 + 0.4,
          opacity: Math.random() * 0.6 + 0.2,
          speed: Math.random() * 0.02 + 0.01
        });
      }

      starsRef.current = stars;
    };

    const MAX_SHOOTING_STARS = 2;
    const MAX_PARTICLES = 120;
    const SHOOTING_STAR_CHANCE = 0.0025;

    // Criar estrela cadente
    const createShootingStar = () => {
      if (shootingStarsRef.current.length >= MAX_SHOOTING_STARS) {
        return;
      }

      const shootingStar: ShootingStar = {
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height * 0.3,
        vx: (Math.random() * 3 + 2) * (Math.random() > 0.5 ? 1 : -1),
        vy: Math.random() * 2 + 1,
        life: 1,
        decay: Math.random() * 0.02 + 0.01
      };
      
      shootingStarsRef.current.push(shootingStar);
    };

    // Criar partículas
    const createParticles = (x: number, y: number) => {
      for (let i = 0; i < 10; i++) {
        if (particlesRef.current.length >= MAX_PARTICLES) {
          particlesRef.current.shift();
        }

        particlesRef.current.push({
          x: x,
          y: y,
          vx: (Math.random() - 0.5) * 4,
          vy: (Math.random() - 0.5) * 4,
          life: 1
        });
      }
    };

    // Função para detectar o tema
    const getThemeColors = () => {
      const isDark = document.documentElement.classList.contains('dark');
      return {
        starColor: isDark ? '#ffffff' : '#000000',
        shadowColor: isDark ? '#ffffff' : '#000000'
      };
    };

    const drawStaticFrame = () => {
      const colors = getThemeColors();
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      ctx.fillStyle = colors.starColor;
      ctx.shadowColor = colors.shadowColor;
      ctx.shadowBlur = 6;

      starsRef.current.forEach(star => {
        ctx.globalAlpha = star.opacity;
        ctx.beginPath();
        ctx.arc(star.x, star.y, star.size, 0, Math.PI * 2);
        ctx.fill();
      });

      ctx.globalAlpha = 1;
      ctx.shadowBlur = 0;
    };

    // Função de animação
    const animate = (timestamp: number) => {
      if (!isAnimatingRef.current) {
        return;
      }

      if (timestamp - lastFrameTimeRef.current < frameIntervalRef.current) {
        animationRef.current = requestAnimationFrame(animate);
        return;
      }

      lastFrameTimeRef.current = timestamp;

      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      const colors = getThemeColors();
      ctx.fillStyle = colors.starColor;
      ctx.shadowColor = colors.shadowColor;
      ctx.shadowBlur = 6;

      // Desenhar estrelas fixas
      starsRef.current.forEach(star => {
        ctx.globalAlpha = star.opacity;
        ctx.beginPath();
        ctx.arc(star.x, star.y, star.size, 0, Math.PI * 2);
        ctx.fill();
      });
      ctx.globalAlpha = 1;
      ctx.shadowBlur = 0;

      // Atualizar e desenhar estrelas cadentes
      shootingStarsRef.current = shootingStarsRef.current.filter(star => {
        star.x += star.vx;
        star.y += star.vy;
        star.life -= star.decay;

        if (star.life > 0) {
          ctx.save();
          ctx.globalAlpha = star.life;
          ctx.strokeStyle = colors.starColor;
          ctx.lineWidth = 2;
          ctx.shadowBlur = 15;
          ctx.shadowColor = colors.shadowColor;
          ctx.lineCap = 'round';
          
          ctx.beginPath();
          ctx.moveTo(star.x, star.y);
          ctx.lineTo(star.x - star.vx * 10, star.y - star.vy * 10);
          ctx.stroke();
          
          // Criar partículas quando a estrela cadente aparece
          if (Math.random() < 0.1) {
            createParticles(star.x, star.y);
          }
          
          ctx.restore();
        }

        return star.life > 0;
      });

      // Atualizar e desenhar partículas
      particlesRef.current = particlesRef.current.filter(particle => {
        particle.x += particle.vx;
        particle.y += particle.vy;
        particle.life -= 0.03;
        particle.vx *= 0.97;
        particle.vy *= 0.97;

        if (particle.life > 0) {
          ctx.save();
          ctx.globalAlpha = particle.life;
          ctx.fillStyle = colors.starColor;
          ctx.beginPath();
          ctx.arc(particle.x, particle.y, 1, 0, Math.PI * 2);
          ctx.fill();
          ctx.restore();
        }

        return particle.life > 0;
      });

      // Criar novas estrelas cadentes ocasionalmente
      if (Math.random() < SHOOTING_STAR_CHANCE) {
        createShootingStar();
      }

      animationRef.current = requestAnimationFrame(animate);
    };

    const stopAnimation = () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
        animationRef.current = undefined;
      }
      isAnimatingRef.current = false;
    };

    const startAnimation = () => {
      if (isAnimatingRef.current || reduceMotionRef.current) {
        return;
      }
      isAnimatingRef.current = true;
      lastFrameTimeRef.current = performance.now();
      animationRef.current = requestAnimationFrame(animate);
    };

    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
    reduceMotionRef.current = prefersReducedMotion.matches;
    frameIntervalRef.current = reduceMotionRef.current ? 1000 / 12 : 1000 / 30;

    if (reduceMotionRef.current) {
      drawStaticFrame();
    } else {
      startAnimation();
    }

    const handleVisibilityChange = () => {
      if (document.visibilityState === 'hidden') {
        stopAnimation();
        return;
      }

      if (isInViewRef.current && !reduceMotionRef.current) {
        startAnimation();
      }
    };

    const observer = new IntersectionObserver(([entry]) => {
      isInViewRef.current = entry.isIntersecting;

      if (reduceMotionRef.current) {
        if (entry.isIntersecting) {
          drawStaticFrame();
        }
        return;
      }

      if (entry.isIntersecting && document.visibilityState === 'visible') {
        startAnimation();
      } else {
        stopAnimation();
      }
    }, { threshold: 0.1 });

    observer.observe(canvas);
    document.addEventListener('visibilitychange', handleVisibilityChange);

    const handleMotionChange = () => {
      reduceMotionRef.current = prefersReducedMotion.matches;
      frameIntervalRef.current = reduceMotionRef.current ? 1000 / 12 : 1000 / 30;
      stopAnimation();

      if (reduceMotionRef.current) {
        drawStaticFrame();
      } else if (isInViewRef.current && document.visibilityState === 'visible') {
        startAnimation();
      }
    };

    prefersReducedMotion.addEventListener('change', handleMotionChange);

    return () => {
      stopAnimation();
      window.removeEventListener('resize', resizeCanvas);
      document.removeEventListener('visibilitychange', handleVisibilityChange);
      observer.disconnect();
      prefersReducedMotion.removeEventListener('change', handleMotionChange);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full pointer-events-none z-0"
      style={{ background: 'transparent' }}
    />
  );
};
