import React, { useState } from "react";
import { Alert, TouchableOpacity } from "react-native";
import { useDispatch } from "react-redux";

import Input from "../../components/Input";
import InputMask from "../../components/InputMask";
import Button from "../../components/Button";

import { Container, SignIn } from "./styles";

import { userCreate } from "../../store/modules/user/actions";
import { validateCpf } from "../../utils/ValidateUtils";

export default function SignUp({ navigation }) {
  const dispatch = useDispatch();

  const [email, setEmail] = useState("");
  const [cpf, setCpf] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  function signUp() {
    dispatch(
      userCreate({
        email,
        cpf,
        password
      })
    );
    navigation.navigate("Login");
  }

  function handleSignUp() {
    if (!email) {
      return Alert.alert("Você precisa preencher o campo e-mail");
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      return Alert.alert("O e-mail não é válido");
    } else if (!cpf) {
      return Alert.alert("Você precisa preencher o campo CPF");
    } else if (!validateCpf(cpf)) {
      return Alert.alert("O CPF não é válido");
    } else if (!password) {
      return Alert.alert("A senha é muito fraca");
    } else if (password !== confirmPassword) {
      return Alert.alert("As senhas não conferem");
    } else {
      signUp();
    }
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
      <TouchableOpacity onPress={() => navigation.navigate("Login")}>
        <SignIn>{`Já possui cadastro?\n Faça o login clicando aqui`}</SignIn>
      </TouchableOpacity>
    </Container>
  );
}
