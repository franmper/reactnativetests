import React, { useRef, useEffect } from "react";
import { Easing } from "react-native";
import { View, Text, Animated, PanResponder } from "react-native";

const Gestures = () => {
  const pan = useRef(new Animated.ValueXY()).current;
  const widthSquare = useRef(new Animated.Value(200)).current;

  const heigthSquare = widthSquare.interpolate({
    inputRange: [180, 220],
    outputRange: [180, 220]
  })

  const panResponder = useRef(
    PanResponder.create({
      onMoveShouldSetPanResponder: () => true,
      onMoveShouldSetPanResponderCapture: () => true,
      onPanResponderGrant: () => {
        Animated.timing(widthSquare, {
          toValue: 220,
          duration: 300,
          easing: Easing.inOut(Easing.ease)
        }).start()
        pan.setOffset({
          x: pan.x._value,
          y: pan.y._value,
        });
      },
      onPanResponderMove: Animated.event([null, { dx: pan.x, dy: pan.y }], {useNativeDriver: false}),
      onPanResponderRelease: (e, gestureState) => {
        pan.flattenOffset();
        Animated.timing(widthSquare, {
          toValue: 180,
          duration: 180,
          easing: Easing.inOut(Easing.ease)
        }).start(() => {
          Animated.timing(widthSquare, {
            toValue: 200,
            duration: 180,
            easing: Easing.inOut(Easing.ease)
          }).start()
        })
      },
    })
  ).current;

  return (
    <View
      style={{
        backgroundColor: "#4895ef",
        width: "100%",
        height: "100%",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Animated.View
        {...panResponder.panHandlers}
        style={{
          width: widthSquare,
          height: heigthSquare,
          backgroundColor: "#f72585",
          alignItems: "center",
          justifyContent: "center",
          borderColor: "#3a0ca3",
          borderWidth: 5,
          borderRadius: 10,
          transform: [{ translateX: pan.x }, { translateY: pan.y }],
        }}
      >
        <Text style={{ fontSize: 30, color: "#fff", fontWeight: "bold" }}>Drag me!</Text>
      </Animated.View>
    </View>
  );
};

export default Gestures;
