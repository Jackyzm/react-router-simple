import React from 'react';
import {Link} from './react-router-dom'

class App extends React.Component{
    constructor(props){
        super(props);
        this.state = {};
    }
    render(){
        console.log(this.props);
        return (
            <div>
                <div>App</div>
                <Link to="/page-one">跳转page-one</Link>
            </div>
        )
    }
}

export default App;
