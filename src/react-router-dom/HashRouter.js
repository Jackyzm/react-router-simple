import React, { useState, useEffect } from 'react';
import { createHashHistory } from 'history';

const RouterContext = React.createContext();

const HashRouter = ({ children }) => {
    const history = createHashHistory();
    // console.log(history);
    const [myHistory, setMyHistory] = useState(history);

    useEffect(() => {
        const { listen } = history;
        listen((location, action)=>{
            setMyHistory({...myHistory, location, action})
        });
    }, [])
    
    const { Provider } = RouterContext;
    return (
        <Provider value={ myHistory }>
            { children }
        </Provider>
    );
}

export default HashRouter;
export { RouterContext }