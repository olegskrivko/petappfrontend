import React, { useEffect, useState, useContext } from 'react';
import {
  Container,
  Typography,
  Box,
  Card,
  CardContent,
  CardMedia,
  Grid,
  Chip,
  Button,
  CircularProgress, // Import CircularProgress for loading state
} from '@mui/material';
import axios from 'axios';
import { useNavigate, Link } from 'react-router-dom';
import { LanguageContext } from '../middleware/LanguageContext';
import { BASE_URL } from '../middleware/config';
import { useTranslation } from 'react-i18next';

function ServicesListPage() {
  const { selectedLanguage, setSelectedLanguage } = useContext(LanguageContext);
  const [services, setServices] = useState([]);
  const [loading, setLoading] = useState(true); // State to manage loading
  const [error, setError] = useState(null); // State to manage error
  const { t } = useTranslation(); // Initialize translation hook
  const navigate = useNavigate();

  useEffect(() => {
    const fetchServices = async () => {
      try {
        const response = await axios.get(`${BASE_URL}/services`);
        setServices(response.data); // Set the fetched services to state
      } catch (err) {
        setError('Failed to fetch services'); // Set error message
        console.error(err); // Log error for debugging
      } finally {
        setLoading(false); // Set loading to false once data is fetched
      }
    };

    fetchServices();
  }, []);

  // const handleServiceClick = (serviceId) => {
  //   navigate(`/businesses?service=${serviceId}`);
  // };

  // Render loading indicator if data is still being fetched
  if (loading) {
    return (
      <Container style={{ marginTop: '50px', textAlign: 'center' }}>
        <CircularProgress /> {/* Show loading spinner */}
      </Container>
    );
  }

  // Render error message if there was an error fetching data
  if (error) {
    return (
      <Container style={{ marginTop: '50px', textAlign: 'center' }}>
        <Typography variant="h6" color="error">
          {error}
        </Typography>
      </Container>
    );
  }

  return (
    <Container style={{ marginTop: '50px' }}>
      <Typography variant="h4" align="center" style={{ marginBottom: '20px' }}>
        Service Categories
      </Typography>
      <Grid container spacing={3}>
        {services.map((service) => (
          <Grid item xs={12} sm={6} md={4} key={service._id}>
            <Card>
              <Link
                to={`/services/${service._id}`}
                style={{ textDecoration: 'none', color: 'inherit' }}
              >
                <CardMedia
                  component="img"
                  height="340"
                  image={service.image || 'https://placehold.co/600x400'} // Use service image or placeholder
                  alt={service.name.en} // Use English name for alt text
                />
              </Link>
              <CardContent>
                {/* currently its stored as one array, so first array item is taken, later need to fix.store each tag as array */}
                <Typography variant="h6">{service.name[selectedLanguage]}</Typography>
                <Box mt={1}>
                  {service.tags[selectedLanguage] &&
                    service.tags[selectedLanguage][0].split(',').map((tag, index) => (
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
    </Container>
  );
}

export default ServicesListPage;

// import React, { useEffect, useState } from 'react';
// import {
//   Container,
//   Typography,
//   Box,
//   Card,
//   CardContent,
//   CardMedia,
//   Grid,
//   Chip,
//   Button,
// } from '@mui/material';
// import axios from 'axios';
// import { useNavigate, Link } from 'react-router-dom';
// import { BASE_URL } from '../middleware/config';
// import { useTranslation } from 'react-i18next';

// function ServicesListPage() {
//   const [services, setServices] = useState([]);
//   const { t } = useTranslation(); // Initialize translation hook
//   const navigate = useNavigate();
//   const handleServiceClick = (serviceId) => {
//     navigate(`/businesses?service=${serviceId}`);
//   };
//   // Fetch service categories from localization file
//   const categories = t('serviceCategories', { returnObjects: true });

//   return (
//     <Container style={{ marginTop: '50px' }}>
//       <Typography variant="h4" align="center" style={{ marginBottom: '20px' }}>
//         Services
//       </Typography>
//       <Grid container spacing={3}>
//         {categories.map((category) => (
//           <Grid item xs={12} sm={6} md={4} key={category.id}>
//             <Card>
//               <Link
//                 to={`/businesses?service=${category.id}`}
//                 style={{ textDecoration: 'none', color: 'inherit' }}
//               >
//                 <CardMedia
//                   component="img"
//                   height="240"
//                   image={'services/' + category.slug + '.svg' || 'https://placehold.co/600x400'} // Assuming `category.image` is the URL to the image
//                   alt={category.name}
//                 />
//               </Link>
//               <CardContent>
//                 {/* <Button
//                   variant="contained"
//                   color="primary"
//                   onClick={() => handleServiceClick(category.id)}
//                   style={{ marginTop: '10px' }}
//                 >
//                   viewBusinesses
//                 </Button> */}
//                 <Typography variant="h6">{category.name}</Typography>
//                 <Box mt={1}>
//                   {category.tags &&
//                     category.tags.map((tag, index) => (
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

// export default ServicesListPage;

//<a href="https://storyset.com/animal">Animal illustrations by Storyset</a>
//<a href="https://storyset.com/job">Job illustrations by Storyset</a>
//<a href="https://storyset.com/food">Food illustrations by Storyset</a>
//<a href="https://storyset.com/animal">Animal illustrations by Storyset</a>
//<a href="https://storyset.com/animal">Animal illustrations by Storyset</a>
//<a href="https://storyset.com/home">Home illustrations by Storyset</a>
//<a href="https://storyset.com/home">Home illustrations by Storyset</a>
//<a href="https://storyset.com/work">Work illustrations by Storyset</a>
//<a href="https://storyset.com/work">Work illustrations by Storyset</a>
//<a href="https://storyset.com/home">Home illustrations by Storyset</a>
//<a href="https://storyset.com/nature">Nature illustrations by Storyset</a>
//<a href="https://storyset.com/love">Love illustrations by Storyset</a>
//<a href="https://storyset.com/work">Work illustrations by Storyset</a>
//<a href="https://storyset.com/medical">Medical illustrations by Storyset</a>
//<a href="https://storyset.com/people">People illustrations by Storyset</a>

// import React, { useEffect, useState } from 'react';
// import {
//   Container,
//   Typography,
//   Box,
//   Card,
//   CardContent,
//   CardMedia,
//   Grid,
//   Button,
// } from '@mui/material';
// import axios from 'axios';
// import { useNavigate } from 'react-router-dom';
// import { BASE_URL } from '../middleware/config';
// function ServicesListPage() {
//   const [services, setServices] = useState([]);
//   const navigate = useNavigate();

//   useEffect(() => {
//     // Fetch services data from the backend
//     const fetchServices = async () => {
//       try {
//         const response = await axios.get(`${BASE_URL}/services`);
//         setServices(response.data);
//       } catch (error) {
//         console.error('Error fetching services:', error);
//       }
//     };

//     fetchServices();
//   }, []);

//   // Handle navigation to the businesses page for a specific service category
//   const handleServiceClick = (serviceId) => {
//     navigate(`/businesses?service=${serviceId}`);
//   };

//   return (
//     <Container maxWidth="md" style={{ marginTop: '50px' }}>
//       <Typography variant="h4" align="center" style={{ marginBottom: '20px' }}>
//         Services
//       </Typography>
//       <Grid container spacing={3}>
//         {services.map((service) => (
//           <Grid item xs={12} sm={6} md={4} key={service._id}>
//             <Card>
//               <CardMedia
//                 component="img"
//                 height="140"
//                 image={service.image || 'https://placehold.co/600x400'} // Assuming `service.image` is the URL to the image
//                 alt={service.name}
//               />
//               <CardContent>
//                 <Typography variant="h6">{service.name}</Typography>
//                 <Typography variant="body2" color="textSecondary">
//                   {service.description}
//                 </Typography>
//                 <Button
//                   variant="contained"
//                   color="primary"
//                   onClick={() => handleServiceClick(service._id)}
//                   style={{ marginTop: '10px' }}
//                 >
//                   View Businesses
//                 </Button>
//               </CardContent>
//             </Card>
//           </Grid>
//         ))}
//       </Grid>
//     </Container>
//   );
// }

// export default ServicesListPage;
// --Animal Shelters
// --Cat cafe

// 1. Pet Boarding

// Description:
// Pet Boarding services provide temporary housing and care for pets when their owners are away. Facilities often include amenities like play areas, feeding, and daily exercise.
// Tags:

//     Overnight Stay
//     Daycare
//     Kennels
//     Pet Hotels
//     Cage-Free Boarding

// 2. Veterinary Services

// Description:
// Veterinary Services offer medical care for pets, including routine check-ups, emergency care, and specialized treatments. These services ensure pets receive necessary health and wellness attention.
// Tags:

//     Routine Check-ups
//     Emergency Care
//     Surgery
//     Vaccinations
//     Dental Care
//     Wellness Exams

// 3. Pet Grooming

// Description:
// Pet Grooming includes bathing, brushing, trimming, and styling services to keep pets clean and comfortable. Groomers also provide nail trimming and ear cleaning.
// Tags:

//     Bathing
//     Haircuts
//     Nail Trimming
//     Ear Cleaning
//     Styling

// 4. Pet Photography

// Description:
// Pet Photography captures high-quality images of pets in various settings. Services may include studio sessions, on-location shoots, and customized photo packages.
// Tags:

//     Studio Photography
//     On-Location Shoots
//     Portraits
//     Action Shots
//     Custom Packages

// 5. Pet Rescue and Search

// Description:
// Pet Rescue and Search services focus on locating lost pets and providing emergency rescue operations. These organizations often help with rehoming and fostering.
// Tags:

//     Lost Pet Recovery
//     Emergency Rescue
//     Rehoming
//     Fostering
//     Microchip Scanning

// 6. Pet Sitting

// Description:
// Pet Sitting involves care for pets in their own home while owners are away. Services typically include feeding, walking, and companionship.
// Tags:

//     In-Home Care
//     Feeding
//     Walking
//     Playtime
//     Medication Administration

// 7. Pet Supplies and Accessories

// Description:
// Pet Supplies and Accessories include products for pets such as food, toys, grooming tools, and bedding. These items help keep pets healthy, entertained, and comfortable.
// Tags:

//     Pet Food
//     Toys
//     Grooming Tools
//     Bedding
//     Collars and Leashes

// 8. Pet Training

// Description:
// Pet Training services offer obedience training, behavior modification, and specialized instruction for pets. Training may be provided in group classes or private sessions.
// Tags:

//     Obedience Training
//     Behavior Modification
//     Puppy Classes
//     Advanced Training
//     Private Sessions

// 9. Dog Walking

// Description:
// Dog Walking services provide exercise and outdoor activity for dogs. Walkers may offer scheduled walks, group walks, or private sessions.
// Tags:

//     Scheduled Walks
//     Group Walks
//     Private Walks
//     Exercise
//     Socialization

// 10. Pet Art

// Description:
// Pet Art includes custom artwork featuring pets, such as paintings, drawings, and sculptures. These pieces celebrate and immortalize pets in a creative form.
// Tags:

//     Paintings
//     Drawings
//     Sculptures
//     Custom Portraits
//     Commemorative Art

// 11. Pet Transportation

// Description:
// Pet Transportation services assist in safely moving pets from one location to another, whether locally or over long distances. Services include ground transport and air travel arrangements.
// Tags:

//     Local Transport
//     Long-Distance Transport
//     Air Travel
//     Ground Transport
//     Pet Relocation

// 12. Pet Burial Services

// Description:
// Pet Burial Services provide respectful end-of-life care, including burial and cremation options. Services may also include memorials and aftercare.
// Tags:

//     Burial
//     Cremation
//     Memorials
//     Urns
//     Aftercare

// 13. Pet Breeders

// Description:
// Pet Breeders specialize in the responsible breeding of pets. They ensure the health and well-being of animals and provide guidance on pet care for new owners.
// Tags:

//     Responsible Breeding
//     Puppies
//     Kittens
//     Breed Information
//     Health Guarantees

// 14. Pet Insurance

// Description:
// Pet Insurance offers financial protection against veterinary expenses for unexpected health issues or accidents. Policies may cover various treatments and conditions.
// Tags:

//     Accident Coverage
//     Illness Coverage
//     Wellness Plans
//     Claims Assistance
//     Policy Options

// 15. Pet Weddings

// Description:
// Pet Weddings involve organizing ceremonies and celebrations for pets and their owners. Services may include themed events, custom attire, and photography.
// Tags:

//     Themed Events
//     Custom Attire
//     Photography
//     Decorations
//     Wedding Planning

// 16. Pet Legal Services

// Description:
// Pet Legal Services provide legal assistance related to pet ownership, including custody disputes, liability issues, and pet-related estate planning.
// Tags:

//     Custody Disputes
//     Liability Issues
//     Estate Planning
//     Contracts
//     Legal Advice

// 17. Pet Playgroups or Socialization

// Description:
// Pet Playgroups or Socialization services facilitate interactions between pets to promote social skills and exercise. These may include group play sessions and training.
// Tags:

//     Group Play
//     Socialization
//     Training
//     Interactive Sessions
//     Behavior Development

// import React, { useEffect, useState } from 'react';
// import {
//   Container,
//   Typography,
//   Box,
//   Card,
//   CardContent,
//   CardMedia,
//   Grid,
//   Button,
// } from '@mui/material';
// import axios from 'axios';
// import { useNavigate } from 'react-router-dom';
// import { BASE_URL } from '../middleware/config';
// import { useTranslation } from 'react-i18next';

// function ServicesListPage() {
//   const [services, setServices] = useState([]);
//   const { t } = useTranslation(); // Initialize translation hook
//   const navigate = useNavigate();

//   useEffect(() => {
//     // Fetch services data from the backend
//     const fetchServices = async () => {
//       try {
//         const response = await axios.get(`${BASE_URL}/services`);
//         setServices(response.data);
//       } catch (error) {
//         console.error('Error fetching services:', error);
//       }
//     };

//     fetchServices();
//   }, []);

//   // Handle navigation to the businesses page for a specific service category
//   const handleServiceClick = (serviceId) => {
//     navigate(`/businesses?service=${serviceId}`);
//   };

//   return (
//     <Container maxWidth="md" style={{ marginTop: '50px' }}>
//       <Typography variant="h4" align="center" style={{ marginBottom: '20px' }}>
//         {t('services.title')} {/* Use translation key */}
//       </Typography>
//       <Grid container spacing={3}>
//         {services.map((service) => (
//           <Grid item xs={12} sm={6} md={4} key={service._id}>
//             <Card>
//               <CardMedia
//                 component="img"
//                 height="140"
//                 image={service.image || 'https://placehold.co/600x400'} // Assuming `service.image` is the URL to the image
//                 alt={service.name}
//               />
//               <CardContent>
//                 <Typography variant="h6">
//                   {t(`serviceCategoryOptions.${service._id}.name`)} {/* Translate name */}
//                 </Typography>
//                 <Typography variant="body2" color="textSecondary">
//                   {t(`serviceCategoryOptions.${service._id}.description`)} {/* Translate description */}
//                 </Typography>
//                 <Button
//                   variant="contained"
//                   color="primary"
//                   onClick={() => handleServiceClick(service._id)}
//                   style={{ marginTop: '10px' }}
//                 >
//                   {t('services.viewBusinesses')} {/* Use translation key */}
//                 </Button>
//               </CardContent>
//             </Card>
//           </Grid>
//         ))}
//       </Grid>
//     </Container>
//   );
// }

// export default ServicesListPage;

// import React, { useEffect, useState } from 'react';
// import {
//   Container,
//   Typography,
//   Box,
//   Card,
//   CardContent,
//   CardMedia,
//   Grid,
//   Button,
// } from '@mui/material';
// import axios from 'axios';
// import { useNavigate } from 'react-router-dom';
// import { BASE_URL } from '../middleware/config';
// function ServicesListPage() {
//   const [services, setServices] = useState([]);
//   const navigate = useNavigate();

//   useEffect(() => {
//     // Fetch services data from the backend
//     const fetchServices = async () => {
//       try {
//         const response = await axios.get(`${BASE_URL}/services`);
//         setServices(response.data);
//       } catch (error) {
//         console.error('Error fetching services:', error);
//       }
//     };

//     fetchServices();
//   }, []);

//   // Handle navigation to the businesses page for a specific service category
//   const handleServiceClick = (serviceId) => {
//     navigate(`/businesses?service=${serviceId}`);
//   };

//   return (
//     <Container maxWidth="md" style={{ marginTop: '50px' }}>
//       <Typography variant="h4" align="center" style={{ marginBottom: '20px' }}>
//         Services
//       </Typography>
//       <Grid container spacing={3}>
//         {services.map((service) => (
//           <Grid item xs={12} sm={6} md={4} key={service._id}>
//             <Card>
//               <CardMedia
//                 component="img"
//                 height="140"
//                 image={service.image || 'https://placehold.co/600x400'} // Assuming `service.image` is the URL to the image
//                 alt={service.name}
//               />
//               <CardContent>
//                 <Typography variant="h6">{service.name}</Typography>
//                 <Typography variant="body2" color="textSecondary">
//                   {service.description}
//                 </Typography>
//                 <Button
//                   variant="contained"
//                   color="primary"
//                   onClick={() => handleServiceClick(service._id)}
//                   style={{ marginTop: '10px' }}
//                 >
//                   View Businesses
//                 </Button>
//               </CardContent>
//             </Card>
//           </Grid>
//         ))}
//       </Grid>
//     </Container>
//   );
// }

// export default ServicesListPage;
// --Animal Shelters
// --Cat cafe

// 1. Pet Boarding

// Description:
// Pet Boarding services provide temporary housing and care for pets when their owners are away. Facilities often include amenities like play areas, feeding, and daily exercise.
// Tags:

//     Overnight Stay
//     Daycare
//     Kennels
//     Pet Hotels
//     Cage-Free Boarding

// 2. Veterinary Services

// Description:
// Veterinary Services offer medical care for pets, including routine check-ups, emergency care, and specialized treatments. These services ensure pets receive necessary health and wellness attention.
// Tags:

//     Routine Check-ups
//     Emergency Care
//     Surgery
//     Vaccinations
//     Dental Care
//     Wellness Exams

// 3. Pet Grooming

// Description:
// Pet Grooming includes bathing, brushing, trimming, and styling services to keep pets clean and comfortable. Groomers also provide nail trimming and ear cleaning.
// Tags:

//     Bathing
//     Haircuts
//     Nail Trimming
//     Ear Cleaning
//     Styling

// 4. Pet Photography

// Description:
// Pet Photography captures high-quality images of pets in various settings. Services may include studio sessions, on-location shoots, and customized photo packages.
// Tags:

//     Studio Photography
//     On-Location Shoots
//     Portraits
//     Action Shots
//     Custom Packages

// 5. Pet Rescue and Search

// Description:
// Pet Rescue and Search services focus on locating lost pets and providing emergency rescue operations. These organizations often help with rehoming and fostering.
// Tags:

//     Lost Pet Recovery
//     Emergency Rescue
//     Rehoming
//     Fostering
//     Microchip Scanning

// 6. Pet Sitting

// Description:
// Pet Sitting involves care for pets in their own home while owners are away. Services typically include feeding, walking, and companionship.
// Tags:

//     In-Home Care
//     Feeding
//     Walking
//     Playtime
//     Medication Administration

// 7. Pet Supplies and Accessories

// Description:
// Pet Supplies and Accessories include products for pets such as food, toys, grooming tools, and bedding. These items help keep pets healthy, entertained, and comfortable.
// Tags:

//     Pet Food
//     Toys
//     Grooming Tools
//     Bedding
//     Collars and Leashes

// 8. Pet Training

// Description:
// Pet Training services offer obedience training, behavior modification, and specialized instruction for pets. Training may be provided in group classes or private sessions.
// Tags:

//     Obedience Training
//     Behavior Modification
//     Puppy Classes
//     Advanced Training
//     Private Sessions

// 9. Dog Walking

// Description:
// Dog Walking services provide exercise and outdoor activity for dogs. Walkers may offer scheduled walks, group walks, or private sessions.
// Tags:

//     Scheduled Walks
//     Group Walks
//     Private Walks
//     Exercise
//     Socialization

// 10. Pet Art

// Description:
// Pet Art includes custom artwork featuring pets, such as paintings, drawings, and sculptures. These pieces celebrate and immortalize pets in a creative form.
// Tags:

//     Paintings
//     Drawings
//     Sculptures
//     Custom Portraits
//     Commemorative Art

// 11. Pet Transportation

// Description:
// Pet Transportation services assist in safely moving pets from one location to another, whether locally or over long distances. Services include ground transport and air travel arrangements.
// Tags:

//     Local Transport
//     Long-Distance Transport
//     Air Travel
//     Ground Transport
//     Pet Relocation

// 12. Pet Burial Services

// Description:
// Pet Burial Services provide respectful end-of-life care, including burial and cremation options. Services may also include memorials and aftercare.
// Tags:

//     Burial
//     Cremation
//     Memorials
//     Urns
//     Aftercare

// 13. Pet Breeders

// Description:
// Pet Breeders specialize in the responsible breeding of pets. They ensure the health and well-being of animals and provide guidance on pet care for new owners.
// Tags:

//     Responsible Breeding
//     Puppies
//     Kittens
//     Breed Information
//     Health Guarantees

// 14. Pet Insurance

// Description:
// Pet Insurance offers financial protection against veterinary expenses for unexpected health issues or accidents. Policies may cover various treatments and conditions.
// Tags:

//     Accident Coverage
//     Illness Coverage
//     Wellness Plans
//     Claims Assistance
//     Policy Options

// 15. Pet Weddings

// Description:
// Pet Weddings involve organizing ceremonies and celebrations for pets and their owners. Services may include themed events, custom attire, and photography.
// Tags:

//     Themed Events
//     Custom Attire
//     Photography
//     Decorations
//     Wedding Planning

// 16. Pet Legal Services

// Description:
// Pet Legal Services provide legal assistance related to pet ownership, including custody disputes, liability issues, and pet-related estate planning.
// Tags:

//     Custody Disputes
//     Liability Issues
//     Estate Planning
//     Contracts
//     Legal Advice

// 17. Pet Playgroups or Socialization

// Description:
// Pet Playgroups or Socialization services facilitate interactions between pets to promote social skills and exercise. These may include group play sessions and training.
// Tags:

//     Group Play
//     Socialization
//     Training
//     Interactive Sessions
//     Behavior Development
