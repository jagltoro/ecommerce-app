import React, {useRef, useState} from "react";
import {View, StyleSheet, Dimensions} from "react-native";
import Animated, {divide} from 'react-native-reanimated';
import {useScrollHandler} from "react-native-redash";

import {Theme, makeStyles} from "../../Components/Theme";
import {useInterval} from '../../Hooks/useInterval';

import Slide, {SLIDE_HEIGHT} from "./Slide";
import Dot from "./Dot";

const {width} = Dimensions.get("window");


const useStyles = makeStyles((theme:Theme) =>({
  container: {
    flex: 1,
    backgroundColor: "white"
  },
  slider: {
    height: SLIDE_HEIGHT,
    width: width
  },
  footer: {
    flex: 1
  },
  pagination:{
    height: theme.borderRadii.xl,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    position: "absolute",
    bottom: -5,
    left: 0,
    right: 0
  },
  underlay: {
    ...StyleSheet.absoluteFillObject,
    justifyContent: "flex-end",
    alignItems: "center",
    overflow: "hidden"
  },
}));

const slides = [
  {
    title: "Fashion Sale",
    picture: {
      src: require("#/images/slideshow/fashion.png"),
    }
  },
  {
    title: "Women's Clothes",
    picture: {
      src: require("#/images/slideshow/women.png"),
    }
  },
  {
    title: "Men's Clothes",
    picture: {
      src: require("#/images/slideshow/men.png"),
    }
  },
  {
    title: "Phones",
    picture: {
      src: require("#/images/slideshow/phone.png"),
    }
  },
]


const Onboarding = () => {
  const style = useStyles();
  const scroll = useRef<Animated.ScrollView>(null);
  const {scrollHandler, x } = useScrollHandler();
  const [slideShowIndex, setSlideShowIndex] = useState(0);
  
  useInterval(() => {
    moveSlide();
  },5000)

  const moveSlide = () => {
    const nextIndex = slideShowIndex + 1 > (slides.length-1) ? 0 : slideShowIndex + 1;
    scroll.current?.getNode().scrollTo({ x: width * (nextIndex), animated: true});
    setSlideShowIndex(nextIndex);
  }

  return (
    <View style={{paddingHorizontal: 25, justifyContent: "center", alignItems: "center"}}>
      <Animated.View style={[style.slider]}>
        <Animated.ScrollView
          ref={scroll}
          horizontal
          snapToInterval={width}
          decelerationRate="fast"
          showsHorizontalScrollIndicator={false}
          bounces={false}
          {...scrollHandler}
        >
          {
            slides.map(({title, picture},index) =>
              <Slide {...{title}} picture={picture.src} key={index} />
            )
          }
          
        </Animated.ScrollView>
        <View style={style.pagination}>
            {slides.map((_, index) => (
              <Dot key={index} currentIndex={divide(x, width)} {...{index}} />
            ))}
          </View>
      </Animated.View>
    </View>
  )
}

export const assets = slides.map(slide => slide.picture.src);

export default Onboarding;