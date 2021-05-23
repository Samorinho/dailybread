import React, { useContext } from "react";
import { StatusBar, ScrollView, View, Text } from "react-native";
import { useTheme } from "@react-navigation/native";
import { List, Divider, Appbar, Button } from "react-native-paper";
import { TouchableOpacity } from "react-native-gesture-handler";
import LottieView from "lottie-react-native";
import { themeSwitcher } from "../theme/themeSwitcher";
import { userStyle as classes } from "../styles/userStyle";

export default function UserHome() {
  const { toggleTheme, isThemeDark } = useContext(themeSwitcher);
  const theme = useTheme();
  return (
    <>
      <StatusBar />
      <Appbar.Header
        style={{ backgroundColor: theme?.colors.surface }}
        statusBarHeight={5}
      >
        <Appbar.Content title="Compte" />
      </Appbar.Header>
      <ScrollView>
        <View style={classes.container}>
          {/* <LottieView
            autoPlay={true}
            loop={true}
            source={require("../assets/lottie/user.json")}
          /> */}
          <Button
            style={classes.bouton}
            icon="account"
            mode="contained"
            color="#C19A6B"
            labelStyle={classes.blanc}
          >
            Se connecter
          </Button>
          <Button
            style={classes.facebook}
            icon="facebook"
            mode="contained"
            color="#E3DEC0"
            labelStyle={classes.blanc}
          >
            Continuer avec Facebook
          </Button>
          <Button
            style={classes.google}
            icon="google"
            mode="contained"
            color="#E3DEC0"
            labelStyle={classes.blanc}
          >
            Continuer avec Google
          </Button>
        </View>
        {/* <>
          <TouchableOpacity>
            <List.Item
              title="Connexion / Inscription"
              left={props => (
                <List.Icon
                  {...props}
                  icon="account"
                  color={isThemeDark ? theme?.colors.orange : theme.colors.text}
                />
              )}
            />
          </TouchableOpacity>
        </> */}

        <Divider />
        <TouchableOpacity onPress={toggleTheme}>
          <List.Item
            title={isThemeDark ? "Thème Dark" : "Thème Light"}
            left={props => (
              <List.Icon
                {...props}
                icon={isThemeDark ? "brightness-7" : "brightness-4"}
                color={isThemeDark ? theme?.colors.orange : theme.colors.orange}
              />
            )}
          />
        </TouchableOpacity>
        <Divider />
        <TouchableOpacity>
          <List.Item
            title="Noter l'application"
            left={props => (
              <List.Icon
                {...props}
                icon="star"
                color={isThemeDark ? theme?.colors.orange : theme.colors.text}
              />
            )}
          />
        </TouchableOpacity>
        <Divider />
        <TouchableOpacity>
          <List.Item title="Mentions légales" />
        </TouchableOpacity>
        <Divider />
        <TouchableOpacity>
          <List.Item title="À propos" />
        </TouchableOpacity>
        <Divider />
        <List.Subheader>Version 1.0.0</List.Subheader>
      </ScrollView>
    </>
  );
}
