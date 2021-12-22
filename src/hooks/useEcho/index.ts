import { useContext, createContext } from 'react';

/**
 * Messages
 */
export type EchoMsgs = {
  [key: string]: string;
};

/**
 * Messages record
 */
export type EchoRecord = {
  [key: string]: EchoMsgs;
};

/**
 * Context interface
 */
export interface EchoContextType {
  echo: (key: string) => string;
  echoActive: EchoMsgs;
  echoActiveId: string;
  echoSetById: (id: string) => void;
}

/**
 * Initial value
 */
const init: EchoContextType = {
  echo: () => '',
  echoActive: {
    example: 'example',
  },
  echoActiveId: 'en',
  echoSetById: () => undefined,
};

/**
 * Echo Context
 */
export const EchoContext = createContext<EchoContextType>(init);

/**
 * useEcho
 */
export const useEcho = () => useContext(EchoContext);
