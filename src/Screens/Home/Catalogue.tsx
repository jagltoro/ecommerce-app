import * as React from "react";
import { Image, Pressable } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import { Box, Text, useTheme } from "../../Components/Theme";

import {catalogue} from '../../../API/Catalogue';


const CARD_HEIGHT = 88;
const CARD_WIDTH = 88;

const Catalogue = () => {
  const theme = useTheme();
  return (
    <Box>
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        {catalogue.map((item) => (
          <Pressable onPress={() => true} key={item.id} style={{marginRight: theme.spacing.s}}>
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
              <Text variant="homeCatalogueTitle">{item.title}</Text>
            </Box>
          </Pressable>
        ))}
      </ScrollView>
    </Box>
  );
};

export default Catalogue;
