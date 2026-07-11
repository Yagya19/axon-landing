import React, { useMemo } from "react";

/**
 * DashboardBackground
 * ---------------------------------------------------------------
 * Full-bleed, fixed, hand-coded dotted world map for the FARWATCH
 * dashboard. No external map assets, no built-in color gradients —
 * just a monochrome dot field shaped like continents at low opacity,
 * sitting behind the dashboard content.
 *
 * Drop this in once, mount it at the top of your dashboard layout,
 * and make the dashboard's own root background transparent (see
 * bottom of this file for the one-line change).
 * ---------------------------------------------------------------
 */

// Simplified, hand-coded continent outlines (lon/lat degrees).
// These are deliberately rough — the goal is a map that's "felt, not
// seen," not cartographic accuracy.
const CONTINENTS = [
  // North America
  [
    [-160, 70], [-140, 72], [-100, 75], [-80, 72], [-60, 60], [-55, 50],
    [-65, 45], [-75, 35], [-80, 25], [-97, 18], [-105, 20], [-115, 30],
    [-125, 40], [-130, 50], [-140, 55], [-150, 60], [-160, 65],
  ],
  // South America
  [
    [-80, 10], [-70, 10], [-60, 5], [-50, 0], [-35, -5], [-35, -15],
    [-40, -25], [-55, -35], [-65, -40], [-70, -45], [-73, -50], [-70, -55],
    [-65, -50], [-60, -40], [-58, -30], [-60, -20], [-65, -10], [-75, 0],
    [-80, 5],
  ],
  // Europe
  [
    [-10, 60], [0, 62], [20, 65], [30, 60], [40, 55], [35, 48], [20, 45],
    [10, 45], [0, 43], [-5, 45], [-10, 50],
  ],
  // Africa
  [
    [-15, 35], [0, 37], [10, 33], [20, 32], [35, 30], [40, 15], [50, 10],
    [45, 0], [40, -10], [35, -25], [25, -34], [18, -34], [12, -18],
    [10, -5], [0, 5], [-10, 10], [-17, 15], [-15, 25],
  ],
  // Asia
  [
    [40, 55], [60, 60], [90, 70], [130, 72], [150, 65], [160, 60],
    [170, 65], [180, 68], [180, 50], [150, 45], [140, 40], [130, 35],
    [122, 30], [110, 20], [105, 10], [100, 5], [95, 15], [90, 22],
    [80, 10], [75, 15], [70, 25], [60, 25], [55, 30], [45, 35], [35, 40],
    [30, 45], [40, 50],
  ],
  // Australia
  [
    [113, -22], [120, -18], [130, -12], [140, -11], [145, -15],
    [150, -25], [145, -38], [138, -35], [130, -32], [120, -34], [113, -30],
  ],
];

const VIEW_W = 1000;
const VIEW_H = 500;
const GRID_SPACING = 9; // density of the dot field, in viewBox units
const DOT_RADIUS = 1.1;
const DOT_OPACITY = 0.12;

function lonLatToXY([lon, lat]) {
  const x = ((lon + 180) / 360) * VIEW_W;
  const y = ((90 - lat) / 180) * VIEW_H;
  return [x, y];
}

// Ray-casting point-in-polygon test.
function pointInPolygon(x, y, poly) {
  let inside = false;
  for (let i = 0, j = poly.length - 1; i < poly.length; j = i++) {
    const [xi, yi] = poly[i];
    const [xj, yj] = poly[j];
    const intersect =
      yi > y !== yj > y && x < ((xj - xi) * (y - yi)) / (yj - yi) + xi;
    if (intersect) inside = !inside;
  }
  return inside;
}

const POLYGONS = CONTINENTS.map((poly) => poly.map(lonLatToXY));

export default function DashboardBackground() {
  const dots = useMemo(() => {
    const pts = [];
    for (let y = 0; y <= VIEW_H; y += GRID_SPACING) {
      for (let x = 0; x <= VIEW_W; x += GRID_SPACING) {
        for (const poly of POLYGONS) {
          if (pointInPolygon(x, y, poly)) {
            pts.push([x, y]);
            break;
          }
        }
      }
    }
    return pts;
  }, []);

  return (
    <div
      aria-hidden="true"
      style={{
        position: "fixed",
        inset: 0,
        top: 0,
        left: 0,
        width: "100vw",
        height: "100vh",
        background: "#080808",
        zIndex: -1,
        overflow: "hidden",
        pointerEvents: "none",
      }}
    >
      <svg
        viewBox={`0 0 ${VIEW_W} ${VIEW_H}`}
        preserveAspectRatio="xMidYMid slice"
        style={{ width: "100%", height: "100%", display: "block" }}
      >
        <rect x="0" y="0" width={VIEW_W} height={VIEW_H} fill="#080808" />
        {dots.map(([x, y], i) => (
          <circle
            key={i}
            cx={x}
            cy={y}
            r={DOT_RADIUS}
            fill="#ffffff"
            opacity={DOT_OPACITY}
          />
        ))}
        {/*
          Phase 2: real competitor-signal glow accents get rendered
          here as extra <circle>/<radialGradient> elements at actual
          lat/lon coordinates, using the same lonLatToXY() projection.
          Colors: burnt orange #E85D24, blue #378ADD, amber #D4A017.
          Left out for now per the "neutral ambient texture only" scope.
        */}
      </svg>
    </div>
  );
}

/**
 * INTEGRATION — the only two changes needed on your existing dashboard
 * ---------------------------------------------------------------
 * 1. Mount the background once, as a sibling before your existing
 *    dashboard content (position:fixed means DOM order doesn't affect
 *    layout, but keep it first for clean stacking):
 *
 *      import DashboardBackground from "./DashboardBackground";
 *
 *      export default function Dashboard() {
 *        return (
 *          <>
 *            <DashboardBackground />
 *            <div className="dashboard-root"> ... your existing JSX ... </div>
 *          </>
 *        );
 *      }
 *
 * 2. Make your existing dashboard root transparent so the new layer
 *    shows through — this is the one-line change. Find wherever your
 *    root container currently sets the dark background and swap it:
 *
 *      Before: <div className="min-h-screen bg-[#0a0a0a] ...">
 *      After:  <div className="min-h-screen bg-transparent ...">
 *
 *    (Or if it's inline style: background: "#0a0a0a" -> background: "transparent")
 *
 * Cards floating above the map need backdrop blur to read cleanly.
 * If you're on Tailwind, add to each card:
 *
 *      className="backdrop-blur-xl bg-black/40 border border-white/10"
 *
 * Plain CSS equivalent:
 *
 *      background: rgba(0, 0, 0, 0.4);
 *      backdrop-filter: blur(20px);
 *      -webkit-backdrop-filter: blur(20px);
 *      border: 1px solid rgba(255, 255, 255, 0.1);
 */
