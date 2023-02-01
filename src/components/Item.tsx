import {View, Text, StyleSheet, ViewStyle} from 'react-native';
import React from 'react';

interface Props {
  label: String;
  data: String;
  style?: ViewStyle;
}
const Item = ({data, label, style}: Props) => {
  return (
    <View style={style}>
      <Text style={styles.label}>{label}</Text>
      <Text>{data}</Text>
    </View>
  );
};

export default Item;

const styles = StyleSheet.create({
  label: {
    fontSize: 13,
    fontWeight: '600',
    color: 'blue',
  },
});
