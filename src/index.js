import React from 'react';
import { createRoot } from 'react-dom/client';

import App from './App';
import reportWebVitals from './reportWebVitals';

import { Provider } from 'react-redux';
import { store } from './state/store';

//? React 18...
const Root = createRoot(document.getElementById('root'));

Root.render(
    <React.Fragment>
        {/* We should wrap the part we want to use redux in with a provider to access the store  */}
        <Provider store={store}>
            <App />
        </Provider>
    </React.Fragment>
);

reportWebVitals();
