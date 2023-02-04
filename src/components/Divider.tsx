import {View, StyleSheet} from 'react-native';
import React from 'react';
import {size} from '../theme';
interface Props {
  width?: number;
}
const Divider = ({width = size.width}: Props) => {
  return <View style={{...styles.divider, width: width}} />;
};

export default Divider;

const styles = StyleSheet.create({
  divider: {
    height: 1,
    opacity: 0.5,
    backgroundColor: 'grey',
    // marginHorizontal: '2.5%',
    marginVertical: '2.5%',
  },
});
