// import React, { useState, useEffect, useContext } from 'react';

// import { Link } from 'react-router-dom';
// import axios from 'axios';
// import { Container, Typography, Box, Grid, Card, CardContent, CardMedia } from '@mui/material';

// import { Chip } from '@mui/material';

// import { BASE_URL } from '../middleware/config'; // Adjust the path as necessary
// import { LanguageContext } from '../middleware/LanguageContext';
// function ServiceCategoriesListPage() {
//   const { selectedLanguage } = useContext(LanguageContext);
//   const [categories, setCategories] = useState([]);

//   useEffect(() => {
//     const fetchCategories = async () => {
//       try {
//         const response = await axios.get(`${BASE_URL}/service-categories/`);
//         setCategories(response.data);
//       } catch (error) {
//         console.error('Error fetching categories:', error);
//       }
//     };

//     fetchCategories();
//   }, []);

//   return (
//     <Container>
//       <Typography variant="h4" gutterBottom>
//         Service Categories
//       </Typography>
//       <Grid container spacing={3}>
//         {categories.map((category) => (
//           <Grid item xs={12} sm={6} md={4} key={category.id}>
//             <Card>
//               {/* <Typography variant="body2" color="text.secondary">
//                 {category.description.en}
//               </Typography> */}
//               <Link
//                 to={`/businesses?service=${category._id}`}
//                 style={{ textDecoration: 'none', color: 'inherit' }}
//               >
//                 <CardMedia
//                   component="img"
//                   height="240"
//                   image={'services/' + category.slug + '.svg' || 'https://placehold.co/600x400'} // Assuming `category.image` is the URL to the image
//                   alt={category.name.en}
//                 />
//               </Link>
//               <CardContent>
//                 <Typography variant="h6">{category.name[selectedLanguage]}</Typography>
//                 <Box mt={1}>
//                   {category.tags &&
//                     category.tags[selectedLanguage].map((tag, index) => (
//                       <Chip
//                         key={index}
//                         size="small"
//                         label={tag}
//                         style={{
//                           marginRight: '4px',
//                           marginTop: '4px',
//                           backgroundColor: 'lightgray',
//                         }}
//                       />
//                     ))}
//                 </Box>
//               </CardContent>
//             </Card>
//           </Grid>
//         ))}
//       </Grid>
//     </Container>
//   );
// }

// export default ServiceCategoriesListPage;
import React, { useState, useEffect, useContext } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import {
  Container,
  Typography,
  Box,
  Grid,
  Card,
  CardContent,
  CardMedia,
  Chip,
  CircularProgress,
} from '@mui/material';
import { BASE_URL } from '../middleware/config'; // Adjust the path as necessary
import { LanguageContext } from '../middleware/LanguageContext';

function ServiceCategoriesListPage() {
  const { selectedLanguage } = useContext(LanguageContext);
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const response = await axios.get(`${BASE_URL}/service-categories/`);
        if (response.data.length === 0) {
          setCategories([]); // No categories available
        } else {
          setCategories(response.data);
        }
      } catch (error) {
        setError('Unable to fetch service categories at the moment. Please try again later.');
      } finally {
        setLoading(false);
      }
    };

    fetchCategories();
  }, []);

  if (loading) return <CircularProgress />;

  return (
    <Container>
      <Typography variant="h4" gutterBottom>
        Service Categories
      </Typography>
      {error ? (
        <Typography variant="h6" color="error" align="center">
          {error}
        </Typography>
      ) : categories.length === 0 ? (
        <Typography variant="h6" color="textSecondary" align="center">
          No service categories available at the moment.
        </Typography>
      ) : (
        <Grid container spacing={3}>
          {categories.map((category) => (
            <Grid item xs={12} sm={6} md={4} key={category.id}>
              <Card>
                <Link
                  to={`/businesses?service=${category._id}`}
                  style={{ textDecoration: 'none', color: 'inherit' }}
                >
                  <CardMedia
                    component="img"
                    height="240"
                    image={'services/' + category.slug + '.svg' || 'https://placehold.co/600x400'} // Default image
                    alt={category.name.en}
                  />
                </Link>
                <CardContent>
                  <Typography variant="h6">{category.name[selectedLanguage]}</Typography>
                  <Box mt={1}>
                    {category.tags &&
                      category.tags[selectedLanguage].map((tag, index) => (
                        <Chip
                          key={index}
                          size="small"
                          label={tag}
                          style={{
                            marginRight: '4px',
                            marginTop: '4px',
                            backgroundColor: 'lightgray',
                          }}
                        />
                      ))}
                  </Box>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      )}
    </Container>
  );
}

export default ServiceCategoriesListPage;
