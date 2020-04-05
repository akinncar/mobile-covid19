import React, { useState } from "react";
import { Text } from "react-native";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";

import { Container } from "./styles";
import Button from "../../components/Button";

import { signOut } from "../../store/modules/auth/actions";

export default function Account({ navigation }) {
  const dispatch = useDispatch();
  const auth = useSelector(state => state.auth);

  async function logOut() {
    await dispatch(signOut());
    await navigation.navigate("SignIn");
  }

  function handleSignOut() {
    logOut();
  }

  return (
    <Container>
      {/* <Text>{auth.signed.toString()}</Text> */}
      <Button onPress={() => handleSignOut()}>Sair</Button>
    </Container>
  );
}
