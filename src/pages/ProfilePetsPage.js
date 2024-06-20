// import React, { useState, useContext } from 'react';
// import {
//   Container,
//   Grid,
//   Card,
//   CardContent,
//   Typography,
//   Avatar,
//   IconButton,
//   Button,
//   List,
//   ListItem,
//   ListItemText,
//   ListItemAvatar,
//   Dialog,
//   DialogTitle,
//   DialogContent,
//   DialogActions,
//   TextField,
// } from '@mui/material';
// import { Add as AddIcon, Edit as EditIcon, Pets as PetsIcon } from '@mui/icons-material';
// import { useTranslation } from 'react-i18next';
// import { AuthContext } from '../middleware/AuthContext';

// function ProfilePetsPage() {
//   const { t } = useTranslation();
//   const { user } = useContext(AuthContext);
//   const [isMissing, setIsMissing] = useState(false);
//   const [openDialog, setOpenDialog] = useState(false);

//   const handleMarkAsMissing = () => {
//     setIsMissing(true);
//     setOpenDialog(false);
//     // logic to mark as missing
//   };

//   const openMarkAsMissingDialog = () => {
//     setOpenDialog(true);
//   };

//   const closeMarkAsMissingDialog = () => {
//     setOpenDialog(false);
//   };

//   return (
//     <Container maxWidth="lg">
//       <Typography variant="h4" gutterBottom>
//         {t('profile.yourPets')}
//       </Typography>
//       <Grid container spacing={4}>
//         {/* Pet Profile Card */}
//         <Grid item xs={12} sm={6} md={4}>
//           <Card>
//             <CardContent>
//               <Grid container spacing={2}>
//                 <Grid item>
//                   <Avatar
//                     src="https://images.unsplash.com/photo-1544568100-847a948585b9?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
//                     alt="Pet"
//                     sx={{ width: 64, height: 64 }}
//                   />
//                 </Grid>
//                 <Grid item xs>
//                   <Typography variant="h6">Fluffy</Typography>
//                   <Typography color="textSecondary">Cat</Typography>
//                 </Grid>
//                 <Grid item>
//                   <IconButton>
//                     <EditIcon />
//                   </IconButton>
//                 </Grid>
//               </Grid>
//               <Typography variant="body1" sx={{ mt: 2 }}>
//                 {t('profile.vaccinationInfo')}
//               </Typography>
//               <List>
//                 <ListItem>
//                   <ListItemAvatar>
//                     <Avatar>
//                       <PetsIcon />
//                     </Avatar>
//                   </ListItemAvatar>
//                   <ListItemText primary="Rabies" secondary="Due: 2024-07-21" />
//                 </ListItem>
//                 <ListItem>
//                   <ListItemAvatar>
//                     <Avatar>
//                       <PetsIcon />
//                     </Avatar>
//                   </ListItemAvatar>
//                   <ListItemText primary="Distemper" secondary="Due: 2024-08-15" />
//                 </ListItem>
//               </List>
//               <Button
//                 variant="contained"
//                 color="secondary"
//                 fullWidth
//                 onClick={openMarkAsMissingDialog}
//                 sx={{ mt: 2 }}
//               >
//                 {isMissing ? t('profile.markAsFound') : t('profile.markAsMissing')}
//               </Button>
//             </CardContent>
//           </Card>
//         </Grid>
//       </Grid>

//       {/* Mark as Missing Dialog */}
//       <Dialog open={openDialog} onClose={closeMarkAsMissingDialog}>
//         <DialogTitle>{t('profile.markAsMissing')}</DialogTitle>
//         <DialogContent>
//           <Typography>{t('profile.confirmMarkAsMissing')}</Typography>
//           <TextField margin="dense" label={t('profile.notes')} fullWidth multiline rows={4} />
//         </DialogContent>
//         <DialogActions>
//           <Button onClick={closeMarkAsMissingDialog} color="primary">
//             {t('profile.cancel')}
//           </Button>
//           <Button onClick={handleMarkAsMissing} color="secondary">
//             {t('profile.confirm')}
//           </Button>
//         </DialogActions>
//       </Dialog>
//     </Container>
//   );
// }

// export default ProfilePetsPage;

// import React, { useState } from 'react';
// import { Container, Typography, Card, CardContent, Avatar, Button, Box } from '@mui/material';
// import { ArrowBackIos, ArrowForwardIos } from '@mui/icons-material';

// const pets = [
//   {
//     name: 'Fluffy',
//     type: 'Cat',
//     image:
//       'https://images.unsplash.com/photo-1519052537078-e6302a4968d4?q=80&w=3870&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
//   },
//   {
//     name: 'Buddy',
//     type: 'Dog',
//     image:
//       'https://images.unsplash.com/photo-1587300003388-59208cc962cb?q=80&w=3870&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
//   },
//   // Add more pets as needed
// ];

// function ProfilePetsPage() {
//   const [currentIndex, setCurrentIndex] = useState(0);

//   const handleNext = () => {
//     setCurrentIndex((prevIndex) => (prevIndex + 1) % pets.length);
//   };

//   const handlePrevious = () => {
//     setCurrentIndex((prevIndex) => (prevIndex - 1 + pets.length) % pets.length);
//   };

//   return (
//     <Container maxWidth="sm" sx={{ mt: 4 }}>
//       <Typography variant="h4" gutterBottom align="center">
//         Your Pets
//       </Typography>
//       <Box display="flex" alignItems="center" justifyContent="center">
//         <Button onClick={handlePrevious}>
//           <ArrowBackIos />
//         </Button>
//         <Card sx={{ borderRadius: '50%', overflow: 'hidden', width: 300, height: 300 }}>
//           <CardContent sx={{ textAlign: 'center' }}>
//             <Avatar
//               src={pets[currentIndex].image}
//               alt={pets[currentIndex].name}
//               sx={{ width: 200, height: 200, margin: '0 auto' }}
//             />
//             <Typography variant="h6" sx={{ mt: 2 }}>
//               {pets[currentIndex].name}
//             </Typography>
//             <Typography color="textSecondary">{pets[currentIndex].type}</Typography>
//           </CardContent>
//         </Card>
//         <Button onClick={handleNext}>
//           <ArrowForwardIos />
//         </Button>
//       </Box>
//     </Container>
//   );
// }

// export default ProfilePetsPage;

import React, { useState } from 'react';
import {
  Container,
  Typography,
  Card,
  CardContent,
  Avatar,
  Grid,
  Button,
  Box,
  List,
  ListItem,
  ListItemText,
  ListItemAvatar,
} from '@mui/material';
import { ArrowBackIos, ArrowForwardIos, Pets as PetsIcon } from '@mui/icons-material';
import MaleIcon from '@mui/icons-material/Male';
import CakeIcon from '@mui/icons-material/Cake';
import HeightIcon from '@mui/icons-material/Height';
import ColorLensIcon from '@mui/icons-material/ColorLens';
import TextureIcon from '@mui/icons-material/Texture';
const pets = [
  {
    name: 'Fluffy',
    type: 'Cat',
    image:
      'https://images.unsplash.com/photo-1519052537078-e6302a4968d4?q=80&w=3870&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    breed: 'Persian',
    age: '3 years',
    size: 'Medium',
    vaccinations: [
      { name: 'Rabies', dueDate: '2024-07-21' },
      { name: 'Distemper', dueDate: '2024-08-15' },
    ],
  },
  {
    name: 'Buddy',
    type: 'Dog',
    image:
      'https://images.unsplash.com/photo-1587300003388-59208cc962cb?q=80&w=3870&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    breed: 'Golden Retriever',
    age: '5 years',
    size: 'Large',
    vaccinations: [
      { name: 'Rabies', dueDate: '2024-09-10' },
      { name: 'Parvovirus', dueDate: '2024-10-05' },
    ],
  },
  // Add more pets as needed
];

function ProfilePetsPage() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % pets.length);
  };

  const handlePrevious = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + pets.length) % pets.length);
  };

  const currentPet = pets[currentIndex];

  return (
    <Container maxWidth="sm" sx={{ mt: 4 }}>
      <Grid>
        {/* <Typography variant="h4" gutterBottom align="center">
        Your Pets
      </Typography> */}
        <Box display="flex" alignItems="center" justifyContent="center">
          <Button onClick={handlePrevious}>
            <ArrowBackIos />
          </Button>
          <Card sx={{ borderRadius: '10px', overflow: 'hidden', width: 340, height: 'auto', p: 2 }}>
            <CardContent sx={{ textAlign: 'left' }}>
              <Avatar
                src={currentPet.image}
                alt={currentPet.name}
                sx={{ width: 200, height: 200, margin: '0 auto' }}
              />
              <Box style={{ position: 'relative' }}>
                <Box style={{ textAlign: 'center' }}>
                  <Typography variant="h6" sx={{ mt: 2 }}>
                    {currentPet.name}
                  </Typography>
                  {/* <Typography color="textSecondary">{currentPet.type}</Typography> */}
                  <Typography color="textSecondary">{currentPet.breed}</Typography>
                </Box>
                <Box style={{ position: 'absolute', top: '0', right: '0', color: '#04BADE' }}>
                  <MaleIcon />
                </Box>
              </Box>
              {/* <Typography variant="body1" sx={{ mt: 1 }}>
              <strong>Breed:</strong> {currentPet.breed}
            </Typography> */}
              <Box
                style={{
                  display: 'flex',
                  justifyContent: 'flex-start',
                  alignItems: 'center',
                  padding: '0.8rem 0rem',
                }}
              >
                <CakeIcon />
                <Typography variant="body1" style={{ paddingLeft: '0.4rem' }}>
                  <strong>Age:</strong> {currentPet.age}
                </Typography>
              </Box>
              <Box
                style={{
                  display: 'flex',
                  justifyContent: 'flex-start',
                  alignItems: 'center',
                  padding: '0.8rem 0rem',
                }}
              >
                <HeightIcon />
                <Typography variant="body1" style={{ paddingLeft: '0.4rem' }}>
                  <strong>Size:</strong> {currentPet.size}
                </Typography>
              </Box>
              <Box
                style={{
                  display: 'flex',
                  justifyContent: 'flex-start',
                  alignItems: 'center',
                  padding: '0.8rem 0rem',
                }}
              >
                <ColorLensIcon />
                <Typography variant="body1" style={{ paddingLeft: '0.4rem' }}>
                  <strong>Main Color:</strong> {currentPet.size}
                </Typography>
              </Box>
              <Box
                style={{
                  display: 'flex',
                  justifyContent: 'flex-start',
                  alignItems: 'center',
                  padding: '0.8rem 0rem',
                }}
              >
                <TextureIcon />
                <Typography variant="body1" style={{ paddingLeft: '0.4rem' }}>
                  <strong>Markings:</strong> {currentPet.size}
                </Typography>
              </Box>
              <Box
                style={{
                  display: 'flex',
                  justifyContent: 'flex-start',
                  alignItems: 'center',
                  padding: '0.8rem 0rem',
                }}
              >
                <ColorLensIcon />
                <Typography variant="body1" style={{ paddingLeft: '0.4rem' }}>
                  <strong>Markings Color:</strong> {currentPet.size}
                </Typography>
              </Box>
              <Typography variant="h6" sx={{ mt: 2 }}>
                Vaccinations
              </Typography>
              <List>
                {currentPet.vaccinations.map((vaccination, index) => (
                  <ListItem key={index}>
                    <ListItemAvatar>
                      <Avatar>
                        <PetsIcon />
                      </Avatar>
                    </ListItemAvatar>
                    <ListItemText
                      primary={vaccination.name}
                      secondary={`Due: ${vaccination.dueDate}`}
                    />
                  </ListItem>
                ))}
              </List>
            </CardContent>
          </Card>
          <Button onClick={handleNext}>
            <ArrowForwardIos />
          </Button>
        </Box>
      </Grid>
    </Container>
  );
}

export default ProfilePetsPage;
