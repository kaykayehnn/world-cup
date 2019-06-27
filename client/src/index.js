import React from "react";
import ReactDOM from "react-dom";
import "normalize.css";

import Root from "./containers/Root";
import configureStore from "./store/configureStore";
import { getSession } from "./utilities/storage";
import "./style.css";

const initialState = { auth: getSession() };
const store = configureStore(initialState);

ReactDOM.render(<Root store={store} />, document.getElementById("root"));
