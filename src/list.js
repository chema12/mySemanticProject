import React from 'react';
import PropTypes from "prop-types";

const List = props => {    
    const pad = props.level * 30;

    if (props.mainItem) {
        return <div className="mainItem">{props.etiqueta}</div>;
    } else {
        return <div className="secondaryItem" style={{paddingLeft: pad+'px'}}>{props.etiqueta}</div>;
    }
};

List.propTypes = {
    level: PropTypes.number
};
List.defaultProps  = {
    level: 1
};

export default List;