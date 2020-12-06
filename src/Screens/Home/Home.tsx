import * as React from "react";
import Header from "../../Components/Header";
import Search from "../../Components/Search";
import { Box, Text } from "../../Components/Theme";

const Home = () => {
  return (
    <>
    <Header
      paddingVertical="xxl"
      title="MyShop"
      icons={{ right: "bell" }}
    />
    <Box flex={1} backgroundColor="background">
      <Box justifyContent="center" alignItems="center" marginBottom="xxl">
        <Search />
      </Box>
      <Box paddingHorizontal="m">
        <Text>HomeTab</Text>
      </Box>
    </Box>
    </>
  );
};

export default Home;
