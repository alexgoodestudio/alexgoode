'use client';
import React, { useState, useRef, useEffect } from 'react';
import { gsap } from 'gsap';
import { useGSAP } from '@gsap/react';

const ExpandableColumn = ({ title, children, index, isExpanded, onExpand }) => {
  const contentRef = useRef(null);
  const columnRef = useRef(null);
  const isInitialMount = useRef(true);

  useGSAP(() => {
    const content = contentRef.current;
    if (!content) return;

    // Check for reduced motion preference
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    if (prefersReducedMotion) {
      // Instant transitions for accessibility
      gsap.set(content, {
        opacity: isExpanded ? 1 : 0,
        display: isExpanded ? 'block' : 'none'
      });
      return;
    }

    // On initial mount, set the state immediately without animation
    if (isInitialMount.current) {
      isInitialMount.current = false;
      if (isExpanded) {
        gsap.set(content, {
          display: 'block',
          opacity: 1,
          y: 0
        });
      } else {
        gsap.set(content, {
          display: 'none',
          opacity: 0,
          y: 0
        });
      }
      return;
    }

    if (isExpanded) {
      // Smooth expand animation
      gsap.set(content, { display: 'block', opacity: 0, y: 20 });
      gsap.to(content, {
        opacity: 1,
        y: 0,
        duration: 0.5,
        ease: 'power2.out',
      });
    } else {
      // Instant collapse to prevent flash
      gsap.set(content, { display: 'none', opacity: 0, y: 0 });
    }
  }, { dependencies: [isExpanded], scope: columnRef });

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

  // Set default expanded column to Mission (1) for all screen sizes
  useEffect(() => {
    setExpandedColumn(1);
  }, []);

  const handleExpand = (index) => {
    setExpandedColumn(expandedColumn === index ? null : index);
  };

  return(
    <section className="expandable-text-section">
      
      <div className="row m-0">
        <div className="col-12 p-0">
          <article className="expandable-section">
            <div className="expandable-columns-wrapper">
              
              <div className="fixed-column bg-white">
                <div className="fixed-column-inner">
                  <h2 className="text-fixed text-slate-900 eighties">made right</h2>
                  <p className="font-semibold text-xs text-slate-600 pb-4">
                    Design-First <span className='italic'>Technology</span> Studio
                  </p>
                  <div className='pb-4'>
                  <a
                    href="https://maderight.studio"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs tracking-wider  bg-amber-800  px-3 py-3 rounded  text-decoration-none text-white font-bold  hover:bg-teal-900 transition-colors duration-200"
                  >
                    View Our Studio 
                  </a>
                  </div>
                </div>
              </div>

              <ExpandableColumn
                title="Mission"
                index="1"
                isExpanded={expandedColumn === 1}
                onExpand={() => handleExpand(1)}
              >
                <div className="column-inner">
                  <h2 className="text-4xl text-slate-900">Our Mission</h2>

                  <p className="font-semibold text-md text-slate-900">
                    Made Right is a design-focused web development studio based in Columbia, South Carolina. We bring together creativity and technology to develop high-performing websites that showcase your brand and get found by the people who matter most to your business.
                  </p>




                </div>
              </ExpandableColumn>

              <ExpandableColumn
                title="About"
                index="2"
                isExpanded={expandedColumn === 2}
                onExpand={() => handleExpand(2)}
              >
                <div className="column-inner ">
                  <h2 className="text-4xl text-slate-900">About</h2>

                  <p className="font-semibold text-md text-slate-900">
                   Made Right Studio was started in April 2025 in Columbia, South Carolina by Alex Goode. After completing Promineo Tech's Front End Software Development Program and Thinkful's Full-Stack Software Engineering Immersion Program in 2023, combined with 4 years of graphic design experience, the goal was clear: build a design-first web development studio that helps small businesses stand out with fast, high-performing websites. We pride ourselves on combining design and development expertise with strategic SEO—using Next.js optimization, keyword analysis, metadata implementation, and other proven techniques to deliver sites that load faster, rank higher, and convert better.
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

                  <p className="font-semibold text-md text-slate-900">
                    We build with industry standard technologies that ensure your website is fast,
                    secure, and maintainable for years to come.
                  </p>

                  <div className="mt-4">
                    <h3 className="text-xs font-bold underline text-slate-900">DEVELOPMENT</h3>
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
                    <h3 className="text-xs font-bold underline text-slate-900">OPTIMIZATION</h3>
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

                  <p className="font-semibold text-md text-slate-900">
                    Every project is based on your specific needs and goals.
                  </p>

                  <div className="mt-4">
                    <h3 className="text-xs font-bold underline text-slate-900">STANDARD DELIVERABLES</h3>
                    <ul className="service-list mt-3">
                      <li className="text-base text-slate-900">Custom Website Design/ Development</li>
                      <li className="text-base text-slate-900">Responsive Development (Mobile, Tablet, Desktop)</li>
                      <li className="text-base text-slate-900">Content Management System</li>
                      <li className="text-base text-slate-900">SEO Optimization & Setup</li>
                      <li className="text-base text-slate-900">Performance Testing & Analytics</li>
                      <li className="text-base text-slate-900">Training & Documentation</li>
                    </ul>
                  </div>

                  <div className="mt-4">
                    <h3 className="text-xs font-bold underline text-slate-900">OPTIONAL ADDITIONS</h3>
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

                  <p className="font-semibold text-md text-slate-900">
                    Our process is designed to be collaborative and transparent. We work closely with you
                    at every stage to ensure the final product exceeds expectations.
                  </p>

                  <div className="mt-4">
                    <h3 className="text-xs font-bold underline text-slate-900">OUR APPROACH</h3>
                    <ul className="service-list mt-3">
                      <li className="text-base text-slate-900"><span className='font-bold'>Discovery & Research</span> — Understanding your brand, audience, and goals</li>
                      <li className="text-base text-slate-900"><span className='font-bold'>Strategy & Planning</span> — Defining project scope, timeline, and deliverables</li>
                      <li className="text-base text-slate-900"><span className='font-bold'>Design & Prototyping</span> — Creating visual concepts and gathering feedback</li>
                      <li className="text-base text-slate-900"><span className='font-bold'>Development & Testing</span> — Building and optimizing your website</li>
                      <li className="text-base text-slate-900"><span className='font-bold'>Launch & Training</span> — Deploying your site and training your team</li>
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

                  <p className="font-semibold text-md text-slate-900">
                    We build modular design systems that give your brand consistency.
                    
                  </p>

                  <p className="font-semibold text-md text-slate-900">
                    A design system is a living collection of
                    reusable components, patterns, and guidelines that ensure your brand feels
                    cohesive whether someone encounters it on your website, social media, or
                    printed materials.
                  </p>

                  <div className="mt-4">
                    <h3 className="text-xs font-bold underline text-slate-900">WHAT'S INCLUDED</h3>
                    <ul className="service-list mt-3">
                      <li className="text-base text-slate-900">Typography & Color Palettes</li>
                      <li className="text-base text-slate-900">Reusable Component Library</li>
                      <li className="text-base text-slate-900">Spacing & Layout Guidelines</li>
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

                  <p className="font-semibold text-md text-slate-900">
                    We believe great design should deliver tangible outcomes. Every project
                    we undertake is measured not just by aesthetics, but by how well it serves
                    your business goals.
                  </p>

                  <div className="mt-4">
                    <h3 className="text-xs font-bold underline text-slate-900">WHAT SUCCESS LOOKS LIKE</h3>
                    <ul className="service-list mt-3">
                      <li className="text-base text-slate-900"><span className='font-bold'>Faster Page Load Times</span> — Better user experience and search rankings</li>
                      <li className="text-base text-slate-900"><span className='font-bold'>Improved Search Visibility</span> — Higher rankings for relevant keywords</li>
                      <li className="text-base text-slate-900"><span className='font-bold'>Increased Engagement</span> — More time spent on site, lower bounce rates</li>
                      <li className="text-base text-slate-900"><span className='font-bold'>Higher Conversion Rates</span> — More inquiries, signups, or sales</li>
                      <li className="text-base text-slate-900"><span className='font-bold'>Accessibility Compliance</span> — Reaching a wider audience inclusively</li>
                      <li className="text-base text-slate-900"><span className='font-bold'>Brand Consistency</span> — Cohesive presence across all digital channels</li>
                    </ul>
                  </div>

                  <div className="mt-5">
                    <p className="font-semibold text-md text-slate-900">
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