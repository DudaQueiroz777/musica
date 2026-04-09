/*Maria Eduarda e Marina */
import React, { useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import HomeScreen from './screens/HomeScreen';
import CadastroMusica from './screens/CadastroMusica';
import ListaMusicas from './screens/ListaMusicas';

const Stack = createNativeStackNavigator();

export default function App() {
  const [musicas, setMusicas] = useState([]);

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">

        <Stack.Screen name="Home">
          {(props) => <HomeScreen {...props} />}
        </Stack.Screen>

        <Stack.Screen name="Cadastro">
          {(props) => (
            <CadastroMusica
              {...props}
              musicas={musicas}
              setMusicas={setMusicas}
            />
          )}
        </Stack.Screen>

        <Stack.Screen name="Lista">
          {(props) => <ListaMusicas {...props} musicas={musicas} />}
        </Stack.Screen>

      </Stack.Navigator>
    </NavigationContainer>
  );
}