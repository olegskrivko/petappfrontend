import React from 'react';
import Typography from '@mui/material/Typography';
import LeafletPetInfrastructureMap from '../components/map/LeafletPetInfrastructureMap';
function PetInfrastructurePage() {
  return (
    <div>
      <Typography variant="h4" textAlign="center" gutterBottom>
        Pet Infrastructure
      </Typography>
      <LeafletPetInfrastructureMap />
    </div>
  );
}

export default PetInfrastructurePage;
