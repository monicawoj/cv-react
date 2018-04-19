import React from "react";

class Profile extends React.Component {
    render() {
        const data = this.props.data[0];
        return <div className='section profile'>
            <h3>Profile</h3>
            <p>{data.description}</p>
        </div>
    }
}

export default Profile;