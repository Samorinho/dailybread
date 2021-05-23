import React, { useContext, useState } from "react";
import { Dimensions, Text, StatusBar } from "react-native";
import { TabView, SceneMap, TabBar } from "react-native-tab-view";
import { Appbar } from "react-native-paper";
import { useTheme } from "@react-navigation/native";
import Home from "../components/Home";
import BakeryList from "../components/BakeryList";
import { themeSwitcher } from "../theme/themeSwitcher";

const initialLayout = { width: Dimensions.get("window").width };

export default function TabNavigation() {
  const theme = useTheme();
  const { toggleTheme, isThemeDark } = useContext(themeSwitcher)
  const [index, setIndex] = useState(0);

  const [routes] = useState([
    { key: "home", title: "Home" },
    { key: "boulangeries", title: "Boulangeries" },
  ]);

  const renderScene = SceneMap({
    home: Home,
    boulangeries: BakeryList,
  });

  const renderTabBar = props => (
    <TabBar
      {...props}
      indicatorStyle={{ backgroundColor: theme?.colors.iconMenu }}
      style={{ backgroundColor: theme?.colors.surface }}
      renderLabel={({ route, focused, color }) => <Text style={{ color: theme?.colors.text }}>{route.title}</Text>}
      // scrollEnabled
    />
  );

  return (
    <>
      <StatusBar />
      <Appbar.Header
        statusBarHeight={5}
        style={{ backgroundColor: theme?.colors.surface }}
      >
        <Appbar.Content title="My Daily Bread" onPress={() => setIndex(0)} />
        <Appbar.Action
          icon={isThemeDark ? "brightness-7" : "brightness-4"}
          color={theme?.colors.orange}
          onPress={toggleTheme}
        />
      </Appbar.Header>
      <TabView
        renderTabBar={renderTabBar}
        navigationState={{ index, routes }}
        renderScene={renderScene}
        onIndexChange={setIndex}
        initialLayout={initialLayout}
        lazy
      />
    </>
  );
}
