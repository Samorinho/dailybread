import React from "react";
import {
  View,
  Image,
  TouchableOpacity,
  FlatList,
} from "react-native";
import { Paragraph, Surface, Text } from "react-native-paper";
import { useNavigation } from "@react-navigation/core";
import { homeStyle as classes } from "../styles/homeStyle";
import { boulangeries } from "../data/sample";

const BakeryItem = ({ bakery }) => {
  const navigation = useNavigation();

  const goToBakery = () => {
    navigation.navigate("Bakery", {
      bakery: bakery,
    });
  };

  return (
    <View style={classes.container}>
      <TouchableOpacity onPress={goToBakery}>
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
      </TouchableOpacity>
    </View>
  );
};

export default function BakeryList() {
  return (
    <>
      <FlatList
        data={boulangeries}
        keyExtractor={boulangerie => boulangerie.id}
        renderItem={({ item }) => {
          return <BakeryItem key={item.id} bakery={item} />;
        }}
      />
    </>
  );
}
