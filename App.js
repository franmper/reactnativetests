import React from "react";
import { View, StyleSheet } from "react-native";
import Gestures from "./src/examples/Gestures";
import Reanimated2Test from "./src/examples/Reanimated2Test";

export default function App() {
  return (
    <View style={styles.container}>
      <Gestures />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "rgb(254, 223, 137)",
    justifyContent: "center",
    alignItems: "center",
  },
});
