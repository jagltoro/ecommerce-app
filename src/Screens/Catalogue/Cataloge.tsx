import * as React from "react";
import { Image } from "react-native";
import { ScrollView, TouchableOpacity } from "react-native-gesture-handler";
import Header from "../../Components/Header";
import Search from "../../Components/Search";
import { Box, Text } from "../../Components/Theme";

import { catalogue } from "../../../API/Categories";

import { CatalogueNavigationProps } from "../../Components/Navigation/types";

const Cataloge = ({navigation}: CatalogueNavigationProps<"Catalogue">) => {
  const [headerHeight, setHeaderHeight] = React.useState(0);
  return (
    <Box>
      <Box
        onLayout={(event) => {
          setHeaderHeight(event.nativeEvent.layout.height);
        }}
      >
        <Header
          paddingVertical="xxl"
          title="Catalogue"
        />
        <Search />
      </Box>

      <ScrollView style={{ marginBottom: headerHeight }}>
        <Box paddingHorizontal="m">
          {catalogue.map((item) => (
            <TouchableOpacity onPress={() => navigation.navigate('Items')} key={item.id} activeOpacity={0.7}>
            <Box
              key={item.id}
              backgroundColor="photoBackground"
              flexDirection="row"
              justifyContent="space-between"
              alignItems="center"
              borderRadius="s"
              marginBottom="m"
            >
              <Box paddingLeft="m">
                <Text variant="catalogueTitle">{item.title}</Text>
              </Box>
              <Image source={item.picture.src} />
            </Box>
            </TouchableOpacity>
          ))}
        </Box>
      </ScrollView>
    </Box>
  );
};

export default Cataloge;
