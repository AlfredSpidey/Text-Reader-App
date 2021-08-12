import 'react-native-gesture-handler';
import React, { useState } from 'react';
import { NavigationContainer } from '@react-navigation/native'
import { createDrawerNavigator } from '@react-navigation/drawer';
import Home from './src/pages/Home';
import Settings from './src/pages/Settings';
const Drawer = createDrawerNavigator();
const App: () => React$Node = () => {
return (
   <NavigationContainer>
      <Drawer.Navigator>
         <Drawer.Screen name="Home" component={ Home } />
         <Drawer.Screen name="Settings" component={ Settings } />
      </Drawer.Navigator>
   </NavigationContainer>
   );
};

export default App