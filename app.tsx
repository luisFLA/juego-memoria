import React from 'react';
import { StyleSheet, View } from 'react-native';
import JuegoProvider from './Provider/JuegoProvider';
import BotonIniciar from './components/BotonIniciar';
import JuegoCartas from './components/JuegoCartas';
import ListadoPartidas from './components/ListadoPartidas';

export default function App() {
  return (
    <JuegoProvider>
      <View style={styles.container}>
        <JuegoCartas />
        <BotonIniciar />
        <ListadoPartidas />
      </View>
    </JuegoProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
});
