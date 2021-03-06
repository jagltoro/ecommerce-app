import {RouteProp} from '@react-navigation/native';
import {StackNavigationProp} from "@react-navigation/stack";


export type RootStackParamList = {
  Root: undefined;
  NotFound: undefined;
};

export type BottomTabParamList = {
  Home: undefined;
  Catalogue: undefined;
  Favorites: undefined;
  Profile: undefined;
};
/** =================================== */
export type HomeTabParamList = {
  Home: undefined;
  Product: undefined;
};
export interface HomeNavigationProps<
RouteName extends keyof HomeTabParamList
> {
  navigation: StackNavigationProp<HomeTabParamList, RouteName>
  route: RouteProp<HomeTabParamList,RouteName>
}
/** =================================== */

/* ================================= */
export type CatalogueTabParamList = {
  Product: undefined;
  Catalogue: undefined;
  Items: undefined;
};

export interface CatalogueNavigationProps<
RouteName extends keyof CatalogueTabParamList
> {
  navigation: StackNavigationProp<CatalogueTabParamList, RouteName>
  route: RouteProp<CatalogueTabParamList,RouteName>
}
/* ================================= */


export type FavoriteTabParamList = {
  Favorite: undefined;
};
export type ProfileTabParamList = {
  Profile: undefined;
};
