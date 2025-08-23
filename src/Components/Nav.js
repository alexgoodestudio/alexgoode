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
    <nav className="navbar navbar-light bg-slate-100 text-slate-800 flex flex-col">
      {/* Always fixed header row */}
      <div className="container-fluid d-flex justify-content-between align-items-center">
        <button className="navbar-brand btn btn-link p-0 "><span className="font-bold">Alex Goode</span> | Made Right</button>
        <button
          className="navbar-toggler d-block"
          type="button"
          onClick={() => setIsOpen(!isOpen)}
        >
          <span className="navbar-toggler-icon"></span>
        </button>
      </div>

      {/* Collapsible content BELOW, doesn’t push brand/toggler */}
      <div
        className={`w-100 px-3 mt-2 ${isOpen ? "d-block" : "d-none"}`}
        ref={navContentRef}
      >
        {/* Row 1 */}
        <div className="row mb-3">
          <div className="col-12 text-slate-800 p-3">
            <h4>Row 1 - Full Width</h4>
            <p>Some filler text for the full-width column.</p>
          </div>
        </div>

        {/* Row 2 */}
        <div className="row mb-3">
          <div className="col-lg-4 col-12 text-slate-800 p-3">
            <h5>Row 2 - Column 1</h5>
            <p>Filler text for column 1.</p>
          </div>
          <div className="col-lg-4 col-12 text-slate-800 p-3">
            <h5>Row 2 - Column 2</h5>
            <p>Filler text for column 2.</p>
          </div>
          <div className="col-lg-4 col-12 text-slate-800 p-3">
            <h5>Row 2 - Column 3</h5>
            <p>Filler text for column 3.</p>
          </div>
        </div>

        {/* Row 3 */}
        <div className="row mb-3">
          <div className="col-lg-4 col-12 text-slate-800 p-3">
            <h5>Row 3 - Column 1</h5>
            <p>Filler text for column 1.</p>
          </div>
          <div className="col-lg-4 col-12 text-slate-800 p-3">
            <h5>Row 3 - Column 2</h5>
            <p>Filler text for column 2.</p>
          </div>
          <div className="col-lg-4 col-12 text-slate-800 p-3">
            <h5>Row 3 - Column 3</h5>
            <p>Filler text for column 3.</p>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Nav;
