import { useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
import { motion, AnimatePresence } from 'framer-motion';

// Particle effect component
// eslint-disable-next-line react/prop-types
const ParticleEffect = ({ children }) => {
  const containerRef = useRef(null);
  const particles = useRef([]);
  const mousePosition = useRef({ x: 0, y: 0 });
  const isHovering = useRef(false);

  useEffect(() => {
    const container = containerRef.current;
    const currentParticles = particles.current;
    if (!container) return;

    // Create particles
    const createParticle = (x, y) => {
      const particle = document.createElement('div');
      particle.className = 'absolute w-1 h-1 bg-indigo-500 rounded-full';
      particle.style.left = `${x}px`;
      particle.style.top = `${y}px`;
      container.appendChild(particle);
      return particle;
    };

    // Animate particle
    const animateParticle = (particle, startX, startY) => {
      const angle = Math.random() * Math.PI * 2;
      const velocity = Math.random() * 2 + 1;
      const dx = Math.cos(angle) * velocity;
      const dy = Math.sin(angle) * velocity;
      let x = startX;
      let y = startY;
      let opacity = 1;

      const animate = () => {
        if (opacity <= 0) {
          particle.remove();
          return;
        }

        x += dx;
        y += dy;
        opacity -= 0.02;
        particle.style.transform = `translate(${x}px, ${y}px)`;
        particle.style.opacity = opacity;
        requestAnimationFrame(animate);
      };

      animate();
    };

    // Mouse event handlers
    const handleMouseMove = (e) => {
      const rect = container.getBoundingClientRect();
      mousePosition.current = {
        x: e.clientX - rect.left,
        y: e.clientY - rect.top,
      };

      if (isHovering.current) {
        const particle = createParticle(mousePosition.current.x, mousePosition.current.y);
        animateParticle(particle, 0, 0);
      }
    };

    const handleMouseEnter = () => {
      isHovering.current = true;
    };

    const handleMouseLeave = () => {
      isHovering.current = false;
    };

    container.addEventListener('mousemove', handleMouseMove);
    container.addEventListener('mouseenter', handleMouseEnter);
    container.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      container.removeEventListener('mousemove', handleMouseMove);
      container.removeEventListener('mouseenter', handleMouseEnter);
      currentParticles.forEach(p => p.remove());
      particles.current.forEach(p => p.remove());
    };
  }, []);

  return (
    <div ref={containerRef} className="relative overflow-hidden">
      {children}
    </div>
  );
};

// Page transition wrapper
const PageTransition = ({ children }) => {
  return (
    <AnimatePresence mode="wait">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -20 }}
        transition={{ duration: 0.5 }}
      >
        {children}
      </motion.div>
    </AnimatePresence>
  );
};
PageTransition.propTypes = {
  children: PropTypes.node.isRequired,
};

export { ParticleEffect, PageTransition };