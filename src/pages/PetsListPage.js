import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Grid from '@mui/material/Grid';
import Sidebar from '../components/sidebar/Siderbar'; // Create Sidebar component
import PetCard from '../components/petcard/PetCard'; // Create PetCard component
import {
  CircularProgress,
  Table,
  Typography,
  Box,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Button,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  TextField,
  IconButton,
  Drawer,
  colors,
} from '@mui/material';
import KeyboardDoubleArrowRightIcon from '@mui/icons-material/KeyboardDoubleArrowRight';
import PetsIcon from '@mui/icons-material/Pets';
import { Link as MuiLink } from '@mui/material';
import CardMedia from '@mui/material/CardMedia';
import { useParams, Link, useLocation, useNavigate } from 'react-router-dom';
import { BASE_URL } from '../middleware/config';
import TomTomClusterMap from '../components/map/TomTomClusterMap';
import Pagination from '@mui/material/Pagination';
import { useDrawer } from '../context/DrawerContext';
// Import Images
import NoListingsAvailableImg from '../images/file_searching_amico.svg';

const PetsListPage = () => {
  const { isDrawerOpen, closeDrawer } = useDrawer();
  const [pets, setPets] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const { id } = useParams();
  const location = useLocation();
  const navigate = useNavigate();
  const queryParams = new URLSearchParams(location.search);
  const [pagination, setPagination] = useState({});

  // const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  // const handleDrawerToggle = () => {
  //   setIsDrawerOpen(!isDrawerOpen);
  // };

  const [appliedFilters, setAppliedFilters] = useState({
    // recipeTitle: queryParams.get('recipeTitle') || '',
    // // hasReviews: queryParams.get("hasReviews") || "",
    // difficulties: queryParams.getAll('difficulties') || [],
    // totalTime: queryParams.get('totalTime') || '',
    // cuisines: queryParams.getAll('cuisines') || [],
    categories: queryParams.getAll('categories') || [],
    genders: queryParams.getAll('genders') || [],
    statuses: queryParams.getAll('statuses') || [],
    sizes: queryParams.getAll('sizes') || [],
    identifier: queryParams.get('identifier') || '',
    date: queryParams.get('date') || '',
    colors: queryParams.getAll('colors') || [],
    patterns: queryParams.getAll('patterns') || [],
    // meals: queryParams.getAll('meals') || [],
    // diets: queryParams.getAll('diets') || [],
    // cookingMethods: queryParams.getAll('cookingMethods') || [],
    // Add other filter keys and their default values here
  });

  // new useEffect
  useEffect(() => {
    const fetchPets = async () => {
      try {
        const queryParams = new URLSearchParams(location.search);

        const response = await fetch(`${BASE_URL}/pets?${queryParams.toString()}`);

        const data = await response.json();
        // Check if the expected properties exist in the response
        if (data && data.pets && data.pagination) {
          setPets(data.pets);
          setPagination(data.pagination);
        } else {
          console.error('Invalid response structure:', data);
        }

        setLoading(false);
      } catch (error) {
        console.error('Error fetching pets:', error);
        setLoading(false);
      }
    };

    fetchPets();
  }, [location.search, navigate]);

  // old useEffect
  // useEffect(() => {
  //   const fetchPets = async () => {
  //     try {
  //       const response = await axios.get(`${BASE_URL}/pets`);
  //       setPets(response.data);
  //     } catch (error) {
  //       console.error('Error fetching pets:', error.message);
  //       setError('Error fetching pets');
  //     } finally {
  //       setLoading(false);
  //     }
  //   };
  //   fetchPets();
  // }, []);

  const applyFilters = async (filters) => {
    try {
      setLoading(true);

      const newFilters = { ...appliedFilters, ...filters };
      setAppliedFilters(newFilters);

      // Use the `navigate` function to update the URL with the new query parameters
      navigate(`/pets?${new URLSearchParams(newFilters).toString()}`);

      const response = await fetch(
        `${BASE_URL}/pets?${new URLSearchParams(newFilters).toString()}`,
      );

      const data = await response.json();

      if (Array.isArray(data)) {
        setPets(data);
      } else {
        console.error('Error: Expected an array of pets, but received:', data);
      }
    } catch (error) {
      console.error('Error fetching filtered pets:', error);
    } finally {
      setLoading(false);
    }
  };

  const resetFilters = async () => {
    try {
      setLoading(true);

      // Clear any applied filters
      const emptyFilters = {
        // recipeTitle: '',
        // // hasReviews: "",
        // difficulties: [],
        // totalTime: '',
        // cookingMethods: [],
        categories: [],
        genders: [],
        statuses: [],
        sizes: [],
        identifier: '',
        date: '',
        colors: [],
        patterns: [],
        // diets: [],
        // meals: [],
        // cuisines: [],
        // Add other filter keys and their default values here
      };

      setAppliedFilters(emptyFilters);

      // Use the `navigate` function to update the URL with the cleared query parameters
      navigate(`/pets`);

      const response = await fetch(`${BASE_URL}/pets`);
      const data = await response.json();

      if (Array.isArray(data)) {
        setPets(data);
      } else {
        console.error('Error: Expected an array of meals, but received:', data);
      }

      console.log('Filters Reset');
    } catch (error) {
      console.error('Error resetting filters:', error);
    } finally {
      setLoading(false);
    }
  };

  const handlePaginationChange = async (event, page) => {
    try {
      setLoading(true);

      const response = await fetch(
        `${BASE_URL}/pets?page=${page}&${new URLSearchParams(appliedFilters).toString()}`,
      );
      const data = await response.json();

      if (data && data.pets && data.pagination) {
        setPets(data.pets);
        setPagination(data.pagination);
      } else {
        console.error('Invalid response structure:', data);
      }
    } catch (error) {
      console.error('Error fetching pets:', error);
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return (
      <React.Fragment>
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            height: '100vh', // Make the spinner cover the entire viewport vertically
          }}
        >
          <CircularProgress size={80} style={{ color: '#ff6600' }} />{' '}
          {/* Adjust the size of the spinner as needed */}
        </div>
      </React.Fragment>
    );
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <Grid container spacing={3}>
      {/* <Button
        onClick={handleDrawerToggle}
        style={{ margin: '8px ', color: 'white' }}
        sx={{
          display: {
            xs: 'flex',
            md: 'none',
            position: 'fixed',
            bottom: '100px',
            backgroundColor: 'orange',
            justifyContent: 'center',
            alignItems: 'center',
          },
        }}
      >
        <KeyboardDoubleArrowRightIcon style={{ margin: '8px ' }} />
      </Button> */}
      <Drawer
        anchor="left"
        open={isDrawerOpen}
        onClose={closeDrawer}
        variant="temporary"
        style={{ width: '60% !important' }}
        // sx={{
        //   display: { xs: 'block', md: 'none' }, // Show only on small screens
        // }}
      >
        <Box
          style={{
            width: '100%',
            height: '3.5rem',
            backgroundColor: 'orange',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <Box style={{ margin: '1rem' }}>
            <Link
              to="/"
              style={{
                color: 'white',
                textDecoration: 'none',
                display: 'flex',
                alignItems: 'center',
              }}
            >
              <PetsIcon sx={{ marginRight: 0.4 }} /> PawClix
            </Link>
          </Box>
        </Box>
        <Grid item xs={12} sm={12} md={12}>
          <Box style={{ maxWidth: '280px' }}>
            <Box style={{ padding: '0 1rem' }}>
              <Sidebar applyFilters={applyFilters} resetFilters={resetFilters} />
            </Box>
          </Box>
        </Grid>
      </Drawer>

      {/* Sidebar */}
      <Grid item xs={3} sm={4} md={3} sx={{ display: { xs: 'none', sm: 'block' } }}>
        <Box style={{ maxWidth: '280px' }}>
          {/* <Grid item xs={3} sx={{ display: { xs: 'none', md: 'block' } }}> */}
          <Sidebar applyFilters={applyFilters} resetFilters={resetFilters} />
          {/* </Grid> */}
        </Box>
      </Grid>

      {/* Map Placeholder */}
      <Grid item xs={12} sm={8} md={9}>
        <TomTomClusterMap />
        {/* Pet Cards */}
        <Grid item xs={12} style={{ marginTop: '2rem' }}>
          <Grid container spacing={3}>
            {pets.length === 0 && loading && (
              <Grid item xs={12} style={{ textAlign: 'center' }}>
                <CircularProgress />
              </Grid>
            )}
            {pets.length === 0 && !loading && (
              <Grid item xs={12} sm={12} md={12} lg={12}>
                <Typography variant="h6" style={{ textAlign: 'center' }}>
                  Currently, there are no listings to display. Please revisit this page later.
                </Typography>
                <Box
                  position="relative"
                  display="flex"
                  flexDirection="column"
                  justifyContent="center"
                  alignItems="center"
                >
                  {/* Banner Image */}
                  <CardMedia
                    component="img"
                    src={NoListingsAvailableImg}
                    alt="File searching illustration"
                    style={{
                      width: 'auto',
                      maxHeight: '280px',
                      // objectFit: "cover",
                    }}
                  />
                  <Box
                    style={{
                      marginTop: '0.5rem',
                      display: 'flex',
                      alignItems: 'center',
                    }}
                  >
                    <MuiLink
                      href="https://storyset.com/data"
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{
                        fontSize: '0.6rem',
                        fontStyle: 'italic',
                        color: '#999',
                        fontWeight: '300',
                      }}
                    >
                      Data illustrations by Storyset
                    </MuiLink>
                  </Box>
                </Box>
              </Grid>
            )}
            {pets.map((pet) => (
              <Grid item xs={12} sm={6} md={4} key={pet._id}>
                <PetCard pet={pet} />
              </Grid>
            ))}
          </Grid>
        </Grid>
        {/* <Pagination
          sx={{ mt: 2 }}
          page={pagination.page}
          count={pagination.totalPages}
          onChange={handlePaginationChange}
          size="large"
          color="warning"
        /> */}
      </Grid>
      <Grid
        item
        xs={12}
        sm={4}
        md={3}
        lg={3}
        sx={{ display: { xs: 'none', sm: 'block', md: 'block' } }}
      ></Grid>

      <Grid item xs={12} sm={8} md={9} lg={9}>
        <Pagination
          sx={{ mt: 2 }}
          page={pagination.page}
          count={pagination.totalPages}
          onChange={handlePaginationChange}
          size="large"
          color="warning"
        />
      </Grid>
    </Grid>
  );
};

export default PetsListPage;
