import React, { useCallback, useMemo, useState, useEffect } from "react";
import { Appearance } from "react-native";
import { Provider } from "react-native-paper";
import { NavigationContainer } from "@react-navigation/native";
import { themeSwitcher } from "./src/theme/themeSwitcher";
import { CombinedDarkTheme, CombinedDefaultTheme } from "./src/theme/theme";
import BottomNavigation from "./src/navigation/BottomNavigation";

export default function App() {
  const colorScheme = Appearance.getColorScheme();
  const [isThemeDark, setIsThemeDark] = useState(false);

  let theme = isThemeDark ? CombinedDarkTheme : CombinedDefaultTheme;

  const toggleTheme = useCallback(() => {
    return setIsThemeDark(!isThemeDark);
  }, [isThemeDark]);

  const preferences = useMemo(
    () => ({
      toggleTheme,
      isThemeDark,
    }),
    [toggleTheme, isThemeDark],
  );

  useEffect(() => {
    if (colorScheme === "dark") {
      setIsThemeDark(true);
    }
  }, []);

  return (
    <themeSwitcher.Provider value={preferences}>
      <Provider theme={theme}>
        <NavigationContainer theme={theme}>
          <BottomNavigation />
        </NavigationContainer>
      </Provider>
    </themeSwitcher.Provider>
  );
}
