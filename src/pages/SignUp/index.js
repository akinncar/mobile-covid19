import React from "react";
import { View, Text } from "react-native";

import Input from "../../components/Input";
import Button from "../../components/Button";

import { Container } from "./styles";

export default function SignUp({ navigation }) {
  return (
    <Container>
      <Input placeholder="Nome" />
      <Input placeholder="Idade" keyboardType="numeric" maxLength={2} />
      <Input placeholder="Senha" secureTextEntry={true} />
      <Input placeholder="Confirmar Senha" secureTextEntry={true} />
      <Button onPress={() => navigation.navigate("BottomTab")}>
        CADASTRAR
      </Button>
    </Container>
  );
}
