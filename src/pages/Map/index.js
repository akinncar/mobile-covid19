import React, { useState, useEffect } from "react";
import { View, Platform } from "react-native";
import Constants from "expo-constants";

import * as Location from "expo-location";
import * as Permissions from "expo-permissions";

import { StyledMapView } from "./styles";
import { Marker } from "react-native-maps";

function Map() {
  const [location, setLocation] = useState();

  useEffect(() => {
    if (Platform.OS === "android" && !Constants.isDevice) {
      this.setState({
        errorMessage:
          "Oops, this will not work on Sketch in an Android emulator. Try it on your device!"
      });
    } else {
      getLocationAsync();
    }
  });

  async function getLocationAsync() {
    let { status } = await Permissions.askAsync(Permissions.LOCATION);
    if (status !== "granted") {
      await Permissions.askAsync(Permissions.LOCATION);
      this.setState({
        errorMessage: "Você precisa fornecer permissões de localização"
      });
    }

    let location = await Location.getCurrentPositionAsync({});
    setLocation(location);
  }

  return (
    <View>
      <StyledMapView>
        <Marker
          pinColor="red"
          // icon={}
          coordinate={{
            longitude: location && location.coords.longitude,
            latitude: location && location.coords.latitude
          }}
        />
      </StyledMapView>
    </View>
  );
}

export default Map;
