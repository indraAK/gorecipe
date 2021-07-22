import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { BookmarkContextProvider } from "./contexts/BookmarkContext";

ReactDOM.render(
  <BookmarkContextProvider>
    <App />
  </BookmarkContextProvider>,
  document.getElementById("root")
);
