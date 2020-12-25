import * as React from "react";
import { Pressable, Image } from "react-native";
import { ScrollView } from "react-native-gesture-handler";

interface ItemVariantsProps {
  colors: {
    images: number[];
  }[];
  onPress: (color: { images: number[] }) => void;
}

const Variants = ({ colors, onPress }: ItemVariantsProps) => {
  return (
    <ScrollView
      horizontal
      showsHorizontalScrollIndicator={false}
      style={{ marginTop: 15 }}
    >
      {colors.map((color, index) => (
        <Pressable key={index} onPress={() => onPress(color)}>
          <Image
            source={color.images[0]}
            style={{
              width: 47,
              height: 47,
              resizeMode: "contain",
              marginRight: 12,
            }}
          />
        </Pressable>
      ))}
    </ScrollView>
  );
};

export default Variants;
