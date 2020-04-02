import React from "react";

import { TInput } from "./styles";

export default function Input({ ...parent }) {
  return (
    <>
      <TInput {...parent} underlineColorIos="transparent" />
    </>
  );
}
