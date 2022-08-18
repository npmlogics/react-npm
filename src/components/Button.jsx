import React from 'react';
const Button = (props) => {
    return (
        <button className={`btn btn--${props.kind} CTA`}
            data-id={props.id}
            type={props.type}
            name={props.name}
            disabled={props.disabled}
            onClick={props.handleClick}>
            <h4>{props.label}</h4>
        </button>
    )
}
export default Button;