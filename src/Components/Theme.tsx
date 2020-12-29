import {createText, createBox, createTheme, useTheme as useReTheme} from '@shopify/restyle'
import {ImageStyle, TextStyle, ViewStyle} from "react-native";

const palette = {
    "color-primary": "#3366FF",
    "color-success": "#46AB62",
    "color-info": "#002885",
    "color-warning": "#E7B944",
    "color-danger": "#CE3E3E",
    "color-background": "#F4F3F4",
    "color-basic": "#FFFFFF",
    "color-basic-text": "#605A65",
    "color-basic-titles": "#34283E",
    "color-gray":   "#9B9B9B",
    "color-light-gray":   "#E1E1E1",
    "transparent": "transparent",
  };

export const theme = createTheme({
    colors: {
      background: palette["color-background"],
      searchBackground: palette["color-basic"],
      favoriteBackground: palette["color-basic"],
      headerText: palette["color-basic"],
      photoBackground: palette["color-basic"],
      
      text: palette["color-basic-text"],
      titles: palette["color-basic-titles"],
      primary: palette["color-primary"],
      success: palette["color-success"],
      info: palette["color-info"],
      warning: palette["color-warning"],
      danger: palette["color-danger"],
      secondaryText: palette['color-gray'],
      transparent: palette['transparent'],

      inputBorder: palette['color-light-gray'],

      gradientStart: "#34283E",
      gradientEnd: "#845FA1",
      
      discountGradientStart: "#D23A3A",
      discountGradientEnd: "#F49763",

      cardForeground: "rgba(52, 40, 62, 0.5)",

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
      slideTitle:{
        fontSize: 25,
        fontFamily: "SF-Bold",
        color: "headerText",
      },
      slideMore:{
        fontSize: 12,
        fontFamily: "SF-Regular",
      },
      clothingCategories: {
        paddingVertical: 's',
        paddingHorizontal: 'm',
        marginRight: 's',
        borderRadius: 'l',
        fontSize: 13,
        fontFamily: "SF-Regular",
      },

      homeCatalogueTitle: {
        fontFamily: "SF-Regular",
        fontSize: 14,
        color: "headerText",
        textAlign: "center"
      },
      catalogueTitle: {
        fontFamily: "SF-Bold",
        fontSize: 17,
        color: "titles"
      },
      filterSizes: {
        fontFamily: "SF-Regular",
        fontSize: 14,
        color: "text"
      },

      sellItemTitle: {
        fontFamily: "SF-Regular",
        fontSize: 14,
        color: "titles",
      },
      sellItemDiscountTag: {
        fontFamily: "SF-Bold",
        fontSize: 11,
        color: "headerText",
      },
      sellItemDiscountPrice: {
        fontFamily: "SF-Bold",
        fontSize: 17,
        color: "danger",
      },
      sellItemPrice: {
        fontFamily: "SF-Bold",
        fontSize: 17,
        color: "titles",
      },
      itemPrice: {
        fontFamily: "SF-Bold",
        fontSize: 25,
        color: "titles",
      },
      sellItemOldPrice: {
        fontFamily: "SF-Bold",
        fontSize: 14,
        color: "secondaryText",
        textDecorationLine: 'line-through'
      },

      stock: {
        fontFamily: "SF-Regular",
        fontSize: 12,
      },
      profileLinks:{
        fontSize: 17,
        fontFamily: "SF-Bold",
        color: "titles",
      },


      title:{
        fontSize: 19,
        lineHeight: 23,
        fontFamily: "SF-Bold",
        color: "titles",
      },
      titleRegular:{
        fontSize: 19,
        lineHeight: 23,
        fontFamily: "SF-Regular",
        color: "titles",
      },
      secondary:{
        fontSize: 12,
        lineHeight: 16,
        fontFamily: "SF-Bold",
        color: "secondaryText",
      },
      reviews:{
        fontSize: 12,
        lineHeight: 16,
        fontFamily: "SF-Regular",
        color: "text",
      },
      secondaryFilter:{
        fontSize: 12,
        lineHeight: 16,
        fontFamily: "SF-Bold",
        color: "titles",
      },
      text:{
        fontSize: 14,
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