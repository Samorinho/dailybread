import React from "react";
import { View, ScrollView, Image } from "react-native";
import { Paragraph, Button, FAB, Surface, Text } from "react-native-paper";
import { homeStyle as classes } from "../styles/homeStyle";

export default function Home() {
  return (
    <ScrollView>
      <View style={classes.container}>
        <Image
          source={require("../assets/img/pain.jpg")}
          //   resizeMode="contain"
          style={classes.visual}
        />
        <Paragraph style={classes.titre}>Mon Pain Quotidien</Paragraph>
        <View style={classes.icons}>
          {/* <FAB
            icon="eye"
            label="J'ai faim"
            style={{ backgroundColor: "#BADCB2" }}
            onPress={() => console.log("Pressed")}
          />
          <FAB
            icon="heart"
            label="J'adore"
            style={{ backgroundColor: "#E3DEC0" }}
          /> 
          <FAB
            icon="plus"
            label="Commander"
            style={{ backgroundColor: "#E3DEC0" }}
          /> */}
          <Surface style={classes.surface}>
            <Text style={classes.txtsurface}>Commander</Text>
          </Surface>
          <Surface style={classes.surfaceA}>
              {/* <Button icon="food-croissant"></Button> */}
            <Text style={classes.txtsurface}>J'ai faim</Text>
          </Surface>
          <Surface style={classes.surfaceB}>
            <Text style={classes.txtsurface}>J'adore</Text>
          </Surface>
        </View>
      </View>
      <View style={classes.container}>
        <Image
          source={require("../assets/img/brunch.jpg")}
          //   resizeMode="contain"
          style={classes.visual}
        />
        <Paragraph style={classes.titre}>Mon Brunch Quotidien</Paragraph>
      </View>
      <View style={classes.container}>
        <Image
          source={require("../assets/img/breakfast.jpg")}
          //   resizeMode="contain"
          style={classes.visual}
        />
        <Paragraph style={classes.titre}>Mon P'tit Dej' Quotidien</Paragraph>
      </View>
      <View style={classes.container}>
        <Image
          source={require("../assets/img/patisserie.jpg")}
          //   resizeMode="contain"
          style={classes.visual}
        />
        <Paragraph style={classes.titre}>Ma Pâtisserie Quotidienne</Paragraph>
      </View>
    </ScrollView>
  );
}
