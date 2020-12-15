import * as React from "react";
import { ScrollView } from "react-native-gesture-handler";
import { FontAwesome5 as Icon } from "@expo/vector-icons";


import Header from "../../Components/Header";
import Search from "../../Components/Search";
import { Box, Text } from "../../Components/Theme";
import SellItem from "../../Components/SellItem";

import { items } from "../../../API/SellingItems";

const Items = () => {
  const [headerHeight, setHeaderHeight] = React.useState(0);
  return (
    <Box>
      <Box
        onLayout={(event) => {
          setHeaderHeight(event.nativeEvent.layout.height);
        }}
      >
        <Header paddingVertical="xxl" title="Catalogue" />
        <Search />
      </Box>

      <ScrollView style={{ marginBottom: headerHeight }}>
        <Box marginTop="l" paddingHorizontal="m">
          <Box flexDirection="row" justifyContent="space-between" alignItems="center">
            <Text variant="title">166 items</Text>
            <Box flexDirection="row" alignItems="center">
              <Text variant="secondary">Sort by: </Text>
              <Text variant="secondaryFilter">Featured</Text>
              <Icon name="chevron-down" size={12} style={{marginLeft: 5}}/>
            </Box>
          </Box>
          <Box flexDirection="row" marginTop="m" justifyContent="space-between">
            <Box>
              {items
                .filter(({ id }) => id % 2 !== 0)
                .map((item) => (
                  <SellItem key={item.id} {...item} />
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
    </Box>
  );
};

export default Items;
