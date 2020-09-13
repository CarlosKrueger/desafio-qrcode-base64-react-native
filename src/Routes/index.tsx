import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import Scanner from '../pages/Scanner';
import Result from '../pages/Result';

const App = createStackNavigator();

const Routes: React.FC = () => (
  <App.Navigator
    screenOptions={{
      headerShown: false,
      cardStyle: { backgroundColor: '#312e38' },
    }}
  >
    <App.Screen name="Scanner" component={Scanner} />
    <App.Screen name="Result" component={Result} />
  </App.Navigator>
);

export default Routes;
