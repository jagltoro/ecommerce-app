import * as React from "react";
import { ScrollView } from "react-native-gesture-handler";
import { Pressable } from "react-native";
import { FontAwesome5 as Icon } from "@expo/vector-icons";
import { Modalize } from 'react-native-modalize';

import { items } from "../../../API/SellingItems";
import { categories } from "../../../API/Categories";

import Header from "../../Components/Header";
import Search from "../../Components/Search";
import { Box, Text, useTheme } from "../../Components/Theme";
import { CatalogueNavigationProps } from "../../Components/Navigation/types";
import SellItem from "../../Components/SellItem";

import Filter from "./Filter";


const Items = ({ navigation }: CatalogueNavigationProps<"Items">) => {
  const [headerHeight, setHeaderHeight] = React.useState(0);
  const [category, setCategory] = React.useState("All");
  const theme = useTheme();
  const modalizeRef = React.useRef<Modalize>(null);

  const onOpen = () => {
    modalizeRef.current?.open();
  };

  const onClose = () => {
    modalizeRef.current?.close();
  };

  return (
    <Box>
      <Box
        onLayout={(event) => {
          setHeaderHeight(event.nativeEvent.layout.height);
        }}
      >
        <Header
          paddingVertical="xxl"
          title="Clothing"
          icons={{ left: "arrow-left", right: "sliders-h" }}
          actions={{ left: () => navigation.pop(), right: onOpen }}
        />
        <Search />
      </Box>

      <ScrollView style={{ marginBottom: headerHeight }}>
        <Box marginHorizontal="m" flexDirection="row" alignItems="center">
          <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            {categories.map((cat, index) => (
              <Pressable key={index} onPressIn={() => setCategory(cat)}>
                <Text
                  variant="clothingCategories"
                  style={{
                    backgroundColor:
                      category === cat
                        ? theme.colors["warning"]
                        : theme.colors["searchBackground"],
                  }}
                >
                  {cat}
                </Text>
              </Pressable>
            ))}
          </ScrollView>
        </Box>

        <Box marginTop="l" paddingHorizontal="m">
          <Box
            flexDirection="row"
            justifyContent="space-between"
            alignItems="center"
          >
            <Text variant="title">166 items</Text>
            <Box flexDirection="row" alignItems="center">
              <Text variant="secondary">Sort by: </Text>
              <Text variant="secondaryFilter">Featured</Text>
              <Icon name="chevron-down" size={12} style={{ marginLeft: 5 }} />
            </Box>
          </Box>
          <Box flexDirection="row" marginTop="m" justifyContent="space-between">
            <Box>
              {items
                .filter(({ id }) => id % 2 !== 0)
                .map((item) => (
                  <SellItem key={item.id} {...item} onPress={() => navigation.push('Product')}/>
                ))}
            </Box>
            <Box>
              {items
                .filter(({ id }) => id % 2 === 0)
                .map((item) => (
                  <SellItem key={item.id} {...item} />
                ))}
            </Box>
          </Box>
        </Box>
      </ScrollView>
      <Modalize ref={modalizeRef}>
        <Filter closeModal={onClose}/>
      </Modalize>
    </Box>
  );
};


export default Items;
