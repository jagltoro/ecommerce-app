import * as React from "react";
import { Dimensions, TextInput } from "react-native";
import { FontAwesome5 as Icon } from "@expo/vector-icons";
import { Box, Text, useTheme, Theme, makeStyles } from "./Theme";

const { width: wWidth } = Dimensions.get("window");

const useStyles = makeStyles((theme: Theme) => ({
  searchContainer: {
    flex: 1,
    backgroundColor: theme.colors["background"],
    justifyContent: "center",
    alignItems: "center",
    marginBottom: theme.spacing.xxl,
  },
}));

const Search = () => {
  const theme = useTheme();
  const style = useStyles();
  return (
    <Box style={style.searchContainer}>
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
    </Box>
  );
};

export default Search;
