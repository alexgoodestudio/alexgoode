'use client';
import { useRef } from 'react';
import { gsap } from 'gsap';
import { useGSAP } from '@gsap/react';

function CircleM() {
  const containerRef = useRef(null);
  const circlesRef = useRef([]);

  const viewBox = { width: 1600, height: 400 };
  const circleRadius = 8;

  // MADE - extended to match RIGHT positions count
  const madePositions = [
    // M - 25 circles (thick, substantial M with proper visual weight)
    // Left stem
    { x: 80, y: 80 }, { x: 80, y: 105 }, { x: 80, y: 130 }, { x: 80, y: 155 }, { x: 80, y: 180 },
    { x: 80, y: 205 }, { x: 80, y: 230 }, { x: 80, y: 255 }, { x: 80, y: 280 }, { x: 80, y: 305 },
    // Left diagonal
    { x: 105, y: 105 }, { x: 130, y: 130 }, { x: 155, y: 155 }, { x: 180, y: 180 },
    // Center valley
    { x: 205, y: 205 },
    // Right diagonal
    { x: 230, y: 180 }, { x: 255, y: 155 }, { x: 280, y: 130 }, { x: 305, y: 105 },
    // Right stem
    { x: 330, y: 80 }, { x: 330, y: 105 }, { x: 330, y: 130 }, { x: 330, y: 155 }, { x: 330, y: 180 },
    { x: 330, y: 230 }, { x: 330, y: 280 },

    // A - 24 circles (strong triangular A with crossbar)
    // Left diagonal
    { x: 430, y: 305 }, { x: 445, y: 270 }, { x: 460, y: 235 }, { x: 475, y: 200 },
    { x: 490, y: 165 }, { x: 505, y: 130 }, { x: 520, y: 95 }, { x: 535, y: 80 },
    // Apex
    { x: 550, y: 80 },
    // Right diagonal
    { x: 565, y: 95 }, { x: 580, y: 130 }, { x: 595, y: 165 }, { x: 610, y: 200 },
    { x: 625, y: 235 }, { x: 640, y: 270 }, { x: 655, y: 305 },
    // Crossbar (8 circles for substantial weight)
    { x: 490, y: 215 }, { x: 510, y: 215 }, { x: 530, y: 215 }, { x: 550, y: 215 },
    { x: 570, y: 215 }, { x: 590, y: 215 }, { x: 610, y: 215 }, { x: 630, y: 215 },

    // D - 24 circles (circular bowl with vertical stem)
    // Vertical stem (left side)
    { x: 750, y: 80 }, { x: 750, y: 105 }, { x: 750, y: 130 }, { x: 750, y: 155 }, { x: 750, y: 180 },
    { x: 750, y: 205 }, { x: 750, y: 230 }, { x: 750, y: 255 }, { x: 750, y: 280 }, { x: 750, y: 305 },
    // Top curve
    { x: 785, y: 80 }, { x: 820, y: 80 }, { x: 855, y: 95 }, { x: 880, y: 125 },
    // Right curve
    { x: 895, y: 160 }, { x: 895, y: 195 }, { x: 895, y: 230 },
    // Bottom curve
    { x: 880, y: 265 }, { x: 855, y: 295 }, { x: 820, y: 305 }, { x: 785, y: 305 },
    // Inner reinforcement
    { x: 820, y: 155 }, { x: 855, y: 195 }, { x: 820, y: 235 },

    // E - 24 circles (strong vertical with three bars)
    // Vertical stem
    { x: 990, y: 80 }, { x: 990, y: 105 }, { x: 990, y: 130 }, { x: 990, y: 155 }, { x: 990, y: 180 },
    { x: 990, y: 205 }, { x: 990, y: 230 }, { x: 990, y: 255 }, { x: 990, y: 280 }, { x: 990, y: 305 },
    // Top bar
    { x: 1020, y: 80 }, { x: 1050, y: 80 }, { x: 1080, y: 80 }, { x: 1110, y: 80 }, { x: 1140, y: 80 },
    // Middle bar
    { x: 1020, y: 195 }, { x: 1050, y: 195 }, { x: 1080, y: 195 }, { x: 1110, y: 195 },
    // Bottom bar
    { x: 1020, y: 305 }, { x: 1050, y: 305 }, { x: 1080, y: 305 }, { x: 1110, y: 305 }, { x: 1140, y: 305 },
  ];

  // Extra positions: filler points to match the number of coordinates in `rightPositions`.
  // These are placed to the right of the main word and can be refined visually later.
  const madeExtra = [
    // Exclamation mark: 16-point vertical stem + 5-point dot (total 21 points)
    // Stem (centered at x = 1420)
    { x: 1420, y: 140 }, { x: 1420, y: 148 }, { x: 1420, y: 156 }, { x: 1420, y: 164 },
    { x: 1420, y: 172 }, { x: 1420, y: 180 }, { x: 1420, y: 188 }, { x: 1420, y: 196 },
    { x: 1420, y: 204 }, { x: 1420, y: 212 }, { x: 1420, y: 220 }, { x: 1420, y: 228 },
    { x: 1420, y: 236 }, { x: 1420, y: 244 }, { x: 1420, y: 252 }, { x: 1420, y: 260 },
    // Dot (5-point cluster centered below stem)
    { x: 1416, y: 292 }, { x: 1420, y: 296 }, { x: 1424, y: 292 }, { x: 1418, y: 300 }, { x: 1422, y: 300 }
  ];

  // Append extras so madePositions length matches rightPositions length
  madePositions.push(...madeExtra);
  // If rightPositions contains more points, append neutral off-canvas fillers
  // to keep arrays aligned for morphing without adding visible clutter.
  const madeExtra2 = [
    { x: 1570, y: 200 }, { x: 1576, y: 210 }, { x: 1582, y: 220 }, { x: 1588, y: 230 }, { x: 1594, y: 240 },
    { x: 1572, y: 205 }, { x: 1578, y: 215 }, { x: 1584, y: 225 }, { x: 1590, y: 235 }, { x: 1596, y: 245 },
    { x: 1574, y: 210 }, { x: 1580, y: 220 }, { x: 1586, y: 230 }, { x: 1592, y: 240 }, { x: 1598, y: 250 },
    { x: 1571, y: 215 }, { x: 1577, y: 225 }, { x: 1583, y: 235 }, { x: 1589, y: 245 }, { x: 1595, y: 255 },
    { x: 1599, y: 260 }
  ];
  madePositions.push(...madeExtra2);

  // RIGHT - 100 circles total (matching count for seamless morphing)
  const rightPositions = [
    // R - 28 circles (vertical stem, bowl, and diagonal leg)
    // Vertical stem
    { x: 80, y: 80 }, { x: 80, y: 105 }, { x: 80, y: 130 }, { x: 80, y: 155 }, { x: 80, y: 180 },
    { x: 80, y: 205 }, { x: 80, y: 230 }, { x: 80, y: 255 }, { x: 80, y: 280 }, { x: 80, y: 305 },
    // Top bar
    { x: 110, y: 80 }, { x: 140, y: 80 }, { x: 170, y: 80 },
    // Bowl curve
    { x: 200, y: 95 }, { x: 215, y: 120 }, { x: 215, y: 145 },
    // Middle bar
    { x: 200, y: 170 }, { x: 170, y: 180 }, { x: 140, y: 180 }, { x: 110, y: 180 },
    // Diagonal leg
    { x: 120, y: 210 }, { x: 140, y: 235 }, { x: 160, y: 260 }, { x: 180, y: 280 },
    { x: 200, y: 300 }, { x: 220, y: 315 }, { x: 240, y: 325 }, { x: 260, y: 330 },

    // I - 24 circles (serif I with top bar, stem, bottom bar)
    // Top bar
    { x: 330, y: 80 }, { x: 360, y: 80 }, { x: 390, y: 80 }, { x: 420, y: 80 }, { x: 450, y: 80 },
    { x: 480, y: 80 }, { x: 510, y: 80 },
    // Vertical stem
    { x: 405, y: 110 }, { x: 405, y: 140 }, { x: 405, y: 170 }, { x: 405, y: 200 },
    { x: 405, y: 230 }, { x: 405, y: 260 }, { x: 405, y: 290 },
    // Bottom bar
    { x: 330, y: 305 }, { x: 360, y: 305 }, { x: 390, y: 305 }, { x: 420, y: 305 }, { x: 450, y: 305 },
    { x: 480, y: 305 }, { x: 510, y: 305 },
    // Reinforcement circles
    { x: 375, y: 140 }, { x: 435, y: 140 }, { x: 375, y: 260 }, { x: 435, y: 260 },

    // G - 24 circles (C-shape with horizontal bar)
    // Top curve
    { x: 740, y: 80 }, { x: 710, y: 80 }, { x: 680, y: 85 }, { x: 655, y: 100 },
    // Left curve
    { x: 630, y: 125 }, { x: 620, y: 155 }, { x: 615, y: 185 }, { x: 615, y: 215 },
    { x: 615, y: 245 }, { x: 620, y: 275 },
    // Bottom curve
    { x: 630, y: 300 }, { x: 655, y: 315 }, { x: 680, y: 325 }, { x: 710, y: 330 }, { x: 740, y: 330 },
    // Right side
    { x: 770, y: 325 }, { x: 795, y: 315 }, { x: 815, y: 300 }, { x: 825, y: 280 },
    // Horizontal bar
    { x: 825, y: 250 }, { x: 825, y: 220 }, { x: 795, y: 220 }, { x: 765, y: 220 }, { x: 735, y: 220 },

    // H - 24 circles (two stems with crossbar)
    // Left stem
    { x: 920, y: 80 }, { x: 920, y: 110 }, { x: 920, y: 140 }, { x: 920, y: 170 }, { x: 920, y: 200 },
    { x: 920, y: 230 }, { x: 920, y: 260 }, { x: 920, y: 290 }, { x: 920, y: 305 },
    // Right stem
    { x: 1080, y: 80 }, { x: 1080, y: 110 }, { x: 1080, y: 140 }, { x: 1080, y: 170 }, { x: 1080, y: 200 },
    { x: 1080, y: 230 }, { x: 1080, y: 260 }, { x: 1080, y: 290 }, { x: 1080, y: 305 },
    // Crossbar (substantial weight)
    { x: 950, y: 195 }, { x: 980, y: 195 }, { x: 1010, y: 195 }, { x: 1040, y: 195 }, { x: 1070, y: 195 }, { x: 1000, y: 170 },

    // T - 24 circles (wide top bar with centered stem)
    // Top bar (wide, substantial)
    { x: 1180, y: 80 }, { x: 1215, y: 80 }, { x: 1250, y: 80 }, { x: 1285, y: 80 }, { x: 1320, y: 80 },
    { x: 1355, y: 80 }, { x: 1390, y: 80 }, { x: 1425, y: 80 }, { x: 1460, y: 80 }, { x: 1495, y: 80 },
    // Vertical stem (centered)
    { x: 1335, y: 110 }, { x: 1335, y: 140 }, { x: 1335, y: 170 }, { x: 1335, y: 200 },
    { x: 1335, y: 230 }, { x: 1335, y: 260 }, { x: 1335, y: 290 }, { x: 1335, y: 305 },
    // (Reinforcement removed to avoid extra dots at T sides)
  ];

  const madeColor = '#38BDF8';
  const rightColor = '#059669';

  useGSAP(() => {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) return;

    const circles = circlesRef.current.filter(Boolean);
    if (!circles.length) return;

    // Defensive: ensure we only animate as many circles as both position arrays provide
    const madeCount = madePositions.length;
    const rightCount = rightPositions.length;
    if (madeCount !== rightCount) {
      // eslint-disable-next-line no-console
      console.warn(`CircleM: madePositions length=${madeCount}, rightPositions length=${rightCount}. Using min length for animation.`);
    }
    const count = Math.min(madeCount, rightCount, circles.length);

    const tl = gsap.timeline({ repeat: -1 });

    // Set initial MADE positions (only for the first `count` circles)
    circles.forEach((circle, i) => {
      if (i < count) {
        gsap.set(circle, {
          attr: { cx: madePositions[i].x, cy: madePositions[i].y },
          fill: madeColor,
          opacity: 1
        });
      } else {
        // hide any extra circles (shouldn't normally happen)
        gsap.set(circle, { opacity: 0 });
      }
    });

    // Smooth, museum-quality morphing with proper Bauhaus timing
    tl.to({}, { duration: 3 })
      .to(circles, {
        attr: (i) => (i < count ? { cx: rightPositions[i].x, cy: rightPositions[i].y } : { cx: madePositions[i].x, cy: madePositions[i].y }),
        fill: rightColor,
        duration: 1.2,
        ease: 'power2.inOut',
        stagger: {
          amount: 0.3,
          from: 'start'
        }
      })
      .to({}, { duration: 3 })
      .to(circles, {
        attr: (i) => (i < count ? { cx: madePositions[i].x, cy: madePositions[i].y } : { cx: madePositions[i].x, cy: madePositions[i].y }),
        fill: madeColor,
        duration: 1.2,
        ease: 'power2.inOut',
        stagger: {
          amount: 0.3,
          from: 'start'
        }
      });

  }, { scope: containerRef });

  return (
    <div
      ref={containerRef}
      className="d-flex align-items-center justify-content-center"
      style={{
        width: '100%',
        height: '450px',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      <svg
        viewBox={`0 0 ${viewBox.width} ${viewBox.height}`}
        preserveAspectRatio="xMidYMid meet"
        style={{
          width: '100%',
          height: 'auto',
          maxWidth: '1600px',
        }}
      >
        {madePositions.map((pos, index) => (
          <circle
            key={index}
            ref={(el) => (circlesRef.current[index] = el)}
            cx={pos.x}
            cy={pos.y}
            r={circleRadius}
            fill={madeColor}
            style={{ willChange: 'transform' }}
          />
        ))}
      </svg>
    </div>
  );
}

export default CircleM;
