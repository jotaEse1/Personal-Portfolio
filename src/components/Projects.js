import Project from './Project';
import { recostInfo, flashyInfo, portyInfo, smartInfo } from '../information/information';

const Projects = () => {
    return (
        <div className='projects-container' id='projects'>
            <h4>MY PROJECTS</h4>
            <div className='projects'>
                <Project information={smartInfo} />
                <Project information={flashyInfo} />
                <Project information={portyInfo} />
                <Project information={recostInfo} />
            </div>
        </div>
    );
};

export default Projects;