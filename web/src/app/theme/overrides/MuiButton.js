// Palette
import palette from '../palette';

export default {
  outlined: {
    backgroundColor: '#757575',
    color: '#ffffff',
    '&:hover': {
      backgroundColor: '#868686',
    }
  },
  contained: {
    backgroundColor: palette.common.white,
    borderColor: '#7F7F7F',
    borderStyle: 'solid',
    borderWidth: 0.8,
    '&:hover': {
      backgroundColor: ''
    }
  }
};
