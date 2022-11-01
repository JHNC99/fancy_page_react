import React from 'react'
import { motion } from "framer-motion";
import Title from './Title'
const Page2 = () => {
    const imageAnimate = {
        offscreen: {
            y: 100,
            opacity: 0
        },
        onscreen: {
            y: 0,
            opacity: 1,
            transition: {
                type: "spring",
                bounce: 0.4,
                duration: 0.8
            }
        }
    };

    const textAnimate = {
        offscreen: {
            x: 100,
            opacity: 0
        },
        onscreen: {
            x: 0,
            opacity: 1,
            transition: {
                type: "spring",
                bounce: 0.4,
                duration: 0.8,
                delay: 0.2
            }
        }
    };
    return (
        <motion.div className="firstScreen"

            initial="offscreen"
            whileInView="onscreen"
          
            transition={{
                staggerChildren: 0.5,
                delayChildren: 0.5,
                duration: 0.5,
                ease: "easeInOut"

            }}
            variants={imageAnimate}
        >
            <div
                style={{
                    height: "100vh",
                    position: "sticky",
                    top: 0,
                    backgroundColor: "black",
                }}
                className="sticky"
            >
                <Title/>
            </div>
        </motion.div>
    )
}

export default Page2