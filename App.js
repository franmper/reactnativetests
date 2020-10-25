import React from "react";
import { View, StyleSheet } from "react-native";
import DribbleUI from "./src/examples/DribbleUI"

export default function App() {
  return (
    <View style={styles.container}>
      <DribbleUI />
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
