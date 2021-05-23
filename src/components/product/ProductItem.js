import React from "react";
import { View, Image, Text, TouchableOpacity } from "react-native";
import { useNavigation, useTheme } from "@react-navigation/native";
import { productStyle as classes } from "../../styles/productStyle";

export default function ProductItem({ product }) {
  const theme = useTheme();
  const navigation = useNavigation();
  
  const goToProduct = () => {
    navigation.navigate("Product", {
      product: product,
    });
  };

  return (
    <View style={classes.container}>
      <TouchableOpacity onPress={goToProduct}>
        <Image source={product.image} style={classes.visual} />
        <View style={classes.description}>
          <Text style={[classes.titre, { color: theme?.colors.text }]}>
            {product.name}
          </Text>
          <Text style={[classes.prix, { color: theme?.colors.text }]}>
            {product.price} EUR
          </Text>
        </View>
      </TouchableOpacity>
    </View>
  );
}
