import React from "react";
import { Dimensions, StyleSheet, View, Text } from "react-native";
import { PanGestureHandler, State, TapGestureHandler } from "react-native-gesture-handler";
import Animated, { Easing } from "react-native-reanimated";

const { and, neq, set, block, stopClock, startClock, timing, event, Value, cond, eq, add, interpolate, Extrapolate, interpolateColors, Clock } = Animated;
const { width, height } = Dimensions.get("window");

const AnimBtn = () => {
  const gestureState = new Value(-1);
  const clock = new Clock();
  const onGestureEvent = event([
    {
      nativeEvent: {
        state: gestureState,
      },
    },
  ]);

  const opacitytimer = (clock, gestureState) => {
    const state = {
      finished: new Value(0),
      position: new Value(0),
      time: new Value(0),
      frameTime: new Value(0),
    };
  
    const config = {
      duration: 100,
      toValue: new Value(-1),
      easing: Easing.inOut(Easing.ease),
    };

    return block([
      cond(and(eq(gestureState, State.BEGAN), neq(config.toValue, 1)), [
        set(state.finished, 0),
        set(state.time, 0),
        set(state.frameTime, 0),
        set(config.toValue, 1),
        startClock(clock),
      ]),
      cond(and(eq(gestureState, State.END), neq(config.toValue, 0)), [
        set(state.finished, 0),
        set(state.time, 0),
        set(state.frameTime, 0),
        set(config.toValue, 0),
        startClock(clock),
      ]),
      timing(clock, state, config),
      cond(state.finished, stopClock(clock)),
      interpolate(state.position, {
        inputRange: [0, 1],
        outputRange: [1, 0.9],
        extrapolate: Extrapolate.CLAMP,
      }),
    ]);
  }

  const opacity = opacitytimer(clock, gestureState);

  const width = interpolate(opacity, {
    inputRange: [0.9, 0.99, 1],
    outputRange: [250, 190, 200],
    extrapolate: Extrapolate.CLAMP,
  });

  const height = interpolate(opacity, {
    inputRange: [0.9, 0.99, 1],
    outputRange: [60, 45, 50],
    extrapolate: Extrapolate.CLAMP,
  });

  const fontSize = interpolate(opacity, {
    inputRange: [0.9, 0.99, 1],
    outputRange: [25, 18, 20],
    extrapolate: Extrapolate.CLAMP,
  });

  return (
      <TapGestureHandler minDist={0} onHandlerStateChange={onGestureEvent}>
        <Animated.View style={[styles.btn, { opacity, width, height }]}>
          <Animated.Text style={{fontSize}}>Button</Animated.Text>
        </Animated.View>
      </TapGestureHandler>
  );
}

const styles = StyleSheet.create({
  btn: {
    backgroundColor: "#E56B6F",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 5,
  },
});

export default AnimBtn;
