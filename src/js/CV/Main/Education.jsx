import React from 'react';
import ReactDOM from 'react-dom';

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

export default Education;