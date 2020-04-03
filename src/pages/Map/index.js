import React, { useState, useEffect } from "react";
import { View, Platform, Alert } from "react-native";
import Constants from "expo-constants";

import { StyledMapView } from "./styles";
import { Marker } from "react-native-maps";

function Map() {
  return (
    <View>
      <StyledMapView>
        <Marker
          pinColor="red"
          // icon={}
          coordinate={
            {
              // longitude: location && location.coords.longitude,
              // latitude: location && location.coords.latitude
            }
          }
        />
      </StyledMapView>
    </View>
  );
}

export default Map;
