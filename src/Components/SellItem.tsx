import * as React from "react";
import { Image, PixelRatio, Pressable } from "react-native";
import { FontAwesome as Icon } from "@expo/vector-icons";
import { Box, Text, useTheme } from "./Theme";
import { LinearGradient } from "expo-linear-gradient";
import { TouchableWithoutFeedback } from "react-native-gesture-handler";
import RatingStars from "./RatingStars";

interface SellItemProps {
  title: string;
  price: number;
  rating: number;
  picture: {
    src: number;
  };
  discount?: string;
  discountPrice?: number;
  onPress?: () => void
}

const SellItem = ({
  title,
  price,
  rating,
  picture,
  discount,
  discountPrice,
  onPress
}: SellItemProps) => {
  const fillRestOfStars = 5 - rating;
  const theme = useTheme();
  const IMAGE_SIZE = PixelRatio.get() <= 2 ? 155 : 200;
  const [favorite, setFavorite] = React.useState(false);

  return (
    <Pressable {...{onPress}}>
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
                position: "absolute",
                top: 8,
                borderTopRightRadius: theme.borderRadii.l,
                borderBottomRightRadius: theme.borderRadii.l,
              }}
            >
              <Box padding="s">
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
            <TouchableWithoutFeedback
              onPress={() => setFavorite((favorite) => !favorite)}
            >
              <Icon
                name={favorite ? "heart" : "heart-o"}
                color={
                  favorite ? theme.colors["warning"] : theme.colors["titles"]
                }
                size={20}
              />
            </TouchableWithoutFeedback>
          </Box>
        </Box>
        <Box flexDirection="row" paddingVertical="s">
          <RatingStars rating={rating} color={theme.colors["warning"]} />
        </Box>
        <Box flexDirection="row" paddingBottom="s">
          <Text
            variant="sellItemTitle"
            numberOfLines={2}
            style={{ flex: 1, flexWrap: "wrap", width: 140 }}
          >
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
    </Pressable>
  );
};

export default SellItem;
