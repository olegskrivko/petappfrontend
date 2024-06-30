import React from 'react';
import { Container, Typography, Box, Paper, Grid } from '@mui/material';

function ServicesListPage() {
  return (
    <Container maxWidth="md" style={{ marginTop: '50px' }}>
      {/* <Paper elevation={3} style={{ padding: '20px', backgroundColor: '#f5f5f5' }}> */}
      <Grid container spacing={3} justifyContent="center" alignItems="center">
        <Grid item xs={12}>
          <Typography variant="h5" align="center" style={{ color: '#333' }}>
            This website is under construction.
          </Typography>
        </Grid>
        <Grid item xs={12}>
          <Typography variant="h6" align="center" style={{ color: '#666' }}>
            If you're the owner of this site, you can publish it in the editor.
          </Typography>
        </Grid>
      </Grid>
      {/* </Paper> */}
    </Container>
  );
}

export default ServicesListPage;
