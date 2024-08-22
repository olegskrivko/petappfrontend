// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import { BASE_URL } from '../../middleware/config';
// import { TextField, Button, Grid, Typography } from '@mui/material';

// const SheltersForm = () => {
//   const [shelterData, setShelterData] = useState({
//     name: '',
//     businessForm: '',
//     registrationNumber: '',
//     description: '',
//     isActive: true,
//     website: '',
//     logo: '',
//     address: '',
//     city: '',
//     state: '',
//     country: '',
//     zipCode: '',
//     latitude: '',
//     longitude: '',
//     phone: '',
//     email: '',
//     socialMediaProfiles: [{ platform: '', profileUrl: '', username: '' }],
//     photos: [''],
//     services: [''],
//     tags: [''],
//     totalAnimals: 0,
//     adoptedAnimals: 0,
//   });

//   const [platforms, setPlatforms] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setShelterData({
//       ...shelterData,
//       [name]: value,
//     });
//   };

//   // const handleSubmit = async (e) => {
//   //   e.preventDefault();
//   //   try {
//   //     const response = await axios.post('/api/shelters', shelterData);
//   //     console.log('Shelter data submitted successfully:', response.data);
//   //   } catch (error) {
//   //     console.error('Error submitting shelter data:', error);
//   //   }
//   // };

//   useEffect(() => {
//     const fetchPlatforms = async () => {
//       try {
//         const response = await axios.get(`${BASE_URL}/social-media-platforms`);
//         setPlatforms(response.data);
//       } catch (error) {
//         setError('Failed to load social media platforms');
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchPlatforms();
//   }, []);

//   const handleSocialMediaChange = (index, field, value) => {
//     const updatedProfiles = [...shelterData.socialMediaProfiles];
//     updatedProfiles[index][field] = value;
//     setShelterData({
//       ...shelterData,
//       socialMediaProfiles: updatedProfiles,
//     });
//   };

//   const addSocialMediaProfile = () => {
//     setShelterData({
//       ...shelterData,
//       socialMediaProfiles: [
//         ...shelterData.socialMediaProfiles,
//         { platform: '', profileUrl: '', username: '' },
//       ],
//     });
//   };

//   const handleTagChange = (index, value) => {
//     const updatedTags = [...shelterData.tags];
//     updatedTags[index] = value;
//     setShelterData({
//       ...shelterData,
//       tags: updatedTags,
//     });
//   };

//   const addTag = () => {
//     setShelterData({
//       ...shelterData,
//       tags: [...shelterData.tags, ''], // Add a new empty tag input
//     });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       const response = await axios.post('/api/shelters', shelterData);
//       console.log('Shelter data submitted successfully:', response.data);
//     } catch (error) {
//       console.error('Error submitting shelter data:', error);
//     }
//   };

//   return (
//     <>
//       <Typography variant="h6" gutterBottom>
//         Add New Shelter
//       </Typography>

//       <form onSubmit={handleSubmit}>
//         <Grid container spacing={2}>
//           <Grid item xs={12} md={12}>
//             <div>
//               <label>Name:</label>
//               <input type="text" name="name" value={shelterData.name} onChange={handleChange} />
//             </div>
//           </Grid>
//           <Grid item xs={12} md={12}>
//             <div>
//               <label>Business Form:</label>
//               <input
//                 type="text"
//                 name="businessForm"
//                 value={shelterData.businessForm}
//                 onChange={handleChange}
//               />
//             </div>
//           </Grid>
//           <Grid item xs={12} md={12}>
//             <div>
//               <label>Registration Number:</label>
//               <input
//                 type="number"
//                 name="registrationNumber"
//                 value={shelterData.registrationNumber}
//                 onChange={handleChange}
//               />
//             </div>
//           </Grid>
//           <Grid item xs={12} md={12}>
//             <div>
//               <label>Description:</label>
//               <textarea
//                 name="description"
//                 value={shelterData.description}
//                 onChange={handleChange}
//               />
//             </div>
//           </Grid>
//           <Grid item xs={12} md={12}>
//             <div>
//               <label>Website Name:</label>
//               <input
//                 type="text"
//                 name="website"
//                 value={shelterData.website}
//                 onChange={handleChange}
//               />
//             </div>
//           </Grid>
//           <Grid item xs={12} md={12}>
//             <div>
//               <label>Logo:</label>
//               <input type="text" name="logo" value={shelterData.logo} onChange={handleChange} />
//             </div>
//           </Grid>
//           <Grid item xs={12} md={12}>
//             <div>
//               <label>Address:</label>
//               <input
//                 type="text"
//                 name="address"
//                 value={shelterData.address}
//                 onChange={handleChange}
//               />
//             </div>
//           </Grid>
//           <Grid item xs={12} md={12}>
//             <div>
//               <label>City:</label>
//               <input type="text" name="city" value={shelterData.city} onChange={handleChange} />
//             </div>
//           </Grid>
//           <Grid item xs={12} md={12}>
//             <div>
//               <label>State:</label>
//               <input type="text" name="state" value={shelterData.state} onChange={handleChange} />
//             </div>
//           </Grid>
//           <Grid item xs={12} md={12}>
//             <div>
//               <label>Country:</label>
//               <input
//                 type="text"
//                 name="country"
//                 value={shelterData.country}
//                 onChange={handleChange}
//               />
//             </div>
//           </Grid>
//           <Grid item xs={12} md={12}>
//             <div>
//               <label>ZIP Code:</label>
//               <input
//                 type="text"
//                 name="zipCode"
//                 value={shelterData.zipCode}
//                 onChange={handleChange}
//               />
//             </div>
//           </Grid>
//           <Grid item xs={12} md={6}>
//             <div>
//               <label>Latitude:</label>
//               <input
//                 type="number"
//                 name="latitude"
//                 value={shelterData.latitude}
//                 onChange={handleChange}
//               />
//             </div>
//           </Grid>
//           <Grid item xs={12} md={6}>
//             <div>
//               <label>Longitude:</label>
//               <input
//                 type="number"
//                 name="longitude"
//                 value={shelterData.longitude}
//                 onChange={handleChange}
//               />
//             </div>
//           </Grid>
//           <Grid item xs={12} md={12}>
//             <div>
//               <label>Phone:</label>
//               <input type="text" name="phone" value={shelterData.phone} onChange={handleChange} />
//             </div>
//           </Grid>
//           <Grid item xs={12} md={12}>
//             <div>
//               <label>Email:</label>
//               <input type="email" name="email" value={shelterData.email} onChange={handleChange} />
//             </div>
//           </Grid>
//           {/* Social Media Profiles */}
//           <div>
//             <h3>Social Media Profiles</h3>
//             {shelterData.socialMediaProfiles.map((profile, index) => (
//               <div key={index}>
//                 <label>Platform:</label>
//                 <select
//                   name={`platform-${index}`}
//                   value={profile.platform}
//                   onChange={(e) => handleSocialMediaChange(index, 'platform', e.target.value)}
//                 >
//                   <option value="">Select Platform</option>
//                   {platforms.map((platform) => (
//                     <option key={platform._id} value={platform._id}>
//                       {platform.name}
//                     </option>
//                   ))}
//                 </select>

//                 <label>Profile URL:</label>
//                 <input
//                   type="text"
//                   name={`profileUrl-${index}`}
//                   value={profile.profileUrl}
//                   onChange={(e) => handleSocialMediaChange(index, 'profileUrl', e.target.value)}
//                 />

//                 <label>Username:</label>
//                 <input
//                   type="text"
//                   name={`username-${index}`}
//                   value={profile.username}
//                   onChange={(e) => handleSocialMediaChange(index, 'username', e.target.value)}
//                 />
//               </div>
//             ))}

//             <button type="button" onClick={addSocialMediaProfile}>
//               Add Another Social Media Profile
//             </button>
//           </div>
//           {/* Tags */}
//           <div>
//             <h3>Tags</h3>
//             {shelterData.tags.map((tag, index) => (
//               <div key={index}>
//                 <label>Tag {index + 1}:</label>
//                 <input
//                   type="text"
//                   value={tag}
//                   onChange={(e) => handleTagChange(index, e.target.value)}
//                 />
//               </div>
//             ))}
//             <button type="button" onClick={addTag}>
//               Add Another Tag
//             </button>
//           </div>
//           <button type="submit">Submit Shelter Data</button>
//         </Grid>
//       </form>
//     </>
//   );
// };

// export default SheltersForm;
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { BASE_URL } from '../../middleware/config';
import { TextField, Button, Grid, Select, MenuItem, Typography, Box } from '@mui/material';

const SheltersForm = () => {
  const [shelterData, setShelterData] = useState({
    name: '',
    businessForm: '',
    registrationNumber: '',
    description: '',
    isActive: true,
    website: '',
    logo: '',
    address: '',
    city: '',
    state: '',
    country: '',
    zipCode: '',
    latitude: '',
    longitude: '',
    phone: '',
    email: '',
    socialMediaProfiles: [{ platform: '', profileUrl: '', username: '' }],
    photos: [''],
    services: [''],
    tags: [''], // Initialize tags as an empty array
    totalAnimals: 0,
    adoptedAnimals: 0,
  });

  const [platforms, setPlatforms] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchPlatforms = async () => {
      try {
        const response = await axios.get(`${BASE_URL}/social-media-platforms`);
        setPlatforms(response.data);
      } catch (error) {
        setError('Failed to load social media platforms');
      } finally {
        setLoading(false);
      }
    };

    fetchPlatforms();
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setShelterData({
      ...shelterData,
      [name]: value,
    });
  };

  const handleSocialMediaChange = (index, field, value) => {
    const updatedProfiles = [...shelterData.socialMediaProfiles];
    updatedProfiles[index][field] = value;
    setShelterData({
      ...shelterData,
      socialMediaProfiles: updatedProfiles,
    });
  };

  const handleTagChange = (index, value) => {
    const updatedTags = [...shelterData.tags];
    updatedTags[index] = value;
    setShelterData({
      ...shelterData,
      tags: updatedTags,
    });
  };

  const addSocialMediaProfile = () => {
    setShelterData({
      ...shelterData,
      socialMediaProfiles: [
        ...shelterData.socialMediaProfiles,
        { platform: '', profileUrl: '', username: '' },
      ],
    });
  };

  const addTag = () => {
    setShelterData({
      ...shelterData,
      tags: [...shelterData.tags, ''], // Add a new empty tag input
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('/api/shelters', shelterData);
      console.log('Shelter data submitted successfully:', response.data);
    } catch (error) {
      console.error('Error submitting shelter data:', error);
    }
  };

  return (
    <Box sx={{ padding: '2rem' }}>
      <Typography variant="h4" gutterBottom>
        Shelter Information Form
      </Typography>
      <form onSubmit={handleSubmit}>
        <Grid container spacing={2}>
          <Grid item xs={12} sm={6}>
            <TextField
              fullWidth
              label="Shelter Name"
              name="name"
              value={shelterData.name}
              onChange={handleChange}
              variant="outlined"
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              fullWidth
              label="Business Form"
              name="businessForm"
              value={shelterData.businessForm}
              onChange={handleChange}
              variant="outlined"
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              fullWidth
              label="Registration Number"
              type="number"
              name="registrationNumber"
              value={shelterData.registrationNumber}
              onChange={handleChange}
              variant="outlined"
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              fullWidth
              label="Website URL"
              name="website"
              value={shelterData.website}
              onChange={handleChange}
              variant="outlined"
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              fullWidth
              label="Description"
              name="description"
              value={shelterData.description}
              onChange={handleChange}
              variant="outlined"
              multiline
              rows={4}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              fullWidth
              label="Logo URL"
              name="logo"
              value={shelterData.logo}
              onChange={handleChange}
              variant="outlined"
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              fullWidth
              label="Address"
              name="address"
              value={shelterData.address}
              onChange={handleChange}
              variant="outlined"
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              fullWidth
              label="City"
              name="city"
              value={shelterData.city}
              onChange={handleChange}
              variant="outlined"
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              fullWidth
              label="State"
              name="state"
              value={shelterData.state}
              onChange={handleChange}
              variant="outlined"
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              fullWidth
              label="Country"
              name="country"
              value={shelterData.country}
              onChange={handleChange}
              variant="outlined"
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              fullWidth
              label="ZIP Code"
              name="zipCode"
              value={shelterData.zipCode}
              onChange={handleChange}
              variant="outlined"
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              fullWidth
              label="Latitude"
              type="number"
              name="latitude"
              value={shelterData.latitude}
              onChange={handleChange}
              variant="outlined"
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              fullWidth
              label="Longitude"
              type="number"
              name="longitude"
              value={shelterData.longitude}
              onChange={handleChange}
              variant="outlined"
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              fullWidth
              label="Phone"
              name="phone"
              value={shelterData.phone}
              onChange={handleChange}
              variant="outlined"
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              fullWidth
              label="Email"
              type="email"
              name="email"
              value={shelterData.email}
              onChange={handleChange}
              variant="outlined"
            />
          </Grid>

          {/* Social Media Profiles */}
          <Grid item xs={12}>
            <Typography variant="h6" gutterBottom>
              Social Media Profiles
            </Typography>
            {shelterData.socialMediaProfiles.map((profile, index) => (
              <Grid container spacing={2} key={index}>
                <Grid item xs={12} sm={4}>
                  <Select
                    fullWidth
                    value={profile.platform}
                    onChange={(e) => handleSocialMediaChange(index, 'platform', e.target.value)}
                    displayEmpty
                  >
                    <MenuItem value="">
                      <em>Select Platform</em>
                    </MenuItem>
                    {platforms.map((platform) => (
                      <MenuItem key={platform._id} value={platform._id}>
                        {platform.name}
                      </MenuItem>
                    ))}
                  </Select>
                </Grid>
                <Grid item xs={12} sm={4}>
                  <TextField
                    fullWidth
                    label="Profile URL"
                    name={`profileUrl-${index}`}
                    value={profile.profileUrl}
                    onChange={(e) => handleSocialMediaChange(index, 'profileUrl', e.target.value)}
                    variant="outlined"
                  />
                </Grid>
                <Grid item xs={12} sm={4}>
                  <TextField
                    fullWidth
                    label="Username"
                    name={`username-${index}`}
                    value={profile.username}
                    onChange={(e) => handleSocialMediaChange(index, 'username', e.target.value)}
                    variant="outlined"
                  />
                </Grid>
              </Grid>
            ))}
            <Button
              variant="contained"
              color="primary"
              onClick={addSocialMediaProfile}
              sx={{ mt: 2 }}
            >
              Add Another Social Media Profile
            </Button>
          </Grid>

          {/* Tags */}
          <Grid item xs={12}>
            <Typography variant="h6" gutterBottom>
              Tags
            </Typography>
            {shelterData.tags.map((tag, index) => (
              <Grid container spacing={2} key={index}>
                <Grid item xs={12} sm={6}>
                  <TextField
                    fullWidth
                    label={`Tag ${index + 1}`}
                    value={tag}
                    onChange={(e) => handleTagChange(index, e.target.value)}
                    variant="outlined"
                  />
                </Grid>
              </Grid>
            ))}
            <Button variant="contained" color="primary" onClick={addTag} sx={{ mt: 2 }}>
              Add Another Tag
            </Button>
          </Grid>

          {/* Submit button */}
          <Grid item xs={12}>
            <Button type="submit" variant="contained" color="primary" fullWidth sx={{ mt: 4 }}>
              Submit Shelter Data
            </Button>
          </Grid>
        </Grid>
      </form>
    </Box>
  );
};

export default SheltersForm;
