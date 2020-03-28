import React from "react";
import { Slider, Text } from "react-native";

import { Container, LabelSelect } from "./styles";

function SymptomIntensity({ children, title, onChangeValue, value }) {
  return (
    <Container>
      <LabelSelect>
        <Text>{title}</Text>
        <Text>{value}</Text>
      </LabelSelect>
      <Slider
        value={value}
        onValueChange={v => onChangeValue(v)}
        minimumValue={1}
        maximumValue={5}
        step={1}
        minimumTrackTintColor="#008B8B"
        thumbTintColor="#008B8B"
      />
    </Container>
  );
}

export default SymptomIntensity;
