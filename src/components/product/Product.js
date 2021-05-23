import React, { useState } from "react";
import { View, Image, Text } from "react-native";
import { useTheme } from "@react-navigation/native";
import { Divider, Button } from "react-native-paper";
import LottieView from "lottie-react-native";
import DropDownPicker from "react-native-dropdown-picker";
import { productStyle as classes } from "../../styles/productStyle";

export default function Product({ route }) {
  const theme = useTheme();
  const { product } = route.params;
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState("");
  const [carted, setCarted] = useState(false);

  const quantities = [
    { label: "1", value: 1 },
    { label: "2", value: 2 },
    { label: "3", value: 3 },
    { label: "4", value: 4 },
    { label: "5", value: 5 },
  ];

  const handleCart = () => {
    setCarted(!carted);
    setTimeout(() => {
      setCarted(false);
    }, 1500);
  };

  return (
    <View style={classes.containerMain}>
      <Image source={product.image} style={classes.image} />
      <View style={classes.descriptionDetail}>
        <Text style={[classes.titreDetail, { color: theme?.colors.text }]}>
          {product.name}
        </Text>
        <Text style={[{ color: theme?.colors.text }]}>{product.price} EUR</Text>
        <Divider style={classes.divider} />
        <View>
          <DropDownPicker
            open={open}
            value={value}
            items={quantities}
            setOpen={setOpen}
            setValue={setValue}
            placeholder="Quantité"
            style={{ backgroundColor: theme?.colors.select, marginBottom: 40 }}
            labelStyle={{ color: theme?.colors.text }}
          />
        </View>
        {carted && <LottieView
          autoPlay={true}
          loop={true}
          source={require("../../assets/lottie/checkout.json")}
          style={classes.borders}
        />}
        <Button
          mode="contained"
          icon="shopping"
          color="#C19A6B"
          onPress={handleCart}
        >
          Ajouter au panier
        </Button>
      </View>
    </View>
  );
}
