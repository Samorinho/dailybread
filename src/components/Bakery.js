import React from "react";
import { View, Image, FlatList } from "react-native";
import { Paragraph, Surface, Text, Divider } from "react-native-paper";
import { homeStyle as classes } from "../styles/homeStyle";
import { produits } from "../data/sample";
import ProductItem from "./product/ProductItem";

const BakeryHeader = ({ bakery }) => {
  return (
    <>
      <View style={classes.container}>
        <Image source={bakery.image} style={classes.visual} />
        <Paragraph style={classes.titre}>{bakery.name}</Paragraph>
        <View style={classes.icons}>
          <Surface style={classes.surface}>
            <Text style={classes.txtsurface}>Ouvert</Text>
          </Surface>
          <Surface style={classes.surfaceA}>
            <Text style={classes.txtsurface}>#boulangerie</Text>
          </Surface>
          <Surface style={classes.surfaceB}>
            <Text style={classes.txtsurface}>#pâtisserie</Text>
          </Surface>
        </View>
      </View>
      <Divider style={classes.margin} />
    </>
  );
};

export default function Bakery({ route }) {
  const { bakery } = route.params;
  return (
    <FlatList
      data={produits}
      numColumns={2}
      keyExtractor={produit => produit.id}
      renderItem={({ item }) => {
        return <ProductItem key={item.id} product={item} />;
      }}
      ListHeaderComponent={<BakeryHeader bakery={bakery} />}
    />
  );
}
