// import React, { useState, useEffect, useContext } from 'react';
// import { Container, Typography, Card, CardContent, Avatar, Grid, Box, Link } from '@mui/material';
// import { AuthContext } from '../middleware/AuthContext';
// import { BASE_URL } from '../middleware/config';
// const posts = [
//   {
//     id: 1,
//     petName: 'Fluffy',
//     petImage:
//       'https://images.unsplash.com/photo-1519052537078-e6302a4968d4?q=80&w=3870&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
//     status: 'Missing',
//     date: '2024-06-10',
//   },
//   {
//     id: 2,
//     petName: 'Buddy',
//     petImage:
//       'https://images.unsplash.com/photo-1587300003388-59208cc962cb?q=80&w=3870&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
//     status: 'Found',
//     date: '2024-05-22',
//   },
//   // Add more posts as needed
// ];

// function ProfilePostsPage() {
//   const { user } = useContext(AuthContext);
//   const [favoritedPets, setFavoritedPets] = useState([]);

//   useEffect(() => {
//     // Function to fetch user data
//     const fetchFavoritedPets = async () => {
//       const token = localStorage.getItem('token'); // assuming the token is stored in local storage
//       try {
//         const response = await fetch(`${BASE_URL}/users/${user.id}/favoritedPets`, {
//           headers: { Authorization: `Bearer ${token}` },
//         });
//         const data = await response.json();
//         setFavoritedPets(data);
//       } catch (error) {
//         console.error('Error fetching favorited pets:', error);
//       }
//     };

//     // Fetch the favorited pets if user is defined
//     if (user && user.id) {
//       fetchFavoritedPets();
//     }
//   }, [user]);
//   console.log(user, 'useruseruser');
//   return (
//     <Container maxWidth="lg" sx={{ mt: 4 }}>
//       <Typography variant="h4" gutterBottom align="center">
//         Pet Posts
//       </Typography>
//       <Grid container spacing={4}>
//         {posts.map((post) => (
//           <Grid item xs={12} key={post.id}>
//             <Card>
//               <CardContent>
//                 <Box display="flex" alignItems="center">
//                   <Avatar
//                     src={post.petImage}
//                     alt={post.petName}
//                     sx={{ width: 64, height: 64, marginRight: 2 }}
//                   />
//                   <Box flexGrow={1}>
//                     <Typography variant="h6">
//                       <Link href={`/post/${post.id}`} underline="none">
//                         {post.petName}
//                       </Link>
//                     </Typography>
//                     <Typography color="textSecondary">{post.status}</Typography>
//                   </Box>
//                   <Typography color="textSecondary">{post.date}</Typography>
//                 </Box>
//               </CardContent>
//             </Card>
//           </Grid>
//         ))}
//       </Grid>
//     </Container>
//   );
// }

// export default ProfilePostsPage;
import React, { useState, useEffect, useContext } from 'react';
import {
  Container,
  Typography,
  Card,
  Chip,
  CardContent,
  Avatar,
  Grid,
  Box,
  Link,
  Modal,
  TextField,
  IconButton,
  Button,
} from '@mui/material';
import { AuthContext } from '../middleware/AuthContext';
import { BASE_URL } from '../middleware/config';
// import { LanguageContext } from '../middleware/LanguageContext';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom'; // Import useNavigate from react-router-dom
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';

function ProfilePostsPage() {
  const { user } = useContext(AuthContext);
  const [ownedPets, setOwnedPets] = useState([]);
  const [favoritedPets, setFavoritedPets] = useState([]);

  const [editPet, setEditPet] = useState(null);
  const { t } = useTranslation();
  const navigate = useNavigate(); // Use useNavigate hook to navigate programmatically

  useEffect(() => {
    // Function to fetch user data
    //   const fetchFavoritedPets = async () => {
    //     const token = localStorage.getItem('token'); // assuming the token is stored in local storage
    //     try {
    //       const response = await fetch(`${BASE_URL}/users/${user.id}/favorites`, {
    //         headers: { Authorization: `Bearer ${token}` },
    //       });
    //       if (!response.ok) {
    //         throw new Error('Failed to fetch favorited pets');
    //       }
    //       const data = await response.json();
    //       setFavoritedPets(data);
    //     } catch (error) {
    //       console.error('Error fetching favorited pets:', error);
    //     }
    //   };

    //   // Fetch the favorited pets if user is defined
    //   if (user && user.id) {
    //     fetchFavoritedPets();
    //   }
    // }, [user]);

    const fetchUserPets = async () => {
      const token = localStorage.getItem('token');
      try {
        const [ownedResponse, followedResponse] = await Promise.all([
          fetch(`${BASE_URL}/users/${user.id}/ownedPets`, {
            headers: { Authorization: `Bearer ${token}` },
          }),
          fetch(`${BASE_URL}/users/${user.id}/favorites`, {
            headers: { Authorization: `Bearer ${token}` },
          }),
        ]);

        if (!ownedResponse.ok || !followedResponse.ok) {
          throw new Error('Failed to fetch pets data');
        }

        const ownedData = await ownedResponse.json();
        const followedData = await followedResponse.json();

        setOwnedPets(ownedData);
        setFavoritedPets(followedData);
      } catch (error) {
        console.error('Error fetching pets data:', error);
      }
    };

    if (user && user.id) {
      fetchUserPets();
    }
  }, [user]);

  const handleRemoveFavorite = async (petId) => {
    const token = localStorage.getItem('token');
    try {
      const response = await fetch(`${BASE_URL}/users/${user.id}/favorites/${petId}/remove`, {
        method: 'PUT',
        headers: { Authorization: `Bearer ${token}` },
      });
      if (!response.ok) {
        throw new Error('Failed to remove favorite pet');
      }
      // Remove the pet from the state
      setFavoritedPets((prevPets) => prevPets.filter((pet) => pet._id !== petId));
    } catch (error) {
      console.error('Error removing favorite pet:', error);
    }
  };

  const handleEditPet = (petId) => {
    navigate(`/edit-pet/${petId}`); // Use navigate to navigate programmatically
  };
  // const handleEditPet = (pet) => {
  //   setEditPet(pet);
  // };

  // const handleCloseModal = () => {
  //   setEditPet(null);
  // };

  // const handleSavePet = async () => {
  //   const token = localStorage.getItem('token');
  //   try {
  //     const response = await fetch(`${BASE_URL}/pets/${editPet._id}`, {
  //       method: 'PUT',
  //       headers: {
  //         'Content-Type': 'application/json',
  //         Authorization: `Bearer ${token}`,
  //       },
  //       body: JSON.stringify(editPet),
  //     });
  //     if (!response.ok) {
  //       throw new Error('Failed to save pet details');
  //     }
  //     setOwnedPets((prevPets) => prevPets.map((pet) => (pet._id === editPet._id ? editPet : pet)));
  //     handleCloseModal();
  //   } catch (error) {
  //     console.error('Error saving pet details:', error);
  //   }
  // };

  const getInitialStatusLabel = (value) => {
    const options = t('selectOptions.initialStatusOptions', { returnObjects: true });
    const option = options.find((option) => option.value === value);
    return option ? option.label : '';
  };

  const getCategoryLabel = (value) => {
    const options = t('selectOptions.categoryOptions', { returnObjects: true });
    const option = options.find((option) => option.value === value);
    return option ? option.label : '';
  };

  return (
    <>
      <Grid container rowSpacing={2}>
        <Typography variant="h6" mt={2}>
          My Pets
        </Typography>
        {ownedPets.map((pet) => (
          <Grid item xs={12} key={pet._id}>
            <Card>
              <CardContent>
                <Box display="flex" alignItems="center">
                  <Avatar
                    src={pet.mainImage}
                    alt={pet.category}
                    sx={{ width: 64, height: 64, marginRight: 2 }}
                  />
                  <Box flexGrow={1}>
                    <Typography variant="h6">
                      <Link href={`/pets/${pet._id}`} underline="none">
                        <Chip
                          label={getCategoryLabel(pet.category)}
                          size="small"
                          variant="contained"
                        />
                      </Link>
                    </Typography>
                    <Typography variant="body1" color="textSecondary">
                      {getInitialStatusLabel(pet.initialStatus)}
                    </Typography>
                  </Box>

                  {/* <Typography color="textSecondary">
                    {new Date(pet.date).toLocaleDateString()}
                  </Typography> */}
                  <IconButton
                    edge="end"
                    color="primary"
                    style={{ marginLeft: '0.5rem' }}
                    aria-label="edit"
                    // onClick={() => handleEditPet(pet)}
                    onClick={() => handleEditPet(pet._id)}
                  >
                    <EditIcon />
                  </IconButton>
                  <IconButton
                    edge="end"
                    color="secondary"
                    style={{ marginLeft: '0.5rem' }}
                    aria-label="remove"
                    onClick={() => handleRemoveFavorite(pet._id)}
                  >
                    <DeleteIcon />
                  </IconButton>
                </Box>
              </CardContent>
            </Card>
          </Grid>
        ))}
        <Typography variant="h6" mt={2}>
          Followed Pets
        </Typography>
        {favoritedPets.map((pet) => (
          <Grid item xs={12} key={pet._id}>
            <Card>
              <CardContent>
                <Box display="flex" alignItems="center">
                  <Avatar
                    src={pet.mainImage}
                    alt={pet.category}
                    sx={{ width: 64, height: 64, marginRight: 2 }}
                  />
                  <Box flexGrow={1}>
                    <Typography variant="h6">
                      <Link href={`/pets/${pet._id}`} underline="none">
                        <Chip
                          label={getCategoryLabel(pet.category)}
                          size="small"
                          variant="contained"
                          sx={{ backgroundColor: 'orange' }}
                        />
                      </Link>
                    </Typography>
                    <Typography variant="body1" color="textSecondary">
                      {getInitialStatusLabel(pet.initialStatus)}
                    </Typography>
                  </Box>

                  {/* <Typography color="textSecondary">
                    {new Date(pet.date).toLocaleDateString()}
                  </Typography> */}
                  <IconButton
                    edge="end"
                    color="secondary"
                    style={{ marginLeft: '0.5rem' }}
                    aria-label="remove"
                    onClick={() => handleRemoveFavorite(pet._id)}
                  >
                    <DeleteIcon />
                  </IconButton>
                </Box>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
      {/* <Modal open={!!editPet} onClose={handleCloseModal}>
        <Box
          sx={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            width: 400,
            bgcolor: 'background.paper',
            border: '2px solid #000',
            boxShadow: 24,
            p: 4,
          }}
        >
          {editPet && (
            <>
              <Typography variant="h6" component="h2">
                Edit Pet Details
              </Typography>
              <TextField
                fullWidth
                label="Name"
                margin="normal"
                value={editPet.name}
                onChange={(e) => setEditPet({ ...editPet, name: e.target.value })}
              />
              <TextField
                fullWidth
                label="Category"
                margin="normal"
                value={editPet.category}
                onChange={(e) => setEditPet({ ...editPet, category: e.target.value })}
              />
              <TextField
                fullWidth
                label="Initial Status"
                margin="normal"
                value={editPet.initialStatus}
                onChange={(e) => setEditPet({ ...editPet, initialStatus: e.target.value })}
              />
         
              <Box sx={{ mt: 2, display: 'flex', justifyContent: 'flex-end' }}>
                <Button onClick={handleCloseModal} sx={{ mr: 2 }}>
                  Cancel
                </Button>
                <Button variant="contained" onClick={handleSavePet}>
                  Save
                </Button>
              </Box>
            </>
          )}
        </Box>
      </Modal> */}
    </>
  );
}

export default ProfilePostsPage;
