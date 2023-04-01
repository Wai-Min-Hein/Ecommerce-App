import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import StateContextProvider from "./service/content/Context";
import { store } from "./service/store/store";
import { Provider } from "react-redux";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <Provider store={store}>
      <StateContextProvider>
          <App />
        </StateContextProvider>
      </Provider>
    </BrowserRouter>
  </React.StrictMode>
);
