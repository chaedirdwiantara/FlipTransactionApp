import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {RootStackScreen} from './navigations';
import {Provider} from 'react-redux';
import store from './redux/store';

const App = () => {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <RootStackScreen />
      </NavigationContainer>
    </Provider>
  );
};

export default App;
