import { useRef } from "react";
import { gsap } from "gsap";

function Footer() {
  const currentYear = new Date().getFullYear();
  const emailRef = useRef(null);

  // Email hover animation - text color changes
  const handleEmailHover = () => {
    gsap.to(emailRef.current, {
      color: '#0d9488', // Teal-700 on hover
      duration: 0.3,
      ease: 'power2.out',
    });
  };

  const handleEmailLeave = () => {
    gsap.to(emailRef.current, {
      color: '#0f172a', // Slate-900 as default
      duration: 0.3,
      ease: 'power2.out',
    });
  };

  return (
    <div className="bg-slate-100 py-3" style={{ fontSize: '0.8125rem' }}>
      <div className="d-flex justify-content-between align-items-center px-4">
        <a
          href="mailto:hello@maderight.studio"
          ref={emailRef}
          className="text-decoration-none"
          onMouseEnter={handleEmailHover}
          onMouseLeave={handleEmailLeave}
          style={{
            cursor: 'pointer',
            userSelect: 'none',
            color: '#0f172a'
          }}
        >
          hello@maderight.studio
        </a>
        <div>
          Copyright © {currentYear} <span className="mx-1 text-gray-400">•</span> <span className="d-none d-md-inline">Made Right Studio</span><span className="d-md-none">Made Right</span>
        </div>
      </div>
    </div>
  );
}

export default Footer;
