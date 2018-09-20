import React from 'react';
import ReactDOM from 'react-dom';

class Projects extends React.Component {
    render() {
        //backgroundImage: `url(src/images/${project.image}.png)`
        const {data} = this.props;
        const focusProjects = data.map(project => {
            if (project.type === 'focus') {
                return <div key={project.title} className='project focus'>
                    <div className='title-section'>
                        <div className='title'>
                            <h3>{project.title}</h3>
                        </div>
                        <div className='links'>
                            <div className='git'>
                                <a href={project.git}>GitHub</a>
                            </div>
                            <div className='demo'>
                                <a href={project.link}>Demo</a>
                            </div>
                        </div>
                    </div>
                    <div className='description-section'>
                        <p className='description'>{project.description}</p>
                        <p className='technologies'><b>Technologies</b>: {project.technologies}</p>
                    </div>
                </div>
            }
        });
        const otherProjects = data.map(project => {
            if (project.type === 'other') {
                return <li key={project.title}><a href={project.link}>{project.title}</a></li>;
            }
        });
        return <div className='section projects'>
            <div className='title-holder'>
                <h3>Projects</h3>
            </div>
            {focusProjects}
            {/* <div className='project-holder'>
                <p>Additional projects:</p>
                <ul>
                    {otherProjects}
                </ul>
            </div> */}
        </div>
    }
}

export default Projects;
