import React, {Component} from 'react';
import logo from './../react2.png'

class Home extends Component {
    render() {
        return (
            <div className='homeBlock'>
                <img src={logo} alt="logoReact"/>
            </div>
        );
    }
}

export default Home;
