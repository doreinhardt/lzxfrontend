import type {Preview} from '@storybook/react';
import '../app/styles/app.css'; // replace with the name of your tailwind css file

const preview: Preview = {
  parameters: {
    actions: {argTypesRegex: '^on[A-Z].*'},
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
  },
};

export default preview;
