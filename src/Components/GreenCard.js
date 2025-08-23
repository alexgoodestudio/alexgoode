import { useRef } from "react";
import { gsap } from "gsap";

function GreenCard() {
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
      className="flip-card br d-flex flex-column"
      ref={boxRef}
      onMouseEnter={() => handleHover(true)}
      onMouseLeave={() => handleHover(false)}
      style={{ height: "38vh", perspective: "900px" }}
    >
      {/* Front */}
      <div
        className="front br bg-bento-green d-flex align-items-start justify-content-center p-5"
        style={{ height: "100%", backfaceVisibility: "hidden" }}
      >
        <h1 className="text-white text-4xl ">
          Alex Goode is a Full-Stack Web Developer/ Designer with a focus on Front-End Web Development in React.js. 
        </h1>
      </div>

      {/* Back */}
      <div
        className="back br d-flex align-items-start justify-content-center p-5"
        style={{
          height: "100%",
          backgroundColor: "#f3f5ff",
          transform: "rotateX(180deg)",
        }}
      >
        <h1 className="text-slate-900 text-4xl ">
          Graduate of Promineo Tech's Front End Software Development Program and Chegg Skills (formerly Thinkful) Full-Stack Software Engineering Immersion Program.
        </h1>
      </div>
    </div>
  );
}

export default GreenCard;
