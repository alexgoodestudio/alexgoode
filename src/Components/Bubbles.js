import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { useRef } from 'react';

const MOTION = {
  instant: 0.15,
  quick: 0.3,
  smooth: 0.5,
  slow: 0.8,
  story: 1.2
};

function Bubbles() {
  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  const snowContainerRef = useRef(null);
  const frontSnowContainerRef = useRef(null);
  // No form state: this component only renders text + bubbles

  // Snow animation
  useGSAP(() => {
    if (!prefersReducedMotion && snowContainerRef.current && frontSnowContainerRef.current) {
      const container = snowContainerRef.current;
      const frontContainer = frontSnowContainerRef.current;
      const snowflakes = [];

      // Pale indigo and soft sky blue
      const colors = ['#c7d2fe', '#bae6fd'];

      // Responsive count and size based on screen width
      const isMobile = window.innerWidth < 768;
      const count = isMobile ? 30 : 60;
      const frontCount = 5; // Only 5 circles in front
      const size = isMobile ? 20 : 24;
      const maxOpacity = isMobile ? 0.6 : 0.85;

      // Create background circles
      for (let i = 0; i < count; i++) {
        const snowflake = document.createElement('div');
        snowflake.style.width = `${size}px`;
        snowflake.style.height = `${size}px`;
        snowflake.style.borderRadius = '50%';
        snowflake.style.position = 'absolute';
        snowflake.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
        snowflake.style.opacity = 0; // Start invisible
        snowflake.style.pointerEvents = 'none';
        snowflake.style.left = `${Math.random() * 100}%`;

        container.appendChild(snowflake);
        snowflakes.push(snowflake);
      }

      // Create front circles
      for (let i = 0; i < frontCount; i++) {
        const snowflake = document.createElement('div');
        snowflake.style.width = `${size}px`;
        snowflake.style.height = `${size}px`;
        snowflake.style.borderRadius = '50%';
        snowflake.style.position = 'absolute';
        snowflake.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
        snowflake.style.opacity = 0; // Start invisible
        snowflake.style.pointerEvents = 'none';
        snowflake.style.left = `${Math.random() * 100}%`;

        frontContainer.appendChild(snowflake);
        snowflakes.push(snowflake);
      }

      snowflakes.forEach((flake) => {
        const duration = Math.random() * 6 + 9;
        const xMovement = isMobile ? Math.random() * 20 - 10 : Math.random() * 30 - 15;

        const tl = gsap.timeline({ repeat: -1 });

        tl.fromTo(flake,
          { y: window.innerHeight + 50 },
          {
            y: -150,
            x: xMovement,
            rotation: Math.random() * 60,
            duration: duration,
            ease: 'none',
            onUpdate: function() {
              // Only show circle when it's above bottom and below top
              const currentY = gsap.getProperty(flake, 'y');
              if (currentY < window.innerHeight - 50 && currentY > 50) {
                gsap.set(flake, { opacity: maxOpacity });
              } else {
                gsap.set(flake, { opacity: 0 });
              }
            },
            onRepeat: () => {
              gsap.set(flake, {
                x: 0,
                opacity: 0,
                left: `${Math.random() * 100}%`
              });
            }
          }
        );

        // Start at random point in animation
        tl.progress(Math.random());
      });
    }
  }, []);

  // No form handlers — component displays only text + bubbles

  useGSAP(() => {
    if (!prefersReducedMotion) {
      gsap.from('.hero-title', {
        y: 40,
        opacity: 0,
        duration: MOTION.smooth,
        ease: 'power2.out'
      });

      gsap.from('.hero-subtitle', {
        y: 30,
        opacity: 0,
        duration: MOTION.smooth,
        ease: 'power2.out',
        delay: 0.15
      });

      gsap.from('.form-container', {
        y: 60,
        opacity: 0,
        duration: MOTION.slow,
        ease: 'power3.out',
        delay: 0.25
      });

      gsap.from('.info-item', {
        y: 30,
        opacity: 0,
        duration: MOTION.smooth,
        ease: 'power2.out',
        stagger: 0.1,
        delay: 0.35
      });
    }
  }, []);


  return (
    <div className="position-relative min-vh-100 bg-white overflow-hidden">
      {/* Snow Container - Behind everything */}
      <div
        ref={snowContainerRef}
        className="position-absolute top-0 start-0 end-0 bottom-0 pointer-events-none"
        style={{ zIndex: 0 }}
        aria-hidden="true"
      />

      {/* Front Snow Container - In front of content */}
      <div
        ref={frontSnowContainerRef}
        className="position-absolute top-0 start-0 end-0 bottom-0 pointer-events-none"
        style={{ zIndex: 30 }}
        aria-hidden="true"
      />

      {/* <div className="position-relative" style={{ zIndex: 20 }}>
        <div className="container-fluid py-5">
          <div className="row justify-content-center py-5">
            <div className="col-12 col-lg-4">
              <div className="form-container text-center">
                <h1 className="text-slate-900 mb-3 eighties" style={{ fontSize: '2rem' }}>Web Design & Technology Studio</h1>
                <p className="fs-6 text-slate-600">Columbia, South Carolina</p>
              </div>
            </div>
          </div>
        </div>
      </div> */}
    </div>
  );
}

export default Bubbles;