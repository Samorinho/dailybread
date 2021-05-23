import { StyleSheet, Dimensions } from "react-native";

export const userStyle = StyleSheet.create({
  container: {
    padding: 20,
    backgroundColor: "#E3DEC0",
    height: Dimensions.get("window").height * 0.3,
    alignItems: "center",
  },
  bouton: {
    width: Dimensions.get("window").width * 0.8,
  },
  facebook: {
    backgroundColor: "#4267B2",
    width: Dimensions.get("window").width * 0.8,
    marginTop: 15,
  },
  google: {
    backgroundColor: "#DB4437",
    width: Dimensions.get("window").width * 0.8,
    marginTop: 15,
  },
  blanc: {
    color: "#fff",
  },
});
