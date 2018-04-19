import React from 'react';
import ReactDOM from 'react-dom';
import cvData from '../../data/cvData.js';
import SideBar from './SideBar/SideBar.jsx';
import Main from './Main/Main.jsx';

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

export default CV;