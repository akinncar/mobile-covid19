import React, { useState, useEffect } from "react";
import { View } from "react-native";
import Constants from "expo-constants";

import { StyledMapView } from "./styles";
import { Icon } from "@expo/vector-icons";

import { Marker } from "react-native-maps";
import { apiUserList } from "../../services/api";
import { getLocation } from "../../utils/LocationUtils";

function Map() {
  const [location, setLocation] = useState(null);
  const [userList, setUserList] = useState([]);

  useEffect(() => {
    loadLocation();
  }, []);

  useEffect(() => {
    if (location) {
      loadUserList(location);
    }
  }, [location]);

  async function loadLocation() {
    let location = await getLocation();
    setLocation(location);
  }

  async function loadUserList(location) {
    let latitude = location.coords.latitude;
    let longitude = location.coords.longitude;
    const resp = await apiUserList({ latitude, longitude });
    setUserList(resp.data);
  }

  return (
    <View>
      <StyledMapView>
        {userList.length > 0 &&
          userList.map(user => (
            <Marker
              pinColor="red"
              // icon={}
              key={user.id}
              coordinate={{
                longitude: user.location && user.location.coordinates[0],
                latitude: user.location && user.location.coordinates[1]
              }}
            />
          ))}
      </StyledMapView>
    </View>
  );
}

export default Map;
