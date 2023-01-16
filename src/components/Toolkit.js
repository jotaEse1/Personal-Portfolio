import React from 'react';
import './Toolkit.css'
import {SiCss3, 
    SiHtml5, 
    SiJavascript, 
    SiTypescript, 
    SiReact, 
    SiNodedotjs, 
    SiExpress, 
    SiMongodb,
    SiMysql,
    SiRedux,
    SiJest,
    SiPhp
} from 'react-icons/si';
import {DiGit} from 'react-icons/di';

const Toolkit = () => {
    return (
        <div className='toolkit'>
            <h4>MY TOOLKIT</h4>
            <div>
                <SiHtml5  className='html'/>
                <SiCss3 className='css'/>
                <SiJavascript className='js'/>
                <SiTypescript className='ts'/>
                <img src={`${process.env.PUBLIC_URL}/d3logo.png`} alt='d3icon'/>
                <SiReact className='react'/>
                <SiRedux className="redux" />
                <SiNodedotjs className='node'/>
                <SiExpress className='ex'/>
                <SiMongodb className='mongo'/>
                <SiMysql />
                <SiPhp className='php' />
                <DiGit className='git'/>
                <SiJest className='jest'/>
            </div>
        </div>
    );
};

export default Toolkit;