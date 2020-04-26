import React from 'react';
import ReactDOM from 'react-dom';
import {
    HashRouter,
    Switch,
    Route,
    Redirect
} from './react-router-dom';
import App from './App';
import PageOne from './PageOne';
import PageTwo from './PageTwo';

ReactDOM.render(
    <React.StrictMode>
        <HashRouter>
            <Switch>
                <Route path="/app" component={ App } />
                <Route path="/page-one" component={ () => <PageOne /> } />
                <Route path="/page-two" component={ () => <PageTwo /> } />
                <Route path="/app" component={ App } />
                <Redirect to="/app" />
            </Switch>
        </HashRouter>
    </React.StrictMode>,
    document.getElementById('root')
);