import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack'
import { NavigationContainer } from '@react-navigation/native'
import Login from './Components/Menus/Login';
import MenuSecretaria from './Components/Menus/MenuSecretaria';

const Stack = createStackNavigator()

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Login" options={{headerShown: false}}>
          {props => <Login {...props} />}
        </Stack.Screen>
        <Stack.Screen name="Menu secretaria" options={{headerShown: false}}>
          {props => <MenuSecretaria {...props} />}
        </Stack.Screen>
        {/* <Stack.Screen name="Menu professor">
          {props => <MenuProfessor {...props} />}
        </Stack.Screen>
        <Stack.Screen name="Menu aluno">
          {props => <MenuAluno {...props} />}
        </Stack.Screen>
        <Stack.Screen name="Menu coordenador">
          {props => <MenuCoordenador {...props} />}
        </Stack.Screen> */}
      </Stack.Navigator>
  </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});