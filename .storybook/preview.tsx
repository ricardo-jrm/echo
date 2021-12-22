import { EchoProvider, EchoRecord } from '../src';

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
};

const exampleEcho: EchoRecord = {
  en: {
    example: 'example en',
  },
  pt: {
    example: 'exemplo pt',
  },
};

export const decorators = [
  (Story) => (
    <EchoProvider echos={exampleEcho} echosDefault="en">
      {Story()}
    </EchoProvider>
  ),
];
