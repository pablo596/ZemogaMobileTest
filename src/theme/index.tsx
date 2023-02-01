import {Dimensions, StyleSheet} from 'react-native';

export const theme = StyleSheet.create({
  boxShadow: {
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 5,
  },
});

const gap = 8;

export const verticalItemsGap = StyleSheet.create({
  container: {
    flexDirection: 'column',
    paddingVertical: gap / -2,
  },
  child: {
    marginVertical: gap / 2,
  },
});

export const size = {
  width: Dimensions.get('window').width,
  height: Dimensions.get('window').height,
};
