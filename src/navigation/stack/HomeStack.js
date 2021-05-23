import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import TabNavigation from "../TabNavigation";
import Bakery from "../../components/Bakery";
import Product from "../../components/product/Product";

const Stack = createStackNavigator();

export default function HomeStack() {
  return (
    <Stack.Navigator initialRouteName="Home">
      <Stack.Screen
        name="Home"
        component={TabNavigation}
        options={{ headerShown: false }}
      />
      <Stack.Screen name="Bakery" component={Bakery} />
      <Stack.Screen name="Product" component={Product} />
    </Stack.Navigator>
  );
}
