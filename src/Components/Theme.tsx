import {createText, createBox, createTheme, useTheme as useReTheme} from '@shopify/restyle'
import {ImageStyle, TextStyle, ViewStyle} from "react-native";

const palette = {
    "color-primary": "#3366FF",
    "color-success": "#00524C",
    "color-info": "#002885",
    "color-warning": "#B86E00",
    "color-danger": "#700940",
    "color-basic": "#FFFFFF",
    "color-basic-text": "#605A65",
    "color-basic-titles": "#34283E",
    "color-gray":   "#949494",
    "transparent": "transparent",
  };

export const theme = createTheme({
    colors: {
      background: palette["color-basic"],
      headerText: palette["color-basic"],
      text: palette["color-basic-text"],
      primary: palette["color-primary"],
      success: palette["color-success"],
      info: palette["color-info"],
      warning: palette["color-warning"],
      danger: palette["color-danger"],
      transparent: palette['transparent'],

      gradientStart: "#34283E",
      gradientEnd: "#845FA1",

    },
    spacing: {
      s: 8,
      m: 16,
      l: 24,
      xl: 32,
      xxl: 40,
    },
    breakpoints: { },
    borderRadii: {
      none: 0,
      s: 4,
      m: 10,
      l: 25,
      xl: 75,
    },
    textVariants: {
      header:{
        fontSize: 19,
        fontFamily: "SF-Bold",
        color: "headerText",
      },
      title:{
        fontSize: 48,
        fontFamily: "SF-Bold",
        color: "text",
      },
      text:{
        fontSize: 24,
        fontFamily: "SF-Regular",
        color: "text",
      },
    }
  });
  
  export type Theme = typeof theme;
  export const Box = createBox<Theme>();
  export const Text = createText<Theme>();
  export const useTheme = () => useReTheme<Theme>();
  
  type NamedStyles<T> = { [P in keyof T]: ViewStyle | TextStyle | ImageStyle };
  
  export const makeStyles = <T extends NamedStyles<T>>(
    styles: (theme: Theme) => T
  ) => () => {
    const currentTheme = useTheme();
    return styles(currentTheme);
  }