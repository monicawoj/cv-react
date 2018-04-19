import React from 'react';
import ReactDOM from 'react-dom';
import Header from './Header.jsx';
import Contact from './Contact.jsx';
import Profile from './Profile.jsx';
import Skills from './Skills.jsx';

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

export default SideBar;