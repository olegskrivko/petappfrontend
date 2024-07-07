// import React, { useState } from 'react';
// import { Container, Typography, Box, Button, Grid } from '@mui/material';
// import jsPDF from 'jspdf';
// import html2PDF from 'html2pdf.js';

// import MessageIcon from '@mui/icons-material/Message';
// import LocalHospitalIcon from '@mui/icons-material/LocalHospital';
// import { BASE_URL, DOMAIN_URL } from '../middleware/config';
// // import { QRCode } from "react-qr-svg"; // Import QRCode component
// import QRCode from 'react-qr-code'; // Updated import statement
// import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
// import SupportImg from '../images/dog_paw_bro.svg';
// import {
//   Pets as PetsIcon,
//   Category as CategoryIcon,
//   Tag as TagIcon,
//   Height as HeightIcon,
//   Male as MaleIcon,
//   Female as FemaleIcon,
//   Mood as MoodIcon,
//   CalendarToday as CalendarTodayIcon,
//   WatchLater as WatchLaterIcon,
//   Phone as PhoneIcon,
//   Email as EmailIcon,
//   Notes as NotesIcon,
//   ColorLens as ColorLensIcon,
//   MergeType as MergeTypeIcon,
//   EventNote as EventNoteIcon,
//   MoreVert as MoreVertIcon,
//   Visibility as VisibilityIcon,
//   FavoriteBorder as FavoriteBorderIcon,
//   Print as PrintIcon,
// } from '@mui/icons-material';
// import {
//   Card,
//   CardContent,
//   CardMedia,
//   CircularProgress,
//   Icon,
//   Chip,
//   CardHeader,
//   CardActions,
//   Avatar,
//   IconButton,
//   List,
//   ListItem,
//   ListItemIcon,
//   ListItemText,
// } from '@mui/material';
// import EventIcon from '@mui/icons-material/Event';
// import TextureIcon from '@mui/icons-material/Texture';
// import CakeIcon from '@mui/icons-material/Cake';
// import FeedIcon from '@mui/icons-material/Feed';
// import useMediaQuery from '@mui/material/useMediaQuery';
// import { useTheme } from '@mui/material/styles';

// import { LanguageContext } from '../middleware/LanguageContext';
// import { useTranslation } from 'react-i18next';

// const Poster = ({ pet }) => {
//   const theme = useTheme();
//   const isLargeScreen = useMediaQuery(theme.breakpoints.up('lg'));
//   const isSmallScreen = useMediaQuery(theme.breakpoints.down('sm'));
//   const { t } = useTranslation();
//   const [isGenerating, setIsGenerating] = useState(false);
//   const [isReady, setIsReady] = useState(false);

//   const getInitialStatusLabel = (value) => {
//     const options = t('selectOptions.initialStatusOptions', { returnObjects: true });
//     const option = options.find((option) => option.value === value);
//     return option ? option.label : '';
//   };

//   const getCategoryLabel = (value) => {
//     const options = t('selectOptions.categoryOptions', { returnObjects: true });
//     const option = options.find((option) => option.value === value);
//     return option ? option.label : '';
//   };

//   // const [mapLoaded, setMapLoaded] = useState(false);
//   // const handleMapLoad = () => {
//   //   setMapLoaded(true);
//   // };
//   // const generatePDF = () => {

//   //   // if (!mapLoaded) {
//   //   //   // If the map hasn't finished loading, wait for it to finish
//   //   //   return;
//   //   // }
//   //   const page = document.getElementById("page"); // Get the DOM element you want to convert
//   //   const options = {
//   //     jsPDF: {
//   //       format: "a4",
//   //     },
//   //     imageType: "image/jpeg",
//   //     output: "./pdf/generate.pdf",
//   //     html2canvas: {
//   //       useCORS: true, // Use CORS to capture images from external sources
//   //       scale: 2, // Increase scale to improve quality
//   //     },
//   //   };

//   //   html2PDF(page, options);
//   // };
//   // const generatePDF = () => {
//   //   setIsGenerating(true);
//   //   setTimeout(() => {
//   //     const page = document.getElementById("page");
//   //     const options = {
//   //       jsPDF: {
//   //         format: "a4",
//   //       },
//   //       imageType: "image/jpeg",
//   //       output: "./pdf/generate.pdf",
//   //       html2canvas: {
//   //         useCORS: true,
//   //         scale: 2, // Increase the scale for better quality
//   //       },
//   //     };

//   //     html2PDF()
//   //       .from(page)
//   //       .set(options)
//   //       .save()
//   //       .then(() => {
//   //         setIsGenerating(false);
//   //         setIsReady(true);
//   //       });
//   //   }, 3000);
//   // };
//   const generatePDF = async () => {
//     try {
//       setIsGenerating(true);

//       // Wait for the DOM to fully load
//       await new Promise((resolve) => setTimeout(resolve, 100));

//       const page = document.getElementById('page');
//       const options = {
//         jsPDF: {
//           format: 'a4',
//         },
//         imageType: 'image/jpeg',
//         output: './pdf/generate.pdf',
//         html2canvas: {
//           useCORS: true,
//           scale: 2, // Increase the scale for better quality
//         },
//       };

//       await html2PDF().from(page).set(options).save();

//       setIsGenerating(false);
//       setIsReady(true);
//     } catch (error) {
//       console.error('Error generating PDF:', error);
//       setIsGenerating(false);
//     }
//   };

//   return (
//     <Box>
//       <Box
//         id="page"
//         sx={{
//           padding: 4,
//           border: '1px solid #ccc',
//           borderRadius: '8px',
//           boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.1)',
//           backgroundColor: '#fff',
//         }}
//       >
//         <Box
//           style={{
//             background: 'darkred',
//             padding: '1rem 0',
//             marginBottom: '1rem',
//           }}
//         >
//           <Typography
//             variant="h1"
//             textAlign="center"
//             style={{
//               textTransform: 'uppercase',
//               fontWeight: '700',
//               color: '#fff',
//               fontSize: '3rem',
//             }}
//           >
//             {getInitialStatusLabel(pet.initialStatus)} {getCategoryLabel(pet.category)}
//           </Typography>
//           <Typography
//             variant="h6"
//             textAlign="center"
//             style={{
//               color: '#fff',
//               textTransform: 'uppercase',
//               letterSpacing: '1px',
//               fontSize: '1rem',
//             }}
//           >
//             Have you seen this {getCategoryLabel(pet.category)}?
//           </Typography>
//         </Box>
//         <Grid container spacing={3}>
//           <Grid item xs={5} sm={5} md={5} lg={5}>
//             <Grid item xs={12} sm={12} mb={2}>
//               <Box
//                 gap={1}
//                 style={{
//                   display: 'flex',
//                   justifyContent: 'start',
//                   alignItems: 'center',
//                 }}
//               >
//                 <TagIcon /> <b>Name or ID:</b>{' '}
//                 <span style={{ textTransform: 'capitalize' }}>
//                   {pet.identifier ? pet.identifier : 'N/A'}
//                 </span>
//               </Box>
//             </Grid>
//             <Grid item xs={12} sm={12} mb={2}>
//               <Box
//                 gap={1}
//                 style={{
//                   display: 'flex',
//                   justifyContent: 'start',
//                   alignItems: 'center',
//                 }}
//               >
//                 <MaleIcon /> <b>Gender:</b>{' '}
//                 <span style={{ textTransform: 'capitalize' }}>
//                   {pet.gender ? pet.gender : 'N/A'}
//                 </span>
//               </Box>
//             </Grid>
//             <Grid item xs={12} sm={12} mb={2}>
//               <Box
//                 gap={1}
//                 style={{
//                   display: 'flex',
//                   justifyContent: 'start',
//                   alignItems: 'center',
//                 }}
//               >
//                 <HeightIcon /> <b>Size:</b>{' '}
//                 <span style={{ textTransform: 'capitalize' }}>{pet.size ? pet.size : 'N/A'}</span>
//               </Box>
//             </Grid>
//             <Grid item xs={12} sm={12} mb={2}>
//               <Box
//                 gap={1}
//                 style={{
//                   display: 'flex',
//                   justifyContent: 'start',
//                   alignItems: 'center',
//                 }}
//               >
//                 <MoodIcon /> <b>Behavior:</b>{' '}
//                 <span style={{ textTransform: 'capitalize' }}>
//                   {pet.behavior ? pet.behavior : 'N/A'}
//                 </span>
//               </Box>
//             </Grid>
//             <Grid item xs={12} sm={12} mb={2}>
//               <Box
//                 gap={1}
//                 style={{
//                   display: 'flex',
//                   justifyContent: 'start',
//                   alignItems: 'center',
//                 }}
//               >
//                 <CakeIcon /> <b>Age:</b>{' '}
//                 <span style={{ textTransform: 'capitalize' }}>{pet.age ? pet.age : 'N/A'}</span>
//               </Box>
//             </Grid>
//             <Grid item xs={12} sm={12} mb={2}>
//               <Box
//                 gap={1}
//                 style={{
//                   display: 'flex',
//                   justifyContent: 'start',
//                   alignItems: 'center',
//                 }}
//               >
//                 <MergeTypeIcon /> <b>Breed:</b>{' '}
//                 <span style={{ textTransform: 'capitalize' }}>{pet.breed ? pet.breed : 'N/A'}</span>
//               </Box>
//             </Grid>
//             <Grid item xs={12} sm={12} mb={2}>
//               <Box
//                 gap={1}
//                 style={{
//                   display: 'flex',
//                   justifyContent: 'start',
//                   alignItems: 'center',
//                 }}
//               >
//                 <ColorLensIcon /> <b>Main Color:</b>{' '}
//                 <span style={{ textTransform: 'capitalize' }}>
//                   {pet.mainColor ? pet.mainColor : 'N/A'}
//                 </span>
//               </Box>
//             </Grid>
//             <Grid item xs={12} sm={12} mb={2}>
//               <Box
//                 gap={1}
//                 style={{
//                   display: 'flex',
//                   justifyContent: 'start',
//                   alignItems: 'center',
//                 }}
//               >
//                 <TextureIcon /> <b>Marking Pattern:</b>{' '}
//                 <span style={{ textTransform: 'capitalize' }}>
//                   {pet.markingPattern ? pet.markingPattern : 'N/A'}
//                 </span>
//               </Box>
//             </Grid>
//             <Grid item xs={12} sm={12} mb={2}>
//               <Box
//                 gap={1}
//                 style={{
//                   display: 'flex',
//                   justifyContent: 'start',
//                   alignItems: 'center',
//                 }}
//               >
//                 <ColorLensIcon /> <b>Marking Colors:</b>{' '}
//                 <span style={{ textTransform: 'capitalize' }}>
//                   {pet.markingColors.join(', ') ? pet.markingColors.join(', ') : 'N/A'}
//                 </span>
//               </Box>
//             </Grid>
//             <Grid item xs={12} sm={12} mb={2}>
//               <Box
//                 gap={1}
//                 style={{
//                   display: 'flex',
//                   justifyContent: 'start',
//                   alignItems: 'center',
//                 }}
//               >
//                 <EventIcon />{' '}
//                 <span style={{ textTransform: 'capitalize' }}>
//                   <b>{pet.initialStatus}</b>
//                 </span>
//                 <b>Date:</b> {pet.date}
//               </Box>
//             </Grid>
//             <Grid item xs={12} sm={12} mb={2}>
//               <Box
//                 gap={1}
//                 style={{
//                   display: 'flex',
//                   justifyContent: 'start',
//                   alignItems: 'center',
//                 }}
//               >
//                 <WatchLaterIcon />
//                 <span style={{ textTransform: 'capitalize' }}>
//                   <b>{pet.initialStatus}</b>
//                 </span>
//                 <b>Time:</b> {pet.time}
//               </Box>
//             </Grid>
//           </Grid>
//           <Grid item xs={7} sm={7} md={7} lg={7}>
//             <Grid item xs={12} sm={12}>
//               {/* <Grid item xs={12}> */}
//               {pet.mainImage && (
//                 <Grid
//                   item
//                   xs={12}
//                   style={{
//                     display: 'flex',
//                     justifyContent: 'center',
//                     // marginBottom: "1rem",
//                   }}
//                 >
//                   {/* <img
//                 src={pet.mainImage}
//                 alt={pet.name}
//                 style={{ maxWidth: "100%", height: "auto", marginTop: "20px" }}
//               /> */}
//                   <img
//                     src={pet.mainImage}
//                     alt={pet.name}
//                     style={{
//                       maxWidth: '100%',
//                       height: 'auto',
//                       // marginTop: "20px",
//                     }}
//                   />
//                 </Grid>
//               )}
//             </Grid>
//           </Grid>
//         </Grid>
//         <Grid container spacing={3}>
//           <Grid item xs={12} mb={1}>
//             <Box>
//               <Box display="flex" alignItems="center" mb={1}>
//                 <FeedIcon />
//                 <Typography variant="h6" ml={1} style={{ fontSize: '1rem' }} fontWeight="bold">
//                   Additional Information:
//                 </Typography>
//               </Box>

//               <Typography variant="body2">
//                 {pet.notes ? pet.notes : 'No additional information given.'}
//               </Typography>
//             </Box>
//           </Grid>
//         </Grid>

//         <Box style={{ background: 'darkred', padding: '1rem 0' }}>
//           <Typography
//             variant="h6"
//             textAlign="center"
//             style={{
//               textTransform: 'uppercase',
//               fontWeight: '700',
//               color: '#fff',
//             }}
//           >
//             If you have any information please contact
//           </Typography>
//           <Typography
//             variant="h6"
//             textAlign="center"
//             style={{
//               color: '#fff',
//               textTransform: 'uppercase',
//               letterSpacing: '1px',
//             }}
//           >
//             {pet.phoneCode} {pet.phone}
//           </Typography>
//         </Box>
//         <Box
//           id="page"
//           // sx={{
//           //   padding: 4,
//           //   border: "1px solid #ccc",
//           //   borderRadius: "8px",
//           //   boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.1)",
//           //   backgroundColor: "#fff",
//           // }}
//         >
//           {/* Your existing poster content */}
//           {/* QR code section */}
//           <Box
//             style={{
//               display: 'flex',
//               flexDirection: 'row',
//               justifyContent: 'center',
//               alignItems: 'center',
//               marginBottom: '1rem',
//             }}
//           >
//             <Box
//               display="flex"
//               justifyContent="center"
//               alignItems="center"
//               flexDirection="column"
//               style={{
//                 marginRight: '1rem',
//               }}
//               mt={2}
//             >
//               {/* <Typography variant="h5" gutterBottom>
//                 Scan to view details and follow up on the pet
//               </Typography> */}
//               {/* Generate QR code with pet ID or any relevant information */}
//               <QRCode
//                 value={`${DOMAIN_URL}/pets/${pet._id}`} // Change URL to your endpoint or pet details page
//                 style={{ width: 200, height: 200 }}
//               />
//             </Box>
//             <Box
//               style={{
//                 display: 'flex',
//                 flexDirection: 'column',
//                 justifyContent: 'center',
//                 alignItems: 'start',
//                 marginLeft: '1rem',
//               }}
//             >
//               <Typography variant="body1" textAlign="start" sx={{ mt: 1, fontWeight: 'bold' }}>
//                 1. Open camera on your smartphone
//               </Typography>
//               <Typography variant="body1" textAlign="start" sx={{ mt: 1, fontWeight: 'bold' }}>
//                 2. Point the camera at the QR code
//               </Typography>
//               <Typography variant="body1" textAlign="start" sx={{ mt: 1, fontWeight: 'bold' }}>
//                 3. Click on the link that appears
//               </Typography>
//               <Typography variant="body1" textAlign="start" sx={{ mt: 1, fontWeight: 'bold' }}>
//                 4. Follow up on the pet
//               </Typography>
//               <Typography variant="body1" textAlign="start" sx={{ mt: 1, fontWeight: 'bold' }}>
//                 5. Share the link with others
//               </Typography>
//               <Typography variant="body1" textAlign="start" sx={{ mt: 1, fontWeight: 'bold' }}>
//                 6. Help reunite the pet with its owner and save a life
//               </Typography>
//             </Box>
//           </Box>
//         </Box>
//         <Box style={{ background: 'darkred', padding: '1rem 0' }}>
//           <Typography
//             variant="body1"
//             textAlign="center"
//             style={{ color: '#fff', fontWeight: 'bold' }}
//             gutterBottom
//           >
//             Scan to view map, details and track updates on the pet's status.
//           </Typography>
//           {/* <Typography
//             variant="body1"
//             textAlign="center"
//             style={{ mt: 2, color: "#fff" }}
//           >
//             Poster generated by www.pawclix.com
//           </Typography> */}
//         </Box>
//         <Typography variant="caption" textAlign="center" sx={{ mt: 1 }}>
//           Poster generated by PawClix
//         </Typography>
//       </Box>

//       {/* {isGenerating && (
//         <Box mt={4} textAlign="center">
//           <CircularProgress />
//           <Typography variant="caption" mt={2}>
//             Generating PDF...
//           </Typography>
//         </Box>
//       )}

//       {isReady && (
//         <Box mt={4} textAlign="center">
//           <Button
//             variant="contained"
//             color="primary"
//             onClick={generatePDF}
//             startIcon={<ArrowDownwardIcon />}
//           >
//             Download PDF
//           </Button>
//         </Box>
//       )}

//       {!isGenerating && !isReady && (
//         <Box mt={4} textAlign="center">
//           <Button variant="contained" color="primary" onClick={generatePDF}>
//             Generate Poster
//           </Button>
//         </Box>
//       )} */}
//       <Button variant="contained" color="primary" onClick={generatePDF} sx={{ marginTop: 4 }}>
//         Download PDF
//       </Button>
//     </Box>
//   );
// };

// export default Poster;

import React, { useState } from 'react';
import { Box, Button, Typography, CircularProgress } from '@mui/material';
import html2PDF from 'html2pdf.js';
import DisplayComponent from './DisplayComponent';
import PDFGenerationComponent from './PDFGenerationComponent';

const Poster = ({ pet }) => {
  const [isGenerating, setIsGenerating] = useState(false);

  const generatePDF = async () => {
    try {
      setIsGenerating(true);

      // Wait for the DOM to fully load
      await new Promise((resolve) => setTimeout(resolve, 100));

      const page = document.getElementById('page');
      const options = {
        jsPDF: {
          format: 'a4',
        },
        imageType: 'image/jpeg',
        output: './pdf/generate.pdf',
        html2canvas: {
          useCORS: true,
          scale: 2, // Adjust scale as needed for your layout
        },
      };

      // Generate PDF using PDFGenerationComponent
      await html2PDF().from(page).set(options).save();

      setIsGenerating(false);
    } catch (error) {
      console.error('Error generating PDF:', error);
      setIsGenerating(false);
    }
  };

  return (
    <Box>
      {/* Display Component for screen view */}
      <Box id="display-component">
        <DisplayComponent pet={pet} />
      </Box>

      {/* PDFGenerationComponent for generating PDF */}
      <Box id="pdf-generation-component" style={{ display: 'none' }}>
        <PDFGenerationComponent pet={pet} />
      </Box>

      {/* Button to trigger PDF generation */}
      <Box mt={4} textAlign="center">
        {isGenerating ? (
          <Box>
            <CircularProgress />
            <Typography variant="caption" mt={2}>
              Generating PDF...
            </Typography>
          </Box>
        ) : (
          <Button
            variant="contained"
            color="primary"
            onClick={() => {
              setIsGenerating(true);
              // Show PDFGenerationComponent before generating PDF
              document.getElementById('display-component').style.display = 'none';
              document.getElementById('pdf-generation-component').style.display = 'block';
              generatePDF();
            }}
          >
            Generate PDF
          </Button>
        )}
      </Box>
    </Box>
  );
};

export default Poster;
