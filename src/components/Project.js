import React from 'react';
import './Project.css'
import {motion} from 'framer-motion'
import {projectVariant} from '../animations/variants'

const Project = ({information}) => {
    const {url, image, title, description} = information;

    return (
        <a href={url} target='_blank' rel='noreferrer'>
            <motion.div 
                className='project'
                initial='hidden'
                variants={projectVariant}
                whileInView='visible'
                viewport={{once: true}}
                whileHover='hover'
                whileTap={{scale: 0.9}}
            >
                <div className='project-image'>
                    <img src={`${process.env.PUBLIC_URL}/${image}`} alt='recost'/>
                </div>
                <div className='project-details'>
                    <h4>{title}</h4>
                    <p>{description}</p>
                </div>
            </motion.div>
        </a>
    );
};

export default Project;