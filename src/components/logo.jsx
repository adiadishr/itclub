'use client'
import React, { useRef } from 'react'
import Image from 'next/image'
import { useScroll, useTransform, motion } from 'framer-motion';

export default function Logo() {
    const container = useRef();
    const { scrollYProgress } = useScroll({
        target: container,
        offset: ['start start', 'end start']
    })

    // Transform scroll progress to background movement
    const backgroundY = useTransform(scrollYProgress, [0, 1], ["0%", "50%"])

    // Transform scroll progress to opacity/darkness
    const opacity = useTransform(scrollYProgress, [0, 1], [0, 0.7])

    return (
        <div ref={container} className='relative h-screen overflow-hidden'>
            <motion.div
                style={{
                    y: backgroundY,
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    width: '100%',
                    height: '100%',
                }}
            >
                <div className='absolute inset-0 z-10 flex items-center justify-center'>
                    <Image
                        src="/logo.png"
                        width={1080}
                        height={640}
                        alt="Logo"
                        className='z-20 relative max-w-full max-h-full object-contain'
                    />
                </div>
                {/* Overlay div to create darkening effect */}
                <motion.div
                    style={{
                        position: 'absolute',
                        top: 0,
                        left: 0,
                        width: '100%',
                        height: '100%',
                        backgroundColor: 'black',
                        opacity
                    }}
                />
            </motion.div>
        </div>
    )
}