import React,{ useEffect } from 'react';
import { RouterContext } from './HashRouter';

const Com = ({ history, to }) => {
    useEffect(() => {
        const { replace, location: { pathname } } = history;
        if (pathname.toLowerCase() !== to.toLowerCase()) replace(to);
    }, []);
    return null;
};

const Redirect = ({ to }) => {
    const { Consumer } = RouterContext;

    return (
        <Consumer>
            {value => {
                // console.log(value);
                const { location:{ pathname } } = value;
                if (pathname.toLowerCase() === to.toLowerCase()) return null;
                return <Com history={value} to={to}/>
            }}
        </Consumer>
    );
}

export default Redirect;