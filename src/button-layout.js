import React, { Component } from 'react';
import './list-layout.css';

class ButtonLayout extends Component {
    render() {
        return (
            <div className='list-button'>
                {this.props.children}
            </div>            
        );
    }
}

export default ButtonLayout;
