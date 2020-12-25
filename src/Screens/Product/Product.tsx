import * as React from "react";
import { Dimensions, Pressable } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import { LinearGradient } from "expo-linear-gradient";
import { FontAwesome as Icon } from "@expo/vector-icons";

import { Box, Text, useTheme } from "../../Components/Theme";
import RatingStars from "../../Components/RatingStars";

import { ItemDetail } from "../../../API/ItemDetail";
import { items } from "../../../API/SellingItems";
import SellItem from "../../Components/SellItem";
import Slideshow from "./Slideshow";
import Variants from "./Variants";
import Description from "./Description";
import Review from "./Review";
import { CatalogueNavigationProps } from "../../Components/Navigation/types";
import PressableOpacity from "../../Components/PressableOpacity";

const { width, height } = Dimensions.get("window");

const Product = ({ navigation }: CatalogueNavigationProps<"Product">) => {
  const theme = useTheme();
  const [mainImages, setMainImages] = React.useState(ItemDetail.colors[0]);

  const handleItemVariant = (color: { images: number[] }) => {
    setMainImages(color);
  };

  return (
    <Box>
      <ScrollView>
        <Box style={{ height: height / 2 }} backgroundColor="photoBackground">
          <Slideshow slides={mainImages.images} />
          <LinearGradient
            colors={["rgba(32,32,32,0.37)", "rgba(32,32,32,0)"]}
            style={{ height: 50, position: "absolute", width: width }}
          />
        </Box>
        <Box
          padding="m"
          backgroundColor="photoBackground"
          borderBottomRightRadius="m"
          borderBottomLeftRadius="m"
        >
          <Box
            flexDirection="row"
            alignItems="center"
            justifyContent="space-between"
          >
            <Box flexDirection="row" alignItems="center">
              <RatingStars
                rating={ItemDetail.reviews.length}
                color={theme.colors["warning"]}
              />
              <Text variant="reviews" style={{ marginLeft: 5 }}>
                {ItemDetail.reviews.length} Reviews
              </Text>
            </Box>
            <Box>
              <Text
                variant="stock"
                color={ItemDetail.stock ? "success" : "warning"}
              >
                {ItemDetail.stock ? "In stock" : "Out of stock"}
              </Text>
            </Box>
          </Box>

          <Box marginVertical="s">
            <Text variant="titleRegular">{ItemDetail.title}</Text>
          </Box>

          <Box>
            <Text variant="itemPrice">{ItemDetail.price}</Text>
          </Box>

          <Box marginVertical="s">
            <Text>Colors</Text>
            <Variants
              colors={ItemDetail.colors}
              onPress={handleItemVariant}
            />
          </Box>

          <Box marginVertical="s">
            <Text>Sizes</Text>
            <ScrollView
              horizontal
              showsHorizontalScrollIndicator={false}
              style={{ marginTop: 15 }}
            >
              {ItemDetail.sizesAvailable.map((size, index) => (
                <Box
                  key={index}
                  backgroundColor="searchBackground"
                  padding="s"
                  marginRight="s"
                  width={47}
                  height={47}
                  justifyContent="center"
                  alignItems="center"
                  borderRadius="m"
                  borderColor="inputBorder"
                  borderWidth={1}
                >
                  <Text variant="filterSizes">{size}</Text>
                </Box>
              ))}
            </ScrollView>
          </Box>
        </Box>
        <Description description={ItemDetail.description} iconColor={theme.colors["secondaryText"]} />
        <Box
          marginTop="s"
          padding="m"
          backgroundColor="photoBackground"
          borderRadius="m"
        >
          <Box
            flexDirection="row"
            alignItems="center"
            justifyContent="space-between"
          >
            <Text variant="title" marginBottom="s">
              Reviews
            </Text>
            <Box flexDirection="row" alignItems="center">
              <Text variant="secondary">See All</Text>
              <Icon
                name="chevron-right"
                size={12}
                color={theme.colors["secondaryText"]}
                style={{ marginLeft: 5 }}
              />
            </Box>
          </Box>

          {ItemDetail.reviews.map((review, index) => {
            const data = {
              ...review,
              ratingColor: theme.colors['warning'],
              colorSecondary: theme.colors['secondaryText']
            };
            return (<Review key={index} review={data} /> )
          }
          )}
        </Box>
        <Box marginTop="m" padding="m">
          <Text variant="title" marginBottom="s">
            Products related to this item
          </Text>
          <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            {items.map((item) => (
              <Box key={item.id} marginRight="m">
                <SellItem {...item}  onPress={() => navigation.push('Product')} />
              </Box>
            ))}
          </ScrollView>
        </Box>
          <Box
            backgroundColor="photoBackground"
            borderTopLeftRadius="l"
            borderTopRightRadius="l"
            padding="m"
            flexDirection="row"
            alignItems="center"
            justifyContent="space-between"
          >
            <PressableOpacity onPress={() =>  navigation.pop()} padding={theme.spacing.s} borderRadius={theme.borderRadii.xl} onPressBg="rgba(0,0,0,0.1)">
              <Icon
                name="arrow-left"
                size={24}
                color={theme.colors["secondaryText"]}
              />
            </PressableOpacity>
            <Pressable>
              <Box
                paddingHorizontal="xxl"
                paddingVertical="m"
                backgroundColor="warning"
                borderRadius="m"
              >
                <Text variant="catalogueTitle" color="headerText">
                  Add to Cart
                </Text>
              </Box>
            </Pressable>
            <Icon
              name="heart-o"
              size={24}
              color={theme.colors["secondaryText"]}
            />
          </Box>
      </ScrollView>
    </Box>
  );
};

export default Product;
