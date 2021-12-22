import React from 'react';
import { useEcho } from '../../hooks/useEcho';

/**
 * Echo translation component props
 */
export interface EchoProps {
  /**
   * Translation key / id
   */
  echoid: string;
}

/**
 * Echo translation component
 */
export const Echo = ({ echoid }: EchoProps) => {
  const { echo } = useEcho();
  return <span>{echo(echoid)}</span>;
};
