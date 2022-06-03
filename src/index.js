import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import { createStore } from 'redux';
import App from './App';
import './index.css';
import reducers from './reducers/reducers';

const root = ReactDOM.createRoot(document.getElementById('root'));
const store = createStore(reducers);
root.render(
	<BrowserRouter>
		<Provider store={store}>
			<App />
		</Provider>
	</BrowserRouter>
);
