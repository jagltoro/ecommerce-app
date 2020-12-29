import * as React from "react";
import { LinearGradient } from "expo-linear-gradient";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { FontAwesome5 as Icon } from "@expo/vector-icons";

import { Box, Text, useTheme } from "../../Components/Theme";
import { Image, Pressable } from "react-native";

const Profile = () => {
  const theme = useTheme();
  const insets = useSafeAreaInsets();

  return (
    <>
      <LinearGradient
        colors={[theme.colors["gradientStart"], theme.colors["gradientEnd"]]}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 0 }}
        style={{ paddingTop: insets.top, borderBottomRightRadius: 300 }}
      >
        <Box padding="m" flexDirection="row" justifyContent="space-between" alignItems="center">
          <Box flexDirection="row">
            <Image
              source={require("#/images/avatar.png")}
              style={{
                width: 70,
                height: 70,
                borderRadius: 35,
              }}
            />
            <Box justifyContent="center" marginLeft="m">
              <Text variant="title" color="headerText">Oleh Chabanov</Text>
              <Text variant="text" color="headerText">+38 (099) 123 45 67</Text>
            </Box>
          </Box>
          <Box backgroundColor="headerText" padding="m" borderRadius="xl">
            <Icon name="pencil-alt" size={20}/>
          </Box>
        </Box>
      </LinearGradient>
      <Box padding="m">
          <Box backgroundColor="searchBackground" padding="m" borderRadius="m" flexDirection="row" alignItems="center">
            <Icon name="map-marker-alt" size={20} style={{marginRight: 12 }} />
            <Text variant="profileLinks">asdasd</Text>
          </Box>
      </Box>
    </>
  );
};

export default Profile;
