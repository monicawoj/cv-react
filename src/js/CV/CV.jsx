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
        return <div>
            <div className='cv'>
                <SideBar data={this.state.data}/>
                <Main data={this.state.data}/>
            </div>
            <div className='data-clause'>Wyrażam zgodę na przetwarzanie moich danych osobowych dla potrzeb niezbędnych do realizacji procesu rekrutacji (zgodnie z Ustawą z dnia 29.08.1997 roku o Ochronie Danych Osobowych; tekst jednolity: Dz. U. z 2002r. Nr 101, poz. 926 ze zm.).</div>
        </div>

    }
}

export default CV;