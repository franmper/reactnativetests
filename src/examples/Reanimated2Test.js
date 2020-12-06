import React from 'react'
import { View, Text, Button } from 'react-native'
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  withTiming,
  Easing,
  interpolate,
  withDecay,
  ceil,
} from 'react-native-reanimated';

const Reanimated2Test = () => {
  const width = useSharedValue(50);

  const style = useAnimatedStyle(() => {
    return {
      width: withTiming(width.value, {
        duration: 500,
        easing: Easing.bezier(0.25, 0.1, 0.25, 1),
      }),
    };
  });

  return (
    <>
      <Animated.View style={[{height: 100, backgroundColor: "#000", justifyContent: 'center', alignItems: 'center'}, style]}>
        <Text style={{color:"#fff"}}>Hola</Text>
      </Animated.View>
      
    
    
    <Button onPress={() => (width.value = Math.random() * 300)} title="Hey" />
    </>
  )
}

export default Reanimated2Test
