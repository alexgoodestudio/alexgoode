import React, { useState, useRef, useEffect } from 'react';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';

const ExpandableColumn = ({ title, children, index, isExpanded, onExpand }) => {
  const contentRef = useRef(null);
  const columnRef = useRef(null);

  useGSAP(() => {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const isMobile = window.innerWidth <= 768;

    // On mobile, don't animate the column flex, only the content visibility
    if (isMobile) {
      if (isExpanded) {
        gsap.to(contentRef.current, {
          height: 'auto',
          opacity: 1,
          duration: 0.3,
          ease: 'power2.out'
        });
      } else {
        gsap.to(contentRef.current, {
          height: 0,
          opacity: 0,
          duration: 0.3,
          ease: 'power2.out'
        });
      }
    } else if (prefersReducedMotion) {
      if (isExpanded) {
        gsap.set(columnRef.current, { flex: '1 1 auto' });
      } else {
        gsap.set(columnRef.current, { flex: '0 0 120px' });
      }
    } else {
      if (isExpanded) {
        gsap.to(columnRef.current, {
          flex: '1 1 auto',
          duration: 0.5,
          ease: 'power2.out'
        });
        gsap.to(contentRef.current, {
          opacity: 1,
          duration: 0.3,
          delay: 0.2,
          ease: 'power2.out'
        });
      } else {
        gsap.to(columnRef.current, {
          flex: '0 0 120px',
          duration: 0.5,
          ease: 'power2.out'
        });
        gsap.to(contentRef.current, {
          opacity: 0,
          duration: 0.2,
          ease: 'power2.out'
        });
      }
    }
  }, [isExpanded]);

  return (
    <div 
      ref={columnRef}
      className={`expandable-column ${isExpanded ? 'expanded' : 'collapsed'}`}
    >
      <button
        onClick={onExpand}
        className="column-trigger"
        aria-expanded={isExpanded}
        aria-controls={`column-content-${index}`}
        aria-label={isExpanded ? `Collapse ${title}` : `Expand ${title}`}
      >
        <span className={`column-indicator ${isExpanded ? 'active' : ''}`}></span>
        <span className="column-title text-6xl  text-slate-900">{title}</span>
      </button>

      <div 
        ref={contentRef}
        id={`column-content-${index}`}
        className="column-content"
      >
        {children}
      </div>
    </div>
  );
};

function ExpandableTextSection(){
  const [expandedColumn, setExpandedColumn] = useState(null);

  // Set default expanded column based on screen size
  useEffect(() => {
    const isMobile = window.innerWidth <= 768;
    // Mobile: About (1), Desktop: Mission (2)
    setExpandedColumn(isMobile ? 1 : 2);
  }, []);

  const handleExpand = (index) => {
    setExpandedColumn(expandedColumn === index ? null : index);
  };

  return(
    <section className="expandable-text-section">
      <div className="row">
        <div className="col-12 p-0">
          <article className="expandable-section">
            <div className="expandable-columns-wrapper">
              
              <div className="fixed-column">
                <div className="fixed-column-inner">
                  <h2 className="text-6xl text-slate-900 eighties">Made Right</h2>
                  <p className="text-xs text-slate-600 px-4">
                    High-Performing Design-First Websites in Columbia, South Carolina
                  </p>
                  <a
                    href="https://maderight.studio"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs text-amber-700 hover:text-amber-900 transition-colors duration-200"
                  >
                    maderight.studio
                  </a>
                </div>
              </div>

              <ExpandableColumn
                title="About"
                index="1"
                isExpanded={expandedColumn === 1}
                onExpand={() => handleExpand(1)}
              >
                <div className="column-inner">
                  <h2 className="text-4xl text-slate-900">About Made Right</h2>

                  <p className="text-md text-slate-900">
                    Made Right is a design-focused web development studio based in Columbia, South Carolina led by Alex Goode. We bring together creativity and technology to develop high-performing websites that showcase your brand and get found by the people who matter most to your business.
                  </p>

                  <p className="text-md text-slate-900">
                    Our approach centers on three essential principles: thoughtful design that reflects
                    your unique identity, technical performance that ensures your site loads quickly and
                    works beautifully across all devices, and purposeful strategy that connects your
                    vision with measurable outcomes.
                  </p>


                </div>
              </ExpandableColumn>

              <ExpandableColumn
                title="Mission"
                index="2"
                isExpanded={expandedColumn === 2}
                onExpand={() => handleExpand(2)}
              >
                <div className="column-inner">
                  <h2 className="text-4xl text-slate-900">Our Mission</h2>

                  <p className="text-md text-slate-900">
                    Made Right is a design-focused web development studio based in Columbia, South Carolina. We bring together creativity and technology to develop high-performing websites that showcase your brand and get found by the people who matter most to your business.
                  </p>

                  <p className="text-md text-slate-900">
                    Our approach centers on three essential principles: thoughtful design that reflects
                    your unique identity, technical performance that ensures your site loads quickly and
                    works beautifully across all devices, and purposeful strategy that connects your
                    vision with measurable outcomes.
                  </p>


                </div>
              </ExpandableColumn>

              <ExpandableColumn
                title="Tools"
                index="3"
                isExpanded={expandedColumn === 3}
                onExpand={() => handleExpand(3)}
              >
                <div className="column-inner">
                  <h2 className="text-4xl text-slate-900">Tools & Technology</h2>

                  <p className="text-md text-slate-900">
                    We build with modern, proven technologies that ensure your website is fast,
                    secure, and maintainable for years to come.
                  </p>

                  <div className="mt-4">
                    <h3 className="text-xs text-slate-900">DEVELOPMENT</h3>
                    <div className="row mt-3">
                      <div className="col-md-6">
                        <ul className="service-list">
                          <li className="text-base text-slate-900">React & Next.js</li>
                          <li className="text-base text-slate-900">Node.js</li>
                        </ul>
                      </div>
                      <div className="col-md-6">
                        <ul className="service-list">
                          <li className="text-base text-slate-900">Tailwind CSS</li>
                          <li className="text-base text-slate-900">GSAP Animation</li>
                          <li className="text-base text-slate-900">Sanity CMS</li>
                        </ul>
                      </div>
                    </div>
                  </div>

                  <div className="mt-4">
                    <h3 className="text-xs text-slate-900">OPTIMIZATION</h3>
                    <ul className="service-list mt-3">
                      <li className="text-base text-slate-900">Search Engine Optimization (SEO)</li>
                      <li className="text-base text-slate-900">Performance & Speed Testing</li>
                      <li className="text-base text-slate-900">Accessibility Compliance</li>
                      <li className="text-base text-slate-900">Mobile Responsiveness</li>
                    </ul>
                  </div>
                </div>
              </ExpandableColumn>

              <ExpandableColumn
                title="Deliverables"
                index="4"
                isExpanded={expandedColumn === 4}
                onExpand={() => handleExpand(4)}
              >
                <div className="column-inner">
                  <h2 className="text-4xl text-slate-900">What You Receive</h2>

                  <p className="text-md text-slate-900">
                    Every project is tailored to your specific needs, but our deliverables
                    consistently include the essentials for a successful digital presence.
                  </p>

                  <div className="mt-4">
                    <h3 className="text-xs text-slate-900">STANDARD DELIVERABLES</h3>
                    <ul className="service-list mt-3">
                      <li className="text-base text-slate-900">Custom Website Design</li>
                      <li className="text-base text-slate-900">Responsive Development (Mobile, Tablet, Desktop)</li>
                      <li className="text-base text-slate-900">Content Management System</li>
                      <li className="text-base text-slate-900">SEO Optimization & Setup</li>
                      <li className="text-base text-slate-900">Performance Testing & Analytics</li>
                      <li className="text-base text-slate-900">Training & Documentation</li>
                    </ul>
                  </div>

                  <div className="mt-4">
                    <h3 className="text-xs text-slate-900">OPTIONAL ADDITIONS</h3>
                    <ul className="service-list mt-3">
                      <li className="text-base text-slate-900">E-commerce Integration</li>
                      <li className="text-base text-slate-900">Animation & Interaction Design</li>
                      <li className="text-base text-slate-900">Ongoing Maintenance & Support</li>
                    </ul>
                  </div>
                </div>
              </ExpandableColumn>

              <ExpandableColumn
                title="Process"
                index="5"
                isExpanded={expandedColumn === 5}
                onExpand={() => handleExpand(5)}
              >
                <div className="column-inner">
                  <h2 className="text-4xl text-slate-900">How We Work</h2>

                  <p className="text-md text-slate-900">
                    Our process is designed to be collaborative and transparent. We work closely with you
                    at every stage to ensure the final product exceeds expectations.
                  </p>

                  <div className="mt-4">
                    <h3 className="text-xs text-slate-900">OUR APPROACH</h3>
                    <ul className="service-list mt-3">
                      <li className="text-base text-slate-900">Discovery & Research — Understanding your brand, audience, and goals</li>
                      <li className="text-base text-slate-900">Strategy & Planning — Defining scope, timeline, and deliverables</li>
                      <li className="text-base text-slate-900">Design & Prototyping — Creating visual concepts and gathering feedback</li>
                      <li className="text-base text-slate-900">Development & Testing — Building and optimizing your website</li>
                      <li className="text-base text-slate-900">Launch & Training — Deploying your site and training your team</li>
                      <li className="text-base text-slate-900">Support & Growth — Ongoing maintenance and updates as needed</li>
                    </ul>
                  </div>
                </div>
              </ExpandableColumn>

              <ExpandableColumn
                title="Design"
                index="6"
                isExpanded={expandedColumn === 6}
                onExpand={() => handleExpand(6)}
              >
                <div className="column-inner">
                  <h2 className="text-4xl text-slate-900">Design Systems</h2>

                  <p className="text-md text-slate-900">
                    We build modular design systems that give your brand consistency across
                    every touchpoint while making future updates seamless and cost-effective.
                  </p>

                  <p className="text-md text-slate-900">
                    A design system is more than just a style guide—it's a living collection of
                    reusable components, patterns, and guidelines that ensure your brand feels
                    cohesive whether someone encounters it on your website, social media, or
                    printed materials.
                  </p>

                  <div className="mt-4">
                    <h3 className="text-xs text-slate-900">WHAT'S INCLUDED</h3>
                    <ul className="service-list mt-3">
                      <li className="text-base text-slate-900">Typography & Color Palettes</li>
                      <li className="text-base text-slate-900">Reusable Component Library</li>
                      <li className="text-base text-slate-900">Spacing & Layout Guidelines</li>
                      <li className="text-base text-slate-900">Accessibility Standards</li>
                    </ul>
                  </div>
                </div>
              </ExpandableColumn>

              <ExpandableColumn
                title="Results"
                index="7"
                isExpanded={expandedColumn === 7}
                onExpand={() => handleExpand(7)}
              >
                <div className="column-inner">
                  <h2 className="text-4xl text-slate-900">Measurable Results</h2>

                  <p className="text-md text-slate-900">
                    We believe great design should deliver tangible outcomes. Every project
                    we undertake is measured not just by aesthetics, but by how well it serves
                    your business goals.
                  </p>

                  <div className="mt-4">
                    <h3 className="text-xs text-slate-900">WHAT SUCCESS LOOKS LIKE</h3>
                    <ul className="service-list mt-3">
                      <li className="text-base text-slate-900">Faster Page Load Times — Better user experience and search rankings</li>
                      <li className="text-base text-slate-900">Improved Search Visibility — Higher rankings for relevant keywords</li>
                      <li className="text-base text-slate-900">Increased Engagement — More time spent on site, lower bounce rates</li>
                      <li className="text-base text-slate-900">Higher Conversion Rates — More inquiries, signups, or sales</li>
                      <li className="text-base text-slate-900">Accessibility Compliance — Reaching a wider audience inclusively</li>
                      <li className="text-base text-slate-900">Brand Consistency — Cohesive presence across all digital channels</li>
                    </ul>
                  </div>

                  <div className="mt-5">
                    <p className="text-md text-slate-900">
                      Ready to discuss your project? Reach out at{' '}
                      <a href="mailto:hello@maderight.studio" className="inline-link text-amber-700">
                        hello@maderight.studio
                      </a>
                    </p>
                  </div>
                </div>
              </ExpandableColumn>

            </div>
          </article>
        </div>
      </div>
    </section>
  )
}

export default ExpandableTextSection;