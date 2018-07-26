import React from 'react';
import ReactDOM from 'react-dom';
import Projects from './Projects.jsx';
import Experience from './Experience.jsx';
import Education from './Education.jsx';
import Interests from './Interests.jsx';

class Main extends React.Component {
    render() {
        return <div className='main'>
            <Experience data={this.props.data.filter(item => item.section === 'experience')}/>
            <Projects data={this.props.data.filter(item => item.section === 'projects')}/>
            <Education data={this.props.data.filter(item => item.section === 'education')}/>
            <Interests data={this.props.data.filter(item => item.section === 'interest')}/>
        </div>
    }
}

export default Main;