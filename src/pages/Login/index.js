import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { TouchableOpacity } from "react-native-gesture-handler";
import { useSelector } from "react-redux";

import { Container, SignUp } from "./styles";
import Input from "../../components/Input";
import Button from "../../components/Button";

import { signInRequest } from "../../store/modules/auth/actions";

export default function Login({ navigation }) {
  const dispatch = useDispatch();
  const auth = useSelector(state => state.auth);

  const [email, setEmail] = useState("");
  const [password, setPassowrd] = useState("");

  useEffect(() => {
    auth.signed && navigation.navigate("Map");
  });

  function signIn() {
    try {
      dispatch(signInRequest(email, password));
    } catch (e) {}
  }

  function handleSignIn() {
    signIn();
  }

  return (
    <Container>
      <Input
        placeholder="E-mail"
        value={email}
        onChangeText={text => setEmail(text)}
        autoCapitalize="none"
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
