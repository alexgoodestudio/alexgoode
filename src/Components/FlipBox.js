import { useRef } from "react";
import { gsap } from "gsap";

function FlipBox({ frontContent, backContent }) {
  const boxRef = useRef();

  const handleHover = (hover) => {
    gsap.to(boxRef.current, {
      rotateX: hover ? 180 : 0,
      duration: 0.7,
      ease: "power2.inOut",
    });
  };

  return (
    <div
      className="flip-card br h-100"
      ref={boxRef}
      onMouseEnter={() => handleHover(true)}
      onMouseLeave={() => handleHover(false)}
      style={{ perspective: "900px" }}
    >
      {/* Front */}
      <div className="front br h-100" style={{ backfaceVisibility: "hidden" }}>
        {frontContent}
      </div>

      {/* Back */}
      <div
        className="back br h-100 d-flex align-items-center justify-content-center p-4"
        style={{ backgroundColor: "#f3f5ff", transform: "rotateX(180deg)" }}
      >
        {backContent}
      </div>
    </div>
  );
}

export default FlipBox;
