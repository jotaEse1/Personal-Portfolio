import React from 'react';
import {SiLinkedin} from 'react-icons/si'
import {GoMarkGithub} from 'react-icons/go'
import {motion} from 'framer-motion';
import { presentationVariant, imageVariant } from '../animations/variants';

const Contact = () => {
    return (
        <motion.div 
            className='contact' id='contact'
            initial='hidden'
            variants={imageVariant}
            whileInView='visible'
            viewport={{once: true}}
        >
            <motion.div
                initial='hidden'
                variants={presentationVariant}
                whileInView='visible'
                viewport={{once: true}}
            >
                <h4>Let's work together!</h4>
                <h5>You can find me here...</h5>
                <div>
                    <motion.a whileHover={{scale: 1.1}}
                        href='www.linkedin.com/in/joaquín-sanchez-004a23232'
                        target='_blank'
                        rel='noreferrer'
                    >
                        <SiLinkedin /> Linkedin
                    </motion.a>
                    <motion.a whileHover={{scale: 1.1}}
                        href='https://github.com/jotaEse1' 
                        target='_blank'
                        rel='noreferrer'
                    >
                        <GoMarkGithub /> Github
                    </motion.a>
                </div>
            </motion.div>
        </motion.div>
    );
};

export default Contact;