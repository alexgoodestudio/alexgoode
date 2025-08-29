import { useRef } from "react";
import { gsap } from "gsap";

function BlueCard() {
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
    
    >
      {/* Front */}
      <div
        className="front br bg-bento-blue d-flex align-items-start justify-content-center p-lg-5 p-3"
                style={{
          height: "100%",

        }}
        
      >
        <div className=" align-items-start font-normal justify-content-center text-lg text-white p-lg-4 p-3">
          <span className="font-black">Alex Goode</span> is the owner of{" "}
          <span className="font-black">Made Right Studio</span> in Columbia,
          South Carolina. Made Right is a Creative Web Design and Technology
          Studio that helps brands design, and develop top-performing websites.
          <h3 className="text-lg font-bold mb-2 mt-5">Links</h3>
          <ul className="list-disc list-inside mb-4">
            <li>Linkedin</li>
            <li>Github</li>
            <li>Made Right</li>
            <li>Instagram</li>
          </ul>
        </div>
      </div>

      {/* Back */}
      <div
        className="back br d-flex align-items-start justify-content-center p-lg-4 p-3"
        style={{
          height: "100%",
          backgroundColor: "#f3f5ff",
          transform: "rotateX(180deg)",
        }}
      >
        <h1 className="text-slate-900 text-4xl ">
          He currently works at <span className="text-blue-600">Whole Foods Market</span>, but is working towards creating more opportunities for <span className="text-blue-600">Made Right</span>, with hopes of growing the company.
        </h1>
      </div>
    </div>
  );
}

export default BlueCard;
