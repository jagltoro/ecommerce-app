import * as React from "react";
import Header from "../../Components/Header";
import { Box, Text } from "../../Components/Theme";

const Home = () => {
  return (
    <Box flex={1} backgroundColor="background">
      <Header
        paddingVertical="xxl"
        title="MyShop"
        icons={{ left: "arrow-left", right: "bell" }}
      />
      <Box paddingHorizontal="m">
        <Text>HomeTab</Text>
      </Box>
    </Box>
  );
};

export default Home;
