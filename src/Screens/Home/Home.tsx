import * as React from "react";
import { View } from "react-native";
import { FontAwesome5 as Icon } from "@expo/vector-icons";

import Header from "../../Components/Header";
import Search from "../../Components/Search";
import { Box, Text, useTheme } from "../../Components/Theme";
import Slideshow from "./Slideshow";
import Cataloge from "./Catalogue";

import SellItem from "../../Components/SellItem";
import { HomeNavigationProps } from "../../Components/Navigation/types";

import { items } from "../../../API/SellingItems";
import { ScrollView } from "react-native-gesture-handler";

const Home = ({ navigation }: HomeNavigationProps<"Items">) => {
  const theme= useTheme();
  const [headerHeight, setHeaderHeight] = React.useState(0)


  return (
    <View>
      <View onLayout={(event) => { setHeaderHeight(event.nativeEvent.layout.height) }}>
        <Header paddingVertical="xxl" title="MyShop" icons={{ right: "bell" }} />
        <Search />
      </View>
      
      <ScrollView style={{marginBottom: headerHeight}}>
        <View>
          <Slideshow />
        </View>
        <Box
          paddingHorizontal="m"
          flexDirection="row"
          justifyContent="space-between"
          paddingBottom="m"
        >
          <Text variant="title">Catalogue</Text>
          <Box flexDirection="row" alignItems="center">
            <Text variant="secondary">See All</Text>
            <Icon name="chevron-right" size={12} color={theme.colors["secondaryText"]} style={{marginLeft: 5}}/>
          </Box>
        </Box>
        <Box paddingHorizontal="m">
          <Cataloge />
        </Box>
        <Box marginTop="l" paddingHorizontal="m">
          <Text variant="title">Featured</Text>
          <Box flexDirection="row" marginTop="m" justifyContent="space-between">
            <Box>
              {items
                .filter(({ id }) => id % 2 !== 0)
                .slice(0,2)
                .map((item) => (
                  <SellItem key={item.id} {...item} onPress={() => navigation.push('Product')} />
                ))}
            </Box>
            <Box>
              {items
                .filter(({ id }) => id % 2 === 0)
                .slice(0,2)
                .map((item) => (
                  <SellItem key={item.id} {...item} onPress={() => navigation.push('Product')} />
                ))}
            </Box>
          </Box>
        </Box>
      </ScrollView>
    </View>
  );
};

export default Home;
