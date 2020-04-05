import "react-native-gesture-handler";
import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { FontAwesome as Icon } from "@expo/vector-icons";

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

import AccountScreen from "./pages/Account";
import LoginScreen from "./pages/Login";
import SignUpScreen from "./pages/SignUp";
import MapScreen from "./pages/Map";
import SymptomsScreen from "./pages/Symptoms";

function BottomTab() {
  return (
    <Tab.Navigator
      tabBarOptions={{
        activeTintColor: "#008b8b"
      }}
      initialRouteName="Map"
    >
      <Tab.Screen
        name="Map"
        component={MapScreen}
        options={{
          tabBarLabel: "Áreas de Risco",
          tabBarIcon: ({ color, size }) => (
            <Icon name="map-marker" color={color} size={24} />
          )
        }}
      />
      <Tab.Screen
        name="Symptoms"
        component={SymptomsScreen}
        options={{
          tabBarLabel: "Meus Sintomas",
          tabBarIcon: ({ color, size }) => (
            <Icon name="medkit" color={color} size={24} />
          )
        }}
      />
      <Tab.Screen
        name="Account"
        component={AccountScreen}
        options={{
          tabBarLabel: "Sua Conta",
          tabBarIcon: ({ color, size }) => (
            <Icon name="user" color={color} size={24} />
          )
        }}
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
