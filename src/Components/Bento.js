import Image1 from "../Images//Screenshot.png";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import LinksCard from "./LinksCard"
import GreenCard from "./GreenCard";

gsap.registerPlugin(ScrollTrigger);

function Bento() {
  useGSAP(() => {
    const isMobile = window.innerWidth <= 768 || 'ontouchstart' in window;
    
    console.log('Mobile detected:', isMobile);
    
    if (isMobile) {
      document.documentElement.style.setProperty('--mobile-hover', 'none');
      
      console.log('Setting up scroll triggers');
      
      const greenCardTrigger = ScrollTrigger.create({
        trigger: ".green-card-container + *",
        start: "top 60%", // Adjusted for navbar - more aggressive trigger
        end: "bottom 10%",
        // markers: true,
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
        // markers: true,
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
  }, []);

  return (
    <div className="row g-3 align-items-stretch">
      {/* Column 1: GreenCard flip */}
      <div className="col-lg-6 col-12 px-lg-2 px-4 green-card-container">
        <GreenCard />
      </div>

      {/* Column 2: Black Box */}
      <div className="col-lg-6 col-12 px-lg-2 px-4 ">
        <div className="card-top d-flex flex-column items-stretch justify-center text-center bg-sky-100 p-0">
          <div className="flex flex-col flex-1 justify-center items-center h-full p-lg-5 p-2">
            <h2 className="maderight m-0">
              <a
                href="https://maderight.netlify.app/"
                className="text-teal-900 no-underline "
              >
                Made Right Studio
              </a>
            </h2>
            <p className="text-sm m-0 mt-2  text-teal-900">
              Creative Web Design and Technology Studio
            </p>
            <button className="button-made-right mt-3">
                <a
                href="https://maderight.netlify.app/"
                className="text-dark no-underline "
              >
                Learn More
              </a>

            </button>

          </div>
        </div>
      </div>

      {/* Column 3: Green Half */}
      <div className="col-lg-3 col-12 px-lg-2 px-4  d-flex flex-column">
        <div className="box picture-mask bg-bento-black">
          <img src={Image1} alt="Screenshot" />
        </div>
      </div>

      {/* Column 5: Image */}
      <div className="col-lg-6 col-12 px-lg-2 px-4 ">
        <LinksCard/>
      </div>

      {/* Column 4: Black Box */}
      <div className="col-lg-3 col-12 mb-lg-0 mb-3 px-lg-2 px-4 ">
        <div
          className="box teal-box bg-teal-900 text-white p-5"
        
        >
          {/* Section 1 */}
          <h3 className="text-md font-bold mb-2">Frontend</h3>
          <ul className="list-disc list-inside mb-4 text-md">
            <li>React.js</li>
            <li>REST API Development</li>
            <li>Component Architecture</li>
            <li>Props Management</li>
            <li>GSAP Animations</li>
            <li>Bootstrap/ Tailwind CSS </li>
            <li>Git Version Control</li>
          </ul>

          {/* Section 2 */}
          <h3 className="text-md font-bold mb-2">Backend & Tools </h3>
          <ul className="list-disc list-inside text-md">
            <li>Node.js</li>
            <li>Express</li>
            <li>PostgreSQL</li>
            <li>Database Design</li>                
          </ul>

          {/* Section 3 */}
          {/* <h3 className="text-lg font-bold mb-2">Design</h3>
          <ul className="list-disc list-inside">
            <li>Figma</li>
            <li>Photoshop</li>
            <li>Illustrator</li>
          </ul> */}
        </div>
      </div>
      {/* <div className="col-lg-12 col-12">
          <div className="bg-box bg-gray-200 text-4xl box  align-items-start justify-content-center text-black p-5">
            <span className="text-violet-500">Alex Goode</span> can be reached at alexgoode2@gmail.com. He'd make a form on here to showcase his skills but has better things to do :-) Maybe another time.
          </div>
      </div> */}
    </div>
  );
}

export default Bento;