"use client"

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
// import { Plus, Minus } from 'lucide-react'

const benefits = [
    {
        title: "Academic Enhancement",
        description: "Encourages creativity and problem-solving skills"
    },
    {
        title: "Student Development",
        description: "Encourages teamwork, creativity, leadership, and technical skills."
    },
    {
        title: "Visibility",
        description: "Elevates college's reputation in technology and esports."
    },
    {
        title: "Networking",
        description: "Attracts industry professionals, high-schoolers, and aluminis"
    }
]

export default function ACCBenefits() {
    const [activeIndex, setActiveIndex] = useState(null)
    const [currentImage, setCurrentImage] = useState(0)

    const images = [
        "/images/1.jpg",
        "/images/1.jpg",
        "/images/1.jpg",
        "/images/1.jpg",
    ]

    const handleToggle = (index) => {
        setActiveIndex(activeIndex === index ? null : index)
        setCurrentImage(index)
    }

    return (
        <div className="mx-auto px-6 py-48 bg-white text-black">
            <h1 className="text-4xl mb-24">So, why ACC?</h1>
            <div className="flex flex-col md:flex-row gap-8">
                <div className="md:w-1/2 relative h-[400px]">
                    <AnimatePresence initial={false} custom={currentImage}>
                        <motion.img
                            key={currentImage}
                            src={images[currentImage]}
                            alt={`ACC benefit ${currentImage + 1}`}
                            className="absolute top-0 left-0 w-full h-full object-cover rounded-lg"
                            custom={currentImage}
                            initial={{ x: 300, opacity: 0 }}
                            animate={{ x: 0, opacity: 1 }}
                            exit={{ x: -300, opacity: 0 }}
                            transition={{
                                x: { type: "spring", stiffness: 300, damping: 30 },
                                opacity: { duration: 0.75 }
                            }}
                        />
                    </AnimatePresence>
                </div>
                <div className="md:w-1/2">
                    {benefits.map((benefit, index) => (
                        <motion.div
                            key={index}
                            className="mb-4 border-b border-gray-200 pb-4"
                            initial={false}
                        >
                            <button
                                className="flex justify-between items-center w-full text-left"
                                onClick={() => handleToggle(index)}
                            >
                                <span className="text-2xl">{benefit.title}</span>
                                <motion.div
                                    className='text-2xl'
                                    initial={false}
                                    animate={{ rotate: activeIndex === index ? 0 : 90 }}
                                    transition={{ duration: 0.3, ease: "easeInOut" }}
                                >
                                    {activeIndex === index ? (
                                        '-'
                                    ) : (
                                        '+'
                                    )}
                                </motion.div>
                            </button>
                            <AnimatePresence initial={false}>
                                {activeIndex === index && (
                                    <motion.div
                                        initial={{ height: 0, opacity: 0 }}
                                        animate={{ height: "auto", opacity: 1 }}
                                        exit={{ height: 0, opacity: 0 }}
                                        transition={{ duration: 0.75, ease: "easeInOut" }}
                                    >
                                        <p className="mt-2 text-gray-600">{benefit.description}</p>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </motion.div>
                    ))}
                </div>
            </div>
        </div>
    )
}

