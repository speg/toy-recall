import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

if (window.fetch) {
	ReactDOM.render(<App />, document.getElementById('root'));
} else {
	const p = document.createElement('p');
	p.innerText = 'Your browser is not supported.';
	document.body.appendChild(p);
}

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
