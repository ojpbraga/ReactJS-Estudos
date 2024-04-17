import somar from './somar.jsx';
console.log(somar(2, 3));

import ReactDom from 'react-dom/client';
import React from 'react';
import App from './App.jsx';

ReactDom.createRoot(document.getElementById('root')).render(<App/>);