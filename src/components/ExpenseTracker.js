import React from 'react';
import './Project.css'
import {motion} from 'framer-motion'
import {projectVariant} from '../animations/variants'

const ExpenseTracker = () => {
    return (
        <a href='https://jexpense-tracker.herokuapp.com/' target='_blank' rel='noreferrer'>
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
                    <img src={`${process.env.PUBLIC_URL}/expense-tracker-full_396x182.jpeg`} alt='expense-tracker'/>
                </div>
                <div className='project-details'>
                    <h4>Expense Tracker app</h4>
                    <p>
                        Are you trying to save money but you don't know where it goes? This app
                        can help you with that. Expense Tracker app, as his name suggests, helps you
                        to keep track of your daily expenditures. You can see your latest transactions, up to 6 months, in
                        a chart where you are able to zoom and pan in case it's not legible. But, what if you want to see your
                        expenditures in detail? Well, on the second page called 'Transactions' you can search and filter them 
                        by date, price, category or any combination that fits your necessities.
                    </p>
                </div>
            </motion.div>
        </a>
    );
};

export default ExpenseTracker;