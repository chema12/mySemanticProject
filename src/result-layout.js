import React, { Component } from 'react';
import './list-layout.css';

class ResultLayout extends Component {
    render() {
        return (
            <div className='list-label'>
                {this.props.children}
            </div>            
        );
    }
}

export default ResultLayout;
