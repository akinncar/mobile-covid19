import React from "react";
import { useSelector } from "react-redux";

import Routes from "./src/routes";

export default function Index() {
  const signed = useSelector(state => state.auth.signed);

  return <Routes signed={signed} />;
}
