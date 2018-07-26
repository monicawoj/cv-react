import React from 'react';
import ReactDOM from 'react-dom';

class Experience extends React.Component {
    render() {
        //title, position, year, description, link, location
        const {data} = this.props;
        const jobs = data.map(job => {
            return <div key={job.title} className='table'>
                <table>
                    <tbody>
                    <tr>
                        <td><span style={{fontWeight: 'bold'}}>{job.position}</span>, {job.title}</td>
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

export default Experience;