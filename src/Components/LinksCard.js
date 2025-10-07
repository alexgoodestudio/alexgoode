import { useRef } from "react";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { RotateCcw } from "lucide-react";

function LinksCard() {
  const containerRef = useRef();
  const boxRef = useRef();
  const hintRef = useRef();
  const iconRef = useRef();

  // Initial animations with progressive disclosure
  useGSAP(() => {
    const tl = gsap.timeline({ delay: 0.3 });
    
    // Subtle breathing animation to suggest interactivity
    tl.to(boxRef.current, {
      scale: 1.015,
      duration: 3,
      ease: "power2.inOut",
      yoyo: true,
      repeat: -1,
      delay: 1
    })
    // Rotate icon animation loop (start immediately)
    .to(iconRef.current, {
      rotation: 360,
      duration: 4,
      ease: "none",
      repeat: -1,
      delay: 0.5
    }, "+=0.5");
    
  }, { scope: containerRef });

  const handleHover = (hover) => {
    gsap.to(boxRef.current, {
      rotateX: hover ? 180 : 0,
      duration: 0.7,
      ease: "power2.inOut",
    });
    
    // Simply hide hint when hovering
    gsap.to(hintRef.current, {
      opacity: hover ? 0 : 1,
      duration: 0.3,
      ease: "power2.out"
    });
  };

  return (
    <div 
      ref={containerRef} 
      className="position-relative "
    >
      <div
        className="flip-card  br d-flex flex-column bg-green-200 blue-card-flip mobile-no-hover position-relative"
        ref={boxRef}
        onMouseEnter={() => handleHover(true)}
        onMouseLeave={() => handleHover(false)}
        style={{ 
          cursor: 'pointer',
          transformStyle: 'preserve-3d'
        }}
      >
        {/* Front */}
        <div
          className="front d-flex align-items-start justify-content-center p-lg-5 px-4 py-5"
          style={{
            height: "100%",
            backfaceVisibility: "hidden",
            transform: "rotateX(0deg)"
          }}
        >
          <div className="d-flex align-items-start justify-content-center text-4xl text-green-800 ">
            Owner of Made Right Studio, a creative web design and technology
            studio that helps brands design, and develop top-performing websites.
          </div>
        </div>

        {/* Back */}
        <div
          className="back br d-flex align-items-start justify-content-center p-lg-5 px-4 py-5 position-absolute w-100"
          style={{
            height: "100%",
            backgroundColor: "#f3f5ff",
            transform: "rotateX(180deg)",
            backfaceVisibility: "hidden",
            top: 0,
            left: 0
          }}
        >
          <h1 className="text-slate-900 text-4xl">
            <span className="text-violet-500">Made Right Studio</span> is currently an independently owned and operated business. We are moving into a new phase of growth where we aim to expand our team.
          </h1>
        </div>
      </div>

      <div 
        className="position-absolute d-none d-lg-block"
        style={{ 
          bottom: '1rem',
          right: '1rem',
          zIndex: 10,
          pointerEvents: 'none'
        }}
      >
        <div 
          ref={hintRef}
          className="d-inline-flex align-items-center px-3 py-1 bg-white border rounded-pill"
          style={{ 
            opacity: 1,
            borderColor: 'rgba(22, 163, 74, 0.3)'
          }}
        >
          <RotateCcw 
            ref={iconRef}
            size={12} 
            className="me-2 text-green-700"
            style={{ strokeWidth: 2 }}
          />
          <span 
            className="fw-medium"
            style={{ 
              fontSize: '0.6875rem', 
              letterSpacing: '0.025em',
              color: '#15803d'
            }}
          >
            HOVER TO FLIP
          </span>
        </div>
      </div>
    </div>
  );
}

export default LinksCard;