import React from "react";
import { View, Text } from "react-native";

import Input from "../../components/Input";
import Button from "../../components/Button";
import { TouchableOpacity } from "react-native-gesture-handler";

import { Container, SignUp } from "./styles";

export default function Login({ navigation }) {
  return (
    <Container>
      <Input placeholder="Nome" />
      <Input placeholder="Senha" secureTextEntry={true} />
      <Button>Login</Button>
      <TouchableOpacity onPress={() => navigation.navigate("SignUp")}>
        <SignUp>ou cadastres-se aqui</SignUp>
      </TouchableOpacity>
    </Container>
  );
}
