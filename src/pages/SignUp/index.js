import React, { useState } from "react";
import { useDispatch } from "react-redux";

import Input from "../../components/Input";
import InputMask from "../../components/InputMask";
import Button from "../../components/Button";

import { Container } from "./styles";

import { userCreate } from "../../store/modules/user/actions";

export default function SignUp({ navigation }) {
  const dispatch = useDispatch();

  const [email, setEmail] = useState("leonardo@gmail.com");
  const [cpf, setCpf] = useState("88888888888");
  const [password, setPassword] = useState("teste");
  const [confirmPassword, setConfirmPassword] = useState("teste");

  function signUp() {
    try {
      dispatch(
        userCreate({
          email,
          cpf,
          password
        })
      );
      navigation.navigate("Login");
    } catch (e) {
      // saving error
    }
  }

  function handleSignUp() {
    password === confirmPassword && signUp();
  }

  return (
    <Container>
      <Input
        placeholder="E-mail"
        value={email}
        onChangeText={text => {
          setEmail(text);
        }}
        autoFocus
        autoCorrect={false}
        autoCapitalize="none"
      />
      <InputMask
        placeholder="CPF"
        type={"cpf"}
        value={cpf}
        includeRawValueInChangeText={true}
        onChangeText={(maskedText, rawText) => {
          setCpf(rawText);
        }}
      />
      <Input
        placeholder="Senha"
        secureTextEntry={true}
        value={password}
        onChangeText={text => {
          setPassword(text);
        }}
      />
      <Input
        placeholder="Confirmar Senha"
        secureTextEntry={true}
        value={confirmPassword}
        onChangeText={text => {
          setConfirmPassword(text);
        }}
      />
      <Button onPress={() => handleSignUp()}>CADASTRAR</Button>
    </Container>
  );
}
