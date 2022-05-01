import React, { useState } from 'react';
import Project from './Project';
import { recostInfo, expenseInfo, cashInfo } from '../information/information';

const Projects = () => {
    const [recost, setRecost] = useState(recostInfo)
    const [expenseTracker, setExpenseTracker] = useState(expenseInfo)
    const [cashRegister, setCashRegister] = useState(cashInfo)

    return (
        <div className='projects-container' id='projects'>
            <h4>MY PROJECTS</h4>
            <div className='projects'>
                <Project information={recost} />
                <Project information={expenseTracker} />
                <Project information={cashRegister} />
            </div>
        </div>
    );
};

export default Projects;