import React, { useContext } from "react";
import { View } from "react-native";
import LottieView from "lottie-react-native";
import { Headline, Button } from "react-native-paper";
import { useNavigation } from "@react-navigation/native";
import { panierStyle as classes } from "../styles/panierStyle";
import { themeSwitcher } from "../theme/themeSwitcher";

export default function Panier() {
  const navigation = useNavigation();
  const { isThemeDark } = useContext(themeSwitcher);

  const goToHome = () => {
    navigation.navigate("Home");
  };

  return (
    <View style={classes.container}>
      <LottieView
        autoPlay={true}
        loop={true}
        // source={require("../assets/lottie/empty-basket.json")}
        source={require("../assets/lottie/sad-empty-box.json")}
        style={classes.borders}
      />
      <Headline>Votre panier est vide !</Headline>
      <Button
        color="#C19A6B"
        mode="contained"
        icon="cart"
        dark={isThemeDark}
        onPress={goToHome}
      >
        Remplir le panier
      </Button>
    </View>
  );
}
