import React from "react";
import { StatusBar } from "react-native";

import { Provider } from "react-redux";
import store from "./src/store";

import Routes from "./src/routes";

export default function App() {
  console.disableYellowBox = true;
  return (
    <Provider store={store}>
      <StatusBar barStyle="dark-content" />
      <Routes />
    </Provider>
  );
}
