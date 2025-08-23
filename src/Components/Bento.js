import Image1 from "../Images//Screenshot 2025-08-03 at 8.17.31 PM.png";

import GreenCard from "./GreenCard";

function Bento() {
  return (
    <div className="row g-3 align-items-stretch">
      {/* Column 1: GreenCard flip */}
      <div className="col-lg-6 col-12">
        <GreenCard />
      </div>

      {/* Column 2: Black Box */}
 <div className="col-lg-6 col-12">
  <div className="made-right-box d-flex flex-column items-stretch justify-center text-center bg-yellow-200 p-0">
    <div className="flex flex-col flex-1 justify-center items-center h-full p-5">
      <h2 className="text-6xl m-0">
        <a
          href="https://your-link.com"
          className="text-gray-900 no-underline hover:text-yellow-900"
        >
          Made Right
        </a>
      </h2>
      <p className="text-md m-0 mt-2 text-gray-800">
        A Creative Web Design and Technology Studio.
      </p>
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
        <div className="bg-bento-blue box d-flex align-items-start justify-content-center text-lg text-white p-5">
          Alex Goode is the owner of Made Right Studio in Columbia South
          Carolina. Made Right is a Creative Web Design and Technology Studio.
        </div>
      </div>

      {/* Column 4: Black Box */}
      <div className="col-lg-3 col-12">
<div className="box bg-bento-black text-white p-4" style={{ height: "50vh" }}>
  {/* Section 1 */}
  <h3 className="text-lg font-bold mb-2">Frontend Skills</h3>
  <ul className="list-disc list-inside mb-4">
    <li>React.js</li>
    <li>GSAP Animations</li>
    <li>Tailwind CSS / Bootstrap</li>
  </ul>

  {/* Section 2 */}
  <h3 className="text-lg font-bold mb-2">Backend & Tools</h3>
  <ul className="list-disc list-inside">
    <li>Node.js / Express</li>
    <li> SQL</li>
    <li>Git / GitHub</li>
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
    </div>
  );
}

export default Bento;
