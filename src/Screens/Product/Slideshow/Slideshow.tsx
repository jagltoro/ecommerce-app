import React, { useRef } from "react";
import { View, StyleSheet, Dimensions, Image } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import Animated, { divide } from "react-native-reanimated";
import { useScrollHandler } from "react-native-redash";

import { Theme, makeStyles, Text } from "../../../Components/Theme";

import Dot from "./Dot";

const { width, height } = Dimensions.get("window");

const useStyles = makeStyles((theme: Theme) => ({
  container: {
    flex: 1,
    backgroundColor: "white",
  },
  slider: {
    height: height / 2,
    width: width,
  },
  footer: {
    flex: 1,
  },
  pagination: {
    height: theme.borderRadii.xl,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    position: "absolute",
    bottom: -5,
    left: 0,
    right: 0,
  },
  underlay: {
    ...StyleSheet.absoluteFillObject,
    justifyContent: "flex-end",
    alignItems: "center",
    overflow: "hidden",
  },
  image: {
    width: width - 30,
    resizeMode: "contain",
  },
}));

interface SlideshowProps {
  slides: number[];
}

const Slideshow = ({ slides }: SlideshowProps) => {
  const style = useStyles();
  const scroll = useRef<Animated.ScrollView>(null);
  const { scrollHandler, x } = useScrollHandler();

  return (
    <View
      style={{
        paddingHorizontal: 25,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Animated.View style={[style.slider]}>
        <Animated.ScrollView
          horizontal
          snapToInterval={width}
          decelerationRate="fast"
          showsHorizontalScrollIndicator={false}
          bounces={false}
          {...scrollHandler}
        >
          {slides.map((slide, index) => (
            <Image key={index} source={slide} style={style.image} />
          ))}
        </Animated.ScrollView>
        <View style={style.pagination}>
            {slides.map((_, index) => (
              <Dot key={index} currentIndex={divide(x, width)} {...{index}} />
            ))}
          </View>
      </Animated.View>
    </View>
  );
};

export default Slideshow;
