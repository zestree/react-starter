import * as React from 'react';
import * as ReactDOM from 'react-dom';
import App from './components/App';

document.addEventListener("DOMContentLoaded", function(event) { 
    ReactDOM.render(React.createElement(App), document.getElementById('app'));
});