import { Alert } from "react-native";
import { all, call, put, takeLatest, delay } from "redux-saga/effects";

import { api, apiLogin } from "../../../services/api";

import { signInSuccess, signFailure } from "./actions";

export function* signIn(action) {
  try {
    const { email, password } = action.payload;

    const response = yield call(apiLogin, { email, password });

    const { token, user } = response.data;

    api.defaults.headers.Authorization = `Bearer ${token}`;

    yield delay(500);
    yield put(signInSuccess(token, user));
  } catch (error) {
    yield delay(500);
    Alert.alert("Erro no login", "Verifique seus dados!");
    yield put(signFailure());
  }
}

export function* signUp({ payload }) {
  try {
    const { name, email, password } = payload;

    yield call(api.post, "users", {
      name,
      email,
      password
    });
    Alert.alert("Sucesso no cadastro", "Cadastro efetuado com sucesso!");
  } catch (error) {
    Alert.alert("Falha no cadastro", "Verifique seus dados!");
    yield put(signFailure());
  }
}

export function setToken({ payload }) {
  if (!payload) return;

  const { token } = payload.auth;

  if (token) {
    api.defaults.headers.Authorization = `Bearer ${token}`;
  }
}

export default all([
  takeLatest("persist/REHYDRATE", setToken),
  takeLatest("@auth/SIGN_IN_REQUEST", signIn),
  takeLatest("@auth/SIGN_UP_REQUEST", signUp)
]);
