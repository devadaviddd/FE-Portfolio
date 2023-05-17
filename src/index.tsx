import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from 'react-redux';
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import "./index.css";
import { APIService, setUpInterceptors } from "./axios/client";
import { store } from "./store/store";

setUpInterceptors(store, APIService);

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <Provider store={store}>
    <App />
  </Provider>
);

reportWebVitals();
