import React from 'react';
import ExpenseTracker from './ExpenseTracker';
import CashRegister from './CashRegister';
import Calculator from './Calculator';

const Projects = () => {
    return (
        <div className='projects-container' id='projects'>
            <h4>MY PROJECTS</h4>
            <div className='projects'>
                <ExpenseTracker />
                <CashRegister />
                <Calculator />
            </div>
        </div>
    );
};

export default Projects;