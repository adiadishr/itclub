import styles from './styles.module.scss';
import Image from 'next/image';

import { useScroll, useTransform, motion } from 'framer-motion';
import { useRef } from 'react';

export default function ZoomParallax() {

    const container = useRef(null);
    const { scrollYProgress } = useScroll({
        target: container,
        offset: ['start start', 'end end']
    })
    const scale4 = useTransform(scrollYProgress, [0, 1], [1, 4]);
    const scale5 = useTransform(scrollYProgress, [0, 1], [1, 5]);
    const scale6 = useTransform(scrollYProgress, [0, 1], [1, 6]);
    const scale8 = useTransform(scrollYProgress, [0, 1], [1, 8]);
    const scale9 = useTransform(scrollYProgress, [0, 1], [1, 9]);

    const pictures = [
        {
            src: '/images/acc.png',
            scale: scale4
        },
        {
            src: '/images/photo1.jpg',
            scale: scale5
        },
        {
            src: '/images/photo2.jpg',
            scale: scale6
        },
        {
            src: '/images/photo3.jpg',
            scale: scale5
        },
        {
            src: '/images/photo4.jpg',
            scale: scale6
        },
        {
            src: '/images/photo5.jpg',
            scale: scale8
        },
        {
            src: '/images/photo6.jpg',
            scale: scale9
        }]
    return (
        <>
            <div className="h-[50vh] bg-black" />
            <div ref={container} className={styles.container}>
                <div className={styles.sticky}>
                    {pictures.map(({ src, scale }, index) => {
                        return (
                            <motion.div key={index} style={{ scale }} className={styles.el}>
                                <div className={styles.imageContainer}>
                                    <Image src={`${src}`} fill alt="image" />
                                </div>
                            </motion.div>
                        )
                    })}
                </div>
            </div>
            <div className="h-[50vh] bg-gradient-to-b from-violet-950 brightness-[0.25] to-black" />
        </>
    )
}