import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack'
import { NavigationContainer } from '@react-navigation/native'
import Login from './Components/Login';

const Stack = createStackNavigator()

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Login" options={{headerShown: false}}>
          {props => <Login {...props} />}
        </Stack.Screen>
        {/* <AppNav.Screen name="Menu secretaria">
          {props => <MenuSecretaria {...props} />}
        </AppNav.Screen>
        <AppNav.Screen name="Menu professor">
          {props => <MenuProfessor {...props} />}
        </AppNav.Screen>
        <AppNav.Screen name="Menu aluno">
          {props => <MenuAluno {...props} />}
        </AppNav.Screen>
        <AppNav.Screen name="Menu coordenador">
          {props => <MenuCoordenador {...props} />}
        </AppNav.Screen> */}
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
