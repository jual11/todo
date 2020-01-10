import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import { Provider } from 'react-redux';
import reducer from './reducers';
import './index.css';
import { createStore, applyMiddleware, compose} from 'redux';
import reduxThunk from 'redux-thunk';


const composeE = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(
    reducer,
    composeE(applyMiddleware(reduxThunk))
);

ReactDOM.render(
<Provider store={store}>
    <App />
</Provider>,
 document.getElementById('root'));


