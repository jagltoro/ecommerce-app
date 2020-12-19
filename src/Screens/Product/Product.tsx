import * as React from "react";
import { Dimensions, Image, Pressable } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import { LinearGradient } from "expo-linear-gradient";
import { FontAwesome as Icon } from "@expo/vector-icons";

import { Box, Text, useTheme } from "../../Components/Theme";
import RatingStars from "../../Components/RatingStars";

import { ItemDetail } from "../../../API/ItemDetail";
import { items } from "../../../API/SellingItems";
import SellItem from "../../Components/SellItem";

const { width, height } = Dimensions.get("window");

const Product = () => {
  const [lines, setLines] = React.useState(4);
  const theme = useTheme();
  return (
    <Box>
      <ScrollView>
        <Box style={{ height: height / 2 }} backgroundColor="photoBackground">
          <Image
            source={require("#/images/items/itemDetail/Yellow-Brown/E59B5C828503B3693B2473A5F056DEEA.png")}
            style={{
              width: "100%",
              height: height / 2,
              resizeMode: "contain",
            }}
          />
          <LinearGradient colors={['rgba(32,32,32,0.37)', 'rgba(32,32,32,0)']} style={{height: 50, position: "absolute", width: width}}/>
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
            <ScrollView
              horizontal
              showsHorizontalScrollIndicator={false}
              style={{ marginTop: 15 }}
            >
              {ItemDetail.colors.map((color, index) => (
                <Image
                  key={index}
                  source={color.images[0]}
                  style={{
                    width: 47,
                    height: 47,
                    resizeMode: "contain",
                    marginRight: 12,
                  }}
                />
              ))}
            </ScrollView>
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
        <Box
          marginTop="s"
          padding="m"
          backgroundColor="photoBackground"
          borderRadius="m"
        >
          <Text variant="title" marginBottom="s">
            Product details
          </Text>
          <Text variant="text" numberOfLines={lines}>{ItemDetail.description}</Text>
          <Pressable onPress={() => setLines((lines) => lines > 4 ? 4 : 99 )}>
            <Box justifyContent="center" alignItems="center" marginTop="s">
              <Icon name={lines > 4 ? "chevron-up" : "chevron-down"} size={16} color={theme.colors['secondaryText']} />
            </Box>
          </Pressable>
        </Box>
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

          {ItemDetail.reviews.map((review, index) => (
            <Box key={index} marginBottom="m">
              <Text>{review.user}</Text>
              <Box
                flexDirection="row"
                alignItems="center"
                justifyContent="space-between"
                marginTop="s"
              >
                <RatingStars
                  rating={review.rating}
                  color={theme.colors["warning"]}
                />
                <Text variant="secondary">{review.date}</Text>
              </Box>
              <Text variant="text">{review.review}</Text>
              <Box
                flexDirection="row"
                alignItems="center"
                justifyContent="space-between"
              >
                <Text
                  style={{
                    fontSize: 11,
                    fontFamily: "SF-Regular",
                    color: theme.colors["secondaryText"],
                    marginTop: 5,
                  }}
                >
                  {Math.floor(Math.random() * (100 - 10) + 10)} people found
                  this helpful
                </Text>
                <Box
                  flexDirection="row"
                  alignItems="center"
                  justifyContent="center"
                >
                  <Text
                    style={{
                      fontSize: 11,
                      fontFamily: "SF-Regular",
                      color: theme.colors["secondaryText"],
                      marginTop: 5,
                    }}
                  >
                    Helpful
                  </Text>
                  <Icon
                    name="thumbs-up"
                    size={12}
                    color={theme.colors["secondaryText"]}
                    style={{ marginLeft: 5, marginTop: 4 }}
                  />
                </Box>
              </Box>
            </Box>
          ))}
        </Box>
        <Box marginTop="m" padding="m">
          <Text variant="title" marginBottom="s">
            Products related to this item
          </Text>
          <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            {items.map((item) => (
              <Box key={item.id} marginRight="m">
                <SellItem {...item} onPress={() => true} />
              </Box>
            ))}
          </ScrollView>
        </Box>
      </ScrollView>
    </Box>
  );
};

export default Product;
