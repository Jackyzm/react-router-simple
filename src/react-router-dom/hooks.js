import React from 'react';
import { RouterContext } from './HashRouter';

const useHistory = () => {
    const useContext = React.useContext;
    return useContext(RouterContext);
}

const useLocation = () => {
    const useContext = React.useContext;
    return useContext(RouterContext).location;
}

export {
    useHistory,
    useLocation
};