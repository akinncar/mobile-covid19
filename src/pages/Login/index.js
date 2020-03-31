import React from "react";
import { View, Text } from "react-native";

import { Container } from "./styles";
import Input from "../../components/Input";
import Button from "../../components/Button";
import { TouchableOpacity } from "react-native-gesture-handler";

export default function Login() {
  return (
    <Container>
      <Input placeholder="Nome" />
      <Input placeholder="Senha" secureTextEntry={true} />
      <Button>Login</Button>
      <TouchableOpacity>
        <Text>ou cadastres-se aqui</Text>
      </TouchableOpacity>
    </Container>
  );
}
