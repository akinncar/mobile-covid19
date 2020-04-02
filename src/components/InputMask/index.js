import React from "react";

import { TInputMask } from "./styles";

export default function InputMask({ ...parent }) {
  return (
    <>
      <TInputMask {...parent} underlineColorIos="transparent" />
    </>
  );
}
