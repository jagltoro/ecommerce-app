import * as React from "react";
import { Image, PixelRatio } from "react-native";
import { FontAwesome as Icon } from "@expo/vector-icons";
import { Box, Text, useTheme } from "./Theme";
import { LinearGradient } from "expo-linear-gradient";
import { TouchableWithoutFeedback } from "react-native-gesture-handler";

interface SellItemProps {
  title: string;
  price: number;
  rating: number;
  picture: {
    src: number;
  };
  discount?: string;
  discountPrice?: number;
}

const SellItem = ({
  title,
  price,
  rating,
  picture,
  discount,
  discountPrice,
}: SellItemProps) => {
  const fillRestOfStars = 5 - rating;
  const theme = useTheme();
  const IMAGE_SIZE = PixelRatio.get() <= 2 ? 155 : 200
  const [favorite, setFavorite] = React.useState(false);

  return (
    <Box marginBottom="l">
      <Box
        backgroundColor="photoBackground"
        borderTopLeftRadius="m"
        borderTopRightRadius="m"
      >
        <Image
          source={picture.src}
          style={{
            height: IMAGE_SIZE,
            width: IMAGE_SIZE,
            resizeMode: "cover",
          }}
        />
        {discount && (
          <LinearGradient
            colors={[
              theme.colors["discountGradientStart"],
              theme.colors["discountGradientEnd"],
            ]}
            start={{ x: 0, y: 0 }}
            end={{ x: 1, y: 0 }}
            style={{
              position: 'absolute',
              top: 8,
              borderTopRightRadius: theme.borderRadii.l,
              borderBottomRightRadius: theme.borderRadii.l
            }}
          >
            <Box
              padding="s"
            >
              <Text variant="sellItemDiscountTag">{`-${discount}`}</Text>
            </Box>
          </LinearGradient>
        )}
        
        <Box
          position="absolute"
          bottom={-15}
          right={8}
          padding="s"
          backgroundColor="favoriteBackground"
          borderRadius="l"
          
        >
          <TouchableWithoutFeedback onPress={() => setFavorite(favorite => !favorite)}>
            <Icon name={favorite ? "heart": "heart-o"} color={favorite ? theme.colors["warning"]: theme.colors["titles"]} size={20} />
          </TouchableWithoutFeedback>
        </Box>
      </Box>
      <Box flexDirection="row" paddingVertical="s">
        {Array(rating)
          .fill(0)
          .map((_, i) => (
            <Icon
              key={i}
              color={theme.colors["warning"]}
              style={{ marginRight: 2 }}
              name={"star"}
              size={10}
            />
          ))}
        {Array(fillRestOfStars)
          .fill(0)
          .map((_, i) => (
            <Icon
              key={i}
              color={theme.colors["warning"]}
              style={{ marginRight: 2 }}
              name={"star"}
              size={10}
            />
          ))}
      </Box>
      <Box flexDirection="row" paddingBottom="s">
        <Text variant="sellItemTitle" style={{ flex: 1, flexWrap: "wrap" }}>
          {title}
        </Text>
      </Box>
      <Box flexDirection="row" alignItems="center">
        {discountPrice && (
          <Text
            variant="sellItemDiscountPrice"
            marginRight="s"
          >{`$${discountPrice}`}</Text>
        )}
        <Text
          variant={discountPrice ? "sellItemOldPrice" : "sellItemPrice"}
        >{`$${price}`}</Text>
      </Box>
    </Box>
  );
};

export default SellItem;
