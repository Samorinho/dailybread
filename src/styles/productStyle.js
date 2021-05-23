import { Dimensions, StyleSheet } from "react-native";

export const productStyle = StyleSheet.create({
  container: {
    width: Dimensions.get("window").width * 0.5,
    alignItems: "center",
  },
  visual: {
    width: Dimensions.get("window").width * 0.45,
    height: 200,
  },
  image: {
    width: Dimensions.get("screen").width,
    height: 200,
  },
  description: {
    marginVertical: 10,
  },
  descriptionDetail: {
    margin: 10,
  },
  titre: {
    fontWeight: "bold",
    textAlign: "center",
  },
  prix: {
    textAlign: "center",
    marginBottom: 10,
  },
  titreDetail: {
    fontWeight: "bold",
  },
  divider: {
    marginVertical: 10,
    fontSize: 20,
    // fontWeight: "bold"
  },
  shop: {
    // flex: 1,
    // justifyContent: "flex-end",
    // marginBottom: 20,
    position: 'absolute', //Here is the trick
    bottom: 0, //
    left: 0,
    right: 0
  },
  button: {
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0
  },
  containerMain: {
    flex: 1,
    // alignItems: 'center',
    // justifyContent: 'center',
  },
});
