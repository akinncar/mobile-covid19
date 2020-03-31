import React, { useState } from "react";

import Input from "../../components/Input";
import Button from "../../components/Button";
import SymptomIntensity from "../../components/SymtomIntensity";

import { Container, ScrollView, Content } from "./styles";

function Symptoms() {
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [headache, setHeadache] = useState(0);
  const [soreThroat, setSoreThroat] = useState(0);
  const [nauseOrVomiting, setNauseOrVomiting] = useState(0);
  const [musclePain, setMusclePain] = useState(0);
  const [dryCough, setDryCough] = useState(0);
  const [runnyNose, setRunnyNose] = useState(0);
  const [fever, setFever] = useState(0);
  const [shortnessOfBreath, setShortnessOfBreath] = useState(0);
  const [tiredness, setTiredness] = useState(0);

  function handleSubmit() {}

  return (
    <ScrollView style={{ width: "100%" }}>
      <Container>
        <Content>
          <Input placeholder="Nome" onChangeText={setName} value={name} />

          <Input placeholder="Idade" onChangeText={setAge} value={age} />

          <SymptomIntensity
            title="Nariz escorrendo"
            value={headache}
            onChangeValue={setHeadache}
          />
          <SymptomIntensity
            title="Nariz escorrendo"
            value={soreThroat}
            onChangeValue={setSoreThroat}
          />
          <SymptomIntensity
            title="Nariz escorrendo"
            value={nauseOrVomiting}
            onChangeValue={setNauseOrVomiting}
          />
          <SymptomIntensity
            title="Nariz escorrendo"
            value={musclePain}
            onChangeValue={setMusclePain}
          />
          <SymptomIntensity
            title="Nariz escorrendo"
            value={dryCough}
            onChangeValue={setDryCough}
          />
          <SymptomIntensity
            title="Nariz escorrendo"
            value={runnyNose}
            onChangeValue={setRunnyNose}
          />
          <SymptomIntensity
            title="Nariz escorrendo"
            value={fever}
            onChangeValue={setFever}
          />
          <SymptomIntensity
            title="Nariz escorrendo"
            value={shortnessOfBreath}
            onChangeValue={setShortnessOfBreath}
          />
          <SymptomIntensity
            title="Nariz escorrendo"
            value={tiredness}
            onChangeValue={setTiredness}
          />

          <Button onPress={() => handleSubmit()}>Enviar</Button>
        </Content>
      </Container>
    </ScrollView>
  );
}

export default Symptoms;
