import { useContext } from 'react';
import { View } from 'react-native';
import { JuegoContext } from '../context/JuegoContext';
import Carta from './Carta';

export default function JuegoCartas() {
  const { cartas } = useContext(JuegoContext);

  return (
    <View style={{ flexWrap: 'wrap', flexDirection: 'row' }}>
      {cartas.map(carta => (
        <Carta key={carta.id} {...carta} />
      ))}
    </View>
  );
}
