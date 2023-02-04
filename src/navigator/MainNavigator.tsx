import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator, StackNavigationOptions} from '@react-navigation/stack';
import HomePage from '../pages/HomePage';
import PostDetails from '../pages/PostDetails';
import {Post} from '../interfaces/Post';
import Ionicons from 'react-native-vector-icons/Ionicons';
import AppHeader from '../components/AppHeader';
import {getThings, postApi} from '../store/apis/postApi';
import {useAppDispatch} from '../hooks/hooks';
import {reloadPosts} from '../store/slices/post';

const Stack = createStackNavigator<RootStackParams>();

export type RootStackParams = {
  HomeScreen: undefined;
  PostDetails: {post: Post};
};

const MainNavigator = () => {
  const dispatch = useAppDispatch();
  const getHeaderTitle = (options: StackNavigationOptions, name: string) => {
    return name;
  };

  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          header: ({navigation, route, options, back}) => {
            const title = getHeaderTitle(options, route.name);
            console.log('back:', back);

            return (
              <AppHeader
                title={title}
                leftButton={
                  back !== undefined ? (
                    <Ionicons
                      name="chevron-back-outline"
                      color={'#fff'}
                      size={30}
                      onPress={() => navigation.goBack()}
                    />
                  ) : (
                    <Ionicons
                      style={{paddingLeft: 10}}
                      name="reload"
                      color={'#fff'}
                      size={30}
                      onPress={() => {
                        // dispatch(postApi.endpoints.getPosts.initiate({}));
                        // dispatch(postApi.endpoints.getPosts.select({}));
                        // postApi.endpoints.getPost;
                        dispatch(reloadPosts());

                        // dispatch(postApi.endpoints.getPosts.initiate());
                      }}
                    />
                  )
                }
                // rightButton={
                //   back?.title !== 'HomeScreen' ? (
                //     <Ionicons
                //       name="chevron-back-outline"
                //       color={'#fff'}
                //       size={30}
                //       onPress={() => navigation.goBack()}
                //     />
                //   ) : null
                // }
              />
            );
          },
        }}>
        <Stack.Screen name="HomeScreen" component={HomePage} />
        <Stack.Screen name="PostDetails" component={PostDetails} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default MainNavigator;
