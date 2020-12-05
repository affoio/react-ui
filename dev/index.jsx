import React from 'react';
import ReactDOM from 'react-dom';

import App from './App';

const MOUNT_NODE = document.getElementById('root');

const renderApp = () => {
  ReactDOM.render(<App />, MOUNT_NODE);
};

if (module.hot) {
  module.hot.accept(['./App'], () => {
    ReactDOM.unmountComponentAtNode(MOUNT_NODE);
    renderApp();
  });
}

renderApp();
