import React from "react";
import ReactDOM from "react-dom";
import SearchModal from "./components/Search/index.tsx";

const elem = document.createElement("div");
elem.className = "testing";
ReactDOM.render(<SearchModal />, elem);
document.body.appendChild(elem);
