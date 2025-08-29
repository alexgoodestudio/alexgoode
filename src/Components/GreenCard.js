import React, { useRef } from "react";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrambleTextPlugin } from "gsap/ScrambleTextPlugin";

gsap.registerPlugin(ScrambleTextPlugin);

function GreenCard() {
  const containerRef = useRef(); // container for GSAP scope
  const boxRef = useRef();       // flip card ref
  const nameRef = useRef();      // scramble text ref

  // Scramble text on mount
  useGSAP(
    () => {
      gsap.fromTo(
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
      );
    },
    { scope: containerRef } // scope to container
  );

  // Flip card hover logic
    const handleHover = (hover) => {
      gsap.to(boxRef.current, {
        rotateX: hover ? 180 : 0,
        duration: 0.7,
        ease: "power2.inOut",
      });
    };

  return (
    <div ref={containerRef}>
      <div
        className="flip-card-top  br d-flex flex-column mt-lg-0 mt-3"
        
        ref={boxRef}
        onMouseEnter={() => handleHover(true)}
        onMouseLeave={() => handleHover(false)}
      >
        {/* Front */}
        <div
          className="front br bg-bento-green d-flex align-items-start justify-content-center p-lg-5 p-3"
          style={{ height: "100%", backfaceVisibility: "hidden" }}
        >
          <h1 className="text-white text-4xl ">
            <span
              ref={nameRef}
              className="text-yellow-200  text-4xl inline-block"
            >
              Alex Goode
            </span>{" "}
            is a Full-Stack Web Developer/ Designer with a focus on Front-End
            Web Development in React.js.
          </h1>
        </div>

        {/* Back */}
        <div
          className="back br d-flex align-items-start justify-content-center p-lg-5 p-3"
          style={{
            height: "100%",
            backgroundColor: "#f3f5ff",
            transform: "rotateX(180deg)",
          }}
        >
          <h1 className="text-slate-900 text-4xl">
            Graduate of <span className="text-violet-500">Promineo Tech</span>'s
            Front End Software Development Program and{" "}
            <span className="text-violet-500">Chegg Skills</span> (formerly
            Thinkful) Full-Stack Software Engineering Immersion Program.
          </h1>
        </div>
      </div>
    </div>
  );
}

export default GreenCard;
