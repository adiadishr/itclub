'use client'

import { motion } from 'framer-motion'

export function Description({ title }) {
    return (
        <motion.div
            className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-90 p-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
        >
            <div className="max-w-2xl text-center text-white">
                <h2 className="mb-4 text-3xl font-bold">{title}</h2>
                <p className="text-lg">
                    This is a placeholder description for {title}. Replace this text with the actual description or content you
                    want to display for each section.
                </p>
            </div>
        </motion.div>
    )
}

