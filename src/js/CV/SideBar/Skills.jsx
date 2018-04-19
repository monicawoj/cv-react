import React from "react";

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

export default Skills;