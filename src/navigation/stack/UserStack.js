import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import UserHome from "../../components/UserHome";

const Stack = createStackNavigator();

export default function UserStack() {
  return (
    <Stack.Navigator initialRouteName="UserHome">
      <Stack.Screen
        name="Home"
        component={UserHome}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
}
