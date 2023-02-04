import React from 'react';
// import 'react-native-gesture-handler';
import {Provider} from 'react-redux';
import MainNavigator from './src/navigator/MainNavigator';
import {store} from './src/store';

const App = () => {
  return (
    <Provider store={store}>
      <MainNavigator />
    </Provider>
  );
};

export default App;
