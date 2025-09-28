import React, { useRef } from "react";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrambleTextPlugin } from "gsap/ScrambleTextPlugin";

gsap.registerPlugin(ScrambleTextPlugin);

function GreenCard() {
  const containerRef = useRef();
  const boxRef = useRef();
  const nameRef = useRef();
  const hintRef = useRef();
  const iconRef = useRef();

  // Initial animations with progressive disclosure
  useGSAP(
    () => {
      const tl = gsap.timeline({ delay: 0.5 });
      
      // Scramble text animation
      tl.fromTo(
        nameRef.current,
        { text: "" },
        {
          duration: 2,
          scrambleText: {
            text: "Alex Goode",
            chars: "upperAndLowerCase",
            speed: 0.3,
            revealDelay: 0.2,
          },
          ease: "power2.out",
        }
      )
      // Subtle breathing animation to suggest interactivity
      .to(boxRef.current, {
        scale: 1.015,
        duration: 3,
        ease: "power2.inOut",
        yoyo: true,
        repeat: -1,
        delay: 1
      }, "-=0.5")
      // Delayed hint reveal
      .fromTo(hintRef.current, 
        { opacity: 0, y: 10 },
        { opacity: 1, y: 0, duration: 0.8, ease: "power2.out" },
        "+=2"
      )
      // Rotate spinner inside the hint
      .to(iconRef.current, {
        rotation: 360,
        duration: 4,
        ease: "none",
        repeat: -1,
        delay: 0.5
      }, "-=0.3");
    },
    { scope: containerRef }
  );

  // Flip card hover logic
  const handleHover = (hover) => {
    gsap.to(boxRef.current, {
      rotateX: hover ? 180 : 0,
      duration: 0.7,
      ease: "power2.inOut",
    });
    
    // Counter-rotate the hint to keep it readable
    gsap.to(hintRef.current, {
      rotateX: hover ? 180 : 0,
      opacity: hover ? 0 : 1,
      scale: hover ? 0.9 : 1,
      duration: 0.7,
      ease: "power2.inOut"
    });
  };

  return (
    <div ref={containerRef} className="position-relative">
      <div
        className="flip-card-top br d-flex flex-column mt-lg-0 mt-3 green-card-flip mobile-no-hover position-relative"
        ref={boxRef}
        onMouseEnter={() => handleHover(true)}
        onMouseLeave={() => handleHover(false)}
        style={{ 
          cursor: 'pointer',
          transformStyle: 'preserve-3d',
          perspective: '1000px'
        }}
      >
        {/* Front */}
        <div
          className="front br bg-bento-green d-flex align-items-start justify-content-center p-lg-5 p-3"
          style={{ 
            height: "100%", 
            backfaceVisibility: "hidden",
            transform: "rotateX(0deg)"
          }}
        >
          <h1 className="text-white text-4xl">
            <span
              ref={nameRef}
              className="text-yellow-200 text-4xl d-inline-block"
            >
              Alex Goode
            </span>{" "}
            is a Full-Stack Web Developer/ Designer with a focus on Front-End
            Web Development in React.js.
          </h1>
        </div>

        {/* Back */}
        <div
          className="back br d-flex align-items-start justify-content-center p-lg-5 p-3 position-absolute w-100"
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
            Graduate of <span className="text-violet-500">Promineo Tech</span>'s
            Front End Software Development Program and{" "}
            <span className="text-violet-500">Chegg Skills</span> (formerly
            Thinkful) Full-Stack Software Engineering Immersion Program.
          </h1>
        </div>

        {/* Bottom Interaction Hint - Desktop Only, Front Side Only */}
        <div 
          className="position-absolute d-none d-lg-block"
          style={{ 
            bottom: '1rem',
            right: '1rem',
            zIndex: 10
          }}
        >
          <div 
            ref={hintRef}
            className="d-inline-flex align-items-center px-3 py-1 bg-white border rounded-pill"
            style={{ 
              opacity: 0,
              borderColor: 'rgba(254, 240, 138, 0.4)'
            }}
          >
            <div 
              ref={iconRef}
              className="me-2 rotate-icon"
              style={{ 
                width: '12px',
                height: '12px',
                border: '2px solid #fbbf24',
                borderTop: '2px solid transparent',
                borderRadius: '50%'
              }}
            />
            <span 
              className="fw-medium"
              style={{ 
                fontSize: '0.6875rem', 
                letterSpacing: '0.025em',
                color: '#92400e'
              }}
            >
              HOVER TO FLIP
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default GreenCard;