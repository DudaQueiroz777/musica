import React from 'react';
import { View, Text, FlatList } from 'react-native';

export default function ListaMusicas({ musicas }) {
  return (
    <View style={{ padding: 20 }}>

      <Text style={{ fontSize: 18, marginBottom: 10 }}>
        Músicas cadastradas
      </Text>

      <FlatList
        data={musicas}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item }) => (
          <View style={{ marginBottom: 10, padding: 10, borderWidth: 1 }}>
            <Text>Música: {item.nome}</Text>
            <Text>Artista: {item.artista}</Text>
          </View>
        )}
      />

    </View>
  );
}