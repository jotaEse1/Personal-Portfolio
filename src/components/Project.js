import React from 'react';
import './Project.css'
import {motion} from 'framer-motion'
import {projectVariant} from '../animations/variants'
import {  
    SiJavascript,
    SiBootstrap,
    SiPhp,
    SiJquery,
    SiTypescript, 
    SiReact, 
    SiNodedotjs, 
    SiExpress, 
    SiMongodb,
    SiRedux,
    SiMysql
} from 'react-icons/si';

const Project = ({information}) => {
    const {url, icons, title, description} = information;

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
                <div className='project-details'>
                    <h4>{title}</h4>
                    <p>{description}</p>
                    <div>
                        {icons.map(icon => {
                            if(icon === "SiJavascript") return <SiJavascript />
                            if(icon === "SiJquery") return <SiJquery />
                            if(icon === "SiBootstrap") return <SiBootstrap />
                            if(icon === "SiPhp") return <SiPhp />
                            if(icon === "SiTypescript") return <SiTypescript /> 
                            if(icon === "SiReact") return <SiReact />  
                            if(icon === "SiNodedotjs") return <SiNodedotjs />  
                            if(icon === "SiExpress") return <SiExpress />  
                            if(icon === "SiMongodb") return <SiMongodb /> 
                            if(icon === "SiRedux") return <SiRedux /> 
                            if(icon === "SiMysql") return <SiMysql />                         
                        })}
                        
                    </div>
                </div>
            </motion.div>
        </a>
    );
};

export default Project;