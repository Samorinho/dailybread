import React from "react";
import { View, ScrollView, Image } from "react-native";
import { Paragraph, Surface, Text } from "react-native-paper";
import { homeStyle as classes } from "../styles/homeStyle";

export default function Home() {
  return (
    <ScrollView>
      <View style={classes.container}>
        <Image
          source={require("../assets/img/pain.jpg")}
          style={classes.visual}
        />
        <Paragraph style={classes.titre}>Mon Pain Quotidien</Paragraph>
        <View style={classes.icons}>
          <Surface style={classes.surface}>
            <Text style={classes.txtsurface}>Livraison 15mn</Text>
          </Surface>
          <Surface style={classes.surfaceA}>
            <Text style={classes.txtsurface}>#baguette</Text>
          </Surface>
          <Surface style={classes.surfaceB}>
            <Text style={classes.txtsurface}>#pain</Text>
          </Surface>
        </View>
      </View>
      <View style={classes.container}>
        <Image
          source={require("../assets/img/brunch.jpg")}
          style={classes.visual}
        />
        <Paragraph style={classes.titre}>Mon Brunch Quotidien</Paragraph>
        <View style={classes.icons}>
          <Surface style={classes.surface}>
            <Text style={classes.txtsurface}>Sur-mesure</Text>
          </Surface>
          <Surface style={classes.surfaceA}>
            <Text style={classes.txtsurface}>Formule familiale</Text>
          </Surface>
        </View>
      </View>
      <View style={classes.container}>
        <Image
          source={require("../assets/img/breakfast.jpg")}
          style={classes.visual}
        />
        <Paragraph style={classes.titre}>Mon P'tit Dej' Quotidien</Paragraph>
        <View style={classes.icons}>
          <Surface style={classes.surface}>
            <Text style={classes.txtsurface}>Livraison 15mn</Text>
          </Surface>
          <Surface style={classes.surfaceA}>
            <Text style={classes.txtsurface}>#café</Text>
          </Surface>
          <Surface style={classes.surfaceB}>
            <Text style={classes.txtsurface}>#painauchocolat</Text>
          </Surface>
        </View>
      </View>
      <View style={classes.container}>
        <Image
          source={require("../assets/img/patisserie.jpg")}
          style={classes.visual}
        />
        <Paragraph style={classes.titre}>Ma Pâtisserie Quotidienne</Paragraph>
        <View style={classes.icons}>
          <Surface style={classes.surface}>
            <Text style={classes.txtsurface}>Livraison 15mn</Text>
          </Surface>
          <Surface style={classes.surfaceA}>
            <Text style={classes.txtsurface}>#formulemidi</Text>
          </Surface>
          <Surface style={classes.surfaceB}>
            <Text style={classes.txtsurface}>#dessert</Text>
          </Surface>
        </View>
      </View>
      <View style={classes.container}>
        <Image
          source={require("../assets/img/sandwich.jpg")}
          style={classes.visual}
        />
        <Paragraph style={classes.titre}>Mon Sandwich Quotidien</Paragraph>
        <View style={classes.icons}>
          <Surface style={classes.surface}>
            <Text style={classes.txtsurface}>Formule</Text>
          </Surface>
          <Surface style={classes.surfaceA}>
            <Text style={classes.txtsurface}>#sandwich</Text>
          </Surface>
          <Surface style={classes.surfaceB}>
            <Text style={classes.txtsurface}>#salade</Text>
          </Surface>
        </View>
      </View>
    </ScrollView>
  );
}
