import React, { useState, useRef, useEffect } from "react";
import { gsap } from "gsap";
import "bootstrap/dist/css/bootstrap.min.css";

function Nav() {
  const [isOpen, setIsOpen] = useState(false);
  const navContentRef = useRef(null);

  useEffect(() => {
    if (isOpen) {
      gsap.fromTo(
        navContentRef.current.children,
        { y: -20, opacity: 0 },
        { y: 0, opacity: 1, stagger: 0.1, duration: 0.4, ease: "power2.out" }
      );
    } else {
      gsap.to(navContentRef.current.children, {
        y: -20,
        opacity: 0,
        stagger: 0.05,
        duration: 0.3,
        ease: "power2.in",
      });
    }
  }, [isOpen]);

  return (
    <nav className="navbar navbar-light bg-slate-200 text-slate-900 flex flex-col">
      {/* Always visible header */}
      <div className="container-fluid d-flex justify-content-between align-items-center">
        <button className="navbar-brand btn btn-link p-0">
          <span className="font-bold">Alex Goode</span> | Made Right
        </button>
        <button
          className="navbar-toggler d-block"
          type="button"
          onClick={() => setIsOpen(!isOpen)}
        >
          <span className="navbar-toggler-icon"></span>
        </button>
      </div>

      {/* Collapsible content */}
      <div
        className={`w-100 px-3 mt-2 ${isOpen ? "d-block" : "d-none"}`}
        ref={navContentRef}
      >
        {/* Row 1 */}
        <div className="row mb-3">
          <div className="col-12 text-start p-3">
            <h4>Links</h4>
            <p>Check out my work, and other places you can find me!</p>
          </div>
        </div>

        {/* Row 2 */}
        <div className="row mb-3">
          <div className="col-lg-4 col-12 p-3 text-start">
            <h5>
              <a
                href="https://github.com/alexgoodestudio"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sky-700 hover:text-sky-900 no-underline transition-colors duration-200"
              >
                Github
              </a>
            </h5>
            <p>Wanna see my work?</p>
          </div>

          <div className="col-lg-4 col-12 p-3 text-start">
            <h5>
              <a
                href="https://www.linkedin.com/in/alexgoodestudio/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sky-700 hover:text-sky-900 no-underline transition-colors duration-200"
              >
                LinkedIn
              </a>
            </h5>
            <p>Lets Connect</p>
          </div>

          <div className="col-lg-4 col-12 p-3 text-start">
            <h5>
              <a
                href="https://maderight.netlify.app/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sky-700 hover:text-sky-900 no-underline transition-colors duration-200"
              >
                Made Right Studio
              </a>
            </h5>
            <p>Creative Web Design and Technology Studio</p>
          </div>
        </div>

        {/* Row 3 */}
        <div className="row mb-3">
          <div className="col-lg-4 col-12 p-3 text-start">
            <h5>
              <a
                href="https://instagram.com/maderight.studio"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sky-700 hover:text-sky-900 no-underline transition-colors duration-200"
              >
                Instagram
              </a>
            </h5>
            <p>See what I'm doing</p>
          </div>

          <div className="col-lg-4 col-12 p-3 text-start">
            <h5>
              <a
                href="https://lemichclinic-front-end.onrender.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sky-700 hover:text-sky-900 no-underline transition-colors duration-200"
              >
                The Lemich Clinic
              </a>
            </h5>
            <p>Featured: Recent work</p>
          </div>

          <div className="col-lg-4 col-12 p-3 text-start">
            <h5>
              <a
                href="https://rosewoodcleaning.netlify.app"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sky-700 hover:text-sky-900 no-underline transition-colors duration-200"
              >
                Rosewood Cleaning Services
              </a>
            </h5>
            <p>Featured: Recent work</p>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Nav;
