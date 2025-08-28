import Image1 from "../Images//Screenshot 2025-08-03 at 8.17.31 PM.png";
import BlueCard from "./BlueCard"
import GreenCard from "./GreenCard";


function Bento() {
//I want to implement gsap clip text to make made right slide in from top, and studio slide in from right

  return (
    <div className="row g-3 align-items-stretch">
      {/* Column 1: GreenCard flip */}
      <div className="col-lg-6 col-12 ">
        <GreenCard />
      </div>

      {/* Column 2: Black Box */}
      <div className="col-lg-6 col-12">
        <div className="flip-card-top d-flex flex-column items-stretch justify-center text-center bg-green-200 p-0">
          <div className="flex flex-col flex-1 justify-center items-center h-full p-5">
            <h2 className="text-4xl m-0">
              <a
                href="https://your-link.com"
                className="text-dark no-underline "
              >
                Made Right Studio
              </a>
            </h2>
            <p className="text-xs m-0 mt-2  text-gray-800">
              A Creative Web Design and Technology Studio
            </p>
            <button className="button-made-right mt-3">
              Learn More
            </button>

          </div>
        </div>
      </div>

      {/* Column 3: Green Half */}
      <div className="col-lg-3 col-12 d-flex flex-column">
        <div className="box picture-mask bg-bento-black">
          <img src={Image1} alt="Screenshot" />
        </div>
      </div>

      {/* Column 5: Image */}
      <div className="col-lg-6 col-12">
        <BlueCard/>
      </div>

      {/* Column 4: Black Box */}
      <div className="col-lg-3 col-12 mb-lg-0 mb-3">
        <div
          className="box bg-bento-black text-white p-4"
          style={{ height: "50vh" }}
        >
          {/* Section 1 */}
          <h3 className="text-lg font-bold mb-2">Frontend Skills</h3>
          <ul className="list-disc list-inside mb-4">
            <li>React.js</li>
            <li>REST API Development</li>
            <li>GSAP Animations</li>
            <li>Tailwind CSS / Bootstrap</li>
          </ul>

          {/* Section 2 */}
          <h3 className="text-lg font-bold mb-2">Backend & Tools</h3>
          <ul className="list-disc list-inside">
            <li>Node.js / Express</li>
            <li> SQL</li>
            <li>Git / GitHub / VS Code</li>
          </ul>

          {/* Section 3 */}
          <h3 className="text-lg font-bold mb-2">Design</h3>
          <ul className="list-disc list-inside">
            <li>Figma</li>
            <li>Photoshop</li>
            <li>Illustrator</li>
          </ul>
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
