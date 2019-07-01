import React from "react";
import ReactDOM from "react-dom";
import "normalize.css";

import Root from "./containers/Root";
import configureStore from "./store/configureStore";
import { getSession } from "./utilities/storage";
import { registerServiceWorker } from "./utilities/serviceWorker";
import "./style.css";

const initialState = { auth: getSession() };
const store = configureStore(initialState);

registerServiceWorker();

ReactDOM.render(<Root store={store} />, document.getElementById("root"));
