import React, {useState} from 'react';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';
// import { Colors } from './Colors';
import Icon from 'react-native-vector-icons/Ionicons';
import {theme} from '../theme';
import Divider from './Divider';
interface Props {
  title: String;
  data: any;
}
const Accordion = ({data, title}: Props) => {
  const [expanded, setExpanded] = useState(false);
  const toggleExpand = () => {
    // LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
    setExpanded(!expanded);
  };
  return (
    <View style={styles.accordion}>
      <TouchableOpacity
        // ref={this.accordian}
        style={styles.row}
        onPress={() => toggleExpand()}>
        <Text style={[styles.title]}>{title}</Text>
        <Icon
          name={
            expanded ? 'chevron-up-outline' : 'chevron-down-outline'
            // this.state.expanded ? 'keyboard-arrow-up' : 'keyboard-arrow-down'
          }
          size={30}
        />
      </TouchableOpacity>

      {expanded && (
        <>
          <Divider />
          <View style={styles.child}>
            <Text>{data}</Text>
          </View>
        </>
      )}
    </View>
  );
};

export default Accordion;

const styles = StyleSheet.create({
  accordion: {
    backgroundColor: 'white',
    borderRadius: 7,
    ...theme.boxShadow,
  },
  title: {
    fontSize: 14,
    fontWeight: 'bold',
    // color: Colors.DARKGRAY,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    height: 56,
    paddingLeft: 25,
    paddingRight: 18,
    alignItems: 'center',
    // backgroundColor: Colors.CGRAY,
  },
  parentHr: {
    height: 1,
    backgroundColor: 'grey',
    // color: Colors.WHITE,
    width: '100%',
  },
  child: {
    // backgroundColor: Colors.LIGHTGRAY,
    padding: 16,
  },
});
