import React from 'react';
import { useEcho } from '../../hooks/useEcho';

/**
 * ExampleComponent
 */
export const ExampleComponent = ({ text }: ExampleComponentProps) => {
  const { echo, echoActiveId, echoSetById } = useEcho();

  return (
    <div>
      <span data-testid="test-component">{text}</span>
      <div>{echoActiveId}</div>
      <div>{echo('example')}</div>
      <div>
        <button type="button" onClick={() => echoSetById('en')}>
          EN
        </button>
        <button type="button" onClick={() => echoSetById('pt')}>
          PT
        </button>
      </div>
    </div>
  );
};

/**
 * ExampleComponent props
 */
export interface ExampleComponentProps {
  /**
   * Prop
   */
  text: string;
}
