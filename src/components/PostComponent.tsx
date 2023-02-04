import {Text, StyleSheet, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {Post} from '../interfaces/Post';
import {useNavigation} from '@react-navigation/native';
import Ionicons from 'react-native-vector-icons/Ionicons';

interface Props {
  post: Post;
}
const PostComponent = ({post}: Props) => {
  const navigation = useNavigation();
  return (
    <TouchableOpacity
      style={[styles.post, post.favorite && styles.favoritePost]}
      onPress={() => {
        navigation.navigate('PostDetails' as never, {post: post} as never);
      }}>
      {post.favorite && (
        <View style={styles.favIcon}>
          <Ionicons name={'star'} color={'#FFCD3C'} size={20} />
        </View>
      )}
      <Text>
        <Text style={{fontWeight: 'bold'}}>{post.id}. </Text> {post.title}
      </Text>
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
  favoritePost: {borderColor: '#FFCD3C', borderWidth: 1},
  favIcon: {position: 'absolute', top: -5, right: -5},
});
