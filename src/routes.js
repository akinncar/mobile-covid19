import "react-native-gesture-handler";
import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

import LoginScreen from "./pages/Login";
import MapScreen from "./pages/Map";
import SymptomsScreen from "./pages/Symptoms";

function BottomTab() {
  return (
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
  );
}

export default function Routes() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen
          name="Login"
          component={LoginScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="BottomTab"
          component={BottomTab}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
