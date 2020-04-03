import React from "react";
import { PersistGate } from "redux-persist/integration/react";
import { Provider } from "react-redux";
import { StatusBar } from "react-native";

import { store, persistor } from "./src/store";
import Index from "./index";

export default function App() {
  console.disableYellowBox = true;
  return (
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <StatusBar barStyle="dark-content" />
        <Index />
      </PersistGate>
    </Provider>
  );
}
