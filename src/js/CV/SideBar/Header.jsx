import React from "react";

class Header extends React.Component {
    render() {
        const data = this.props.data[0];
        const splitTitles = data.title.split(",");
        const titles = splitTitles.map(title => <h2 key={title}>{title}</h2>);
        return <div className='section header'>
            <div className='photo-holder'>
                <div className='photo'/>
            </div>
            <div className='title-holder'>
                <h1>{data.name}</h1>
                {titles}
            </div>
        </div>
    }
}

export default Header;