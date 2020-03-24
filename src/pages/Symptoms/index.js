import React, { useState } from "react";
import { View, TextInput, StyleSheet, Slider, Text } from "react-native";

import { SafeAreaView } from "react-native-safe-area-context";

import { Formik, Form, Field } from "formik";
import * as yup from "yup";

import {
  Container,
  FormContainer,
  GroupSelect,
  LabelSelect,
  Button,
  ButtonText
} from "./styles";

function Symptoms() {
  const [selectNose, setSelectNose] = useState(0);

  return (
    <Container>
      <Formik
        initialValues={{ name: "", password: "", age: "" }}
        onSubmit={values => console.log(values)}
      >
        {props => (
          <FormContainer>
            <TextInput
              style={styles.TextInput}
              placeholder="Name"
              onChangeText={props.handleChange("name")}
              onBlur={props.handleBlur("name")}
              value={props.values.name}
            />

            <TextInput
              style={styles.TextInput}
              placeholder="Age"
              onChangeText={props.handleChange("age")}
              onBlur={props.handleBlur("age")}
              value={props.values.age}
            />

            <GroupSelect>
              <LabelSelect>
                <Text>Nariz escorrendo</Text>
                <Text>{selectNose}</Text>
              </LabelSelect>
              <Slider
                value={selectNose}
                onValueChange={v => setSelectNose(v)}
                minimumValue={1}
                maximumValue={5}
                step={1}
                minimumTrackTintColor="#008B8B"
                thumbTintColor="#008B8B"
              />
            </GroupSelect>

            <GroupSelect>
              <LabelSelect>
                <Text>Dor de Garganta</Text>
                <Text>{selectNose}</Text>
              </LabelSelect>
              <Slider
                value={selectNose}
                onValueChange={v => setSelectNose(v)}
                minimumValue={1}
                maximumValue={5}
                step={1}
                minimumTrackTintColor="#008B8B"
                thumbTintColor="#008B8B"
              />
            </GroupSelect>

            <GroupSelect>
              <LabelSelect>
                <Text>Tosse</Text>
                <Text>{selectNose}</Text>
              </LabelSelect>
              <Slider
                value={selectNose}
                onValueChange={v => setSelectNose(v)}
                minimumValue={1}
                maximumValue={5}
                step={1}
                minimumTrackTintColor="#008B8B"
                thumbTintColor="#008B8B"
              />
            </GroupSelect>

            <GroupSelect>
              <LabelSelect>
                <Text>Febre</Text>
                <Text>{selectNose}</Text>
              </LabelSelect>
              <Slider
                value={selectNose}
                onValueChange={v => setSelectNose(v)}
                minimumValue={1}
                maximumValue={5}
                step={1}
                minimumTrackTintColor="#008B8B"
                thumbTintColor="#008B8B"
              />
            </GroupSelect>

            <Button>
              <ButtonText>Enviar</ButtonText>
            </Button>
          </FormContainer>
        )}
      </Formik>
    </Container>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    backgroundColor: "#ecf0f1",
    padding: 8
  },
  TextInput: {
    backgroundColor: "#f5f6f7",
    padding: 10,
    margin: 10
  }
});

export default Symptoms;
