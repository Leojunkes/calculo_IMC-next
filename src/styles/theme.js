import { extendTheme } from '@chakra-ui/react';

export const theme = extendTheme({
  colors: {
    Colors: {
      white: '#ffffff',
      red: '#9B1B30',
      gray: '#495057',
      green: '#0CA678',
      gelo: '#DEE2E6',
      gray900: '#181B23',
      blue: '#294598',
      yellow: '#f9bd07',
      orange: '#e94b1b',
      ligthBlue: '#0b88ca',
    },
  },
  styles: {
    global: {
      body: {
        bg: 'gray.500',
        color: 'Colors.gray900',
      },
    },
  },
  fonts: {
    heading: 'Roboto',
    body: 'Roboto',
  },
});
