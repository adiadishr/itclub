'use client'

import { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { useRouter } from 'next/navigation';
import { ArrowLeft } from 'lucide-react';

export default function CBlockPage() {
    const firstFloorRef = useRef(null);
    const secondFloorRef = useRef(null);
    const router = useRouter();

    useEffect(() => {
        const drawFirstFloor = () => {
            const canvas = firstFloorRef.current;
            if (!canvas) return;

            const ctx = canvas.getContext('2d');
            canvas.width = 800;
            canvas.height = 400;

            // Set drawing styles
            ctx.strokeStyle = '#000';
            ctx.setLineDash([5, 5]);
            ctx.lineWidth = 2;
            ctx.font = '14px Inter, sans-serif';
            ctx.textAlign = 'center';

            // Draw First Floor Title
            ctx.beginPath();
            ctx.rect(50, 50, 150, 50);
            ctx.stroke();
            ctx.fillStyle = '#f4f4f4';
            ctx.fill();
            ctx.fillStyle = '#000';
            ctx.fillText('1st Floor', 125, 80);

            // Draw PUBG Room
            ctx.beginPath();
            ctx.rect(50, 120, 500, 200);
            ctx.stroke();
            ctx.fillStyle = '#f4f4f4';
            ctx.fill();
            ctx.fillStyle = '#000';
            ctx.fillText('PUBG Room', 300, 220);

            // Draw Stairs
            ctx.beginPath();
            ctx.rect(600, 120, 150, 200);
            ctx.stroke();
            ctx.fillStyle = '#f4f4f4';
            ctx.fill();
            ctx.fillStyle = '#000';
            ctx.fillText('Stairs', 675, 220);
        };

        const drawSecondFloor = () => {
            const canvas = secondFloorRef.current;
            if (!canvas) return;

            const ctx = canvas.getContext('2d');
            canvas.width = 800;
            canvas.height = 400;

            // Set drawing styles
            ctx.strokeStyle = '#000';
            ctx.setLineDash([5, 5]);
            ctx.lineWidth = 2;
            ctx.font = '14px Inter, sans-serif';
            ctx.textAlign = 'center';

            // Draw Second Floor Title
            ctx.beginPath();
            ctx.rect(50, 50, 150, 50);
            ctx.stroke();
            ctx.fillStyle = '#f4f4f4';
            ctx.fill();
            ctx.fillStyle = '#000';
            ctx.fillText('2nd Floor', 125, 80);

            // Draw PUBG Room
            ctx.beginPath();
            ctx.rect(50, 120, 500, 200);
            ctx.stroke();
            ctx.fillStyle = '#f4f4f4';
            ctx.fill();
            ctx.fillStyle = '#000';
            ctx.fillText('PUBG Room', 300, 220);

            // Draw Stairs
            ctx.beginPath();
            ctx.rect(600, 120, 150, 200);
            ctx.stroke();
            ctx.fillStyle = '#f4f4f4';
            ctx.fill();
            ctx.fillStyle = '#000';
            ctx.fillText('Stairs', 675, 220);
        };

        drawFirstFloor();
        drawSecondFloor();
    }, []);

    return (
        <div className="min-h-screen bg-white">
            <div className="max-w-7xl mx-auto px-4 py-8">
                <div className="mb-8">
                    <button
                        onClick={() => router.push('/')}
                        className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-gray-700 bg-gray-100 hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500 transition-colors"
                    >
                        <ArrowLeft className="w-4 h-4 mr-2" />
                        Back to Home
                    </button>
                </div>

                <div className="space-y-12">
                    <div>
                        <h2 className="text-2xl font-semibold text-gray-900 mb-6">First Floor</h2>
                        <motion.canvas
                            ref={firstFloorRef}
                            className="w-full border border-gray-200 rounded-lg shadow-sm"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5 }}
                        />
                    </div>

                    <div>
                        <h2 className="text-2xl font-semibold text-gray-900 mb-6">Second Floor</h2>
                        <motion.canvas
                            ref={secondFloorRef}
                            className="w-full border border-gray-200 rounded-lg shadow-sm"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.2 }}
                        />
                    </div>
                </div>
            </div>
        </div>
    );
}

