import React from 'react';
import Animated, {interpolate, Extrapolate} from 'react-native-reanimated';

interface DotProps {
  index: number,
  currentIndex: Animated.Node<number>
}

const Dot = ({index, currentIndex}: DotProps) => {
  const opacity = interpolate(currentIndex, {
    inputRange: [index - 1, index, index +1],
    outputRange: [0.5, 1, 0.5],
    extrapolate: Extrapolate.CLAMP,
  });

 return (
  <Animated.View style={{
    opacity,
    backgroundColor: "#DDDDDD",
    width: 10,
    height: 10,
    borderRadius: 4,
    margin: 2,
  }}/>
 );
};

export default Dot;