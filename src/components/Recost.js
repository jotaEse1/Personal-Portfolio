import React from 'react';
import './Project.css'
import {motion} from 'framer-motion'
import {projectVariant} from '../animations/variants'

const Recost = () => {
    return (
        <a href='https://recost.herokuapp.com/' target='_blank' rel='noreferrer'>
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
                    <img src={`${process.env.PUBLIC_URL}/recost-full_400x182.png`} alt='recost'/>
                </div>
                <div className='project-details'>
                    <h4>Recost</h4>
                    <p>
                        Recost is an application that helps pastry chefs in order to calculate the cost of their 
                        products faster.
                        In it you will find three categories, Price list, Budgets and Recipes.
                        In the Price list section you are able to add all ingredients used on a daily-basis, those are
                        important to the Recipes section, where you can save all your recipes and see their cost too.
                        Finally, in the Budget section you can either calculate a new budget manually or with the "fast"
                        option where you choose a recipe and you get the cost of it instantly.
                    </p>
                </div>
            </motion.div>
        </a>
    );
};

export default Recost;