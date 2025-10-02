import { useRef } from "react";
import Image1 from "../Images//1-min.jpg";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import LinksCard from "./LinksCard";
import GreenCard from "./GreenCard";

gsap.registerPlugin(ScrollTrigger);

function Bento() {
  const containerRef = useRef();

  useGSAP(() => {
    const isMobile = window.innerWidth <= 768 || 'ontouchstart' in window;
    
    console.log('Mobile detected:', isMobile);
    
    if (isMobile) {
      document.documentElement.style.setProperty('--mobile-hover', 'none');
      
      console.log('Setting up scroll triggers');
      
      const greenCardTrigger = ScrollTrigger.create({
        trigger: ".green-card-container + *",
        start: "top 60%",
        end: "bottom 10%",
        onToggle: self => {
          console.log('Green card trigger:', self.isActive);
          const greenCard = document.querySelector('.green-card-flip');
          if (greenCard) {
            gsap.to(greenCard, {
              rotateX: self.isActive ? 180 : 0,
              duration: 0.7,
              ease: "power2.inOut",
            });
          }
        }
      });

      const blueCardTrigger = ScrollTrigger.create({
        trigger: ".blue-card-container",
        start: "center center",
        end: "bottom 20%",
        onToggle: self => {
          console.log('Blue card trigger:', self.isActive);
          const blueCard = document.querySelector('.blue-card-flip');
          if (blueCard) {
            gsap.to(blueCard, {
              rotateX: self.isActive ? 180 : 0,
              duration: 0.7,
              ease: "power2.inOut",
            });
          }
        }
      });

      return () => {
        greenCardTrigger.kill();
        blueCardTrigger.kill();
      };
    }
  }, { scope: containerRef });

  return (
    <div ref={containerRef} className="row g-3 align-items-stretch">
      {/* Column 1: GreenCard flip */}
      <div className="col-lg-6 col-12 px-lg-2 px-4 green-card-container">
        <GreenCard />
      </div>

      {/* Column 2: Made Right Studio */}
      <div className="col-lg-6 col-12 px-lg-2 px-4">
        <div className="card-top d-flex flex-column items-stretch justify-center text-center bg-sky-100 p-0">
          <div className="d-flex flex-column flex-fill justify-content-center align-items-center h-100 p-lg-5 p-2">
            <h2 className="maderight m-0">
              <a
                href="https://maderight.netlify.app/"
                className="text-teal-900 spaced-underline"
              >
                Made Right Studio
              </a>
            </h2>
            <p className="text-sm m-0 mt-2 text-teal-900">
              Creative Web Design and Technology Studio
            </p>
            <a
              href="https://maderight.netlify.app/"
              className="btn mt-3 text-decoration-none fw-medium px-4 py-2"
              style={{ 
                border: '1px solid #134e4a',
                color: '#134e4a',
                backgroundColor: 'transparent',
                fontSize: '0.875rem',
                transition: 'all 0.3s ease'
              }}
              onMouseEnter={(e) => {
                e.target.style.backgroundColor = '#134e4a';
                e.target.style.color = '#ffffff';
              }}
              onMouseLeave={(e) => {
                e.target.style.backgroundColor = 'transparent';
                e.target.style.color = '#134e4a';
              }}
            >
              Learn More
            </a>
          </div>
        </div>
      </div>

      {/* Column 3: Screenshot */}
      <div className="col-lg-3 col-12 px-lg-2 px-4 d-flex flex-column">
        <div className="box picture-mask bg-bento-black">
          <img 
            src={Image1} 
            alt="Screenshot" 
            className="w-100 h-100 object-fit-cover"
          />
        </div>
      </div>

      {/* Column 4: Links Card */}
      <div className="col-lg-6 col-12 px-lg-2 px-4">
        <LinksCard />
      </div>

      {/* Column 5: Skills Box */}
      <div className="col-lg-3 col-12 mb-lg-0 mb-3 px-lg-2 px-4">
        <div className="box teal-box bg-teal-900 text-white p-5">
          <h3 className="text-md fw-bold mb-2">Frontend</h3>
          <ul className="list-disc list-inside mb-4 text-md">
            <li>React.js</li>
            <li>REST API Development</li>
            <li>Component Architecture</li>
            <li>Props/ State Management</li>
            <li>GSAP Animations</li>
            <li>Bootstrap/ Tailwind CSS</li>
            <li>Git Version Control</li>
          </ul>

          <h3 className="text-md fw-bold mb-2">Backend & Tools</h3>
          <ul className="list-disc list-inside text-md">
            <li>Node.js</li>
            <li>Express</li>
            <li>PostgreSQL</li>
            <li>Database Design</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Bento;