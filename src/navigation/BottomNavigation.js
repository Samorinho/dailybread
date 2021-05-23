import React from "react";
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import { useTheme } from "@react-navigation/native";
import Basket from "../components/Basket";
import HomeStack from "./stack/HomeStack";
import UserStack from "./stack/UserStack";

const Tab = createMaterialBottomTabNavigator();

export default function BottomNavigation() {
  const theme = useTheme();
  return (
    <Tab.Navigator
      barStyle={{ backgroundColor: theme?.colors.surface }}
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;

          if (route.name === "Home") {
            iconName = "home";
            size = focused ? 24 : 18;
            color = focused ? theme?.colors.iconMenu : theme?.colors.iconMenuOff;
          } else if (route.name === "Panier") {
            iconName = "shopping";
            size = focused ? 24 : 18;
            color = focused ? "#C19A6B" : "#A1A1A1";
          } else if (route.name === "Compte") {
            iconName = "account-circle";
            size = focused ? 24 : 18;
            color = focused ? "#C19A6B" : "#A1A1A1";
          }

          return (
            <MaterialCommunityIcons name={iconName} size={size} color={color} />
          );
        },
      })}
      tabBarOptions={{
        activeTintColor: "#C19A6B",
        inactiveTintColor: "#A1A1A1",
        indicatorStyle: { backgroundColor: "#C19A6B" },
        scrollEnabled: true,
        showIcon: true,
      }}
    >
      <Tab.Screen name="Home" component={HomeStack} />
      <Tab.Screen name="Panier" component={Basket} />
      <Tab.Screen name="Compte" component={UserStack} />
    </Tab.Navigator>
  );
}
