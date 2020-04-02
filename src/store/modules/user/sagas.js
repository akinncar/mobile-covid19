import { call, put, all, takeLatest } from "redux-saga/effects";
import { Alert } from "react-native";
import { apiSignUp } from "../../../services/api";

export function* userCreate({ user }) {
  try {
    const response = yield call(apiSignUp, user);
    // console.log("response", response);
  } catch (error) {
    Alert.alert(
      "Não foi possível cadastrar o usuário",
      error.response.data.error
    );
  }
}

export default all([takeLatest("@user/USER_CREATE", userCreate)]);
