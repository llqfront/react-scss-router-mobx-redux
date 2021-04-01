import React from 'react';

import { BrowserRouter, HashRouter, Route, Link, Switch } from 'react-router-dom';
import { Provider } from 'mobx-react';

import App from './App.js';
import firstStore from './store/store';
import newObs from './store/newobs';
// const cnstore = new cnStore();
const stores = {
  first: new firstStore(),
  newobs: new newObs(),
  // ...other stores
};

const Router = () => (
    <BrowserRouter>
        <Provider {...stores}>
            <App/>
        </Provider>
    </BrowserRouter>
)
export default Router;
