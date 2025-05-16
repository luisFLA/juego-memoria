import { createContext } from 'react';
import { Carta } from '../models/Carta';
import { Partida } from '../models/Partida';

export interface JuegoContextType {
  iniciarJuego: () => void;
  cartas: Carta[];
  seleccionarCarta: (id: string) => void;
  partidas: Partida[];
}

export const JuegoContext = createContext<JuegoContextType>({} as JuegoContextType);
