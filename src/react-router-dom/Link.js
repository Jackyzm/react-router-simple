import React from 'react';
import { RouterContext } from './HashRouter';

const Link = ({ to, className = '', replace, children, ...props}) => {
    const linkClick = (history) =>{
        if (replace) {
            history.replace(replace);
        } else {
        history.push(to);
        }
    }
    const { Consumer } = RouterContext;

    return (
        <Consumer>
            {value => {
                return <a {...props} onClick={()=> linkClick(value) }>{children}</a>
            }}
        </Consumer>
    );
}

export default Link;