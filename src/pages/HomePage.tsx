import {
  View,
  FlatList,
  ActivityIndicator,
  Text,
  TouchableOpacity,
} from 'react-native';
import React, {useEffect} from 'react';
import PostComponent from '../components/PostComponent';
import {useGetPostsQuery} from '../store/apis/postApi';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {useAppSelector} from '../hooks/hooks';
import {
  reloadPosts,
  removeNotFavoritesPosts,
  setPosts,
} from '../store/slices/post';
import {useDispatch} from 'react-redux';
import Divider from '../components/Divider';
import {size} from '../theme/index';

const HomePage = () => {
  // const {isLoading, posts} = usePost();
  const dispatch = useDispatch();
  const {postsR, reload} = useAppSelector(state => state.postsR);
  const {top, bottom} = useSafeAreaInsets();
  const {isLoading, data: posts = []} = useGetPostsQuery({});
  // const [get] = useLazyGetPostsQuery();

  useEffect(() => {
    if (posts?.length > 0 && reload) {
      dispatch(setPosts({posts: posts}));
      dispatch(reloadPosts());
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [posts, reload]);

  return (
    <View style={{top: top + 7, bottom: bottom + 300}}>
      {!isLoading ? (
        <>
          {postsR.filter(post => post.favorite === true).length > 0 ? (
            <>
              <FlatList
                style={{maxHeight: size.height * 0.6}}
                ListHeaderComponent={() => (
                  <View style={{paddingHorizontal: 10}}>
                    <Text style={{fontSize: 30, fontWeight: 'bold'}}>
                      Favorites Posts
                    </Text>
                  </View>
                )}
                data={postsR.filter(post => post.favorite === true)}
                renderItem={({item}) => (
                  <PostComponent post={item} key={item.id.toString()} />
                )}
              />
              {postsR.filter(post => post.favorite === false).length > 0 && (
                <View
                  style={{
                    flexDirection: 'row',
                    justifyContent: 'space-evenly',
                    alignItems: 'center',
                    marginVertical: 10,
                  }}>
                  <Divider width={size.width * 0.7} />
                  <TouchableOpacity
                    onPress={() => dispatch(removeNotFavoritesPosts())}>
                    <Text>Remove Posts</Text>
                  </TouchableOpacity>
                </View>
              )}
            </>
          ) : null}
          <FlatList
            data={postsR.filter(post => post.favorite === false)}
            renderItem={({item}) => (
              <PostComponent post={item} key={item.id.toString()} />
            )}
            ListFooterComponent={() => (
              <View style={{marginBottom: bottom + 70}} />
            )}
          />
        </>
      ) : (
        <ActivityIndicator />
      )}
    </View>
  );
};

export default HomePage;
