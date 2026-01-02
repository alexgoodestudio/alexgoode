import { useRef, useEffect } from 'react';
import { gsap } from 'gsap';

function Banner(){
    const marqueeRef = useRef(null);

    useEffect(() => {
        if (marqueeRef.current) {
            const marqueeContent = marqueeRef.current.querySelector('.marquee-content');
            const singleText = marqueeRef.current.querySelector('.marquee-text');
            const containerWidth = marqueeRef.current.offsetWidth;
            const singleTextWidth = singleText.offsetWidth;

            // Calculate how many copies we need to fill screen + have seamless loop
            const copiesNeeded = Math.ceil(containerWidth / singleTextWidth) + 3;

            // Clone the text multiple times
            const fragment = document.createDocumentFragment();
            for (let i = 0; i < copiesNeeded; i++) {
                const clone = singleText.cloneNode(true);
                fragment.appendChild(clone);
            }
            marqueeContent.innerHTML = '';
            marqueeContent.appendChild(fragment);

            // Start position: Begin from 0
            gsap.set(marqueeContent, { x: 0 });

            // Animate continuously to the LEFT (so text enters from right)
            gsap.to(marqueeContent, {
                x: -singleTextWidth,
                duration: 20,
                ease: 'none',
                repeat: -1,
                modifiers: {
                    x: function(x) {
                        return parseFloat(x) % -singleTextWidth + 'px';
                    }
                }
            });
        }
    }, []);

    return(
        <div className="bg-slate-100 py-3 overflow-hidden" ref={marqueeRef}>
            <div className="marquee-content d-flex" style={{ whiteSpace: 'nowrap', willChange: 'transform' }}>
                <h6 className="marquee-text bold text-xs m-0 d-inline-block">
                    Full-Stack Web Developer<span className="mx-3 text-gray-400 ">•</span>Front-End Engineer<span className="mx-3 text-gray-400 ">•</span>Web Designer<span className="mx-3 text-gray-400 ">•</span>
                </h6>
            </div>
        </div>
    )
}

export default Banner;