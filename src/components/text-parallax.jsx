'use client'
import { useScroll, useTransform, motion } from 'framer-motion';
import React, { useRef } from 'react'
import Image from 'next/image';
import Picture1 from '../../public/images/1.jpg'
import Picture2 from '../../public/images/2.jpg'
import Picture3 from '../../public/images/3.jpg'

export default function TextParallax() {

    const container = useRef();
    const { scrollYProgress } = useScroll({
        target: container,
        offset: ['start end', 'end start']
    })

    return (
        <main className="overflow-hidden bg-sky-500 text-white">
            <div className='h-[35vh] rounded-t-[2rem]' />
            <div className='' ref={container}>
                <Slide src={Picture1} direction={'left'} left={"-40%"} progress={scrollYProgress} />
                <Slide src={Picture2} direction={'right'} left={"-25%"} progress={scrollYProgress} />
                <Slide src={Picture3} direction={'left'} left={"-30%"} progress={scrollYProgress} />
            </div>
            <div className='h-[35vh]' />
        </main>
    )
}

const Slide = (props) => {
    const direction = props.direction == 'left' ? -1 : 1;
    const translateX = useTransform(props.progress, [0, 1], [150 * direction, -150 * direction])
    return (
        <motion.div style={{ x: translateX, left: props.left }} className="relative flex whitespace-nowrap">
            <Phrase src={props.src} />
            <Phrase src={props.src} />
            <Phrase src={props.src} />
        </motion.div>
    )
}

const Phrase = ({ src }) => {

    return (
        <div className={'px-5 flex gap-5 items-center'}>
            <p className='text-[7.5vw]'>Introducing</p>
            {/* <span className="relative h-[7.5vw] aspect-[4/2] rounded-full overflow-hidden"> */}
            <span className='text-7xl'>
                💫
            </span>
            {/* </span> */}
        </div>
    )
}