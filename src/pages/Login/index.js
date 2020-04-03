import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { TouchableOpacity } from "react-native-gesture-handler";

import { Container, SignUp } from "./styles";
import Input from "../../components/Input";
import Button from "../../components/Button";

import { signInRequest } from "../../store/modules/auth/actions";

export default function Login({ navigation }) {
  const dispatch = useDispatch();

  const [email, setEmail] = useState("");
  const [password, setPassowrd] = useState("");

  function signIn() {
    try {
      dispatch(signInRequest(email, password));
    } catch (e) {
      // saving error
    }
  }

  function handleSignIn() {
    signIn();
  }

  return (
    <Container>
      <Input
        placeholder="Nome"
        value={email}
        onChangeText={text => setEmail(text)}
      />
      <Input
        placeholder="Senha"
        secureTextEntry={true}
        value={password}
        onChangeText={text => setPassowrd(text)}
      />
      <Button onPress={() => handleSignIn()}>Login</Button>
      <TouchableOpacity onPress={() => navigation.navigate("SignUp")}>
        <SignUp>ou cadastres-se aqui</SignUp>
      </TouchableOpacity>
    </Container>
  );
}
