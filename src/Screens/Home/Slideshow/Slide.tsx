import React from "react";
import { FontAwesome5 as Icon } from '@expo/vector-icons';
import { View, Dimensions, StyleSheet, Image } from "react-native";
import { Box, Text, useTheme } from "../../../Components/Theme";

const { width } = Dimensions.get("window");
export const SLIDE_HEIGHT = 120;

const style = StyleSheet.create({
  container: {
    width: width,
    height: 100,
    paddingHorizontal: 15,
  },
  titleContainer: {
    height: 100,
    justifyContent: "center",
    paddingHorizontal: 10,
  },
  image: {
    width: width - 30,
    resizeMode: "stretch",
    position: "absolute",
  },
  imageOverlay: {
    backgroundColor: "rgba(0,0,0,0.5)",
    position: "absolute",
    width: width - 30,
    height: 85,
    borderRadius: 6,
  },
});

interface SlideProps {
  title: string;
  picture: number;
}

const Slide = ({ picture, title }: SlideProps) => {
  const theme = useTheme();
  return (
    <View style={[style.container]}>
      <View style={[style.titleContainer]}>
        <Image
          source={picture}
          style={style.image}
        />
        <View style={style.imageOverlay} />
        <Box top={-5}>
          <Text variant="slideTitle">{title}</Text>
          <Box flexDirection="row" alignItems="center">
            <Text variant="slideMore" color="warning">See More</Text>
            <Icon name="chevron-right" size={12} color={theme.colors["warning"]} style={{marginLeft: 5}}/>
          </Box>
        </Box>
      </View>
    </View>
  );
};

export default Slide;
