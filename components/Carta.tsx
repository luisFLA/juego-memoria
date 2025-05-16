import { useContext } from 'react';
import { StyleSheet, Text, TouchableOpacity } from 'react-native';
import { JuegoContext } from '../context/JuegoContext';

export default function Carta({ id, valor, visible, encontrada }: any) {
  const { voltearCarta } = useContext(JuegoContext);

  return (
    <TouchableOpacity
      style={styles.carta}
      onPress={() => !visible && !encontrada && voltearCarta(id)}
    >
      <Text style={{ fontSize: 20 }}>{visible || encontrada ? valor : '❓'}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  carta: {
    padding: 20,
    margin: 5,
    backgroundColor: '#ddd',
    alignItems: 'center',
    borderRadius: 8,
    width: 60,
  },
});
