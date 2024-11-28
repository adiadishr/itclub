'use client'

import { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { useRouter } from 'next/navigation';
import { ArrowLeft } from 'lucide-react';

export default function BasketballPage() {
    const canvasRef = useRef(null);
    const router = useRouter();

    useEffect(() => {
        const canvas = canvasRef.current;
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

        // Draw Basketball Court
        ctx.beginPath();
        ctx.rect(50, 50, 700, 150);
        ctx.stroke();
        ctx.fillStyle = '#f4f4f4';
        ctx.fill();
        ctx.fillStyle = '#000';
        ctx.fillText('Basketball Court', 400, 125);

        // Draw Entrance to C-Block
        ctx.beginPath();
        ctx.rect(50, 100, 100, 50);
        ctx.stroke();
        ctx.fillStyle = '#f4f4f4';
        ctx.fill();
        ctx.fillStyle = '#000';
        ctx.fillText('Entrance to', 100, 125);
        ctx.fillText('C-Block', 100, 140);

        // Draw Stall Area
        ctx.beginPath();
        ctx.rect(50, 220, 700, 150);
        ctx.stroke();
        ctx.fillStyle = '#f4f4f4';
        ctx.fill();
        ctx.fillStyle = '#000';
        ctx.fillText('Stall Area', 400, 295);
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

                <div>
                    <h2 className="text-2xl font-semibold text-gray-900 mb-6">Basketball Court Area</h2>
                    <motion.canvas
                        ref={canvasRef}
                        className="w-full border border-gray-200 rounded-lg shadow-sm"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                    />
                </div>
            </div>
        </div>
    );
}
