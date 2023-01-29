import {View, FlatList, ActivityIndicator} from 'react-native';
import React from 'react';
import {usePost} from '../hooks/usePosts';
import PostComponent from '../components/PostComponent';

const HomePage = () => {
  const {isLoading, posts} = usePost();

  return (
    <View>
      {!isLoading ? (
        <FlatList
          data={posts}
          renderItem={({item}) => <PostComponent post={item} />}
        />
      ) : (
        <ActivityIndicator />
      )}
    </View>
  );
};

export default HomePage;
