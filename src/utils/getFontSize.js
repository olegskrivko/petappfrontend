import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';

const useFontSizes = () => {
  const theme = useTheme();
  const isLargeScreen = useMediaQuery(theme.breakpoints.up('lg'));
  const isSmallScreen = useMediaQuery(theme.breakpoints.down('sm'));

  const getTypography = (variant) => {
    switch (variant) {
      case 'h1':
        return {
          fontSize: isLargeScreen ? '2.4rem' : isSmallScreen ? '1.8rem' : '2rem', // Main Title
          fontWeight: isLargeScreen ? 400 : isSmallScreen ? 400 : 400, // Example of adjusting fontWeight
        };
      case 'h2':
        return {
          fontSize: isLargeScreen ? '1.4rem' : isSmallScreen ? '1.2rem' : '1.3rem', // Section Title
          fontWeight: isLargeScreen ? 500 : isSmallScreen ? 500 : 500, // Example of adjusting fontWeight
        };
      case 'h3':
        return {
          fontSize: isLargeScreen ? '1.1rem' : isSmallScreen ? '1rem' : '1.1rem', // Subsection Title
          fontWeight: isLargeScreen ? 500 : 500, // Example of adjusting fontWeight
        };
      case 'h4':
        return {
          fontSize: isLargeScreen ? '1.6rem' : isSmallScreen ? '1rem' : '1.4rem', // Subsection Title
          fontWeight: isLargeScreen ? 500 : 400, // Example of adjusting fontWeight
        };
      case 'h5':
        return {
          fontSize: isLargeScreen ? '1.4rem' : isSmallScreen ? '0.8rem' : '1.2rem', // Subsection Title
          fontWeight: isLargeScreen ? 500 : 400, // Example of adjusting fontWeight
        };
      case 'body1':
        return {
          fontSize: isLargeScreen ? '1rem' : isSmallScreen ? '0.9rem' : '1rem', // Body Text
          fontWeight: isLargeScreen ? 400 : 300, // Example of adjusting fontWeight
        };
      case 'body2':
        return {
          fontSize: isLargeScreen ? '1rem' : isSmallScreen ? '0.9rem' : '1rem', // Body Text
          fontWeight: isLargeScreen ? 400 : 400, // Example of adjusting fontWeight
        };
      case 'caption':
        return {
          fontSize: isLargeScreen ? '0.9rem' : isSmallScreen ? '0.8rem' : '0.9rem', // Small Text/Notes
          fontWeight: isLargeScreen ? 400 : 300, // Example of adjusting fontWeight
        };
      default:
        return {
          fontSize: '1rem', // Default size (can be adjusted)
          fontWeight: 400, // Default font weight
        };
    }
  };

  return { getTypography };
};

export default useFontSizes;
