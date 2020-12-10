import * as React from "react";
import { Image } from "react-native";
import { ScrollView, TouchableHighlight } from "react-native-gesture-handler";
import { Box, Text, useTheme } from "../../Components/Theme";

const catalogueItems = [
  {
    id: 1,
    title: "Women's Fashion",
    picture: {
      src: require("#/images/catalogue/women_fashion.png"),
    },
  },
  {
    id: 2,
    title: "Men's Fashion",
    picture: {
      src: require("#/images/catalogue/men_fashion.png"),
    },
  },
  {
    id: 3,
    title: "Phones",
    picture: {
      src: require("#/images/catalogue/phones.png"),
    },
  },
  {
    id: 4,
    title: "Computers",
    picture: {
      src: require("#/images/catalogue/computers.png"),
    },
  },
  {
    id: 5,
    title: "Smart home",
    picture: {
      src: require("#/images/catalogue/smart_home.png"),
    },
  },
  {
    id: 6,
    title: "Arts & Crafts",
    picture: {
      src: require("#/images/catalogue/arts_crafts.png"),
    },
  },
  {
    id: 7,
    title: "Baby",
    picture: {
      src: require("#/images/catalogue/baby.png"),
    },
  },
  {
    id: 8,
    title: "Sport",
    picture: {
      src: require("#/images/catalogue/sport.png"),
    },
  },
];

const CARD_HEIGHT = 88;
const CARD_WIDTH = 88;

const Catalogue = () => {
  const theme = useTheme();
  return (
    <Box>
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        {catalogueItems.map((item) => (
          <TouchableHighlight onPress={() => true} key={item.id} style={{marginRight: theme.spacing.s}}>
            <Box
              justifyContent="center"
              alignItems="center"
              height={CARD_HEIGHT}
              width={CARD_WIDTH}
              flexShrink={1}
            >
              <Image
                source={item.picture.src}
                style={{
                  width: CARD_WIDTH,
                  height: CARD_HEIGHT,
                  resizeMode: "cover",
                  position: "absolute",
                }}
              />
              <Box
                backgroundColor="cardForeground"
                borderRadius="s"
                position="absolute"
                height={CARD_HEIGHT}
                width={CARD_WIDTH}
              ></Box>
              <Text variant="catalogueTitle">{item.title}</Text>
            </Box>
          </TouchableHighlight>
        ))}
      </ScrollView>
    </Box>
  );
};

export default Catalogue;
