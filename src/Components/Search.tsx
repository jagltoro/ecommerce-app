import * as React from "react";
import { Dimensions, TextInput } from "react-native";
import { FontAwesome5 as Icon } from "@expo/vector-icons";
import { Box, Text, useTheme } from "./Theme";

const { width: wWidth } = Dimensions.get("window");

const Search = () => {
  const theme = useTheme();
  return (
    <Box
      height={44}
      backgroundColor="searchBackground"
      borderRadius="l"
      position="absolute"
      alignItems="center"
      paddingHorizontal="m"
      flexDirection="row"
      style={{ width: wWidth - (theme.spacing.m + 15), top: -22 }}
    >
      <Icon
        name="search"
        size={20}
        color={theme.colors["secondaryText"]}
        style={{ marginRight: 10 }}
      />
      <TextInput
        underlineColorAndroid={"transparent"}
        placeholderTextColor={theme.colors["secondaryText"]}
        placeholder="What are you looking for?"
      />
    </Box>
  );
};

export default Search;
