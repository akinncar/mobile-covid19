import React, { useState, useEffect } from "react";
import { Alert } from "react-native";
import { useSelector } from "react-redux";

import Input from "../../components/Input";
import Button from "../../components/Button";
import SymptomIntensity from "../../components/SymtomIntensity";

import { Container, ScrollView, Content } from "./styles";

import { apiSymptomReport } from "../../services/api";
import { getLocation } from "../../utils/LocationUtils";

function Symptoms() {
  const user = useSelector(state => state.auth.user);

  const [name, setName] = useState("");
  const [age, setAge] = useState();
  const [headache, setHeadache] = useState(0);
  const [soreThroat, setSoreThroat] = useState(0);
  const [nauseOrVomiting, setNauseOrVomiting] = useState(0);
  const [musclePain, setMusclePain] = useState(0);
  const [dryCough, setDryCough] = useState(0);
  const [runnyNose, setRunnyNose] = useState(0);
  const [tiredness, setTiredness] = useState(0);
  const [fever, setFever] = useState(0);
  const [shortnessOfBreath, setShortnessOfBreath] = useState(0);
  const [observation, setObservation] = useState("");
  const [location, setLocation] = useState();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    loadLocation();
  });

  async function loadLocation() {
    let location = await getLocation();
    setLocation(location);
  }

  async function handleSubmit() {
    const response = await apiSymptomReport({
      userId: user.id,
      name,
      age,
      headache,
      soreThroat,
      nauseOrVomiting,
      musclePain,
      dryCough,
      runnyNose,
      fever,
      shortnessOfBreath,
      tiredness,
      location,
      observation
    });
    await Alert.alert(response.data);
    setLoading(false);
  }

  return (
    <ScrollView style={{ width: "100%" }}>
      <Container>
        <Content>
          <Input placeholder="Nome" onChangeText={setName} value={name} />

          <Input placeholder="Idade" onChangeText={setAge} value={age} />

          <SymptomIntensity
            title="Dor de Cabeça"
            value={headache}
            onChangeValue={setHeadache}
          />
          <SymptomIntensity
            title="Dor de Garganta"
            value={soreThroat}
            onChangeValue={setSoreThroat}
          />
          <SymptomIntensity
            title="Náuseas/Vômitos"
            value={nauseOrVomiting}
            onChangeValue={setNauseOrVomiting}
          />
          <SymptomIntensity
            title="Dores musculares"
            value={musclePain}
            onChangeValue={setMusclePain}
          />
          <SymptomIntensity
            title="Tosse Seca"
            value={dryCough}
            onChangeValue={setDryCough}
          />
          <SymptomIntensity
            title="Coriza"
            value={runnyNose}
            onChangeValue={setRunnyNose}
          />

          <SymptomIntensity
            title="Cansaço"
            value={fever}
            onChangeValue={setFever}
          />
          <SymptomIntensity
            title="Febre"
            value={tiredness}
            onChangeValue={setTiredness}
          />
          <SymptomIntensity
            title="Falta de Ar"
            value={shortnessOfBreath}
            onChangeValue={setShortnessOfBreath}
          />
          <Input
            placeholder="Observação"
            value={observation}
            onChangeText={text => {
              setObservation(text);
            }}
            style={{ marginTop: 0 }}
          />

          <Button
            onPress={() => !loading && (setLoading(true), handleSubmit())}
          >
            {loading ? "Enviando..." : "Enviar"}
          </Button>
        </Content>
      </Container>
    </ScrollView>
  );
}

export default Symptoms;
