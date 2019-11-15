import React from 'react'
import ReactDOM from 'react-dom'

const title = 'React With Webpack and Babel With Hot Reloading';

ReactDOM.render(
    <div>{title}</div>,
    document.getElementById('app')
);

module.hot.accept();
