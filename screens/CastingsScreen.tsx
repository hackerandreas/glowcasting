import { ScrollView, StyleSheet } from "react-native";
import Casting from "../components/Casting";

import { View } from "../components/Themed";
import { RootTabScreenProps } from "../types";
import { castingData } from "../data/castingData";
import React from "react";

export default function CastingsScreen({
  navigation,
}: RootTabScreenProps<"Castings">) {
  return (
    <ScrollView style={styles.container}>
      {castingData.map((casting) => {
        return <Casting key={casting.id} casting={casting} />;
      })}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    // alignItems: "center",
    // overflow: "scroll",
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
  },
});
