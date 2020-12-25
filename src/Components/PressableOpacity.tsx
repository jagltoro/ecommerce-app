import * as React from 'react';
import { Pressable } from 'react-native';

interface PressableOpacityProps {
  onPress: () => void;
  borderRadius: number;
  padding: number;
  children: React.ReactNode;
  onPressBg: string;
}

const PressableOpacity = ({onPress, borderRadius, padding, children, onPressBg}: PressableOpacityProps) => {
  return (
    <Pressable {...{onPress}} style={({pressed}) => [
      {
        backgroundColor: pressed ? onPressBg : 'transparent',
        padding,
        borderRadius
      }
    ]}>
      {children}
    </Pressable>
  );
};

export default PressableOpacity;