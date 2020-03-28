import React from "react";
import { StatusBar } from "react-native";
import Routes from "./src/routes";

export default function App() {
  console.disableYellowBox = true;
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <Routes />
    </>
  );
}
