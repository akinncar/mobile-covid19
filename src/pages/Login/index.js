import React from "react";
import { View, Text } from "react-native";

import { Container } from "./styles";
import Input from "../../components/Input";

export default function Login() {
  return (
    <Container>
      <Input placeholder="Nome" />
      <Input placeholder="Senha" secureTextEntry={true} />
    </Container>
  );
}
