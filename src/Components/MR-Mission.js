import React, { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import { useGSAP } from "@gsap/react";

function Mission() {
  const container = useRef();
  const confettiContainer = useRef();
  const confettiPieces = useRef([]);

  gsap.registerPlugin(ScrollTrigger);

  // Create confetti pieces and store references for animation
  const createConfetti = () => {
    // Clear previous pieces
    confettiPieces.current.forEach(piece => piece.remove?.());
    confettiPieces.current = [];

    const colors = ['#FFF7AF', '#2C4B45', '#A1ADEB'];
    const confettiCount = 36;

    for (let i = 0; i < confettiCount; i++) {
      const confetti = document.createElement('div');
      confetti.className = 'confetti-piece';

      // Evenly distribute angles to prevent overlap
      const angle = (i / confettiCount) * Math.PI * 2;
      const velocity = 200 + (i % 3) * 80; // 3 rings at different distances
      const xDest = Math.cos(angle) * velocity;
      const yDest = Math.sin(angle) * velocity;

      confetti.style.cssText = `
        position: absolute;
        width: 14px;
        height: 14px;
        background: ${colors[i % colors.length]};
        left: 50%;
        top: 50%;
        opacity: 0;
        border-radius: 50%;
      `;
      confettiContainer.current.appendChild(confetti);
      confettiPieces.current.push({ element: confetti, xDest, yDest });
    }
  };

  useGSAP(() => {
    // Create confetti pieces on mount
    createConfetti();

    const animWords = container.current.querySelectorAll(".word:not(.made-right)");

    // Create confetti timeline (initially paused)
    const confettiTl = gsap.timeline({ paused: true });
    
    // Animate confetti pieces outward
    confettiPieces.current.forEach(({ element, xDest, yDest }) => {
      confettiTl.to(
        element,
        {
          x: xDest,
          y: yDest,
          opacity: 0,
          duration: 2,
          ease: 'power2.out'
        },
        0
      );
    });

    // SINGLE UNIFIED SCROLLTRIGGER - pin and animation together
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: container.current,
        start: "center center",
        end: "+=5000",
        scrub: 1.5,
        pin: true,
        anticipatePin: 1,
        onUpdate: (self) => {
          // Play confetti forward/reverse based on scroll progress
          if (self.progress >= 0.95) {
            confettiTl.play();
          } else {
            confettiTl.reverse();
          }
        }
      },
    });

    // Fade in all words except the brand words (Made / Right)
    tl.fromTo(animWords, { opacity: 0.2 }, { opacity: 1, stagger: 0.1, duration: 1 }, 0);

    // Hold at full opacity
    tl.to({}, { duration: 1 });

    // Fade out all animated words (leave .made-right at full opacity)
    tl.to(animWords, {
      opacity: 0,
      duration: 1.5,
      ease: 'power1.out'
    });

    // After the rest of the words fade, fade the brand words ('Made' / 'Right')
    // This tween sits at the end of the timeline so the brand stays visible
    // while the user scrolls, then fades near the completion of the scroll.
    const brandWords = container.current.querySelectorAll('.made-right');
    if (brandWords && brandWords.length) {
      tl.to(brandWords, {
        opacity: 0,
        duration: 1.2,
        ease: 'power1.out'
      });
    }

    return () => {
      tl.kill();
      confettiTl.kill();
    };

  }, []);

  const text = "Made Right is a design-focused web development studio based in Columbia, South Carolina. Our goal is to bring creativity and technology together to develop high-performing websites that showcases your brand. We focus on design principles, technical performance and purposeful strategy.";

  return (
    <section className="bg-white gs mission-p py-5 text-start px-lg-0 px-1 position-relative">
      <div ref={confettiContainer} className="position-fixed confetti-container" style={{ left: '50%', top: '50%', pointerEvents: 'none', zIndex: 9999 }} />
      <p ref={container} className="mission-body">
        {text.split(" ").map((word, i) => {
          const match = word.match(/^([\w-]+)(\W*)$/);
          const letters = match ? match[1] : word;
          const punctuation = match ? match[2] : "";

          let colorClass = "";
          let specialClass = "";

          if (letters === "Made" || letters === "Right") {
            colorClass = "text-sky-500 ";
            specialClass += " made-right";
          }

          // highlight the inline phrase (case-insensitive match)
          if (letters.toLowerCase() === "design-focused") {
            specialClass += " highlight";
          }

          return (
            <span key={i} className="inline-block mr-2 text-teal-900">
              <span className={`word ${colorClass} ${specialClass}`}>
                {letters}
              </span>
              {punctuation && <span className="word">{punctuation}</span>}
            </span>
          );
        })}
      </p>
    </section>
  );
}

export default Mission;