import * as React from "react";
import { View } from "react-native";
import Header from "../../Components/Header";
import Search from "../../Components/Search";
import { useTheme } from "../../Components/Theme";
import Slideshow from "./Slideshow";

const Home = () => {
  const theme = useTheme();
  return (
    <View>
      <Header
        paddingVertical="xxl"
        title="MyShop"
        icons={{ right: "bell" }}
      />
      <View style={{flex: 1, backgroundColor: theme.colors['background'],justifyContent: "center", alignItems: "center", marginBottom: theme.spacing.xxl}}>
          <Search />
      </View>
      <View>
        <Slideshow/>
      </View>
    </View>
  );
};

export default Home;
