import * as React from "react";
import { Pressable } from "react-native";
import Animated, { Easing } from "react-native-reanimated";
import { FontAwesome as Icon } from "@expo/vector-icons";

import { Box, Text } from "../../Components/Theme";

interface ItemDescriptionProps {
  description: string;
  iconColor: string;
}

const Description = ({ description, iconColor }: ItemDescriptionProps) => {
  const [expanded, setExpanded] = React.useState(false);
  const [lines, setLines] = React.useState(4);

  const animationHeight = React.useRef(new Animated.Value(5)).current;

  React.useEffect(() => {
    if (expanded) {
      Animated.timing(animationHeight, {
        duration: 500,
        toValue: 60,
        easing: Easing.linear,
      }).start(() => {
        setLines(60);
      });
    } else {
      setLines(4);
      Animated.timing(animationHeight, {
        duration: 500,
        toValue: 5,
        easing: Easing.linear,
      }).start();
    }
  }, [expanded]);

  return (
    <Box
      marginTop="s"
      padding="m"
      backgroundColor="photoBackground"
      borderRadius="m"
    >
      <Text variant="title" marginBottom="s">
        Product details
      </Text>
      <Animated.View style={[{ height: animationHeight, marginBottom: 50 }]}>
        <Text variant="text" numberOfLines={lines}>
          {description}
        </Text>
      </Animated.View>
      <Pressable onPress={() => setExpanded((expanded) => !expanded)}>
        <Box justifyContent="center" alignItems="center" marginTop="s">
          <Icon
            name={expanded ? "chevron-up" : "chevron-down"}
            size={16}
            color={iconColor}
          />
        </Box>
      </Pressable>
    </Box>
  );
};

export default Description;
