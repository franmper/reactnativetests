import React from "react";
import { StyleSheet, Text, View, TextInput, Pressable, Dimensions, SafeAreaView, Platform, StatusBar } from "react-native";

const { width, height } = Dimensions.get("window");

const DribbleUI = () => {
  return (
    <SafeAreaView style={styles.uiContainer}>
      <View style={{ width, height: height * 0.3, justifyContent: "center", alignItems: "center" }}>
        <Text style={{ fontSize: 50 }}>Hello,</Text>
        <View style={{ width: 100, height: 7, flexDirection: "row", justifyContent: "flex-start", left: -10, marginTop: 10 }}>
          <View style={{ transform: [{ rotate: "-45deg" }], alignItems: "center", justifyContent: "center" }}>
            <View style={{ backgroundColor: "#FFF", height: 5, width: 20, borderRadius: 10, marginRight: -8 }} />
          </View>
          <View style={{ transform: [{ rotate: "45deg" }], alignItems: "center", justifyContent: "center" }}>
            <View style={{ backgroundColor: "#FFF", height: 5, width: 20, borderRadius: 10, marginRight: -8, marginTop: -10, marginLeft: -4 }} />
          </View>
          <View style={{ transform: [{ rotate: "-45deg" }], alignItems: "center", justifyContent: "center" }}>
            <View style={{ backgroundColor: "#FFF", height: 5, width: 20, borderRadius: 10, marginRight: -8, marginLeft: 2, marginTop: 3 }} />
          </View>
          <View style={{ transform: [{ rotate: "45deg" }], alignItems: "center", justifyContent: "center" }}>
            <View style={{ backgroundColor: "#FFF", height: 5, width: 20, borderRadius: 10, marginRight: -8, marginTop: -10, marginLeft: -4 }} />
          </View>
          <View style={{ transform: [{ rotate: "-45deg" }], alignItems: "center", justifyContent: "center" }}>
            <View style={{ backgroundColor: "#FFF", height: 5, width: 20, borderRadius: 10, marginRight: -8, marginLeft: 2, marginTop: 3 }} />
          </View>
          <View style={{ transform: [{ rotate: "45deg" }], alignItems: "center", justifyContent: "center" }}>
            <View style={{ backgroundColor: "#FFF", height: 5, width: 20, borderRadius: 10, marginRight: -8, marginTop: -10, marginLeft: -4 }} />
          </View>
          <View style={{ transform: [{ rotate: "-45deg" }], alignItems: "center", justifyContent: "center" }}>
            <View style={{ backgroundColor: "#FFF", height: 5, width: 20, borderRadius: 10, marginRight: -8, marginLeft: 2, marginTop: 3 }} />
          </View>
          <View style={{ transform: [{ rotate: "45deg" }], alignItems: "center", justifyContent: "center" }}>
            <View style={{ backgroundColor: "#FFF", height: 5, width: 20, borderRadius: 10, marginRight: -8, marginTop: -10, marginLeft: -4 }} />
          </View>
          <View style={{ transform: [{ rotate: "-45deg" }], alignItems: "center", justifyContent: "center" }}>
            <View style={{ backgroundColor: "#FFF", height: 5, width: 20, borderRadius: 10, marginRight: -8, marginLeft: 2, marginTop: 3 }} />
          </View>
          <View style={{ transform: [{ rotate: "45deg" }], alignItems: "center", justifyContent: "center" }}>
            <View style={{ backgroundColor: "#FFF", height: 5, width: 20, borderRadius: 10, marginRight: -8, marginTop: -10, marginLeft: -4 }} />
          </View>
        </View>
        <View style={{ width: 100, height: 7, flexDirection: "row", justifyContent: "flex-start", left: 10, top: 5, zIndex: -1, opacity: 0.2 }}>
          <View style={{ transform: [{ rotate: "-45deg" }], alignItems: "center", justifyContent: "center" }}>
            <View style={{ backgroundColor: "#000", height: 5, width: 20, borderRadius: 10, marginRight: -8 }} />
          </View>
          <View style={{ transform: [{ rotate: "45deg" }], alignItems: "center", justifyContent: "center" }}>
            <View style={{ backgroundColor: "#000", height: 5, width: 20, borderRadius: 10, marginRight: -8, marginTop: -10, marginLeft: -4 }} />
          </View>
          <View style={{ transform: [{ rotate: "-45deg" }], alignItems: "center", justifyContent: "center" }}>
            <View style={{ backgroundColor: "#000", height: 5, width: 20, borderRadius: 10, marginRight: -8, marginLeft: 2, marginTop: 3 }} />
          </View>
          <View style={{ transform: [{ rotate: "45deg" }], alignItems: "center", justifyContent: "center" }}>
            <View style={{ backgroundColor: "#000", height: 5, width: 20, borderRadius: 10, marginRight: -8, marginTop: -10, marginLeft: -4 }} />
          </View>
          <View style={{ transform: [{ rotate: "-45deg" }], alignItems: "center", justifyContent: "center" }}>
            <View style={{ backgroundColor: "#000", height: 5, width: 20, borderRadius: 10, marginRight: -8, marginLeft: 2, marginTop: 3 }} />
          </View>
          <View style={{ transform: [{ rotate: "45deg" }], alignItems: "center", justifyContent: "center" }}>
            <View style={{ backgroundColor: "#000", height: 5, width: 20, borderRadius: 10, marginRight: -8, marginTop: -10, marginLeft: -4 }} />
          </View>
          <View style={{ transform: [{ rotate: "-45deg" }], alignItems: "center", justifyContent: "center" }}>
            <View style={{ backgroundColor: "#000", height: 5, width: 20, borderRadius: 10, marginRight: -8, marginLeft: 2, marginTop: 3 }} />
          </View>
          <View style={{ transform: [{ rotate: "45deg" }], alignItems: "center", justifyContent: "center" }}>
            <View style={{ backgroundColor: "#000", height: 5, width: 20, borderRadius: 10, marginRight: -8, marginTop: -10, marginLeft: -4 }} />
          </View>
          <View style={{ transform: [{ rotate: "-45deg" }], alignItems: "center", justifyContent: "center" }}>
            <View style={{ backgroundColor: "#000", height: 5, width: 20, borderRadius: 10, marginRight: -8, marginLeft: 2, marginTop: 3 }} />
          </View>
          <View style={{ transform: [{ rotate: "45deg" }], alignItems: "center", justifyContent: "center" }}>
            <View style={{ backgroundColor: "#000", height: 5, width: 20, borderRadius: 10, marginRight: -8, marginTop: -10, marginLeft: -4 }} />
          </View>
        </View>
      </View>
      <View style={{ width, height: height * 0.3, justifyContent: "center" }}>
        <TextInput
          placeholder={"NAME_"}
          placeholderTextColor={"#000"}
          style={{
            paddingLeft: 30,
            left: -20,
            width: 250,
            height: 60,
            backgroundColor: "#FFF",
            borderTopWidth: 4,
            borderRightWidth: 4,
            borderBottomWidth: 4,
            shadowOffset: {
              width: 20,
              height: 20,
            },
            shadowOpacity: 0.2,
            shadowRadius: 0,
          }}
        />
        <TextInput
          placeholder={"EMAIL_"}
          placeholderTextColor={"#000"}
          style={{
            marginTop: 30,
            paddingLeft: 30,
            left: -20,
            width: 300,
            height: 60,
            backgroundColor: "#FFF",
            borderTopWidth: 4,
            borderRightWidth: 4,
            borderBottomWidth: 4,
            shadowOffset: {
              width: 20,
              height: 20,
            },
            shadowOpacity: 0.2,
            shadowRadius: 0,
          }}
        />
        <TextInput
          placeholder={"PASSWORD_"}
          placeholderTextColor={"#000"}
          style={{
            marginTop: 30,
            paddingLeft: 10,
            paddingLeft: 30,
            left: -20,
            width: 350,
            height: 60,
            backgroundColor: "#FFF",
            borderTopWidth: 4,
            borderRightWidth: 4,
            borderBottomWidth: 4,
            shadowOffset: {
              width: 20,
              height: 20,
            },
            shadowOpacity: 0.2,
            shadowRadius: 0,
          }}
        />
      </View>
      <View style={{ width, height: height * 0.25, justifyContent: "center", alignItems: "flex-end" }}>
        <Pressable style={{ borderWidth: 4, marginRight: 50, height: 60, width: 180, backgroundColor: "#fff", justifyContent: "center", alignItems: "center" }}>
          <Text style={{ fontWeight: "bold", fontSize: 22, textTransform: "uppercase" }}>Sign Up</Text>
        </Pressable>
        <View style={{ flexDirection: "row", height: 60, width: 180, position: "absolute", right: 74, top: 105, zIndex: -1, opacity: 0.5 }}>
          <View>
            <View style={{ backgroundColor: "#000", height: 7, width: 7, borderRadius: 50, marginTop: 5 }} />
            <View style={{ backgroundColor: "#000", height: 7, width: 7, borderRadius: 50, marginTop: 5 }} />
            <View style={{ backgroundColor: "#000", height: 7, width: 7, borderRadius: 50, marginTop: 5 }} />
            <View style={{ backgroundColor: "#000", height: 7, width: 7, borderRadius: 50, marginTop: 5 }} />
            <View style={{ backgroundColor: "#000", height: 7, width: 7, borderRadius: 50, marginTop: 5 }} />
          </View>
          <View style={{ marginLeft: 5 }}>
            <View style={{ backgroundColor: "#000", height: 7, width: 7, borderRadius: 50, marginTop: 5 }} />
            <View style={{ backgroundColor: "#000", height: 7, width: 7, borderRadius: 50, marginTop: 5 }} />
            <View style={{ backgroundColor: "#000", height: 7, width: 7, borderRadius: 50, marginTop: 5 }} />
            <View style={{ backgroundColor: "#000", height: 7, width: 7, borderRadius: 50, marginTop: 5 }} />
            <View style={{ backgroundColor: "#000", height: 7, width: 7, borderRadius: 50, marginTop: 5 }} />
          </View>
          <View style={{ marginLeft: 5 }}>
            <View style={{ backgroundColor: "#000", height: 7, width: 7, borderRadius: 50, marginTop: 5 }} />
            <View style={{ backgroundColor: "#000", height: 7, width: 7, borderRadius: 50, marginTop: 5 }} />
            <View style={{ backgroundColor: "#000", height: 7, width: 7, borderRadius: 50, marginTop: 5 }} />
            <View style={{ backgroundColor: "#000", height: 7, width: 7, borderRadius: 50, marginTop: 5 }} />
            <View style={{ backgroundColor: "#000", height: 7, width: 7, borderRadius: 50, marginTop: 5 }} />
          </View>
          <View style={{ marginLeft: 5 }}>
            <View style={{ backgroundColor: "#000", height: 7, width: 7, borderRadius: 50, marginTop: 5 }} />
            <View style={{ backgroundColor: "#000", height: 7, width: 7, borderRadius: 50, marginTop: 5 }} />
            <View style={{ backgroundColor: "#000", height: 7, width: 7, borderRadius: 50, marginTop: 5 }} />
            <View style={{ backgroundColor: "#000", height: 7, width: 7, borderRadius: 50, marginTop: 5 }} />
            <View style={{ backgroundColor: "#000", height: 7, width: 7, borderRadius: 50, marginTop: 5 }} />
          </View>
          <View style={{ marginLeft: 5 }}>
            <View style={{ backgroundColor: "#000", height: 7, width: 7, borderRadius: 50, marginTop: 5 }} />
            <View style={{ backgroundColor: "#000", height: 7, width: 7, borderRadius: 50, marginTop: 5 }} />
            <View style={{ backgroundColor: "#000", height: 7, width: 7, borderRadius: 50, marginTop: 5 }} />
            <View style={{ backgroundColor: "#000", height: 7, width: 7, borderRadius: 50, marginTop: 5 }} />
            <View style={{ backgroundColor: "#000", height: 7, width: 7, borderRadius: 50, marginTop: 5 }} />
          </View>
          <View style={{ marginLeft: 5 }}>
            <View style={{ backgroundColor: "#000", height: 7, width: 7, borderRadius: 50, marginTop: 5 }} />
            <View style={{ backgroundColor: "#000", height: 7, width: 7, borderRadius: 50, marginTop: 5 }} />
            <View style={{ backgroundColor: "#000", height: 7, width: 7, borderRadius: 50, marginTop: 5 }} />
            <View style={{ backgroundColor: "#000", height: 7, width: 7, borderRadius: 50, marginTop: 5 }} />
            <View style={{ backgroundColor: "#000", height: 7, width: 7, borderRadius: 50, marginTop: 5 }} />
          </View>
          <View style={{ marginLeft: 5 }}>
            <View style={{ backgroundColor: "#000", height: 7, width: 7, borderRadius: 50, marginTop: 5 }} />
            <View style={{ backgroundColor: "#000", height: 7, width: 7, borderRadius: 50, marginTop: 5 }} />
            <View style={{ backgroundColor: "#000", height: 7, width: 7, borderRadius: 50, marginTop: 5 }} />
            <View style={{ backgroundColor: "#000", height: 7, width: 7, borderRadius: 50, marginTop: 5 }} />
            <View style={{ backgroundColor: "#000", height: 7, width: 7, borderRadius: 50, marginTop: 5 }} />
          </View>
          <View style={{ marginLeft: 5 }}>
            <View style={{ backgroundColor: "#000", height: 7, width: 7, borderRadius: 50, marginTop: 5 }} />
            <View style={{ backgroundColor: "#000", height: 7, width: 7, borderRadius: 50, marginTop: 5 }} />
            <View style={{ backgroundColor: "#000", height: 7, width: 7, borderRadius: 50, marginTop: 5 }} />
            <View style={{ backgroundColor: "#000", height: 7, width: 7, borderRadius: 50, marginTop: 5 }} />
            <View style={{ backgroundColor: "#000", height: 7, width: 7, borderRadius: 50, marginTop: 5 }} />
          </View>
          <View style={{ marginLeft: 5 }}>
            <View style={{ backgroundColor: "#000", height: 7, width: 7, borderRadius: 50, marginTop: 5 }} />
            <View style={{ backgroundColor: "#000", height: 7, width: 7, borderRadius: 50, marginTop: 5 }} />
            <View style={{ backgroundColor: "#000", height: 7, width: 7, borderRadius: 50, marginTop: 5 }} />
            <View style={{ backgroundColor: "#000", height: 7, width: 7, borderRadius: 50, marginTop: 5 }} />
            <View style={{ backgroundColor: "#000", height: 7, width: 7, borderRadius: 50, marginTop: 5 }} />
          </View>
          <View style={{ marginLeft: 5 }}>
            <View style={{ backgroundColor: "#000", height: 7, width: 7, borderRadius: 50, marginTop: 5 }} />
            <View style={{ backgroundColor: "#000", height: 7, width: 7, borderRadius: 50, marginTop: 5 }} />
            <View style={{ backgroundColor: "#000", height: 7, width: 7, borderRadius: 50, marginTop: 5 }} />
            <View style={{ backgroundColor: "#000", height: 7, width: 7, borderRadius: 50, marginTop: 5 }} />
            <View style={{ backgroundColor: "#000", height: 7, width: 7, borderRadius: 50, marginTop: 5 }} />
          </View>
          <View style={{ marginLeft: 5 }}>
            <View style={{ backgroundColor: "#000", height: 7, width: 7, borderRadius: 50, marginTop: 5 }} />
            <View style={{ backgroundColor: "#000", height: 7, width: 7, borderRadius: 50, marginTop: 5 }} />
            <View style={{ backgroundColor: "#000", height: 7, width: 7, borderRadius: 50, marginTop: 5 }} />
            <View style={{ backgroundColor: "#000", height: 7, width: 7, borderRadius: 50, marginTop: 5 }} />
            <View style={{ backgroundColor: "#000", height: 7, width: 7, borderRadius: 50, marginTop: 5 }} />
          </View>
          <View style={{ marginLeft: 5 }}>
            <View style={{ backgroundColor: "#000", height: 7, width: 7, borderRadius: 50, marginTop: 5 }} />
            <View style={{ backgroundColor: "#000", height: 7, width: 7, borderRadius: 50, marginTop: 5 }} />
            <View style={{ backgroundColor: "#000", height: 7, width: 7, borderRadius: 50, marginTop: 5 }} />
            <View style={{ backgroundColor: "#000", height: 7, width: 7, borderRadius: 50, marginTop: 5 }} />
            <View style={{ backgroundColor: "#000", height: 7, width: 7, borderRadius: 50, marginTop: 5 }} />
          </View>
          <View style={{ marginLeft: 5 }}>
            <View style={{ backgroundColor: "#000", height: 7, width: 7, borderRadius: 50, marginTop: 5 }} />
            <View style={{ backgroundColor: "#000", height: 7, width: 7, borderRadius: 50, marginTop: 5 }} />
            <View style={{ backgroundColor: "#000", height: 7, width: 7, borderRadius: 50, marginTop: 5 }} />
            <View style={{ backgroundColor: "#000", height: 7, width: 7, borderRadius: 50, marginTop: 5 }} />
            <View style={{ backgroundColor: "#000", height: 7, width: 7, borderRadius: 50, marginTop: 5 }} />
          </View>
          <View style={{ marginLeft: 5 }}>
            <View style={{ backgroundColor: "#000", height: 7, width: 7, borderRadius: 50, marginTop: 5 }} />
            <View style={{ backgroundColor: "#000", height: 7, width: 7, borderRadius: 50, marginTop: 5 }} />
            <View style={{ backgroundColor: "#000", height: 7, width: 7, borderRadius: 50, marginTop: 5 }} />
            <View style={{ backgroundColor: "#000", height: 7, width: 7, borderRadius: 50, marginTop: 5 }} />
            <View style={{ backgroundColor: "#000", height: 7, width: 7, borderRadius: 50, marginTop: 5 }} />
          </View>
          <View style={{ marginLeft: 5 }}>
            <View style={{ backgroundColor: "#000", height: 7, width: 7, borderRadius: 50, marginTop: 5 }} />
            <View style={{ backgroundColor: "#000", height: 7, width: 7, borderRadius: 50, marginTop: 5 }} />
            <View style={{ backgroundColor: "#000", height: 7, width: 7, borderRadius: 50, marginTop: 5 }} />
            <View style={{ backgroundColor: "#000", height: 7, width: 7, borderRadius: 50, marginTop: 5 }} />
            <View style={{ backgroundColor: "#000", height: 7, width: 7, borderRadius: 50, marginTop: 5 }} />
          </View>
          <View style={{ marginLeft: 5 }}>
            <View style={{ backgroundColor: "#000", height: 7, width: 7, borderRadius: 50, marginTop: 5 }} />
            <View style={{ backgroundColor: "#000", height: 7, width: 7, borderRadius: 50, marginTop: 5 }} />
            <View style={{ backgroundColor: "#000", height: 7, width: 7, borderRadius: 50, marginTop: 5 }} />
            <View style={{ backgroundColor: "#000", height: 7, width: 7, borderRadius: 50, marginTop: 5 }} />
            <View style={{ backgroundColor: "#000", height: 7, width: 7, borderRadius: 50, marginTop: 5 }} />
          </View>
          <View style={{ marginLeft: 5 }}>
            <View style={{ backgroundColor: "#000", height: 7, width: 7, borderRadius: 50, marginTop: 5 }} />
            <View style={{ backgroundColor: "#000", height: 7, width: 7, borderRadius: 50, marginTop: 5 }} />
            <View style={{ backgroundColor: "#000", height: 7, width: 7, borderRadius: 50, marginTop: 5 }} />
            <View style={{ backgroundColor: "#000", height: 7, width: 7, borderRadius: 50, marginTop: 5 }} />
            <View style={{ backgroundColor: "#000", height: 7, width: 7, borderRadius: 50, marginTop: 5 }} />
          </View>
        </View>
      </View>
      <View style={{ width, height: height * 0.10, justifyContent: "center", alignItems: "center" }}>
        <Text style={{ fontSize: 20, fontWeight: "bold" }}>
          Already a member? <Text style={{ textDecorationLine: "underline" }}>Sign In</Text>
        </Text>
      </View>
    </SafeAreaView>
  );
};

export default DribbleUI;

const styles = StyleSheet.create({
  uiContainer: {
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight + 20 : 0,
    width,
    height,
  },
});
