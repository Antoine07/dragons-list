import React from 'react'
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import reducerDragon from './reducers/dragons';

import App from './components/App';
import 'bootstrap/dist/css/bootstrap.css';

const store = createStore(reducerDragon);

const render = () => ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
)

render();