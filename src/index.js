import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import WebFont from 'webfontloader';

WebFont.load({
    google: {
        families: ['Nunito:ital,wght@0,300;0,400;0,600;0,700;1,300;1,400;1,600', 'sans-serif'],
    }
})

ReactDOM.render(<App />, document.getElementById("root"));