import * as React from "react";
import { LinearGradient } from "expo-linear-gradient";
import { FontAwesome5 as Icon } from "@expo/vector-icons";

import { Box, Text, Theme, useTheme } from "./Theme";
import { Pressable } from "react-native";

interface HeaderProps {
  paddingVertical: keyof Theme["spacing"];
  title: string;
  actions?: {
    left?: () => void;
    right?: () => void;
  };
  icons?: {
    left?: string;
    right?: string;
  };
}

const Header = ({ paddingVertical, title, icons, actions }: HeaderProps) => {
  const theme = useTheme();
  return (
    <LinearGradient
      colors={[theme.colors["gradientStart"], theme.colors["gradientEnd"]]}
      start={{ x: 0, y: 0 }}
      end={{ x: 1, y: 0 }}
    >
      <Box
        paddingHorizontal="m"
        flexDirection="row"
        zIndex={10}
        justifyContent="center"
        alignItems="center"
        {...{ paddingVertical }}
      >
        {icons && icons.left && (
          <Pressable onPress={actions?.left} style={{ position: "absolute", left: theme.spacing.m }}>
          <Box
            style={{ left: -theme.spacing.m }}
            padding="m"
          >
              <Icon
                name={icons.left}
                size={20}
                color={theme.colors["headerText"]}
              />
          </Box>
            </Pressable>
        )}

        <Text variant="header">{title}</Text>
        {icons && icons.right && (
          <Pressable
            onPress={actions?.right}
            style={{ position: "absolute", right: theme.spacing.m }}
          >
            <Box
              style={{ right: -theme.spacing.m }}
              padding="m"
            >
              <Icon
                name={icons.right}
                size={20}
                color={theme.colors["headerText"]}
              />
            </Box>
          </Pressable>
        )}
      </Box>
    </LinearGradient>
  );
};

export default Header;
