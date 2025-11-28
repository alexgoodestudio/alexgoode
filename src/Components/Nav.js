import React, { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import { gsap } from "gsap";
import "bootstrap/dist/css/bootstrap.min.css";

function Nav() {
  const [isOpen, setIsOpen] = useState(false);
  const navContentRef = useRef(null);
  const closeNav = () => {
    gsap.to(navContentRef.current.children, {
      y: -20,
      opacity: 0,
      stagger: 0.05,
      duration: 0.3,
      ease: "power2.in",
      onComplete: () => setIsOpen(false)
    });
  };

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
    <nav className="navbar navbar-light mb-lg-0 mb-4 bg-slate-200 text-slate-900 flex flex-col">
      {/* Always visible header */}
      <div className="container-fluid d-flex justify-content-between align-items-center">
        <Link to="/" className="navbar-brand btn btn-link p-0 text-decoration-none" onClick={closeNav}>
          <span className="font-bold ">Alex Goode</span> | Made Right
        </Link>
        <button
          className="navbar-toggler  d-block"
          type="button"
          onClick={() => setIsOpen(!isOpen)}
        >
          <span className="navbar-toggler-icon"></span>
        </button>
      </div>

      {/* Collapsible content */}
      <div
        className={`w-100 px-lg-5 px-3 mt-4  ${isOpen ? "d-block" : "d-none"}`}
        ref={navContentRef}
      >
        {/* Row 1 */}
        <div className="row mb-3">
          <div className="col-12 text-start p-3">
            <h4>Links</h4>
            <p className="text-slate-500 font-mono text-sm">Check out my work, other places you can find me, and more.</p>
          </div>
        </div>

        {/* Row 2 */}
        <div className="row mb-3">
          <div className="col-lg-3 col-12 p-3 text-start">
            <h5>
              <a
                href="https://github.com/alexgoodestudio"
                target="_blank"
                rel="noopener noreferrer"
                className="text-slate-950 hover:text-slate-600 no-underline transition-colors duration-200"
                onClick={closeNav}
              >
                Github
              </a>
            </h5>
            <p className="text-slate-500 font-mono text-sm">my code</p>
          </div>

          <div className="col-lg-3 col-12 p-3 text-start">
            <h5>
              <a
                href="https://www.linkedin.com/in/alexgoodestudio/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-slate-950 hover:text-slate-600 no-underline transition-colors duration-200"
                onClick={closeNav}
              >
                LinkedIn
              </a>
            </h5>
            <p className="text-slate-500 font-mono text-sm">Connect with me</p>
          </div>

          <div className="col-lg-3 col-12 p-3 text-start">
            <h5>
              <a
                href="https://maderight.netlify.app/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-slate-950 hover:text-slate-600 no-underline transition-colors duration-200"
                onClick={closeNav}
              >
                Made Right Studio
              </a>
            </h5>
            <p className="text-slate-500 font-mono text-sm">Creative Web Design and Technology Studio</p>
          </div>

          <div className="col-lg-3 col-12 p-3 text-start">
            <h5>
              <a
                href="https://instagram.com/al3xgoode"
                target="_blank"
                rel="noopener noreferrer"
                className="text-slate-950 hover:text-slate-600 no-underline transition-colors duration-200"
                onClick={closeNav}
              >
                Instagram
              </a>
            </h5>
            <p className="text-slate-500 font-mono text-sm">Get to know me!</p>
          </div>
        </div>

        {/* Row 3 */}
        <div className="row mb-3">
          <div className="col-lg-3 col-12 p-3 text-start">
            <h5>
              <Link
                to="/alexs-favs"
                className="text-slate-950 hover:text-slate-600 no-underline transition-colors duration-200"
                onClick={closeNav}
              >
                Alex's Favs
              </Link>
            </h5>
            <p className="text-slate-500 font-mono text-sm">My favorite things</p>
          </div>

          {/* <div className="col-lg-3 col-12 p-3 text-start">
            <h5>
              <Link
                to="/story"
                className="text-slate-950 hover:text-slate-600 no-underline transition-colors duration-200"
                onClick={closeNav}
              >
                Story
              </Link>
            </h5>
            <p className="text-slate-500 font-mono text-sm">My journey</p>
          </div> */}

          <div className="col-lg-3 col-12 p-3 text-start">
            <h5>
              <Link
                to="/play-zone"
                className="text-slate-950 hover:text-slate-600 no-underline transition-colors duration-200"
                onClick={closeNav}
              >
                Play Zone
              </Link>
            </h5>
            <p className="text-slate-500 font-mono text-sm">Interactive experiments</p>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Nav;
