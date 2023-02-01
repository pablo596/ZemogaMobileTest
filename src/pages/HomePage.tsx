import {View, FlatList, ActivityIndicator} from 'react-native';
import React from 'react';
// import {usePost} from '../hooks/usePosts';
import PostComponent from '../components/PostComponent';
import {useGetPostsQuery} from '../store/apis/postApi';

const HomePage = () => {
  // const {isLoading, posts} = usePost();
  const {isLoading, data: posts = []} = useGetPostsQuery({});

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
