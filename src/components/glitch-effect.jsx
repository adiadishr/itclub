'use client'

import { motion } from 'framer-motion'

export function GlitchEffect() {
    return (
        <motion.div
            className="absolute inset-0 bg-black"
            initial={{ opacity: 0 }}
            animate={{ opacity: [0, 1, 0, 1, 0, 1, 0] }}
            transition={{ duration: 1, times: [0, 0.2, 0.3, 0.5, 0.6, 0.8, 1] }}
        />
    )
}

