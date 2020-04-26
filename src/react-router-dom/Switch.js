import React from 'react';
import { RouterContext } from './HashRouter';

const Switch = ({ children }) =>{
    const { Consumer } = RouterContext;
    return (
        <Consumer>
            {value => {
                const { location: { pathname } } = value;
                let child = null;
                for (const item of children) {
                    const { props: { path, to } } = item;
                    // 检测当前url 与 组件path 返回第一个匹配上的Route，如果有Redirect也直接返回
                    if (pathname.toLowerCase() === (path && path.toLowerCase()) || to) {
                        child = [item];
                        break;
                    }
                }
                return child;
            }}
        </Consumer>
    );
}

export default Switch;