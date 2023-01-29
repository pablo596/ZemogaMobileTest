import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import HomePage from '../pages/HomePage';
import PostDetails from '../pages/PostDetails';
import {Post} from '../interfaces/Post';

const Stack = createStackNavigator();

export type RootStackParams = {
  HomeScreen: undefined;
  PostDetails: {post: Post};
};

const MainNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="HomeScreen" component={HomePage} />
        <Stack.Screen name="PostDetails" component={PostDetails} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default MainNavigator;
