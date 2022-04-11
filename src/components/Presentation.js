import React from 'react';
import {motion} from 'framer-motion';
import { presentationVariant } from '../animations/variants';

const Presentation = () => {
    return (
        <motion.div 
            className='presentation'
            variants={presentationVariant}
        >
            <h1>Joaquín Sánchez</h1>
            <p>
                I'm an Argentinian Full-Stack Developer who's passionate about web 
                development and loves to learn every day!
            </p>
            <a href='#projects'>Check my work</a>
        </motion.div>
    );
};

export default Presentation;