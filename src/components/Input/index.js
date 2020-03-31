import React from "react";

import { TextInput } from "./styles";

export default function Input({ ...parent }) {
  return (
    <>
      <TextInput {...parent} />
    </>
  );
}
