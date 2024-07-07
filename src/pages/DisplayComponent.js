import React from 'react';
import { Box, Typography, Button } from '@mui/material';
import QRCode from 'react-qr-code';

const DisplayComponent = ({ pet }) => {
  return (
    <Box>
      <Typography variant="h3">
        Display Component - {pet.name} ({pet.category})
      </Typography>
      <Typography variant="body1">
        This is a scaled-down view of the pet information for display.
      </Typography>
      <Box>
        <Typography variant="subtitle1">Additional Information:</Typography>
        <Typography variant="body1">{pet.notes}</Typography>
      </Box>
      <Box>
        <QRCode value={`https://example.com/pets/${pet.id}`} />
      </Box>
    </Box>
  );
};

export default DisplayComponent;
