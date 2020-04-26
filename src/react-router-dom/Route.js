import React from 'react';
import { RouterContext } from './HashRouter';

const Route = ({
    path,
    component
}) =>{
    const { Consumer } = RouterContext;

    return (
        <Consumer>
            {value => {
                const Comp = component;
                const { location: { pathname } } = value;
                if (pathname.toLowerCase() !== path.toLowerCase()) return null;
                if (component.props && typeof component !== 'function') throw Error('component props must be a component');
                return <Comp history={value}/>
            }}
        </Consumer>
    );
}

export default Route;