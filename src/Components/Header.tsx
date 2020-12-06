import * as React from "react";
import { LinearGradient } from "expo-linear-gradient";
import { FontAwesome5 as Icon } from "@expo/vector-icons";

import { Box, Text, Theme, useTheme } from "./Theme";
import { TouchableWithoutFeedback } from "react-native-gesture-handler";

interface HeaderProps {
  paddingVertical: keyof Theme['spacing'];
  title: string;
  icons?: {
    left?: string;
    right?: string;
  };
}

const Header = ({paddingVertical, title, icons}: HeaderProps) => {
  const theme = useTheme();
  return (
    <LinearGradient
      colors={[theme.colors['gradientStart'], theme.colors['gradientEnd']]}
      start={{ x: 0, y: 0 }}
      end={{ x: 1, y: 0 }}
    >
      <Box
        paddingHorizontal="m"
        flexDirection="row"
        zIndex={10}
        justifyContent="center"
        alignItems="center"
        {...{paddingVertical}}
      >
        {
          (icons && icons.left) &&
          <Box style={{ position: "absolute", left: theme.spacing.m }}>
            <TouchableWithoutFeedback>
              <Icon
                name={icons.left}
                size={20}
                color={theme.colors["headerText"]}
              />
            </TouchableWithoutFeedback>
          </Box>
        }

        <Text variant="header">{title}</Text>
        {
          (icons && icons.right) &&
          <Box style={{ position: "absolute", right: theme.spacing.m }}>
            <TouchableWithoutFeedback>
              <Icon name={icons.right} size={20} color={theme.colors["headerText"]} />
            </TouchableWithoutFeedback>
          </Box>
        }
      </Box>
    </LinearGradient>
  );
};

export default Header;
