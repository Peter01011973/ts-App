import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import store, { sagaMiddleware } from './store/storeConfig';
import rootSaga from './store/saga/rootSaga';

import App from './App';

const app = (
    <Provider store={store}>
        <BrowserRouter>
            <App />
        </BrowserRouter>
    </Provider>
)

sagaMiddleware.run(rootSaga);

ReactDOM.render(app, document.getElementById('root'));
