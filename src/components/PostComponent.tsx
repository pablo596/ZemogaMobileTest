import {Text, StyleSheet, TouchableOpacity} from 'react-native';
import React from 'react';
import {Post} from '../interfaces/Post';
import {useNavigation} from '@react-navigation/native';
// import {useNavigation} from '@react-navigation/native';

interface Props {
  post: Post;
}
const PostComponent = ({post}: Props) => {
  const navigation = useNavigation();
  return (
    <TouchableOpacity
      style={styles.post}
      onPress={() => {
        console.log(navigation);

        navigation.navigate('PostDetails' as never, {post: post} as never);
      }}>
      <Text>{post.title}</Text>
    </TouchableOpacity>
  );
};

export default PostComponent;

const styles = StyleSheet.create({
  post: {
    backgroundColor: 'white',
    borderRadius: 7,
    marginVertical: 5,
    marginHorizontal: 10,
    padding: 15,
  },
});
