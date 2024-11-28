import { useState, useRef } from "react";
import { TiLocationArrow } from "react-icons/ti";

export const BentoTilt = ({ children, className = "" }) => {
    const [transformStyle, setTransformStyle] = useState("");
    const itemRef = useRef(null);

    const handleMouseMove = (event) => {
        if (!itemRef.current) return;

        const { left, top, width, height } =
            itemRef.current.getBoundingClientRect();

        const relativeX = (event.clientX - left) / width;
        const relativeY = (event.clientY - top) / height;

        const tiltX = (relativeY - 0.5) * 5;
        const tiltY = (relativeX - 0.5) * -5;

        const newTransform = `perspective(700px) rotateX(${tiltX}deg) rotateY(${tiltY}deg) scale3d(.95, .95, .95)`;
        setTransformStyle(newTransform);
    };

    const handleMouseLeave = () => {
        setTransformStyle("");
    };

    return (
        <div
            ref={itemRef}
            className={className}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            style={{ transform: transformStyle }}
        >
            {children}
        </div>
    );
};

export const BentoCard = ({ src, title, description }) => {
    const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });
    const [hoverOpacity, setHoverOpacity] = useState(0);
    const hoverButtonRef = useRef(null);

    const handleMouseMove = (event) => {
        if (!hoverButtonRef.current) return;
        const rect = hoverButtonRef.current.getBoundingClientRect();

        setCursorPosition({
            x: event.clientX - rect.left,
            y: event.clientY - rect.top,
        });
    };

    const handleMouseEnter = () => setHoverOpacity(1);
    const handleMouseLeave = () => setHoverOpacity(0);

    return (
        <div className="relative size-full font-inter">
            <video
                src={src}
                loop
                muted
                autoPlay
                className="absolute left-0 top-0 size-full object-cover object-center brightness-75"
            />
            <div className="relative z-10 flex size-full flex-col justify-between p-5 text-blue-50">
                <div>
                    <h1 className="bento-title special-font">{title}</h1>
                    {description && (
                        <p className="mt-3 max-w-64 text-xs md:text-base">{description}</p>
                    )}
                </div>

            </div>
        </div>
    );
};

const Features = () => (
    <section className="bg-black pb-52">
        <div className="container mx-auto px-3 md:px-10">
            <div className="px-5 py-32">
                <p className="font-circular-web text-3xl text-white w-8/12 pb-24 leading-[3.5rem]">
                    Apex Code and Combat 2025 is dual focused event combining coding and gaming, where we plan on hosting both Intercollege and Intra-college gaming competitions as well as an innovative hackathon.
                </p>
            </div>

            <BentoTilt className="border-hsla relative mb-7 h-96 w-full overflow-hidden rounded-md md:h-[65vh]">
                <BentoCard
                    src="videos/feature-1.mp4"
                    title={
                        <>
                            Embracing the best of both worlds
                        </>
                    }
                    description="An experience blending gaming and coding, where skills in both worlds turn into a rewarding adventure."
                />
            </BentoTilt>

            <div className="grid h-[135vh] w-full grid-cols-2 grid-rows-3 gap-7">
                <BentoTilt className="bento-tilt_1 row-span-1 md:col-span-1 md:row-span-2">
                    <BentoCard
                        src="videos/feature-9.mp4"
                        title={
                            <>
                                Player Unknown Battle Grounds
                            </>
                        }
                        description="a battle royale game where players fight to be the last one standing. Up to 100 players parachute onto an island, scavenging for weapons, supplies, and vehicles"

                    />
                </BentoTilt>

                <BentoTilt className="bento-tilt_1 row-span-1 ms-32 md:col-span-1 md:ms-0">
                    <BentoCard
                        src="videos/feature-8.mp4"
                        title={
                            <>
                                Stumble Guys
                            </>
                        }
                        description="A lighthearted, multiplayer knockout game inspired by obstacle course games."

                    />
                </BentoTilt>

                <BentoTilt className="bento-tilt_2">
                    <div className="flex size-full flex-col justify-between bg-gradient-to-br from-violet-950 to-sky-400 p-5">
                        <h1 className="bento-title max-w-64 text-white">
                            Action Packed Engergetic Atmosphere
                        </h1>
                    </div>
                </BentoTilt>
                <BentoTilt className="bento-tilt_1 me-14 md:col-span-1 md:me-0">
                    <BentoCard
                        src="videos/feature.mp4"
                        title={
                            <>
                                {/* az<b>u</b>l */}
                            </>
                        }
                        description=""

                    />
                </BentoTilt>


                <BentoTilt className="bento-tilt_2">
                    <video
                        src="videos/feature-10.mp4"
                        loop
                        muted
                        autoPlay
                        className="size-full object-cover object-center"
                    />
                </BentoTilt>
            </div>
        </div>
    </section>
);

export default Features;
