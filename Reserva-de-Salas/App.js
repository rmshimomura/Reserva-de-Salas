import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack'
import { NavigationContainer } from '@react-navigation/native'
import Login from './Components/Menus/Login';
import MenuSecretaria from './Components/Menus/MenuSecretaria';
import MenuProfessor from './Components/Menus/MenuProfessor';
import MenuAluno from './Components/Menus/MenuAluno';
import MenuCoordenacao from './Components/Menus/MenuCoordenacao';
import MenuAdministrador from './Components/Menus/MenuAdministrador';

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
        <Stack.Screen name="Menu professor" options={{headerShown: false}}>
          {props => <MenuProfessor {...props} />}
        </Stack.Screen>
        <Stack.Screen name="Menu aluno" options={{headerShown: false}}>
          {props => <MenuAluno {...props} />}
        </Stack.Screen>
        <Stack.Screen name="Menu coordenador" options={{headerShown: false}}>
          {props => <MenuCoordenacao {...props} />}
        </Stack.Screen>
        <Stack.Screen name="Menu admin" options={{headerShown: false}}>
          {props => <MenuAdministrador {...props} />}
        </Stack.Screen>
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