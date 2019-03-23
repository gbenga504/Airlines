import React from "react";
import { createStore, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import thunk from "redux-thunk";

import "./App.css";
import Routes from "./Routes";

import { appReducers } from "./store/reducers";

const store = createStore(appReducers, applyMiddleware(thunk));

const App = () => (
  <Provider store={store}>
    <Routes />
  </Provider>
);

export default App;
