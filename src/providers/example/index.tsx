import React from 'react';

/**
 * ExampleProvider
 */
export const ExampleProvider = ({ children }: ExampleProviderProps) => (
  <div>{children}</div>
);

/**
 * ExampleProviderProps
 */
export interface ExampleProviderProps {
  /**
   * Prop
   */
  children: JSX.Element;
}
