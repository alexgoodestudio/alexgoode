import { useRef } from "react";
import { gsap } from "gsap";

function LinksCard() {
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
      className="flip-card br d-flex flex-column bg-green-200  blue-card-flip mobile-no-hover"
      ref={boxRef}
      onMouseEnter={() => handleHover(true)}
      onMouseLeave={() => handleHover(false)}
    
    >
      {/* Front */}
      <div
        className="front  d-flex align-items-start justify-content-center p-lg-5 p-3"
                style={{
          height: "100%",

        }}
        
      >
        <div className=" align-items-start justify-content-center text-3xl text-green-900  p-lg-4 p-3">
          Owner of Made Right Studio, a creative web design and technology
          studio that helps brands design, and develop top-performing websites.
         
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
           <span className="text-violet-500">Made Right Studio</span> is currently an independently owned and operated business with hopes of growing the company into a small but mighty team.
        </h1>
      </div>
    </div>
  );
}

export default LinksCard;