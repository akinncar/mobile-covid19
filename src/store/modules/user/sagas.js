import { call, put, all, takeLatest } from "redux-saga/effects";
import { Alert } from "react-native";
import { apiSignUp } from "../../../services/api";

export function* userCreate({ user }) {
  try {
    yield call(apiSignUp, user);
    Alert.alert(
      "Cadastro completo!",
      "Faça o login com a conta que você acabou de criar"
    );
  } catch (error) {
    Alert.alert(
      "Não foi possível efetuar o cadastro",
      error.response.data.error
    );
  }
}

export default all([takeLatest("@user/USER_CREATE", userCreate)]);
