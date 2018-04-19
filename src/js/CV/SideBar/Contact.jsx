import React from "react";

class Contact extends React.Component {
    render() {
        const {data} = this.props;
        const items = data.map(item => {
            if (item.link) {
                return <tr key={item.title}>
                    <td>
                        <p>{item.title}</p>
                    </td>
                    <td>
                        <p><a href={item.link}>{item.link}</a></p>
                    </td>
                </tr>
            } else {
                return <tr key={item.title}>
                    <td>
                        <p>{item.title}</p>
                    </td>
                    <td>
                        <p>{item.description}</p>
                    </td>
                </tr>
            }
        });
        return <div className='section contact'>
            <table>
                <tbody>
                {items}
                </tbody>
            </table>
        </div>
    }
}

export default Contact;