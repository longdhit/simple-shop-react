import React from 'react';
import ReactDOM from 'react-dom';
import ReduxToastr from 'react-redux-toastr'
import App from './app/components/App';
import * as serviceWorker from './serviceWorker';
import {  BrowserRouter  } from 'react-router-dom'
import { Provider } from 'react-redux'
import { initStore } from './app/redux';
import 'react-redux-toastr/lib/css/react-redux-toastr.min.css'
const store = initStore()
const rootEl = document.getElementById('root');

let render = () => {
    ReactDOM.render(
        <Provider store={store}>
            < BrowserRouter  basename="/">
            <ReduxToastr
            position='bottom-right'
            transitionIn='fadeIn'
            transitionOut='fadeOut'
          />
                <App />
            </ BrowserRouter >
        </Provider>, rootEl);
};

if (module.hot) {
    module.hot.accept('./app/components/App', () => {
        setTimeout(render);
    });
}

render();

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.register();
