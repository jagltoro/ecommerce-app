import * as React from "react";
import { ScrollView, TextInput } from "react-native";
import {Picker} from '@react-native-picker/picker';

import Header from "../../Components/Header";
import { Box, Text, useTheme } from "../../Components/Theme";
import { colors } from "../../../API/ItemColors";
import { sizes } from "../../../API/ItemSizes";
import { categories } from "../../../API/Categories";

interface FilterProps {
  closeModal: () => void;
}

const Filter = ({closeModal}: FilterProps) => {
  const theme = useTheme();
  const [colorSelected, setColor] = React.useState("");
  const [categorySelected, setCategory] = React.useState("");
  const [brandSelected, setBrand] = React.useState("");
  const [sortSelected, setSort] = React.useState("");

  return (
    <Box backgroundColor="background" flex={1} marginBottom="xxl">
      <Header paddingVertical="m" title="Filter" icons={{right: 'check'}} actions={{right: closeModal}} />
      <ScrollView style={{ marginBottom: 120 }}>
        <Box padding="m">
          <Box>
            <Text variant="secondary">Price</Text>
            <Box
              flexDirection="row"
              backgroundColor="searchBackground"
              marginTop="s"
              marginBottom="m"
              borderRadius="m"
            >
              <TextInput
                keyboardType="numeric"
                style={{
                  height: 48,
                  borderColor: theme.colors["inputBorder"],
                  borderWidth: 1,
                  width: "50%",
                  textAlign: "center",
                  borderTopLeftRadius: theme.borderRadii.m,
                  borderBottomLeftRadius: theme.borderRadii.m,
                }}
                placeholder="$0"
              />
              <TextInput
                keyboardType="numeric"
                style={{
                  height: 48,
                  borderColor: theme.colors["inputBorder"],
                  borderWidth: 1,
                  width: "50%",
                  textAlign: "center",
                  borderTopRightRadius: theme.borderRadii.m,
                  borderBottomRightRadius: theme.borderRadii.m,
                }}
                placeholder="$10000"
              />
            </Box>
          </Box>
          <Box>
            <Text variant="secondary">Categories</Text>
            <Box
              backgroundColor="searchBackground"
              marginTop="s"
              marginBottom="m"
              borderRadius="m"
            >
              <Picker
                selectedValue={categorySelected}
                style={{height: 50, width: '100%'}}
                onValueChange={(itemValue, itemIndex) =>
                  setCategory(itemValue)
                }>
                {
                  categories.map((category,index) => (
                    <Picker.Item label={category} value={category} key={index} />
                  ))
                }
              </Picker>
            </Box>
          </Box>
          <Box>
            <Text variant="secondary">Brand</Text>
            <Box
              backgroundColor="searchBackground"
              marginTop="s"
              marginBottom="m"
              borderRadius="m"
            >
              <Picker
                selectedValue={brandSelected}
                style={{height: 50, width: '100%'}}
                onValueChange={(itemValue, itemIndex) =>
                  setBrand(itemValue)
                }>
                <Picker.Item label="All" value="all" />
                <Picker.Item label="Java" value="java" />
                <Picker.Item label="JavaScript" value="js" />
              </Picker>
            </Box>
          </Box>
          <Box>
            <Text variant="secondary">Colors</Text>
            <Box
              flexDirection="row"
              marginTop="s"
              marginBottom="m"
              borderRadius="m"
            >
              {colors.map((color, index) => (
                <Box
                  width={47}
                  height={47}
                  style={{ borderRadius: 47 / 2 }}
                  justifyContent="center"
                  alignItems="center"
                  marginRight="s"
                  borderWidth={2}
                  borderColor="transparent"
                  key={index}
                >
                  <Box
                    width={35}
                    height={35}
                    style={{ borderRadius: 35 / 2, backgroundColor: color }}
                  />
                </Box>
              ))}
            </Box>
          </Box>
          <Box>
            <Text variant="secondary">Sizes</Text>
            <Box flexDirection="row" marginTop="s" marginBottom="m">
              {sizes.map((size, index) => (
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
                >
                  <Text variant="filterSizes">{size}</Text>
                </Box>
              ))}
            </Box>
          </Box>
          <Box>
            <Text variant="secondary">Sort By</Text>
            <Box
              backgroundColor="searchBackground"
              marginTop="s"
              marginBottom="m"
              borderRadius="m"
            >
              <Picker
                selectedValue={sortSelected}
                style={{height: 50, width: '100%'}}
                onValueChange={(itemValue, itemIndex) =>
                  setSort(itemValue)
                }>
                <Picker.Item label="All" value="all" />
                <Picker.Item label="Java" value="java" />
                <Picker.Item label="JavaScript" value="js" />
              </Picker>
            </Box>
          </Box>
        </Box>
      </ScrollView>
    </Box>
  );
};

export default Filter;
