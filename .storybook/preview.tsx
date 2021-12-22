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

const tempEcho: EchoRecord = {
  en: {
    example: 'example en',
  },
  pt: {
    example: 'exemplo pt',
  },
};

export const decorators = [
  (Story) => (
    <EchoProvider echos={tempEcho} echosDefault="en">
      {Story()}
    </EchoProvider>
  ),
];
