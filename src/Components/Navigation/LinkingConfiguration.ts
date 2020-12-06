import * as Linking from 'expo-linking';

export default {
  prefixes: [Linking.makeUrl('/')],
  config: {
    screens: {
      Root: {
        screens: {
          HomeTab: {
            screens: {
              Home: 'one',
            },
          },
          CatalogueTab: {
            screens: {
              Catalogue: 'two',
            },
          },
        },
      },
      NotFound: '*',
    },
  },
};
