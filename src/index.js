import React from 'react';
import ReactDOM from 'react-dom';

import App from './App';
import storageUtil from './utils/storageUtil';
import memoryUtil from './utils/memoryUtil';

const user = storageUtil.getUser();
memoryUtil.user = user;

ReactDOM.render(<App/>, document.getElementById('root'));