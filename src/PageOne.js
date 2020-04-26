import React from 'react';
import { useHistory, useLocation} from './react-router-dom'

const PageOne = ()=>{
    const history = useHistory();
    const location = useLocation();
    console.log(history, location);
    
    return (
        <div>
            <div onClick={() => history.goBack() }>返回</div>
            <div>PageOne</div>
        </div>
    )
}

export default PageOne;
