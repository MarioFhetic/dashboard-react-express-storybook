import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux"; // Provider va nous permettre d'acceder à notre Store de partout
import { createStore, applyMiddleware, compose } from "redux"; // Need pour utiliser redux 
import thunk from "redux-thunk";
import App from "./App";

import reducers from './reducers'; // les reducers vont nous permettre des faire des actions tel que create, delete, etc..

const store = createStore(reducers, compose(applyMiddleware(thunk))) // le store est la variable que l'on donne au props au Provider qui contient nos data

ReactDOM.render
(<Provider store = {store}><App /></Provider> , document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
  