import { Image, StyleSheet } from "react-native";
import React from "react";

import { Text, View } from "./Themed";
import { CastingDTO } from "../types";
import { MaterialCommunityIcons, MaterialIcons } from "@expo/vector-icons";
import useColorScheme from "../hooks/useColorScheme";
import Colors from "../constants/Colors";

export default function Casting({ casting }: { casting: CastingDTO }) {
  const colorScheme = useColorScheme();
  return (
    <View
      style={styles.castingContainer}
      // lightColor="rgba(255,255,255,0.8)"
      darkColor="rgba(25,25,25,1)"
    >
      <View style={styles.headerContainer} darkColor="rgba(25,25,25,1)">
        <View style={styles.tagsContainer} darkColor="rgba(25,25,25,1)">
          {casting.tags?.map((tag) => {
            return (
              <Text key={tag} style={styles.tagsText}>
                {"#" + tag.toUpperCase()}
              </Text>
            );
          })}
        </View>
        <Text style={styles.genderText}>w/m/d</Text>
      </View>
      <View style={styles.mainContainer} darkColor="rgba(25,25,25,1)">
        <View style={styles.imageContainer} darkColor="rgba(25,25,25,1)">
          {casting.picture ? (
            <Image
              style={styles.castingPicture}
              source={{ uri: casting.picture }}
            />
          ) : null}
        </View>
        <View style={styles.textContainer} darkColor="rgba(25,25,25,1)">
          <Text
            style={styles.castingTitle}
            numberOfLines={1}
            // lightColor="rgba(0,0,0,0.8)"
            // darkColor="rgba(255,255,255,0.8)"
          >
            {casting.title}
          </Text>
          <Text numberOfLines={3}>{casting.text}</Text>
        </View>
      </View>
      <View
        style={styles.footerBackground}
        darkColor="rgba(25,25,25,1)"
        lightColor="rgba(240,240,240,1)"
      >
        <View
          style={styles.footerContainer}
          darkColor="rgba(25,25,25,1)"
          lightColor="rgba(240,240,240,1)"
        >
          <View
            style={styles.leftFooter}
            darkColor="rgba(25,25,25,1)"
            lightColor="rgba(240,240,240,1)"
          >
            <MaterialIcons
              name="euro"
              size={20}
              color={Colors[colorScheme].text}
              style={styles.footerIcon}
            />
            <MaterialCommunityIcons
              name="shield-half-full"
              size={20}
              color={Colors[colorScheme].text}
              style={styles.footerIcon}
            />
            <MaterialIcons
              name="person-outline"
              size={20}
              color={Colors[colorScheme].text}
              style={styles.footerIcon}
            />
            <Text style={styles.footerIcon}>{casting.numberOfRoles}</Text>
          </View>
          <View
            style={styles.rightFooter}
            darkColor="rgba(25,25,25,1)"
            lightColor="rgba(240,240,240,1)"
          >
            <MaterialCommunityIcons
              name="calendar-import"
              size={20}
              color={Colors[colorScheme].text}
              style={styles.footerIcon}
            />
            <Text style={styles.footerIcon}>{casting.deadline}</Text>
            <MaterialCommunityIcons
              name="movie-open-outline"
              size={20}
              color={Colors[colorScheme].text}
              style={styles.footerIcon}
            />
            <Text style={styles.footerIcon}>{casting.days}</Text>
          </View>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  castingContainer: {
    alignItems: "center",
    // width: "100%",
    // height: 250,
    marginTop: 10,
    // marginBottom: 10,
    // margin: 10,
  },
  headerContainer: {
    // justifyContent: "space-between",
    flexDirection: "row",
    width: "90%",
    marginTop: 20,
    // marginLeft: 20,
    // paddingLeft: 10,
    // marginRight: 20,
    // paddingRight: 10,
  },
  tagsContainer: {
    flexDirection: "row",
    flex: 1,
    // justifyContent: "flex-start",
    // margin:
  },
  tagsText: {
    // textAlign: "left",
    color: "darkorange",
    fontWeight: "bold",
    fontSize: 12,
    // alignSelf: "flex-start",
    // width: "80%",
  },
  genderText: {
    // textAlign: "right",
    // alignSelf: "flex-end",
  },
  mainContainer: {
    flexDirection: "row",
    marginTop: 10,
    marginBottom: 10,
    width: "90%",
    // flexWrap: ,
  },
  imageContainer: {
    // alignSelf: "flex-start"
    // height: 50,
    // width: 50,
  },
  castingPicture: {
    // alignSelf: "flex-start",
    resizeMode: "cover",
    height: 120,
    width: 90,
  },
  textContainer: {
    margin: 10,
    flexShrink: 1,
  },
  castingTitle: {
    fontSize: 24,
    fontWeight: "bold",
    // lineHeight: 24,
    // overflow: "hidden",
    // textAlign: "center",
  },
  castingText: {
    // fontSize: 12,
    // lineHeight: 24,
    // marginRight: 30,
    // overflow: "hidden",
    // textAlign: "center",
  },
  footerBackground: {
    width: "100%",
    borderColor: "lightgrey",
    borderTopWidth: 1,
    borderBottomWidth: 1,
    alignItems: "center",
  },
  footerContainer: {
    // height: 50,
    // paddingLeft: 10,
    // paddingRight: 10,

    width: "90%",
    flexDirection: "row",
    // justifyContent: "space-between",
    alignItems: "center",
    // padding: 11,
    // alignContent: "center",
    // textAlignVertical: "center",
    marginTop: 10,
    marginBottom: 10,
  },
  leftFooter: {
    // marginLeft: 15,
    flexDirection: "row",
    // alignSelf: "flex-start",
    alignItems: "center",
    flex: 1,
    // justifyContent: "center",
    // backgroundColor: "green",
  },
  rightFooter: {
    flexDirection: "row",
    // marginRight: 10,
    // alignSelf: "flex-end",
    alignItems: "center",
    // justifyContent: "center",
    // backgroundColor: "red",
  },
  footerIcon: {
    margin: 5,
  },
});
