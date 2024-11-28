'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetDescription } from "@/components/ui/sheet"
import { ScrollArea } from "@/components/ui/scroll-area"

const sections = [
    {
        id: 1,
        title: "Stumble Guys",
        image: "/images/2.png",
        content: "Explore the beauty of nature with our guided tours through lush forests, majestic mountains, and serene lakes. Our experienced guides will help you discover hidden gems and learn about local flora and fauna."
    },
    {
        id: 2,
        title: "Hackathon",
        image: "/images/1.png",
        content: "Dive into the world of cutting-edge technology. From artificial intelligence to quantum computing, we'll explore the latest innovations that are shaping our future and revolutionizing industries across the globe."
    },
    {
        id: 3,
        title: "PUBG",
        image: "/images/3.png",
        content: "Immerse yourself in the vibrant world of art. Discover masterpieces from renowned artists, explore various art movements, and learn about different techniques used in painting, sculpture, and digital art."
    }
]

export default function ExpandableSections() {
    const [openSheet, setOpenSheet] = useState(null)
    const [hoveredSection, setHoveredSection] = useState(null)

    return (
        <div className="flex h-screen">
            {sections.map((section) => (
                <motion.div
                    key={section.id}
                    className="relative flex-1 flex items-center justify-center cursor-pointer overflow-hidden"
                    animate={{
                        flex: hoveredSection === section.id ? 1.5 : 1
                    }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                    onHoverStart={() => setHoveredSection(section.id)}
                    onHoverEnd={() => setHoveredSection(null)}
                    onClick={() => setOpenSheet(section.id)}
                    style={{
                        backgroundImage: `url(${section.image})`,
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                    }}
                >
                    <div className="absolute inset-0 bg-black bg-opacity-50" />
                    <motion.h2
                        className="text-white text-3xl font-bold z-10 text-center px-4"
                        animate={{
                            scale: hoveredSection === section.id ? 1.1 : 1
                        }}
                        transition={{ duration: 0.3, ease: "easeInOut" }}
                    >
                        {section.title}
                    </motion.h2>

                    <AnimatePresence>
                        {openSheet === section.id && (
                            <Sheet open={openSheet === section.id} onOpenChange={(open) => setOpenSheet(open ? section.id : null)}>
                                <SheetContent side="bottom" className="h-[80vh] sm:h-[70vh] w-full">
                                    <SheetHeader>
                                        <SheetTitle>{section.title}</SheetTitle>
                                    </SheetHeader>
                                    <ScrollArea className="h-[calc(100%-4rem)] mt-6 rounded-md">
                                        <SheetDescription>
                                            {section.content}
                                        </SheetDescription>
                                    </ScrollArea>
                                </SheetContent>
                            </Sheet>
                        )}
                    </AnimatePresence>
                </motion.div>
            ))}
        </div>
    )
}

