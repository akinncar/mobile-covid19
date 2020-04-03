import React from "react";
import { Alert } from "react-native";
import * as Location from "expo-location";
import * as Permissions from "expo-permissions";

export async function getLocation() {
  let { status } = await Permissions.askAsync(Permissions.LOCATION);
  if (status !== "granted") {
    await Permissions.askAsync(Permissions.LOCATION);
    Alert.alert(
      "Não foi possível utilizar sua localização",
      "Verifique em suas configurações se a localização está autorizada para este aplicativo"
    );
  }

  let location = await Location.getCurrentPositionAsync({});
  return location;
}
