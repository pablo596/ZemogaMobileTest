import {View, StyleSheet} from 'react-native';
import React from 'react';

const Divider = () => {
  return <View style={styles.divider} />;
};

export default Divider;

const styles = StyleSheet.create({
  divider: {
    width: '100%',
    height: 1,
    opacity: 0.5,
    backgroundColor: 'grey',
    // marginHorizontal: '2.5%',
    marginVertical: '2.5%',
  },
});
