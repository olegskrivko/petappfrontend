// import React, { useState, useEffect, useContext } from 'react';
// import {
//   TextField,
//   Button,
//   MenuItem,
//   Select,
//   FormControl,
//   InputLabel,
//   Grid,
//   IconButton,
//   Container,
//   Typography,
// } from '@mui/material';
// import { useTranslation } from 'react-i18next';

// import axios from 'axios';
// import { BASE_URL } from '../middleware/config';
// import { AuthContext } from '../middleware/AuthContext';
// const CreateBusinessPage = () => {
//   const { t } = useTranslation();
//   const { user } = useContext(AuthContext);
//   const [categories, setCategories] = useState([]);
//   const [business, setBusiness] = useState({
//     name: '',
//     category: '',
//     description: '',
//     address: '',
//     city: '',
//     state: '',
//     zipCode: '',
//     country: '',
//     phone: '',
//     email: '',
//     website: '',
//     socialMedia: {
//       facebook: '',
//       instagram: '',
//       youtube: '',
//     },
//     locations: [],
//   });

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setBusiness((prev) => ({
//       ...prev,
//       [name]: value,
//     }));
//   };

//   const handleLocationChange = (index, e) => {
//     const { name, value } = e.target;
//     const updatedLocations = [...business.locations];
//     updatedLocations[index] = { ...updatedLocations[index], [name]: value };
//     setBusiness((prev) => ({
//       ...prev,
//       locations: updatedLocations,
//     }));
//   };

//   const addLocation = () => {
//     setBusiness((prev) => ({
//       ...prev,
//       locations: [
//         ...prev.locations,
//         {
//           name: '',
//           description: '',
//           latitude: '',
//           longitude: '',
//           openingHours: {},
//           image: '',
//           season: '',
//         },
//       ],
//     }));
//   };

//   const removeLocation = (index) => {
//     const updatedLocations = business.locations.filter((_, i) => i !== index);
//     setBusiness((prev) => ({
//       ...prev,
//       locations: updatedLocations,
//     }));
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     const token = localStorage.getItem('token'); // Or wherever you store the JWT token

//     try {
//       await axios.post(
//         `${BASE_URL}/businesses/${user.id}/businesses`,
//         { ...business, userId: user.id },
//         {
//           headers: { Authorization: `Bearer ${token}` },
//         },
//       );
//       alert('Business created successfully!');
//     } catch (error) {
//       console.error('Error creating business:', error);
//     }
//   };

//   useEffect(() => {
//     // Retrieve categories from locale file
//     const fetchCategoriesFromLocale = () => {
//       const localeCategories = t('serviceCategories', { returnObjects: true });

//       setCategories(Object.values(localeCategories)); // Convert object to array for the Select options
//     };

//     fetchCategoriesFromLocale();
//   }, [t]);

//   return (
//     <Container>
//       <Typography variant="h4" gutterBottom>
//         Create Business
//       </Typography>
//       <form onSubmit={handleSubmit}>
//         <FormControl fullWidth margin="normal">
//           <InputLabel>Category</InputLabel>

//           <Select name="category" value={business.category} onChange={handleChange} required>
//             {categories.map((category) => (
//               <MenuItem key={category.slug} value={category.id}>
//                 {category.name}
//               </MenuItem>
//             ))}
//           </Select>
//         </FormControl>
//         <TextField
//           name="name"
//           label="Business Name"
//           value={business.name}
//           onChange={handleChange}
//           fullWidth
//           margin="normal"
//           required
//         />
//         <TextField
//           name="description"
//           label="Description"
//           value={business.description}
//           onChange={handleChange}
//           fullWidth
//           margin="normal"
//           multiline
//         />
//         <TextField
//           name="address"
//           label="Address"
//           value={business.address}
//           onChange={handleChange}
//           fullWidth
//           margin="normal"
//           required
//         />
//         <TextField
//           name="city"
//           label="City"
//           value={business.city}
//           onChange={handleChange}
//           fullWidth
//           margin="normal"
//           required
//         />
//         <TextField
//           name="state"
//           label="State"
//           value={business.state}
//           onChange={handleChange}
//           fullWidth
//           margin="normal"
//         />
//         <TextField
//           name="zipCode"
//           label="Zip Code"
//           value={business.zipCode}
//           onChange={handleChange}
//           fullWidth
//           margin="normal"
//         />
//         <TextField
//           name="country"
//           label="Country"
//           value={business.country}
//           onChange={handleChange}
//           fullWidth
//           margin="normal"
//           required
//         />
//         <TextField
//           name="phone"
//           label="Phone"
//           value={business.phone}
//           onChange={handleChange}
//           fullWidth
//           margin="normal"
//         />
//         <TextField
//           name="email"
//           label="Email"
//           value={business.email}
//           onChange={handleChange}
//           fullWidth
//           margin="normal"
//         />
//         <TextField
//           name="website"
//           label="Website"
//           value={business.website}
//           onChange={handleChange}
//           fullWidth
//           margin="normal"
//         />
//         <TextField
//           name="socialMedia.facebook"
//           label="Facebook"
//           value={business.socialMedia.facebook}
//           onChange={handleChange}
//           fullWidth
//           margin="normal"
//         />
//         <TextField
//           name="socialMedia.instagram"
//           label="Instagram"
//           value={business.socialMedia.instagram}
//           onChange={handleChange}
//           fullWidth
//           margin="normal"
//         />
//         <TextField
//           name="socialMedia.youtube"
//           label="YouTube"
//           value={business.socialMedia.youtube}
//           onChange={handleChange}
//           fullWidth
//           margin="normal"
//         />

//         <Typography variant="h6" gutterBottom>
//           Locations
//         </Typography>
//         {business.locations.map((location, index) => (
//           <div key={index} style={{ marginBottom: '1rem' }}>
//             <TextField
//               name="name"
//               label="Location Name"
//               value={location.name}
//               onChange={(e) => handleLocationChange(index, e)}
//               fullWidth
//               margin="normal"
//             />
//             <TextField
//               name="description"
//               label="Location Description"
//               value={location.description}
//               onChange={(e) => handleLocationChange(index, e)}
//               fullWidth
//               margin="normal"
//             />
//             <TextField
//               name="latitude"
//               label="Latitude"
//               value={location.latitude}
//               onChange={(e) => handleLocationChange(index, e)}
//               fullWidth
//               margin="normal"
//             />
//             <TextField
//               name="longitude"
//               label="Longitude"
//               value={location.longitude}
//               onChange={(e) => handleLocationChange(index, e)}
//               fullWidth
//               margin="normal"
//             />
//             <TextField
//               name="openingHours.monday"
//               label="Monday Hours"
//               value={location.openingHours?.monday || ''}
//               onChange={(e) => handleLocationChange(index, e)}
//               fullWidth
//               margin="normal"
//             />
//             <TextField
//               name="openingHours.tuesday"
//               label="Tuesday Hours"
//               value={location.openingHours?.tuesday || ''}
//               onChange={(e) => handleLocationChange(index, e)}
//               fullWidth
//               margin="normal"
//             />
//             <TextField
//               name="openingHours.wednesday"
//               label="Wednesday Hours"
//               value={location.openingHours?.wednesday || ''}
//               onChange={(e) => handleLocationChange(index, e)}
//               fullWidth
//               margin="normal"
//             />
//             <TextField
//               name="openingHours.thursday"
//               label="Thursday Hours"
//               value={location.openingHours?.thursday || ''}
//               onChange={(e) => handleLocationChange(index, e)}
//               fullWidth
//               margin="normal"
//             />
//             <TextField
//               name="openingHours.friday"
//               label="Friday Hours"
//               value={location.openingHours?.friday || ''}
//               onChange={(e) => handleLocationChange(index, e)}
//               fullWidth
//               margin="normal"
//             />
//             <TextField
//               name="openingHours.saturday"
//               label="Saturday Hours"
//               value={location.openingHours?.saturday || ''}
//               onChange={(e) => handleLocationChange(index, e)}
//               fullWidth
//               margin="normal"
//             />
//             <TextField
//               name="openingHours.sunday"
//               label="Sunday Hours"
//               value={location.openingHours?.sunday || ''}
//               onChange={(e) => handleLocationChange(index, e)}
//               fullWidth
//               margin="normal"
//             />
//             <TextField
//               name="image"
//               label="Location Image URL"
//               value={location.image}
//               onChange={(e) => handleLocationChange(index, e)}
//               fullWidth
//               margin="normal"
//             />
//             <TextField
//               name="season"
//               label="Season"
//               value={location.season}
//               onChange={(e) => handleLocationChange(index, e)}
//               fullWidth
//               margin="normal"
//             />
//             <IconButton onClick={() => removeLocation(index)} color="error">
//               RemoveLocationIcon
//             </IconButton>
//           </div>
//         ))}
//         <Button variant="outlined" onClick={addLocation}>
//           Add Location
//         </Button>
//         <Button type="submit" variant="contained" color="primary" style={{ marginTop: '1rem' }}>
//           Submit
//         </Button>
//       </form>
//     </Container>
//   );
// };

// export default CreateBusinessPage;

// import React, { useState, useEffect, useContext } from 'react';
// import {
//   TextField,
//   Button,
//   MenuItem,
//   Select,
//   FormControl,
//   InputLabel,
//   IconButton,
//   Container,
//   Grid,
//   Box,
//   Typography,
// } from '@mui/material';
// import axios from 'axios';
// import { BASE_URL } from '../middleware/config';
// import { AuthContext } from '../middleware/AuthContext';
// import { useTranslation } from 'react-i18next';
// import RemoveCircleOutlineIcon from '@mui/icons-material/RemoveCircleOutline';

// const CreateBusinessPage = () => {
//   const { t } = useTranslation();
//   const { user } = useContext(AuthContext);

//   const [business, setBusiness] = useState({
//     name: '',
//     category: '',
//     description: '',
//     image: '',
//     tags: [],
//     website: '',
//     facebook: '',
//     instagram: '',
//     linkedin: '',
//     youtube: '',
//     tiktok: '',
//     x: '',
//     pinterest: '',
//     whatsapp: '',
//     servicesOffered: [],
//     locations: [],
//   });

//   const [categories, setCategories] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [imagePreview, setImagePreview] = useState(null);
//   useEffect(() => {
//     // Fetch categories from service-categories endpoint
//     const fetchCategories = async () => {
//       try {
//         const response = await axios.get(`${BASE_URL}/service-categories`);
//         setCategories(response.data);
//       } catch (error) {
//         console.error('Error fetching categories:', error);
//       } finally {
//         setLoading(false);
//       }
//     };
//     fetchCategories();
//   }, []);

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     if (name === 'servicesOffered') {
//       setBusiness((prev) => ({
//         ...prev,
//         [name]: value,
//       }));
//     } else {
//       setBusiness((prev) => ({
//         ...prev,
//         [name]: value,
//       }));
//     }
//   };

//   const handleLocationChange = (index, e) => {
//     const { name, value } = e.target;
//     const updatedLocations = [...business.locations];
//     updatedLocations[index] = { ...updatedLocations[index], [name]: value };
//     setBusiness((prev) => ({
//       ...prev,
//       locations: updatedLocations,
//     }));
//   };

//   const addLocation = () => {
//     setBusiness((prev) => ({
//       ...prev,
//       locations: [
//         ...prev.locations,
//         {
//           name: '',
//           description: '',
//           phone: '',
//           email: '',
//           latitude: '',
//           longitude: '',
//           monday: '',
//           tuesday: '',
//           wednesday: '',
//           thursday: '',
//           friday: '',
//           saturday: '',
//           sunday: '',
//           season: [],
//           street: '',
//           city: '',
//           state: '',
//           zipCode: '',
//           country: '',
//         },
//       ],
//     }));
//   };

//   const removeLocation = (index) => {
//     const updatedLocations = business.locations.filter((_, i) => i !== index);
//     setBusiness((prev) => ({
//       ...prev,
//       locations: updatedLocations,
//     }));
//   };

//   const resizeAndCropImage = (file, callback) => {
//     const reader = new FileReader();
//     reader.onload = function (event) {
//       const img = new Image();
//       img.onload = function () {
//         const canvas = document.createElement('canvas');
//         const ctx = canvas.getContext('2d');

//         // Set target dimensions for the canvas
//         const targetAspectRatio = 4 / 3;
//         const targetWidth = 800;
//         const targetHeight = targetWidth / targetAspectRatio;

//         // Calculate the source dimensions
//         let srcX = 0,
//           srcY = 0,
//           srcWidth = img.width,
//           srcHeight = img.height;

//         if (img.width / img.height > targetAspectRatio) {
//           // Source is wider than target aspect ratio
//           srcWidth = img.height * targetAspectRatio;
//           srcX = (img.width - srcWidth) / 2;
//         } else {
//           // Source is taller than target aspect ratio
//           srcHeight = img.width / targetAspectRatio;
//           srcY = (img.height - srcHeight) / 2;
//         }

//         // Set canvas dimensions
//         canvas.width = targetWidth;
//         canvas.height = targetHeight;

//         // Draw image on canvas with cropping
//         ctx.drawImage(img, srcX, srcY, srcWidth, srcHeight, 0, 0, targetWidth, targetHeight);

//         // Convert canvas to Blob
//         canvas.toBlob(
//           (blob) => {
//             callback(blob);
//           },
//           'image/jpeg',
//           0.7,
//         ); // Adjust quality as needed
//       };
//       img.src = event.target.result;
//     };
//     reader.readAsDataURL(file);
//   };

//   const handleImageUpload = (file) => {
//     resizeAndCropImage(file, (resizedImage) => {
//       setFormState((prevState) => ({
//         ...prevState,
//         image: resizedImage,
//       }));
//       const previewUrl = URL.createObjectURL(resizedImage);
//       setImagePreview(previewUrl);
//     });
//   };

//   // Cleanup image URL when component unmounts
//   useEffect(() => {
//     return () => {
//       if (imagePreview) {
//         URL.revokeObjectURL(imagePreview);
//       }
//     };
//   }, [imagePreview]);

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     const token = localStorage.getItem('token'); // Retrieve JWT token

//     try {
//       await axios.post(
//         `${BASE_URL}/businesses/${user.id}/businesses`,
//         { ...business, userId: user.id },
//         {
//           headers: { Authorization: `Bearer ${token}` },
//         },
//       );
//       alert('Business created successfully!');
//     } catch (error) {
//       console.error('Error creating business:', error);
//     }
//   };

//   if (loading) {
//     return <Typography>Loading...</Typography>;
//   }

//   return (
//     <Container>
//       <Typography variant="h4" gutterBottom>
//         Create Business
//       </Typography>
//       <form onSubmit={handleSubmit}>
//         <TextField
//           name="name"
//           label="Business Name"
//           value={business.name}
//           onChange={handleChange}
//           fullWidth
//           margin="normal"
//           required
//         />
//         <FormControl fullWidth margin="normal">
//           <InputLabel>Category</InputLabel>
//           <Select name="category" value={business.category} onChange={handleChange} required>
//             {categories.map((category) => (
//               <MenuItem key={category.id} value={category._id}>
//                 {category.name.en}
//               </MenuItem>
//             ))}
//           </Select>
//         </FormControl>
//         <TextField
//           name="description"
//           label="Description"
//           value={business.description}
//           onChange={handleChange}
//           fullWidth
//           margin="normal"
//           multiline
//         />
//         {/* <TextField
//           name="image"
//           label="Business Image URL"
//           value={business.image}
//           onChange={handleChange}
//           fullWidth
//           margin="normal"
//         /> */}
//         <Grid item xs={12}>
//               <Typography
//                 variant="body1"
//                 style={{ fontWeight: '500' }}
//                 gutterBottom
//                 textAlign="left"
//               >
//                 {t('formTitles.uploadFile')}
//               </Typography>
//               <input
//                 accept="image/*"
//                 id="image"
//                 type="file"
//                 onChange={(e) => handleImageUpload(e.target.files[0])}
//                 style={{ display: 'none' }}
//               />
//               <label htmlFor="image">
//                 <Button
//                   variant="contained"
//                   color="primary"
//                   component="span"
//                   fullWidth
//                   style={{ marginTop: '20px' }}
//                 >
//                   Upload Image
//                 </Button>
//               </label>
//               {imagePreview && (

//                 <Box mb={2} style={{ width: '100%', marginTop: '20px' }}>
//                   <img src={imagePreview} alt="Preview" style={{ width: '100%', height: 'auto' }} />
//                 </Box>
//               )}
//             </Grid>
//         <TextField
//           name="tags"
//           label="Tags (comma separated)"
//           value={business.tags.join(', ')}
//           onChange={(e) =>
//             setBusiness((prev) => ({
//               ...prev,
//               tags: e.target.value.split(',').map((tag) => tag.trim()),
//             }))
//           }
//           fullWidth
//           margin="normal"
//         />
//         <TextField
//           name="website"
//           label="Website"
//           value={business.website}
//           onChange={handleChange}
//           fullWidth
//           margin="normal"
//         />
//         <TextField
//           name="facebook"
//           label="Facebook"
//           value={business.facebook}
//           onChange={handleChange}
//           fullWidth
//           margin="normal"
//         />
//         <TextField
//           name="instagram"
//           label="Instagram"
//           value={business.instagram}
//           onChange={handleChange}
//           fullWidth
//           margin="normal"
//         />
//         <TextField
//           name="linkedin"
//           label="LinkedIn"
//           value={business.linkedin}
//           onChange={handleChange}
//           fullWidth
//           margin="normal"
//         />
//         <TextField
//           name="youtube"
//           label="YouTube"
//           value={business.youtube}
//           onChange={handleChange}
//           fullWidth
//           margin="normal"
//         />
//         <TextField
//           name="tiktok"
//           label="TikTok"
//           value={business.tiktok}
//           onChange={handleChange}
//           fullWidth
//           margin="normal"
//         />
//         <TextField
//           name="x"
//           label="X (Twitter)"
//           value={business.x}
//           onChange={handleChange}
//           fullWidth
//           margin="normal"
//         />
//         <TextField
//           name="pinterest"
//           label="Pinterest"
//           value={business.pinterest}
//           onChange={handleChange}
//           fullWidth
//           margin="normal"
//         />
//         <TextField
//           name="whatsapp"
//           label="WhatsApp Number"
//           value={business.whatsapp}
//           onChange={handleChange}
//           fullWidth
//           margin="normal"
//         />

//         <Typography variant="h6" gutterBottom>
//           Locations
//         </Typography>
//         {business.locations.map((location, index) => (
//           <div key={index} style={{ marginBottom: '1rem' }}>
//             <TextField
//               name="name"
//               label="Location Name"
//               value={location.name}
//               onChange={(e) => handleLocationChange(index, e)}
//               fullWidth
//               margin="normal"
//               required
//             />
//             <TextField
//               name="description"
//               label="Location Description"
//               value={location.description}
//               onChange={(e) => handleLocationChange(index, e)}
//               fullWidth
//               margin="normal"
//             />
//             <TextField
//               name="phone"
//               label="Phone"
//               value={location.phone}
//               onChange={(e) => handleLocationChange(index, e)}
//               fullWidth
//               margin="normal"
//             />
//             <TextField
//               name="email"
//               label="Email"
//               value={location.email}
//               onChange={(e) => handleLocationChange(index, e)}
//               fullWidth
//               margin="normal"
//             />
//             <TextField
//               name="latitude"
//               label="Latitude"
//               value={location.latitude}
//               onChange={(e) => handleLocationChange(index, e)}
//               fullWidth
//               margin="normal"
//             />
//             <TextField
//               name="longitude"
//               label="Longitude"
//               value={location.longitude}
//               onChange={(e) => handleLocationChange(index, e)}
//               fullWidth
//               margin="normal"
//             />

//             <TextField
//               name="monday"
//               label="Monday Hours"
//               value={location.monday}
//               onChange={(e) => handleLocationChange(index, e)}
//               fullWidth
//               margin="normal"
//             />
//             <TextField
//               name="tuesday"
//               label="Tuesday Hours"
//               value={location.tuesday}
//               onChange={(e) => handleLocationChange(index, e)}
//               fullWidth
//               margin="normal"
//             />
//             <TextField
//               name="wednesday"
//               label="Wednesday Hours"
//               value={location.wednesday}
//               onChange={(e) => handleLocationChange(index, e)}
//               fullWidth
//               margin="normal"
//             />
//             <TextField
//               name="thursday"
//               label="Thursday Hours"
//               value={location.thursday}
//               onChange={(e) => handleLocationChange(index, e)}
//               fullWidth
//               margin="normal"
//             />
//             <TextField
//               name="friday"
//               label="Friday Hours"
//               value={location.friday}
//               onChange={(e) => handleLocationChange(index, e)}
//               fullWidth
//               margin="normal"
//             />
//             <TextField
//               name="saturday"
//               label="Saturday Hours"
//               value={location.saturday}
//               onChange={(e) => handleLocationChange(index, e)}
//               fullWidth
//               margin="normal"
//             />
//             <TextField
//               name="sunday"
//               label="Sunday Hours"
//               value={location.sunday}
//               onChange={(e) => handleLocationChange(index, e)}
//               fullWidth
//               margin="normal"
//             />
//             <TextField
//               name="season"
//               label="Seasons (comma separated)"
//               value={location.season.join(', ')}
//               onChange={(e) =>
//                 handleLocationChange(index, {
//                   target: {
//                     name: 'season',
//                     value: e.target.value.split(',').map((s) => s.trim()),
//                   },
//                 })
//               }
//               fullWidth
//               margin="normal"
//             />
//             <TextField
//               name="street"
//               label="Street"
//               value={location.street}
//               onChange={(e) => handleLocationChange(index, e)}
//               fullWidth
//               margin="normal"
//             />
//             <TextField
//               name="city"
//               label="City"
//               value={location.city}
//               onChange={(e) => handleLocationChange(index, e)}
//               fullWidth
//               margin="normal"
//             />
//             <TextField
//               name="state"
//               label="State"
//               value={location.state}
//               onChange={(e) => handleLocationChange(index, e)}
//               fullWidth
//               margin="normal"
//             />
//             <TextField
//               name="zipCode"
//               label="Zip Code"
//               value={location.zipCode}
//               onChange={(e) => handleLocationChange(index, e)}
//               fullWidth
//               margin="normal"
//             />
//             <TextField
//               name="country"
//               label="Country"
//               value={location.country}
//               onChange={(e) => handleLocationChange(index, e)}
//               fullWidth
//               margin="normal"
//             />
//             <IconButton color="secondary" onClick={() => removeLocation(index)}>
//               <RemoveCircleOutlineIcon />
//             </IconButton>
//           </div>
//         ))}
//         <Button type="button" onClick={addLocation}>
//           Add Location
//         </Button>
//         <Button type="submit" variant="contained" color="primary">
//           Submit
//         </Button>
//       </form>
//     </Container>
//   );
// };

// export default CreateBusinessPage;
import React, { useState, useEffect, useContext } from 'react';
import {
  TextField,
  Button,
  MenuItem,
  Select,
  FormControl,
  InputLabel,
  IconButton,
  Container,
  Grid,
  Box,
  Typography,
} from '@mui/material';
import axios from 'axios';
import { BASE_URL } from '../middleware/config';
import { AuthContext } from '../middleware/AuthContext';
import { useTranslation } from 'react-i18next';
import RemoveCircleOutlineIcon from '@mui/icons-material/RemoveCircleOutline';

const CreateBusinessPage = () => {
  const { t } = useTranslation();
  const { user } = useContext(AuthContext);

  const [formState, setFormState] = useState({
    name: '',
    category: '',
    description: '',
    image: null,
    tags: [],
    website: '',
    facebook: '',
    instagram: '',
    linkedin: '',
    youtube: '',
    tiktok: '',
    x: '',
    pinterest: '',
    whatsapp: '',
    servicesOffered: [],
    locations: [],
    userId: user.id,
  });

  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(true);
  const [imagePreview, setImagePreview] = useState(null);
  const [formErrors, setFormErrors] = useState({});

  useEffect(() => {
    // Fetch categories from service-categories endpoint
    const fetchCategories = async () => {
      try {
        const response = await axios.get(`${BASE_URL}/service-categories`);
        setCategories(response.data);
      } catch (error) {
        console.error('Error fetching categories:', error);
      } finally {
        setLoading(false);
      }
    };
    fetchCategories();
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormState((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleLocationChange = (index, e) => {
    const { name, value } = e.target;
    const updatedLocations = [...formState.locations];
    updatedLocations[index] = { ...updatedLocations[index], [name]: value };
    setFormState((prev) => ({
      ...prev,
      locations: updatedLocations,
    }));
  };

  const addLocation = () => {
    setFormState((prev) => ({
      ...prev,
      locations: [
        ...prev.locations,
        {
          name: '',
          description: '',
          phone: '',
          email: '',
          latitude: '',
          longitude: '',
          monday: '',
          tuesday: '',
          wednesday: '',
          thursday: '',
          friday: '',
          saturday: '',
          sunday: '',
          season: [],
          street: '',
          city: '',
          state: '',
          zipCode: '',
          country: '',
        },
      ],
    }));
  };

  const removeLocation = (index) => {
    const updatedLocations = formState.locations.filter((_, i) => i !== index);
    setFormState((prev) => ({
      ...prev,
      locations: updatedLocations,
    }));
  };

  const resizeAndCropImage = (file, callback) => {
    const reader = new FileReader();
    reader.onload = function (event) {
      const img = new Image();
      img.onload = function () {
        const canvas = document.createElement('canvas');
        const ctx = canvas.getContext('2d');

        // Set target dimensions for the canvas
        const targetAspectRatio = 4 / 3;
        const targetWidth = 800;
        const targetHeight = targetWidth / targetAspectRatio;

        // Calculate the source dimensions
        let srcX = 0,
          srcY = 0,
          srcWidth = img.width,
          srcHeight = img.height;

        if (img.width / img.height > targetAspectRatio) {
          // Source is wider than target aspect ratio
          srcWidth = img.height * targetAspectRatio;
          srcX = (img.width - srcWidth) / 2;
        } else {
          // Source is taller than target aspect ratio
          srcHeight = img.width / targetAspectRatio;
          srcY = (img.height - srcHeight) / 2;
        }

        // Set canvas dimensions
        canvas.width = targetWidth;
        canvas.height = targetHeight;

        // Draw image on canvas with cropping
        ctx.drawImage(img, srcX, srcY, srcWidth, srcHeight, 0, 0, targetWidth, targetHeight);

        // Convert canvas to Blob
        canvas.toBlob(
          (blob) => {
            callback(blob);
          },
          'image/jpeg',
          0.7,
        ); // Adjust quality as needed
      };
      img.src = event.target.result;
    };
    reader.readAsDataURL(file);
  };

  const handleImageUpload = (file) => {
    resizeAndCropImage(file, (resizedImage) => {
      setFormState((prevState) => ({
        ...prevState,
        image: resizedImage,
      }));
      const previewUrl = URL.createObjectURL(resizedImage);
      setImagePreview(previewUrl);
    });
  };

  // Cleanup image URL when component unmounts
  useEffect(() => {
    return () => {
      if (imagePreview) {
        URL.revokeObjectURL(imagePreview);
      }
    };
  }, [imagePreview]);

  // const handleSubmit = async (e) => {
  //   e.preventDefault();
  //   const token = localStorage.getItem('token'); // Retrieve JWT token

  //   try {
  //     await axios.post(
  //       `${BASE_URL}/businesses/${user.id}/businesses`,
  //       { ...formState, userId: user.id },
  //       {
  //         headers: { Authorization: `Bearer ${token}` },
  //       },
  //     );
  //     alert('Business created successfully!');
  //   } catch (error) {
  //     console.error('Error creating business:', error);
  //   }
  // };
  // const handleSubmit = async (e) => {
  //   e.preventDefault();
  //   const token = localStorage.getItem('token');

  //   try {
  //     const formData = new FormData();
  //     Object.keys(formState).forEach((key) => {
  //       if (key === 'image' && formState[key]) {
  //         formData.append(key, formState[key]);
  //       } else if (key === 'locations') {
  //         formState[key].forEach((item, index) => {
  //           Object.keys(item).forEach((nestedKey) => {
  //             formData.append(`locations[${index}][${nestedKey}]`, item[nestedKey]);
  //           });
  //         });
  //       } else if (Array.isArray(formState[key])) {
  //         formState[key].forEach((item) => {
  //           formData.append(`${key}[]`, item);
  //         });
  //       } else {
  //         formData.append(key, formState[key]);
  //       }
  //     });

  //     const objectFromFormData = {};
  //     formData.forEach((value, key) => {
  //       objectFromFormData[key] = value;
  //     });
  //     console.log('aaaa', objectFromFormData.image);

  //     console.log('FormData:', formData); // Log FormData before making the request
  //     // console.log(JSON.stringify(objectFromFormData));

  //     const response = await axios.post(`${BASE_URL}/businesses/${user.id}/businesses`, formData, {
  //       headers: {
  //         'Content-Type': 'multipart/form-data',
  //         Authorization: `Bearer ${token}`,
  //       },
  //     });
  //     alert('Business created successfully!');
  //   } catch (error) {
  //     console.error('Error creating business:', error.response);
  //     if (
  //       error.response &&
  //       error.response.data &&
  //       error.response.data.errors &&
  //       Array.isArray(error.response.data.errors)
  //     ) {
  //       const receivedErrors = error.response.data.errors;
  //       const newFormErrors = {};
  //       receivedErrors.forEach((error) => {
  //         newFormErrors[error.path] = error.msg;
  //       });
  //       setFormErrors(newFormErrors);
  //     } else {
  //       console.error('Failed to send business details to the backend:', error);
  //     }
  //   }
  // };
  const handleSubmit = async (e) => {
    e.preventDefault();
    const token = localStorage.getItem('token');

    try {
      const formData = new FormData();
      Object.keys(formState).forEach((key) => {
        if (key === 'image' && formState[key]) {
          formData.append(key, formState[key]);
        } else if (key === 'locations') {
          formState[key].forEach((item, index) => {
            Object.keys(item).forEach((nestedKey) => {
              formData.append(`locations[${index}][${nestedKey}]`, item[nestedKey]);
            });
          });
        } else if (Array.isArray(formState[key])) {
          formState[key].forEach((item) => {
            formData.append(`${key}[]`, item);
          });
        } else {
          formData.append(key, formState[key]);
        }
      });

      const response = await axios.post(`${BASE_URL}/businesses/${user.id}/businesses`, formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
          Authorization: `Bearer ${token}`,
        },
      });
      alert('Business created successfully!');
    } catch (error) {
      console.error('Error creating business:', error.response);

      if (error.response && error.response.data) {
        // Log detailed error response
        console.error('Error details:', error.response.data);

        if (error.response.data.errors && Array.isArray(error.response.data.errors)) {
          const receivedErrors = error.response.data.errors;
          const newFormErrors = {};
          receivedErrors.forEach((error) => {
            newFormErrors[error.path] = error.msg;
          });
          setFormErrors(newFormErrors);
        } else {
          console.error('Failed to send business details to the backend:', error.response.data);
        }
      } else {
        console.error('Failed to send business details to the backend:', error);
      }
    }
  };
  if (loading) {
    return <Typography>Loading...</Typography>;
  }

  return (
    <Container>
      <Typography variant="h4" gutterBottom>
        Create Business
      </Typography>
      <form onSubmit={handleSubmit}>
        <Grid item xs={12}>
          <Typography variant="body1" style={{ fontWeight: '500' }} gutterBottom textAlign="left">
            {t('formTitles.uploadFile')}
          </Typography>
          <input
            accept="image/*"
            id="image"
            type="file"
            onChange={(e) => handleImageUpload(e.target.files[0])}
            style={{ display: 'none' }}
          />
          <label htmlFor="image">
            <Button
              variant="contained"
              color="primary"
              component="span"
              fullWidth
              style={{ marginTop: '20px' }}
            >
              Upload Image
            </Button>
          </label>
          {imagePreview && (
            <Box mb={2} style={{ width: '100%', marginTop: '20px' }}>
              <img src={imagePreview} alt="Preview" style={{ width: '100%', height: 'auto' }} />
            </Box>
          )}
        </Grid>
        <TextField
          name="name"
          label="Business Name"
          value={formState.name}
          onChange={handleChange}
          fullWidth
          margin="normal"
          required
        />
        <FormControl fullWidth margin="normal">
          <InputLabel>Category</InputLabel>
          <Select name="category" value={formState.category} onChange={handleChange} required>
            {categories.map((category) => (
              <MenuItem key={category.id} value={category._id}>
                {category.name.en}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
        <TextField
          name="description"
          label="Description"
          value={formState.description}
          onChange={handleChange}
          fullWidth
          margin="normal"
          multiline
        />

        <TextField
          name="tags"
          label="Tags (comma separated)"
          value={formState.tags.join(', ')}
          onChange={(e) =>
            setFormState((prev) => ({
              ...prev,
              tags: e.target.value.split(',').map((tag) => tag.trim()),
            }))
          }
          fullWidth
          margin="normal"
        />
        <TextField
          name="website"
          label="Website"
          value={formState.website}
          onChange={handleChange}
          fullWidth
          margin="normal"
        />
        <TextField
          name="facebook"
          label="Facebook"
          value={formState.facebook}
          onChange={handleChange}
          fullWidth
          margin="normal"
        />
        <TextField
          name="instagram"
          label="Instagram"
          value={formState.instagram}
          onChange={handleChange}
          fullWidth
          margin="normal"
        />
        <TextField
          name="linkedin"
          label="LinkedIn"
          value={formState.linkedin}
          onChange={handleChange}
          fullWidth
          margin="normal"
        />
        <TextField
          name="youtube"
          label="YouTube"
          value={formState.youtube}
          onChange={handleChange}
          fullWidth
          margin="normal"
        />
        <TextField
          name="tiktok"
          label="TikTok"
          value={formState.tiktok}
          onChange={handleChange}
          fullWidth
          margin="normal"
        />
        <TextField
          name="x"
          label="X (Twitter)"
          value={formState.x}
          onChange={handleChange}
          fullWidth
          margin="normal"
        />
        <TextField
          name="pinterest"
          label="Pinterest"
          value={formState.pinterest}
          onChange={handleChange}
          fullWidth
          margin="normal"
        />
        <TextField
          name="whatsapp"
          label="WhatsApp Number"
          value={formState.whatsapp}
          onChange={handleChange}
          fullWidth
          margin="normal"
        />

        <Typography variant="h6" gutterBottom>
          Locations
        </Typography>
        {formState.locations.map((location, index) => (
          <div key={index} style={{ marginBottom: '1rem' }}>
            <TextField
              name="name"
              label="Location Name"
              value={location.name}
              onChange={(e) => handleLocationChange(index, e)}
              fullWidth
              margin="normal"
              required
            />
            <TextField
              name="description"
              label="Location Description"
              value={location.description}
              onChange={(e) => handleLocationChange(index, e)}
              fullWidth
              margin="normal"
            />
            <TextField
              name="phone"
              label="Phone"
              value={location.phone}
              onChange={(e) => handleLocationChange(index, e)}
              fullWidth
              margin="normal"
            />
            <TextField
              name="email"
              label="Email"
              value={location.email}
              onChange={(e) => handleLocationChange(index, e)}
              fullWidth
              margin="normal"
            />
            <TextField
              name="latitude"
              label="Latitude"
              value={location.latitude}
              onChange={(e) => handleLocationChange(index, e)}
              fullWidth
              margin="normal"
            />
            <TextField
              name="longitude"
              label="Longitude"
              value={location.longitude}
              onChange={(e) => handleLocationChange(index, e)}
              fullWidth
              margin="normal"
            />

            <TextField
              name="monday"
              label="Monday Hours"
              value={location.monday}
              onChange={(e) => handleLocationChange(index, e)}
              fullWidth
              margin="normal"
            />
            <TextField
              name="tuesday"
              label="Tuesday Hours"
              value={location.tuesday}
              onChange={(e) => handleLocationChange(index, e)}
              fullWidth
              margin="normal"
            />
            <TextField
              name="wednesday"
              label="Wednesday Hours"
              value={location.wednesday}
              onChange={(e) => handleLocationChange(index, e)}
              fullWidth
              margin="normal"
            />
            <TextField
              name="thursday"
              label="Thursday Hours"
              value={location.thursday}
              onChange={(e) => handleLocationChange(index, e)}
              fullWidth
              margin="normal"
            />
            <TextField
              name="friday"
              label="Friday Hours"
              value={location.friday}
              onChange={(e) => handleLocationChange(index, e)}
              fullWidth
              margin="normal"
            />
            <TextField
              name="saturday"
              label="Saturday Hours"
              value={location.saturday}
              onChange={(e) => handleLocationChange(index, e)}
              fullWidth
              margin="normal"
            />
            <TextField
              name="sunday"
              label="Sunday Hours"
              value={location.sunday}
              onChange={(e) => handleLocationChange(index, e)}
              fullWidth
              margin="normal"
            />
            <TextField
              name="season"
              label="Seasons (comma separated)"
              value={location.season.join(', ')}
              onChange={(e) =>
                handleLocationChange(index, {
                  target: {
                    name: 'season',
                    value: e.target.value.split(',').map((s) => s.trim()),
                  },
                })
              }
              fullWidth
              margin="normal"
            />
            <TextField
              name="street"
              label="Street"
              value={location.street}
              onChange={(e) => handleLocationChange(index, e)}
              fullWidth
              margin="normal"
            />
            <TextField
              name="city"
              label="City"
              value={location.city}
              onChange={(e) => handleLocationChange(index, e)}
              fullWidth
              margin="normal"
            />
            <TextField
              name="state"
              label="State"
              value={location.state}
              onChange={(e) => handleLocationChange(index, e)}
              fullWidth
              margin="normal"
            />
            <TextField
              name="zipCode"
              label="Zip Code"
              value={location.zipCode}
              onChange={(e) => handleLocationChange(index, e)}
              fullWidth
              margin="normal"
            />
            <TextField
              name="country"
              label="Country"
              value={location.country}
              onChange={(e) => handleLocationChange(index, e)}
              fullWidth
              margin="normal"
            />
            <IconButton color="secondary" onClick={() => removeLocation(index)}>
              <RemoveCircleOutlineIcon />
            </IconButton>
          </div>
        ))}
        <Button type="button" onClick={addLocation}>
          Add Location
        </Button>
        <Button type="submit" variant="contained" color="primary">
          Submit
        </Button>
      </form>
    </Container>
  );
};

export default CreateBusinessPage;
