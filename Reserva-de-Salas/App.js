import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack'
import { NavigationContainer } from '@react-navigation/native'
import Login from './Components/Menus/Login';
import MenuAdministrador from './Components/Menus/MenuAdministrador';

const Stack = createStackNavigator()

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Login" options={{headerShown: false}}>
          {props => <MenuAdministrador {...props} />}
        </Stack.Screen>

      </Stack.Navigator>
    </NavigationContainer>
  );
}


