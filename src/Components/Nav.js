import React, { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import { gsap } from "gsap";
import "bootstrap/dist/css/bootstrap.min.css";

// Social Media Icon Components
const GithubIcon = ({ size = 20 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
    <path d="M9 18c-4.51 2-5-2-7-2" />
  </svg>
);

const LinkedinIcon = ({ size = 20 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect width="4" height="12" x="2" y="9" />
    <circle cx="4" cy="4" r="2" />
  </svg>
);

const InstagramIcon = ({ size = 20 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
  </svg>
);

const LayersIcon = ({ size = 20 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <polygon points="12 2 2 7 12 12 22 7 12 2" />
    <polyline points="2 17 12 22 22 17" />
    <polyline points="2 12 12 17 22 12" />
  </svg>
);

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
    <nav className="navbar navbar-light mb-0 bg-slate-200 text-slate-900 flex flex-col">
      {/* Always visible header */}
      <div className="container-fluid d-flex justify-content-between  align-items-center">
        <Link to="/" className=" btn btn-link p-0  text-decoration-none " onClick={closeNav}>
          <div className="text-slate-900 ps-lg-5 text-xl">
          <span className="font-bold ">Alex Goode</span> <span className="px-1">|</span> Made Right Studio
       </div>
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
              <Link
                to="/maderight"
                className="text-slate-950 hover:text-slate-600 no-underline transition-colors duration-200 inline-flex items-center gap-2"
                onClick={closeNav}
              >
                <LayersIcon size={20} />
                About Made Right
              </Link>
            </h5>
            <p className="text-slate-500 font-mono text-sm">Creative Web Design and Technology Studio</p>
          </div>
          <div className="col-lg-3 col-12 p-3 text-start">
            <h5>
              <a
                href="https://github.com/alexgoodestudio"
                target="_blank"
                rel="noopener noreferrer"
                className="text-slate-950 hover:text-slate-600 no-underline transition-colors duration-200 inline-flex items-center gap-2"
                onClick={closeNav}
              >
                <GithubIcon size={20} />
                Github
              </a>
            </h5>
            <p className="text-slate-500 font-mono text-sm">View my work</p>
          </div>

          <div className="col-lg-3 col-12 p-3 text-start">
            <h5>
              <a
                href="https://www.linkedin.com/in/alexgoodestudio/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-slate-950 hover:text-slate-600 no-underline transition-colors duration-200 inline-flex items-center gap-2"
                onClick={closeNav}
              >
                <LinkedinIcon size={20} />
                LinkedIn
              </a>
            </h5>
            <p className="text-slate-500 font-mono text-sm">Connect with me</p>
          </div>

          {/* <div className="col-lg-3 col-12 p-3 text-start">
            <h5>
              <a
                href="https://maderight.studio/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-slate-950 hover:text-slate-600 no-underline transition-colors duration-200"
                onClick={closeNav}
              >
                Made Right Studio
              </a>
            </h5>
            <p className="text-slate-500 font-mono text-sm">Creative Web Design and Technology Studio</p>
          </div> */}

          <div className="col-lg-3 col-12 p-3 text-start">
            <h5>
              <a
                href="https://instagram.com/al3xgoode"
                target="_blank"
                rel="noopener noreferrer"
                className="text-slate-950 hover:text-slate-600 no-underline transition-colors duration-200 inline-flex items-center gap-2"
                onClick={closeNav}
              >
                <InstagramIcon size={20} />
                Instagram
              </a>
            </h5>
            <p className="text-slate-500 font-mono text-sm">Get to know me!</p>
          </div>
          
        </div>

        {/* Row 3 */}
        <div className="row mb-3">


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
{/* 
          <div className="col-lg-3 col-12 p-3 text-start">
            <h5>
              <Link
                to="/play-zone"
                className="text-slate-950 hover:text-slate-600 no-underline transition-colors duration-200"
                onClick={closeNav}
              >
                Motion Playground
              </Link>
            </h5>
            <p className="text-slate-500 font-mono text-sm">Interactive experiments</p>
          </div> */}
        </div>
      </div>
    </nav>
  );
}

export default Nav;
