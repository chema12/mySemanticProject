import React, { Component } from 'react';

class ListLayout extends Component {
    render() {
        return (
            <div>
                {this.props.children}
            </div>            
        );
    }
}

export default ListLayout;
