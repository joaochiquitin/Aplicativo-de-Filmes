import React from "react";


import { createStackNavigator } from "@react-navigation/stack";
import Home from "../screens/Home";
import Movie from "../screens/Movie";

const Stack = createStackNavigator();

export default function MyStack() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="Movie" component={Movie} />
    </Stack.Navigator>
  );
}
