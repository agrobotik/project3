import { store } from "./data/data";

import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
export function re_render_tree(data) {
    root.render(
        <React.StrictMode>
            <App data={data} add_post={store.add_post.bind(store)} add_message={store.add_message.bind(store)} />
        </React.StrictMode>
    );
}

store.re_render_tree(store.get_data());
store.subscribe(store.re_render_tree);
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
