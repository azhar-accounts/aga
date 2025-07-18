import { useRef } from "react";
import { motion } from "motion/react";
import DottedMap from "dotted-map";


export function WorldMap({
    dots = [
        {
            start: { lat: -40.9006, lng: 174.8860 }, // New Zealand
            end: { lat: 20.5937, lng: 78.9629 },     // India
        },
        {
            start: { lat: 37.7749, lng: -122.4194 }, // USA
            end: { lat: 20.5937, lng: 78.9629 },     // India
        },
        {
            start: { lat: 51.5074, lng: -0.1278 },   // UK
            end: { lat: 20.5937, lng: 78.9629 },     // India
        },
        {
            start: { lat: -25.2744, lng: 133.7751 }, // Australia
            end: { lat: 20.5937, lng: 78.9629 },     // India
        },
        {
            start: { lat: 52.52, lng: 13.405 },      // Germany
            end: { lat: 20.5937, lng: 78.9629 },     // India
        },
    ],
    lineColor = "#0ea5e9"
}) {
    const svgRef = useRef(null);
    const map = new DottedMap({ height: 100, grid: "diagonal" });


    const svgMap = map.getSVG({
        radius: 0.22,
        color: "#00000040",
        shape: "circle",
        backgroundColor: "0c598d",
    });

    const projectPoint = (lat, lng) => {
        const x = (lng + 180) * (800 / 360);
        const y = (90 - lat) * (400 / 180);
        return { x, y };
    };

    const createCurvedPath = (
        start,
        end
    ) => {
        const midX = (start.x + end.x) / 2;
        const midY = Math.min(start.y, end.y) - 50;
        return `M ${start.x} ${start.y} Q ${midX} ${midY} ${end.x} ${end.y}`;
    };

    return (
        <div
            className="w-full hidden lg:block aspect-[2/1] bg-primary rounded-lg  relative font-sans">
            <img
                src={`data:image/svg+xml;utf8,${encodeURIComponent(svgMap)}`}
                className="h-full w-full  pointer-events-none select-none"
                alt="world map"
                height="495"
                width="1056"
                draggable={false} />
            <svg
                ref={svgRef}
                viewBox="0 0 800 400"
                className="w-full h-full absolute inset-0 pointer-events-none select-none">
                {dots.map((dot, i) => {
                    const startPoint = projectPoint(dot.start.lat, dot.start.lng);
                    const endPoint = projectPoint(dot.end.lat, dot.end.lng);
                    return (
                        <g key={`path-group-${i}`}>
                            <motion.path
                                d={createCurvedPath(startPoint, endPoint)}
                                fill="none"
                                stroke="url(#path-gradient)"
                                strokeWidth="1"
                                initial={{
                                    pathLength: 0,
                                }}
                                animate={{
                                    pathLength: 1,
                                }}
                                transition={{
                                    duration: 1,
                                    delay: 0.5 * i,
                                    ease: "easeOut",
                                }}
                                key={`start-upper-${i}`}></motion.path>
                        </g>
                    );
                })}

                <defs>
                    <linearGradient id="path-gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                        <stop offset="0%" stopColor="white" stopOpacity="0" />
                        <stop offset="5%" stopColor={lineColor} stopOpacity="1" />
                        <stop offset="95%" stopColor={lineColor} stopOpacity="1" />
                        <stop offset="100%" stopColor="white" stopOpacity="0" />
                    </linearGradient>
                </defs>

                {dots.map((dot, i) => (
                    <g key={`points-group-${i}`}>
                        <g key={`start-${i}`}>
                            <circle
                                cx={projectPoint(dot.start.lat, dot.start.lng).x}
                                cy={projectPoint(dot.start.lat, dot.start.lng).y}
                                r="2"
                                fill={lineColor} />
                            <circle
                                cx={projectPoint(dot.start.lat, dot.start.lng).x}
                                cy={projectPoint(dot.start.lat, dot.start.lng).y}
                                r="2"
                                fill={lineColor}
                                opacity="0.5">
                                <animate
                                    attributeName="r"
                                    from="2"
                                    to="8"
                                    dur="1.5s"
                                    begin="0s"
                                    repeatCount="indefinite" />
                                <animate
                                    attributeName="opacity"
                                    from="0.5"
                                    to="0"
                                    dur="1.5s"
                                    begin="0s"
                                    repeatCount="indefinite" />
                            </circle>
                        </g>
                        <g key={`end-${i}`}>
                            <circle
                                cx={projectPoint(dot.end.lat, dot.end.lng).x}
                                cy={projectPoint(dot.end.lat, dot.end.lng).y}
                                r="2"
                                fill={lineColor} />
                            <circle
                                cx={projectPoint(dot.end.lat, dot.end.lng).x}
                                cy={projectPoint(dot.end.lat, dot.end.lng).y}
                                r="2"
                                fill={lineColor}
                                opacity="0.5">
                                <animate
                                    attributeName="r"
                                    from="2"
                                    to="8"
                                    dur="1.5s"
                                    begin="0s"
                                    repeatCount="indefinite" />
                                <animate
                                    attributeName="opacity"
                                    from="0.5"
                                    to="0"
                                    dur="1.5s"
                                    begin="0s"
                                    repeatCount="indefinite" />
                            </circle>
                        </g>
                    </g>
                ))}
            </svg>
        </div>
    );
}
