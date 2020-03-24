import "react-native-gesture-handler";
import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

const Tab = createBottomTabNavigator();

import MapScreen from "./pages/Map";
import SymptomsScreen from "./pages/Symptoms";

export default function Routes() {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen
          name="Map"
          component={MapScreen}
          options={{ title: "Áreas de Risco" }}
        />
        <Tab.Screen
          name="Symptoms"
          component={SymptomsScreen}
          options={{ title: "Meus Sintomas" }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
