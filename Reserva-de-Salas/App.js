import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack'
import { NavigationContainer } from '@react-navigation/native'
import TelaLogin from './Components/Views/Gerais/TelaLogin'
import TelaAdministrador from './Components/Views/Gerais/TelaAdministrador'
import TelaSecretaria from './Components/Views/Gerais/TelaSecretaria'
import TelaProfessor from './Components/Views/Gerais/TelaProfessor'
import TelaAluno from './Components/Views/Gerais/TelaAluno'
import TelaCadastrarSala from './Components/Views/Sala/TelaCadastrarSala'
import TelaConsultarSala from './Components/Views/Sala/TelaConsultarSala'
const Stack = createStackNavigator()

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Login" options={{headerShown: false}}>
          {props => <TelaLogin {...props} />}
        </Stack.Screen>
        <Stack.Screen name="Menu secretaria" options={{headerShown: false}}>
          {props => <TelaSecretaria {...props} />}
        </Stack.Screen>
        <Stack.Screen name="Menu professor" options={{headerShown: false}}>
          {props => <TelaProfessor {...props} />}
        </Stack.Screen>
        <Stack.Screen name="Menu aluno" options={{headerShown: false}}>
          {props => <TelaAluno {...props} />}
        </Stack.Screen>
        <Stack.Screen name="Menu coordenador" options={{headerShown: false}}>
          {props => <TelaCoordenacao {...props} />}
        </Stack.Screen>
        <Stack.Screen name="Menu admin" options={{headerShown: false}}>
          {props => <TelaAdministrador {...props} />}
        </Stack.Screen>
        <Stack.Screen name="Cadastrar sala" options={{headerShown: false}}>
          {props => <TelaCadastrarSala {...props} />}
        </Stack.Screen>
        <Stack.Screen name="Consultar Sala" options={{headerShown: false}}>
          {props => <TelaConsultarSala {...props} />}
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