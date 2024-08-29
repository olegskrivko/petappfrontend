// import React, { useState } from 'react';
// import axios from 'axios';
// import { BASE_URL } from '../../middleware/config';
// function ServicesForm() {
//   // State to hold form data
//   const [name, setName] = useState({ en: '', lv: '', ru: '' });
//   const [tags, setTags] = useState({ en: [], lv: [], ru: [] });
//   const [image, setImage] = useState('');

//   // Handle form submission
//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     const serviceData = {
//       name,
//       tags,
//       image,
//     };

//     try {
//       // Send data to the backend
//       const response = await axios.post(`${BASE_URL}/services`, serviceData);
//       console.log('Service added successfully:', response.data);

//       // Clear form fields
//       setName({ en: '', lv: '', ru: '' });
//       setTags({ en: [], lv: [], ru: [] });
//       setImage('');
//     } catch (error) {
//       console.error('Error adding service:', error.response.data);
//     }
//   };

//   // Handle input changes
//   const handleNameChange = (e, lang) => {
//     setName({ ...name, [lang]: e.target.value });
//   };

//   const handleTagsChange = (e, lang) => {
//     setTags({ ...tags, [lang]: e.target.value.split(',') });
//   };

//   return (
//     <div>
//       <h2>Add New Service</h2>
//       <form onSubmit={handleSubmit}>
//         <div>
//           <label>Service Name (English):</label>
//           <input type="text" value={name.en} onChange={(e) => handleNameChange(e, 'en')} required />
//         </div>
//         <div>
//           <label>Service Name (Latvian):</label>
//           <input type="text" value={name.lv} onChange={(e) => handleNameChange(e, 'lv')} required />
//         </div>
//         <div>
//           <label>Service Name (Russian):</label>
//           <input type="text" value={name.ru} onChange={(e) => handleNameChange(e, 'ru')} required />
//         </div>

//         <div>
//           <label>Tags (English, comma separated):</label>
//           <input
//             type="text"
//             value={tags.en.join(',')}
//             onChange={(e) => handleTagsChange(e, 'en')}
//           />
//         </div>
//         <div>
//           <label>Tags (Latvian, comma separated):</label>
//           <input
//             type="text"
//             value={tags.lv.join(',')}
//             onChange={(e) => handleTagsChange(e, 'lv')}
//           />
//         </div>
//         <div>
//           <label>Tags (Russian, comma separated):</label>
//           <input
//             type="text"
//             value={tags.ru.join(',')}
//             onChange={(e) => handleTagsChange(e, 'ru')}
//           />
//         </div>

//         <div>
//           <label>Image URL:</label>
//           <input type="text" value={image} onChange={(e) => setImage(e.target.value)} required />
//         </div>

//         <button type="submit">Add Service</button>
//       </form>
//     </div>
//   );
// }

// export default ServicesForm;
// import React, { useState } from 'react';
// import axios from 'axios';
// import { BASE_URL } from '../../middleware/config';

// function ServicesForm() {
//   // State to hold form data
//   const [name, setName] = useState({ en: '', lv: '', ru: '' });
//   const [tags, setTags] = useState({ en: [], lv: [], ru: [] });
//   const [image, setImage] = useState(null);
//   const [imagePreview, setImagePreview] = useState(null);

//   // Utility function to resize and crop image
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
//           srcWidth = img.height * targetAspectRatio;
//           srcX = (img.width - srcWidth) / 2;
//         } else {
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
//         );
//       };
//       img.src = event.target.result;
//     };
//     reader.readAsDataURL(file);
//   };

//   // Handle image upload
//   const handleImageUpload = (file) => {
//     resizeAndCropImage(file, (resizedImage) => {
//       setImage(resizedImage);
//       const previewUrl = URL.createObjectURL(resizedImage);
//       setImagePreview(previewUrl);
//     });
//   };

//   // Handle form submission
//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     const formData = new FormData();
//     formData.append('name[en]', name.en);
//     formData.append('name[lv]', name.lv);
//     formData.append('name[ru]', name.ru);
//     formData.append('tags[en]', tags.en);
//     formData.append('tags[lv]', tags.lv);
//     formData.append('tags[ru]', tags.ru);
//     if (image) {
//       formData.append('image', image); // Append the image file
//     }

//     try {
//       // Send data to the backend
//       const response = await axios.post(`${BASE_URL}/services`, formData, {
//         headers: {
//           'Content-Type': 'multipart/form-data',
//         },
//       });
//       console.log('Service added successfully:', response.data);

//       // Clear form fields
//       setName({ en: '', lv: '', ru: '' });
//       setTags({ en: [], lv: [], ru: [] });
//       setImage(null);
//       setImagePreview(null);
//     } catch (error) {
//       console.error('Error adding service:', error.response.data);
//     }
//   };

//   // Handle input changes
//   const handleNameChange = (e, lang) => {
//     setName({ ...name, [lang]: e.target.value });
//   };

//   const handleTagsChange = (e, lang) => {
//     setTags({ ...tags, [lang]: e.target.value.split(',') });
//   };

//   return (
//     <div>
//       <h2>Add New Service</h2>
//       <form onSubmit={handleSubmit}>
//         <div>
//           <label>Service Name (English):</label>
//           <input type="text" value={name.en} onChange={(e) => handleNameChange(e, 'en')} required />
//         </div>
//         <div>
//           <label>Service Name (Latvian):</label>
//           <input type="text" value={name.lv} onChange={(e) => handleNameChange(e, 'lv')} required />
//         </div>
//         <div>
//           <label>Service Name (Russian):</label>
//           <input type="text" value={name.ru} onChange={(e) => handleNameChange(e, 'ru')} required />
//         </div>

//         <div>
//           <label>Tags (English, comma separated):</label>
//           <input
//             type="text"
//             value={tags.en.join(',')}
//             onChange={(e) => handleTagsChange(e, 'en')}
//           />
//         </div>
//         <div>
//           <label>Tags (Latvian, comma separated):</label>
//           <input
//             type="text"
//             value={tags.lv.join(',')}
//             onChange={(e) => handleTagsChange(e, 'lv')}
//           />
//         </div>
//         <div>
//           <label>Tags (Russian, comma separated):</label>
//           <input
//             type="text"
//             value={tags.ru.join(',')}
//             onChange={(e) => handleTagsChange(e, 'ru')}
//           />
//         </div>

//         <div>
//           <label>Image:</label>
//           <input
//             type="file"
//             onChange={(e) => handleImageUpload(e.target.files[0])}
//             required
//             accept="image/*"
//           />
//           {imagePreview && (
//             <img src={imagePreview} alt="Preview" style={{ width: '200px', marginTop: '10px' }} />
//           )}
//         </div>

//         <button type="submit">Add Service</button>
//       </form>
//     </div>
//   );
// }

// export default ServicesForm;
// import React, { useState } from 'react';
// import axios from 'axios';
// import { BASE_URL } from '../../middleware/config';

// function ServicesForm() {
//   // State to hold form data
//   const [name, setName] = useState({ en: '', lv: '', ru: '' });
//   const [tags, setTags] = useState({ en: [], lv: [], ru: [] });
//   const [image, setImage] = useState(null);
//   const [imagePreview, setImagePreview] = useState(null);

//   // Handle SVG upload
//   const handleImageUpload = (file) => {
//     if (file && file.type === 'image/svg+xml') {
//       setImage(file);
//       const previewUrl = URL.createObjectURL(file);
//       setImagePreview(previewUrl);
//     } else {
//       console.error('Only SVG images are allowed');
//     }
//   };

//   // Handle form submission
//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     const formData = new FormData();
//     formData.append('name[en]', name.en);
//     formData.append('name[lv]', name.lv);
//     formData.append('name[ru]', name.ru);
//     formData.append('tags[en]', tags.en);
//     formData.append('tags[lv]', tags.lv);
//     formData.append('tags[ru]', tags.ru);
//     if (image) {
//       formData.append('image', image); // Append the SVG image file directly
//     }

//     try {
//       // Send data to the backend
//       const response = await axios.post(`${BASE_URL}/services`, formData, {
//         headers: {
//           'Content-Type': 'multipart/form-data',
//         },
//       });
//       console.log('Service added successfully:', response.data);

//       // Clear form fields
//       setName({ en: '', lv: '', ru: '' });
//       setTags({ en: [], lv: [], ru: [] });
//       setImage(null);
//       setImagePreview(null);
//     } catch (error) {
//       console.error('Error adding service:', error.response.data);
//     }
//   };

//   // Handle input changes
//   const handleNameChange = (e, lang) => {
//     setName({ ...name, [lang]: e.target.value });
//   };

//   const handleTagsChange = (e, lang) => {
//     setTags({ ...tags, [lang]: e.target.value.split(',') });
//   };

//   return (
//     <div>
//       <h2>Add New Service</h2>
//       <form onSubmit={handleSubmit}>
//         <div>
//           <label>Service Name (English):</label>
//           <input type="text" value={name.en} onChange={(e) => handleNameChange(e, 'en')} required />
//         </div>
//         <div>
//           <label>Service Name (Latvian):</label>
//           <input type="text" value={name.lv} onChange={(e) => handleNameChange(e, 'lv')} required />
//         </div>
//         <div>
//           <label>Service Name (Russian):</label>
//           <input type="text" value={name.ru} onChange={(e) => handleNameChange(e, 'ru')} required />
//         </div>

//         <div>
//           <label>Tags (English, comma separated):</label>
//           <input
//             type="text"
//             value={tags.en.join(',')}
//             onChange={(e) => handleTagsChange(e, 'en')}
//           />
//         </div>
//         <div>
//           <label>Tags (Latvian, comma separated):</label>
//           <input
//             type="text"
//             value={tags.lv.join(',')}
//             onChange={(e) => handleTagsChange(e, 'lv')}
//           />
//         </div>
//         <div>
//           <label>Tags (Russian, comma separated):</label>
//           <input
//             type="text"
//             value={tags.ru.join(',')}
//             onChange={(e) => handleTagsChange(e, 'ru')}
//           />
//         </div>

//         <div>
//           <label>Image:</label>
//           <input
//             type="file"
//             onChange={(e) => handleImageUpload(e.target.files[0])}
//             required
//             accept="image/svg+xml"
//           />
//           {imagePreview && (
//             <img src={imagePreview} alt="Preview" style={{ width: '200px', marginTop: '10px' }} />
//           )}
//         </div>

//         <button type="submit">Add Service</button>
//       </form>
//     </div>
//   );
// }

// export default ServicesForm;
// import React, { useState } from 'react';
// import axios from 'axios';
// import { BASE_URL } from '../../middleware/config';

// function ServicesForm() {
//   // State to hold form data
//   const [name, setName] = useState({ en: '', lv: '', ru: '' });
//   const [tags, setTags] = useState({ en: [], lv: [], ru: [] });
//   const [image, setImage] = useState(null);
//   const [imagePreview, setImagePreview] = useState(null);
//   const [isActive, setIsActive] = useState(true);
//   const [priority, setPriority] = useState(0);

//   // Handle SVG upload
//   const handleImageUpload = (file) => {
//     if (file && file.type === 'image/svg+xml') {
//       setImage(file);
//       const previewUrl = URL.createObjectURL(file);
//       setImagePreview(previewUrl);
//     } else {
//       console.error('Only SVG images are allowed');
//     }
//   };

//   // Handle form submission
//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     const formData = new FormData();
//     formData.append('name[en]', name.en);
//     formData.append('name[lv]', name.lv);
//     formData.append('name[ru]', name.ru);
//     formData.append('tags[en]', tags.en);
//     formData.append('tags[lv]', tags.lv);
//     formData.append('tags[ru]', tags.ru);
//     formData.append('isActive', isActive);
//     formData.append('priority', priority);
//     if (image) {
//       formData.append('image', image); // Append the SVG image file directly
//     }

//     try {
//       // Send data to the backend
//       const response = await axios.post(`${BASE_URL}/services`, formData, {
//         headers: {
//           'Content-Type': 'multipart/form-data',
//         },
//       });
//       console.log('Service added successfully:', response.data);

//       // Clear form fields
//       setName({ en: '', lv: '', ru: '' });
//       setTags({ en: [], lv: [], ru: [] });
//       setImage(null);
//       setImagePreview(null);
//       setIsActive(true);
//       setPriority(0);
//     } catch (error) {
//       console.error('Error adding service:', error.response.data);
//     }
//   };

//   // Handle input changes
//   const handleNameChange = (e, lang) => {
//     setName({ ...name, [lang]: e.target.value });
//   };

//   const handleTagsChange = (e, lang) => {
//     setTags({ ...tags, [lang]: e.target.value.split(',') });
//   };

// const handlePriorityChange = (e) => {
//   setPriority(Number(e.target.value));
// };

//   return (
//     <div>
//       <h2>Add New Service</h2>
//       <form onSubmit={handleSubmit}>
//         <div>
//           <label>Service Name (English):</label>
//           <input type="text" value={name.en} onChange={(e) => handleNameChange(e, 'en')} required />
//         </div>
//         <div>
//           <label>Service Name (Latvian):</label>
//           <input type="text" value={name.lv} onChange={(e) => handleNameChange(e, 'lv')} required />
//         </div>
//         <div>
//           <label>Service Name (Russian):</label>
//           <input type="text" value={name.ru} onChange={(e) => handleNameChange(e, 'ru')} required />
//         </div>

//         <div>
//           <label>Tags (English, comma separated):</label>
//           <input
//             type="text"
//             value={tags.en.join(',')}
//             onChange={(e) => handleTagsChange(e, 'en')}
//           />
//         </div>
//         <div>
//           <label>Tags (Latvian, comma separated):</label>
//           <input
//             type="text"
//             value={tags.lv.join(',')}
//             onChange={(e) => handleTagsChange(e, 'lv')}
//           />
//         </div>
//         <div>
//           <label>Tags (Russian, comma separated):</label>
//           <input
//             type="text"
//             value={tags.ru.join(',')}
//             onChange={(e) => handleTagsChange(e, 'ru')}
//           />
//         </div>

//         <div>
//           <label>Is Active:</label>
//           <input
//             type="checkbox"
//             checked={isActive}
//             onChange={(e) => setIsActive(e.target.checked)}
//           />
//         </div>

//         <div>
//           <label>Priority:</label>
//           <input type="number" value={priority} onChange={handlePriorityChange} />
//         </div>

//         <div>
//           <label>Image:</label>
//           <input
//             type="file"
//             onChange={(e) => handleImageUpload(e.target.files[0])}
//             required
//             accept="image/svg+xml"
//           />
//           {imagePreview && (
//             <img src={imagePreview} alt="Preview" style={{ width: '200px', marginTop: '10px' }} />
//           )}
//         </div>

//         <button type="submit">Add Service</button>
//       </form>
//     </div>
//   );
// }

// export default ServicesForm;
import React, { useState } from 'react';
import axios from 'axios';
import { BASE_URL } from '../../middleware/config';
import {
  Container,
  TextField,
  Button,
  Checkbox,
  FormControlLabel,
  Grid,
  Typography,
  Box,
  IconButton,
} from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';

function ServicesForm() {
  const [name, setName] = useState({ en: '', lv: '', ru: '' });
  const [tags, setTags] = useState([{ en: '', lv: '', ru: '' }]);
  const [image, setImage] = useState(null);
  const [imagePreview, setImagePreview] = useState(null);
  const [isActive, setIsActive] = useState(true);
  const [priority, setPriority] = useState(0);

  const handleImageUpload = (file) => {
    if (file && file.type === 'image/svg+xml') {
      setImage(file);
      const previewUrl = URL.createObjectURL(file);
      setImagePreview(previewUrl);
    } else {
      console.error('Only SVG images are allowed');
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append('name[en]', name.en);
    formData.append('name[lv]', name.lv);
    formData.append('name[ru]', name.ru);
    tags.forEach((tag, index) => {
      formData.append(`tags[en][${index}]`, tag.en);
      formData.append(`tags[lv][${index}]`, tag.lv);
      formData.append(`tags[ru][${index}]`, tag.ru);
    });
    formData.append('isActive', isActive);
    formData.append('priority', priority);
    if (image) {
      formData.append('image', image);
    }

    try {
      const response = await axios.post(`${BASE_URL}/services`, formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
      console.log('Service added successfully:', response.data);

      setName({ en: '', lv: '', ru: '' });
      setTags([{ en: '', lv: '', ru: '' }]);
      setImage(null);
      setImagePreview(null);
      setIsActive(true);
      setPriority(0);
    } catch (error) {
      console.error('Error adding service:', error.response.data);
    }
  };

  const handleNameChange = (e, lang) => {
    setName({ ...name, [lang]: e.target.value });
  };

  const handlePriorityChange = (e) => {
    setPriority(Number(e.target.value));
  };

  const handleTagChange = (e, index, lang) => {
    const newTags = [...tags];
    newTags[index][lang] = e.target.value;
    setTags(newTags);
  };

  const handleAddTag = () => {
    setTags([...tags, { en: '', lv: '', ru: '' }]);
  };

  const handleRemoveTag = (index) => {
    const newTags = tags.filter((_, i) => i !== index);
    setTags(newTags);
  };

  return (
    <Container maxWidth="md">
      <Typography variant="h4" gutterBottom>
        Add New Service
      </Typography>
      <form onSubmit={handleSubmit}>
        <Grid container spacing={2}>
          <Grid item xs={12} sm={4}>
            <TextField
              label="Service Name (English)"
              value={name.en}
              onChange={(e) => handleNameChange(e, 'en')}
              fullWidth
              required
            />
          </Grid>
          <Grid item xs={12} sm={4}>
            <TextField
              label="Service Name (Latvian)"
              value={name.lv}
              onChange={(e) => handleNameChange(e, 'lv')}
              fullWidth
              required
            />
          </Grid>
          <Grid item xs={12} sm={4}>
            <TextField
              label="Service Name (Russian)"
              value={name.ru}
              onChange={(e) => handleNameChange(e, 'ru')}
              fullWidth
              required
            />
          </Grid>

          {tags.map((tag, index) => (
            <React.Fragment key={index}>
              <Grid item xs={12} sm={3}>
                <TextField
                  label={`Tag ${index + 1} (English)`}
                  value={tag.en}
                  onChange={(e) => handleTagChange(e, index, 'en')}
                  fullWidth
                  required
                />
              </Grid>
              <Grid item xs={12} sm={3}>
                <TextField
                  label={`Tag ${index + 1} (Latvian)`}
                  value={tag.lv}
                  onChange={(e) => handleTagChange(e, index, 'lv')}
                  fullWidth
                  required
                />
              </Grid>
              <Grid item xs={12} sm={3}>
                <TextField
                  label={`Tag ${index + 1} (Russian)`}
                  value={tag.ru}
                  onChange={(e) => handleTagChange(e, index, 'ru')}
                  fullWidth
                  required
                />
              </Grid>
              <Grid item xs={12} sm={3} display="flex" alignItems="center">
                <IconButton
                  onClick={() => handleRemoveTag(index)}
                  color="error"
                  disabled={tags.length === 1}
                >
                  <RemoveIcon />
                </IconButton>
              </Grid>
            </React.Fragment>
          ))}

          <Grid item xs={12}>
            <Button variant="outlined" color="primary" onClick={handleAddTag} fullWidth>
              <AddIcon /> Add Tag
            </Button>
          </Grid>

          <Grid item xs={12} sm={6}>
            <FormControlLabel
              control={
                <Checkbox
                  checked={isActive}
                  onChange={(e) => setIsActive(e.target.checked)}
                  color="primary"
                />
              }
              label="Is Active"
            />
          </Grid>

          <Grid item xs={12} sm={12}>
            <TextField
              label="Priority"
              type="number"
              value={priority}
              onChange={(e) => handlePriorityChange(e)}
              fullWidth
              required
            />
          </Grid>

          <Grid item xs={12}>
            <Button variant="contained" component="label">
              Upload SVG Image
              <input
                type="file"
                hidden
                accept="image/svg+xml"
                onChange={(e) => handleImageUpload(e.target.files[0])}
                required
              />
            </Button>
            {imagePreview && (
              <Box mt={2}>
                <img
                  src={imagePreview}
                  alt="Preview"
                  style={{ width: '100%', maxWidth: '200px' }}
                />
              </Box>
            )}
          </Grid>

          <Grid item xs={12}>
            <Button variant="contained" color="primary" type="submit" fullWidth>
              Add Service
            </Button>
          </Grid>
        </Grid>
      </form>
    </Container>
  );
}

export default ServicesForm;
