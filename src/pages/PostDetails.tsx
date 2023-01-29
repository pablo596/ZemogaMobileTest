import {View, Text, StyleSheet} from 'react-native';
import React from 'react';
import {StackScreenProps} from '@react-navigation/stack';
import {RootStackParams} from '../navigator/MainNavigator';
import Divider from '../components/Divider';

interface Props extends StackScreenProps<RootStackParams, 'PostDetails'> {}

const PostDetails = ({route}: Props) => {
  const {post} = route.params;
  return (
    <View style={styles.postContainer}>
      <Text style={styles.postTitle}>{post?.title}</Text>
      <Divider />
      <Text style={styles.postDescription}>{post?.body}</Text>
    </View>
  );
};

export default PostDetails;

const styles = StyleSheet.create({
  postContainer: {
    marginHorizontal: 10,
  },
  postTitle: {
    fontSize: 25,
    fontWeight: 'bold',
  },
  postDescription: {
    fontSize: 18,
    fontWeight: '600',
  },
});
