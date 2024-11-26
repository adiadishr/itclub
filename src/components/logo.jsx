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
    const y = useTransform(scrollYProgress, [0, 1], ["0vh", "150vh"])
    return (
        <div className='h-screen overflow-hidden'>
            <motion.div style={{ y }} className='relative min-h-screen flex items-center justify-center'>
                <Image src="/logo.png" width={1080} height={640} alt="image" style={{ objectFit: "cover" }} />
            </motion.div>
        </div>
    )
}