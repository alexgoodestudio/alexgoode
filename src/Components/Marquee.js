import React, { useRef } from "react";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";


gsap.registerPlugin(ScrollTrigger);

function Marquee() {
  const textRef = useRef();
  const containerRef = useRef();

  useGSAP(() => {
    const el = textRef.current;
    const containerWidth = el.parentElement.offsetWidth;
    const textWidth = el.offsetWidth;

    // position text to start 1/3 across the screen
    const startPosition = containerWidth / 3;

    // Initially hide the text
    gsap.set(el, { x: startPosition, opacity: 0 });

    // Create scroll trigger that starts animation when in view
    ScrollTrigger.create({
      trigger: containerRef.current,
      start: "top bottom",
      onEnter: () => {
        // Fade in the text first
        gsap.to(el, {
          opacity: 1,
          duration: 0.5,
          onComplete: () => {
            // Then start the scroll animation
            gsap.to(el, {
              x: -textWidth - containerWidth,
              duration: 90,
              ease: "linear",
              repeat: -1,
            });
          }
        });
      }
    });
  });

  return (
    <div ref={containerRef} className="banner-container  bg-slate-200 text-dark ">
      <span ref={textRef} className="banner-text tracking-wide">
        Alex Goode <span className="px-4">•</span> Columbia, South Carolina <span className="px-4">•</span> Made Right Studio <span className="px-4">•</span> Full-Stack Developer <span className="px-4">•</span> Front-End Engineer <span className="px-4">•</span> Web Designer <span className="px-4">•</span>Alex Goode <span className="px-4">•</span> Columbia, South Carolina <span className="px-4">•</span> Made Right <span className="px-4">•</span> Full-Stack Developer <span className="px-4">•</span> Front-End Engineer <span className="px-4">•</span> Web Designer <span className="px-4">•</span>        Alex Goode <span className="px-4">•</span> Columbia, South Carolina <span className="px-4">•</span> Made Right <span className="px-4">•</span> Full-Stack Developer <span className="px-4">•</span> Front-End Engineer <span className="px-4">•</span> Web Designer <span className="px-4">•</span>        Alex Goode <span className="px-4">•</span> Columbia, South Carolina <span className="px-4">•</span> Made Right <span className="px-4">•</span> Full-Stack Developer <span className="px-4">•</span> Front-End Engineer <span className="px-4">•</span> Web Designer <span className="px-4">•</span>


      </span>
    </div>
  );
}

export default Marquee;