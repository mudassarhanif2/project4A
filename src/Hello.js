import React from 'react';
import useWebAnimation from '@wellyshen/use-web-animations';
import styles from './Hello.module.css';

const Hello = () => {
    const {ref: a} = useWebAnimation({
        keyframes: {
            transform: ['rotate(-20deg)', 'rotate(20deg)'], // Move by 500px
            background: ["red", "blue", "green"], // Go through three colors
            opacity: [0.3, 0.8],
        },
        timing: {
        delay: 500, // Start with a 500ms delay
        duration: 1000, // Run for 1000ms
        iterations: Infinity, // Repeat once
        direction: "alternate", // Run the animation forwards and then backwards
        easing: "ease-in-out", // Use a fancy timing function
        },
    });
    const {ref: b} = useWebAnimation({
        keyframes: {
            transform: ['translateX(30px)', 'translateX(90px)'], // Move by 500px
            opacity: [1, 0.7]
        },
        timing: {
        delay: 500, // Start with a 500ms delay
        duration: 1000, // Run for 1000ms
        iterations: Infinity, // Repeat once
        direction: "alternate", // Run the animation forwards and then backwards
        easing: "ease-in-out", // Use a fancy timing function
        },
    });
    const {ref: c} = useWebAnimation({
        keyframes: {
            color: ['white', 'black', 'brown'],
            opacity: [1, 0.6]
        },
        timing: {
        delay: 0, // Start with a 500ms delay
        duration: 4000, // Run for 1000ms
        iterations: Infinity, // Repeat once
        },
    });
    
    
    return (
        <div className={styles.container}>
            <div ref={a} className={styles.a}>
                Thanks 
            </div>
            <div ref={b}>
                <span className={styles.piaic} >PIAIC</span>
                <span className={styles.and}>&</span>
                <span className={styles.panacloud}> PanaCloud</span>
            </div>
            <div ref={c} className={styles.lastrow}>
                I really appreciate your effort to build PAKISTANI youth in Information Technology
            </div>
        </div>
    )
}

export default Hello;