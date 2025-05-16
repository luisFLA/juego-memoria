import { useContext } from 'react';
import { Text, View } from 'react-native';
import { JuegoContext } from '../context/JuegoContext';

export default function ListadoPartidas() {
  const { partidas } = useContext(JuegoContext);

  return (
    <View>
      <Text style={{ fontWeight: 'bold', marginTop: 20 }}>Historial de partidas:</Text>
      {partidas.map(p => (
        <Text key={p.id}>
          {p.resultado} - {p.fecha}
        </Text>
      ))}
    </View>
  );
}
