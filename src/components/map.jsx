import React, { useRef, useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { useRouter } from 'next/navigation';

const CampusMap = () => {
    const canvasRef = useRef(null);
    const [hoveredBuilding, setHoveredBuilding] = useState(null);
    const router = useRouter();

    // Store building paths and data
    const buildings = useRef([]);

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;

        const ctx = canvas.getContext('2d');
        if (!ctx) return;

        // Set canvas size
        canvas.width = 800;
        canvas.height = 600;

        // Define buildings and their paths
        buildings.current = [
            {
                name: 'Main Building',
                path: new Path2D(),
                bounds: { x: 200, y: 50, width: 400, height: 80 }
            },
            {
                name: 'MBA',
                path: new Path2D(),
                bounds: { x: 50, y: 150, width: 100, height: 50 }
            },
            {
                name: 'Library Block',
                path: new Path2D(),
                bounds: { x: 50, y: 220, width: 200, height: 150 },
                interactive: true,
                route: '/library'
            },
            {
                name: 'Basketball Court',
                path: new Path2D(),
                bounds: { x: 50, y: 390, width: 200, height: 80 },
                interactive: true,
                route: '/basketball'
            },
            {
                name: 'C Block',
                path: new Path2D(),
                bounds: { x: 50, y: 490, width: 100, height: 80 },
                interactive: true,
                route: '/c-block'
            },
            {
                name: 'Stall Area',
                path: new Path2D(),
                bounds: { x: 300, y: 220, width: 150, height: 50 }
            },
            {
                name: 'Admin Building',
                path: new Path2D(),
                bounds: { x: 300, y: 350, width: 150, height: 80 }
            },
            {
                name: 'Canteen',
                path: new Path2D(),
                bounds: { x: 470, y: 350, width: 150, height: 80 }
            },
            {
                name: 'Gate',
                path: new Path2D(),
                bounds: { x: 600, y: 220, width: 50, height: 50 }
            }
        ];

        // Define building paths
        const defineBuildings = () => {
            buildings.current.forEach(building => {
                const { x, y, width, height } = building.bounds;
                building.path.rect(x, y, width, height);
            });
        };

        // Draw function
        const draw = () => {
            ctx.clearRect(0, 0, canvas.width, canvas.height);

            buildings.current.forEach(building => {
                ctx.save();

                // Set styles based on building state
                ctx.strokeStyle = '#000';
                ctx.setLineDash([5, 5]);
                ctx.lineWidth = 2;

                if (building.interactive) {
                    ctx.fillStyle = hoveredBuilding === building.name ? 'rgba(100, 149, 237, 0.3)' : 'rgba(200, 200, 200, 0.1)';
                } else {
                    ctx.fillStyle = 'rgba(200, 200, 200, 0.1)';
                }

                // Draw building
                ctx.stroke(building.path);
                ctx.fill(building.path);

                // Add labels
                ctx.setLineDash([]);
                ctx.fillStyle = '#000';
                ctx.font = '14px Arial';
                ctx.textAlign = 'center';

                // Use building bounds for label positioning
                const { x, y, width, height } = building.bounds;
                ctx.fillText(
                    building.name,
                    x + width / 2,
                    y + height / 2
                );

                ctx.restore();
            });
        };

        // Initialize buildings and draw
        defineBuildings();
        draw();

        // Handle mouse move
        const handleMouseMove = (e) => {
            const rect = canvas.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;

            let isHovering = false;

            buildings.current.forEach(building => {
                if (ctx.isPointInPath(building.path, x, y)) {
                    if (building.interactive) {
                        setHoveredBuilding(building.name);
                        canvas.style.cursor = 'pointer';
                        isHovering = true;
                    }
                }
            });

            if (!isHovering) {
                setHoveredBuilding(null);
                canvas.style.cursor = 'default';
            }

            draw();
        };

        // Handle click
        const handleClick = (e) => {
            const rect = canvas.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;

            buildings.current.forEach(building => {
                if (ctx.isPointInPath(building.path, x, y) && building.interactive && building.route) {
                    router.push(building.route);
                }
            });
        };

        canvas.addEventListener('mousemove', handleMouseMove);
        canvas.addEventListener('click', handleClick);

        return () => {
            canvas.removeEventListener('mousemove', handleMouseMove);
            canvas.removeEventListener('click', handleClick);
        };
    }, [router]);

    return (
        <div className="relative w-full h-full min-h-screen flex items-center justify-center">
            <motion.canvas
                ref={canvasRef}
                className="border border-gray-200 rounded-lg shadow-lg"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
            />
            {hoveredBuilding && (
                <motion.div
                    className="absolute top-4 left-4 bg-white p-4 rounded-lg shadow-lg"
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                >
                    <p className="text-lg font-semibold">{hoveredBuilding}</p>
                    <p className="text-sm text-gray-600">Click to view details</p>
                </motion.div>
            )}
        </div>
    );
};

export default CampusMap;

