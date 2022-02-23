import React from 'react';
import './Project.css'
import {motion} from 'framer-motion'
import {projectVariant} from '../animations/variants'

const Calculator = () => {
    return (
        <a href='https://jotaese1.github.io/calculator/' target='_blank' rel='noreferrer'>
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
                    <img src='calculator-full_400x182.jpeg' alt='calculator'/>
                </div>
                <div className='project-details'>
                    <h4>Calculator</h4>
                    <p>
                        Yes, another calculator out there... you would say, but what about adding some other features and 
                        making it better? That was what I asked myself when I was crafting this calculator. In it you will find a remove
                        button and an operations history to see your latest operations and delete them if you want.
                    </p>
                </div>
            </motion.div>
        </a>
    );
};

export default Calculator;