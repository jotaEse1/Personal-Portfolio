import React from 'react';
import ExpenseTracker from './ExpenseTracker';
import CashRegister from './CashRegister';
import Recost from './Recost';

const Projects = () => {
    return (
        <div className='projects-container' id='projects'>
            <h4>MY PROJECTS</h4>
            <div className='projects'>
                <Recost />
                <ExpenseTracker />
                <CashRegister />
            </div>
        </div>
    );
};

export default Projects;