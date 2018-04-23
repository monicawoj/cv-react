import React from 'react';
import ReactDOM from 'react-dom';

class Interests extends React.Component {
    render() {
        const {data} = this.props;
        const interests = data.map(interest => {
            if (interest.title === 'Nature') {
                return <span key={interest.title}>{interest.title}</span>
            } else {
                if (interest.link) {
                    return <span key={interest.title}><a href={interest.link}>{interest.title}</a>, </span>
                } else {
                    return <span key={interest.title}>{interest.title}, </span>
                }
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

export default Interests;