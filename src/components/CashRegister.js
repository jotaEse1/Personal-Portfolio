import React from 'react';
import './Project.css'
import {motion} from 'framer-motion'
import {projectVariant} from '../animations/variants'

const CashRegister = () => {
    return (
        <a href='https://jotaese1.github.io/cash-register/' target='_blank' rel='noreferrer'>
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
                    <img src='cash-register-full_397x182.jpeg' alt='cash-register'/>
                </div>
                <div className='project-details'>
                    <h4>Cash Register app</h4>
                    <p>
                        This application makes your life easier when giving change to your costumers. Cash register app
                        calculates the change and details which currency unit to use, also has a chart and a table where
                        you can see the current amount of money you have in your cash register. In case you can't stand white 
                        interfaces, you can change the color theme to dark!
                    </p>
                </div>
            </motion.div>
        </a>
    );
};

export default CashRegister;