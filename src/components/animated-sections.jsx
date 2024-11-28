'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Image from 'next/image'
import { GlitchEffect } from './glitch-effect'
import { Description } from './description'

const sections = [
    { title: 'PubG', image: '/images/1.png' },
    { title: 'Stumble Guys', image: '/images/2.png' },
    { title: 'Ideathon', image: '/images/3.png' },
]

export function AnimatedSections() {
    const [expandedIndex, setExpandedIndex] = useState(null)
    const [showDescription, setShowDescription] = useState(false)

    const handleClick = (index) => {
        if (expandedIndex === null) {
            setExpandedIndex(index)
            setTimeout(() => {
                setShowDescription(true)
            }, 500)
        } else {
            setShowDescription(false)
            setExpandedIndex(null)
        }
    }

    return (
        <div className="flex h-screen w-full overflow-hidden">
            {sections.map((section, index) => (
                <motion.div
                    key={section.title}
                    className="relative flex-1 cursor-pointer overflow-hidden"
                    animate={{
                        flex: expandedIndex === index ? 3 : expandedIndex === null ? 1 : 0.1,
                    }}
                    transition={{ duration: 0.5 }}
                    onClick={() => handleClick(index)}
                >
                    <Image
                        src={section.image}
                        alt={section.title}
                        layout="fill"
                        objectFit="cover"
                        className="transition-all duration-300 filter brightness-75 saturate-50 hover:brightness-100 hover:saturate-100"
                    />
                    <AnimatePresence>
                        {expandedIndex === null && (
                            <motion.h2
                                className="absolute inset-0 flex items-center justify-center text-4xl font-bold text-white"
                                initial={{ opacity: 1 }}
                                exit={{ opacity: 0 }}
                                transition={{ duration: 0.5 }}
                            >
                                {section.title.split('').map((char, charIndex) => (
                                    <motion.span
                                        key={charIndex}
                                        initial={{ y: 0 }}
                                        exit={{ y: -50, opacity: 0 }}
                                        transition={{ duration: 0.5, delay: charIndex * 0.05 }}
                                    >
                                        {char}
                                    </motion.span>
                                ))}
                            </motion.h2>
                        )}
                    </AnimatePresence>
                    {expandedIndex === index && showDescription && <Description title={section.title} />}
                </motion.div>
            ))}
        </div>
    )
}

