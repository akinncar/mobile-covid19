import "react-native-gesture-handler";
import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

import LoginScreen from "./pages/Login";
import SignUpScreen from "./pages/SignUp";
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

function SignIn() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Login"
        component={LoginScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="SignUp"
        component={SignUpScreen}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
}

export default signed => (
  <NavigationContainer>
    <Stack.Navigator
      initialRouteName={signed.signed == true ? "BottomTab" : "SignIn"}
    >
      <Stack.Screen
        name="BottomTab"
        component={BottomTab}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="SignIn"
        component={SignIn}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  </NavigationContainer>
);
