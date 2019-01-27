import React from 'react';

const List = props => {
    if (props.mainItem) {
        return <div className="mainItem">{props.etiqueta}</div>;
    } else {
        return <div className="secondaryItem">{props.etiqueta}</div>;
    }
};

export default List;