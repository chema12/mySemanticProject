import React from 'react';

const Button = props => <div><button className={props.className} onClick={props.onClick}>{props.etiqueta}</button></div>

export default Button;