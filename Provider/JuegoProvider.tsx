import React, { useState } from "react";
import { JuegoContext } from "../context/JuegoContext";
import { Carta } from "../models/Carta";
import { Partida } from "../models/Partida";

const generarCartas = (): Carta[] => {
  const valores = ["A", "B", "C", "D"];
  const cartas: Carta[] = valores.flatMap((valor) => [
    { id: `${valor}1`, valor, visible: false },
    { id: `${valor}2`, valor, visible: false },
  ]);

  return cartas.sort(() => Math.random() - 0.5);
};

const JuegoProvider = ({ children }: { children: React.ReactNode }) => {
  const [cartas, setCartas] = useState<Carta[]>([]);
  const [partidas, setPartidas] = useState<Partida[]>([]);

  const iniciarJuego = () => {
    const nuevasCartas = generarCartas();
    setCartas(nuevasCartas);
  };

  const seleccionarCarta = (id: string) => {
    setCartas((prevCartas) =>
      prevCartas.map((carta) =>
        carta.id === id ? { ...carta, visible: true } : carta
      )
    );
  };

  return (
    <JuegoContext.Provider value={{ iniciarJuego, cartas, seleccionarCarta, partidas }}>
      {children}
    </JuegoContext.Provider>
  );
};

export default JuegoProvider;