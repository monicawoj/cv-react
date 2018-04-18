import React from 'react';
import ReactDOM from 'react-dom';
import cvData from './cvData.js';

class Header extends React.Component {
    render() {
        const data = this.props.data[0];
        const splitTitles = data.title.split(",");
        const titles = splitTitles.map(title => <h2 key={title}>{title}</h2>);
        return <div className='section header'>
            <div className='photo-holder'>
                <div className='photo' style={{backgroundImage: `url(src/images/monica-linked-in-photo.jpg)`}}/>
            </div>
            <div className='title-holder'>
                <h1>{data.name}</h1>
                {titles}
            </div>
        </div>
    }
}

class Contact extends React.Component {
    render() {
        const {data} = this.props;
        const items = data.map(item => {
           if (item.link) {
               return <tr key={item.title}>
                   <td>
                       <p>{item.title}</p>
                   </td>
                   <td>
                       <p><a href={item.link}>{item.link}</a></p>
                   </td>
               </tr>
           } else {
               return <tr key={item.title}>
                   <td>
                       <p>{item.title}</p>
                   </td>
                   <td>
                       <p>{item.description}</p>
                   </td>
               </tr>
           }
        });
        return <div className='section contact'>
            <table>
                <tbody>
                {items}
                </tbody>
            </table>
        </div>
    }
}

class Profile extends React.Component {
    render() {
        const data = this.props.data[0];
        return <div className='section profile'>
            <h3>Profile</h3>
            <p>{data.description}</p>
        </div>
    }
}

class Skills extends React.Component {
    render() {
        const {data} = this.props;
        const skills = data.map(skill => {
            return <div key={skill.title} className='skill'>
                <p>{skill.title}</p>
            </div>
        });
        return <div className='section skills'>
            <div className='header-container'>
                <h3>{data[0].section}</h3>
            </div>
            <div className='skills-container'>
                {skills}
            </div>
        </div>
    }
}

class SideBar extends React.Component {
    render() {
        return <div className='sidebar'>
            <Header data={this.props.data.filter(item => item.section === 'profile')}/>
            <Contact data={this.props.data.filter(item => item.section === 'contact')}/>
            <Profile data={this.props.data.filter(item => item.section === 'profile')}/>
            <Skills data={this.props.data.filter(item => item.section === 'Primary Areas of Expertise')}/>
            <Skills data={this.props.data.filter(item => item.section === 'Additional Skills')}/>
            <Skills data={this.props.data.filter(item => item.section === 'Languages')}/>
        </div>
    }
}

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
                return <li><a href={project.link}>{project.title}</a></li>;
            }
        });
        return <div className='section projects'>
            <div className='title-holder'>
                <h3>Projects</h3>
            </div>
            {focusProjects}
            <div className='project-holder'>
                <p>Additional projects:</p>
                <ul>
                    {otherProjects}
                </ul>
            </div>
        </div>
    }
}

class Experience extends React.Component {
    render() {
        //title, position, year, description, link, location
        const {data} = this.props;
        const jobs = data.map(job => {
           return <div key={job.title} className='table'>
               <table>
                   <tbody>
                       <tr>
                           <td>{job.position}, {job.title}</td>
                           <td style={{textAlign: 'right'}}>{job.year}</td>
                       </tr>
                   </tbody>
               </table>
            <ul>
               <li>{job.description}</li>
           </ul>
           </div>
        });
        return <div className='section experience'>
            <div className='title-holder'>
                <h3>Experience</h3>
            </div>
            {jobs}
        </div>
    }
}

class Education extends React.Component {
    render() {
        //title, year, school
        const {data} = this.props;
        const schools = data.map(school => {
            return <div key={school.title} className='table'>
                <table>
                    <tbody>
                    <tr>
                        <td>{school.title}</td>
                        <td style={{textAlign: 'right'}}>{school.year}</td>
                    </tr>
                    <tr>
                        <td>{school.school}</td>
                    </tr>
                    </tbody>
                </table>
            </div>
        });
        return <div className='section experience'>
            <div className='title-holder'>
                <h3>Education</h3>
            </div>
            {schools}
        </div>
    }
}

class Interests extends React.Component {
    render() {
        //title
        const {data} = this.props;
        const interests = data.map(interest => {
            if (interest.title === 'Nature') {
                return <span key={interest.title}>{interest.title}</span>
            } else {
                return <span key={interest.title}>{interest.title}, </span>
            }
        });
        return <div className='section interests'>
            <div className='title-holder'>
                <h3>Interests</h3>
            </div>
            <p>{interests}</p>
        </div>
    }
}

class Main extends React.Component {
    render() {
        return <div className='main'>
            <Projects data={this.props.data.filter(item => item.section === 'projects')}/>
            <Experience data={this.props.data.filter(item => item.section === 'experience')}/>
            <Education data={this.props.data.filter(item => item.section === 'education')}/>
            <Interests data={this.props.data.filter(item => item.section === 'interest')}/>
        </div>
    }
}

class CV extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            data: cvData,
        };
    }

    render() {
        return <div className='cv'>
            <SideBar data={this.state.data}/>
            <Main data={this.state.data}/>
        </div>
    }
}

class App extends React.Component {
    render() {
        return <CV/>
    }
}

export default App