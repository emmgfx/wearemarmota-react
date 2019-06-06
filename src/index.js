import React from 'react';

// Change ReactDOM from react-dom, to render from react-snapshot
// to use the react-snapshot.
// import ReactDOM from 'react-dom';
import { render } from 'react-snapshot';

import App from './App';
import * as serviceWorker from './serviceWorker';

// Use render instead of ReactDOM.render
// to use the react spanshot
render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
