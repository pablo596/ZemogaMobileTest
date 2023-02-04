import {View, Text, StyleSheet, StatusBar} from 'react-native';
import React from 'react';
import {size, theme} from '../theme/index';
import {useSafeAreaInsets} from 'react-native-safe-area-context';

interface Props {
  title: String;
  leftButton: any;
  rightButton?: any;
}
const AppHeader = ({title, leftButton, rightButton}: Props) => {
  const {top} = useSafeAreaInsets();
  return (
    <>
      <StatusBar
        animated={true}
        barStyle={'light-content'}
        backgroundColor={'#6d9f71'}
      />
      <View style={{...styles.header, ...theme.boxShadowHeader}}>
        <View
          style={{
            ...styles.headerContainer,
            top: top,
            ...theme.boxShadowHeader,
          }}>
          <View style={styles.headerContainerBody}>
            {leftButton ? leftButton : <View />}
            <Text style={styles.headerTitle}>{title}</Text>
            {rightButton ? rightButton : <View />}
          </View>
        </View>
      </View>
    </>
  );
};

export default AppHeader;

const styles = StyleSheet.create({
  header: {
    height: size.height * 0.075,
    backgroundColor: '#6d9f71',
    paddinHorizontal: 20,
  },
  headerTitle: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 22,
  },
  headerContainer: {
    flex: 1,
    backgroundColor: '#6d9f71',
  },
  headerContainerBody: {
    paddingVertical: 10,
    paddinHorizontal: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
});
