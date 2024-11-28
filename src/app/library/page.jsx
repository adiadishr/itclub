'use client'

import { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { useRouter } from 'next/navigation';
import { ArrowLeft } from 'lucide-react';

export default function LibraryPage() {
    const firstFloorRef = useRef(null);
    const secondFloorRef = useRef(null);
    const router = useRouter();

    useEffect(() => {
        const drawFirstFloor = () => {
            const canvas = firstFloorRef.current;
            if (!canvas) return;

            const ctx = canvas.getContext('2d');
            canvas.width = 800;
            canvas.height = 600;

            // Set drawing styles
            ctx.strokeStyle = '#000';
            ctx.setLineDash([5, 5]);
            ctx.lineWidth = 2;
            ctx.font = '14px Inter, sans-serif';
            ctx.textAlign = 'center';

            // Draw stairs
            ctx.beginPath();
            ctx.rect(50, 100, 100, 200);
            ctx.stroke();
            ctx.fillStyle = '#f4f4f4';
            ctx.fill();
            ctx.fillStyle = '#000';
            ctx.fillText('Stairs', 100, 200);

            // Draw Sleeping Area Girls
            ctx.beginPath();
            ctx.rect(200, 50, 300, 150);
            ctx.stroke();
            ctx.fillStyle = '#f4f4f4';
            ctx.fill();
            ctx.fillStyle = '#000';
            ctx.fillText('Sleeping Area Girls', 350, 125);

            // Draw Washroom
            ctx.beginPath();
            ctx.rect(520, 50, 100, 100);
            ctx.stroke();
            ctx.fillStyle = '#f4f4f4';
            ctx.fill();
            ctx.fillStyle = '#000';
            ctx.fillText('Washroom', 570, 100);

            // Draw Server Room
            ctx.beginPath();
            ctx.rect(640, 50, 120, 150);
            ctx.stroke();
            ctx.fillStyle = '#f4f4f4';
            ctx.fill();
            ctx.fillStyle = '#000';
            ctx.fillText('Server Room', 700, 125);

            // Draw middle Sleeping Area
            ctx.beginPath();
            ctx.rect(200, 220, 300, 100);
            ctx.stroke();
            ctx.fillStyle = '#f4f4f4';
            ctx.fill();
            ctx.fillStyle = '#000';
            ctx.fillText('Sleeping Area', 350, 270);

            // Draw Library and bottom Sleeping Area
            ctx.beginPath();
            ctx.rect(200, 340, 200, 150);
            ctx.stroke();
            ctx.fillStyle = '#f4f4f4';
            ctx.fill();
            ctx.fillStyle = '#000';
            ctx.fillText('Library', 300, 415);

            ctx.beginPath();
            ctx.rect(420, 340, 150, 150);
            ctx.stroke();
            ctx.fillStyle = '#f4f4f4';
            ctx.fill();
            ctx.fillStyle = '#000';
            ctx.fillText('Sleeping Area', 495, 415);

            // Draw Stationary
            ctx.beginPath();
            ctx.rect(50, 340, 130, 150);
            ctx.stroke();
            ctx.fillStyle = '#f4f4f4';
            ctx.fill();
            ctx.fillStyle = '#000';
            ctx.fillText('Stationary', 115, 415);
        };

        const drawSecondFloor = () => {
            const canvas = secondFloorRef.current;
            if (!canvas) return;

            const ctx = canvas.getContext('2d');
            canvas.width = 800;
            canvas.height = 600;

            // Set drawing styles
            ctx.strokeStyle = '#000';
            ctx.setLineDash([5, 5]);
            ctx.lineWidth = 2;
            ctx.font = '14px Inter, sans-serif';
            ctx.textAlign = 'center';

            // Draw stairs (continuing from first floor)
            ctx.beginPath();
            ctx.rect(50, 100, 100, 200);
            ctx.stroke();
            ctx.fillStyle = '#f4f4f4';
            ctx.fill();
            ctx.fillStyle = '#000';
            ctx.fillText('Stairs', 100, 200);

            // Draw Recreation Room
            ctx.beginPath();
            ctx.rect(200, 50, 300, 200);
            ctx.stroke();
            ctx.fillStyle = '#f4f4f4';
            ctx.fill();
            ctx.fillStyle = '#000';
            ctx.fillText('Recreation Room', 350, 150);

            // Draw Six Sigma/Hackathon Room
            ctx.beginPath();
            ctx.rect(520, 50, 240, 200);
            ctx.stroke();
            ctx.fillStyle = '#f4f4f4';
            ctx.fill();
            ctx.fillStyle = '#000';
            ctx.fillText('Six Sigma Main', 640, 120);
            ctx.fillText('Hackathon Room', 640, 140);

            // Draw bottom row
            ctx.beginPath();
            ctx.rect(50, 340, 150, 150);
            ctx.stroke();
            ctx.fillStyle = '#f4f4f4';
            ctx.fill();
            ctx.fillStyle = '#000';
            ctx.fillText('Washroom', 125, 415);

            ctx.beginPath();
            ctx.rect(220, 340, 300, 150);
            ctx.stroke();
            ctx.fillStyle = '#f4f4f4';
            ctx.fill();
            ctx.fillStyle = '#000';
            ctx.fillText('Upper Library', 370, 415);

            ctx.beginPath();
            ctx.rect(540, 340, 150, 150);
            ctx.stroke();
            ctx.fillStyle = '#f4f4f4';
            ctx.fill();
            ctx.fillStyle = '#000';
            ctx.fillText('Storeroom', 615, 415);
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

