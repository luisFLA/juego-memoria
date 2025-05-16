import { useContext } from 'react';
import { Button } from 'react-native';
import { JuegoContext } from '../context/JuegoContext';

export default function BotonIniciar() {
  const { iniciarJuego } = useContext(JuegoContext);

  return (
    <Button title="Iniciar a jugar" onPress={iniciarJuego} />
  );
}
