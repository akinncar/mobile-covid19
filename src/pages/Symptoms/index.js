import React, { useState } from "react";

import { SafeAreaView } from "react-native-safe-area-context";

import { Formik, Form, Field } from "formik";
import * as yup from "yup";

import SymptomIntensity from "../../components/SymtomIntensity";

import {
  Container,
  ScrollView,
  FormContainer,
  TextInput,
  GroupSelect,
  LabelSelect,
  Button,
  ButtonText
} from "./styles";

function Symptoms() {
  const [headache, setHeadache] = useState(0);
  const [soreThroat, setSoreThroat] = useState(0);
  const [nauseOrVomiting, setNauseOrVomiting] = useState(0);
  const [musclePain, setMusclePain] = useState(0);
  const [dryCough, setDryCough] = useState(0);
  const [runnyNose, setRunnyNose] = useState(0);
  const [fever, setFever] = useState(0);
  const [shortnessOfBreath, setShortnessOfBreath] = useState(0);
  const [tiredness, setTiredness] = useState(0);

  return (
    <ScrollView style={{ width: "100%" }}>
      <Container>
        <Formik
          initialValues={{ name: "", password: "", age: "" }}
          onSubmit={values => console.log(values)}
        >
          {props => (
            <FormContainer>
              <TextInput
                placeholder="Nome"
                onChangeText={props.handleChange("name")}
                onBlur={props.handleBlur("name")}
                value={props.values.name}
              />

              <TextInput
                placeholder="Idade"
                onChangeText={props.handleChange("age")}
                onBlur={props.handleBlur("age")}
                value={props.values.age}
              />

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
                value={dryCough}
                onChangeValue={setMusclePain}
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

              <Button>
                <ButtonText>Enviar</ButtonText>
              </Button>
            </FormContainer>
          )}
        </Formik>
      </Container>
    </ScrollView>
  );
}

export default Symptoms;
