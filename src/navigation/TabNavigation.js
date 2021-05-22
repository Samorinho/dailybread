import React, { useState } from "react";
import { Dimensions, Text, StatusBar } from "react-native";
import { TabView, SceneMap, TabBar } from "react-native-tab-view";
import { Appbar } from "react-native-paper";
import Home from "../components/Home";

const initialLayout = { width: Dimensions.get("window").width };

export default function TabNavigation() {
  const [index, setIndex] = useState(0);

  const [routes] = useState([
    { key: "home", title: "Home" },
    { key: "boulangeries", title: "Boulangeries" },
  ]);

  const renderScene = SceneMap({
    home: Home,
    boulangeries: Home,
  });

  const renderTabBar = props => (
    <TabBar
      {...props}
      indicatorStyle={{ backgroundColor: "#fff" }}
      style={{ backgroundColor: "grey" }}
      renderLabel={({ route, focused, color }) => <Text>{route.title}</Text>}
      // scrollEnabled
    />
  );

  return (
    <>
      <StatusBar />
      <Appbar.Header statusBarHeight={5}>
        <Appbar.Content title="My Daily Bread" onPress={() => setIndex(0)} />
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
