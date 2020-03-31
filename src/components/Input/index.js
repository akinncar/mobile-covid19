import React from "react";
import { View } from "react-native";

import { TextInput } from "./styles";

export default function Input({ ...parent }) {
  return (
    <>
      <TextInput {...parent} />
    </>
  );
}
