import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<App timer={1} cardsNum={4} count={3} />, document.getElementById('root'));
registerServiceWorker();
