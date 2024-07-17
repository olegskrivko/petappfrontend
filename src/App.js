// import React from 'react';
// import { BrowserRouter, Routes, Route } from 'react-router-dom';
// import { AuthProvider } from './middleware/AuthContext';
// import { LanguageProvider } from './middleware/LanguageContext';
// import { DrawerProvider } from './context/DrawerContext';

// import HomePage from './pages/HomePage';
// import AboutPage from './pages/AboutPage';
// import ContactPage from './pages/ContactPage';
// import PetsListPage from './pages/PetsListPage';
// import PetsDetailsPage from './pages/PetsDetailsPage';
// import Layout from './pages/Layout';
// import FeedbackPage from './pages/FeedbackPage';
// import SupportPage from './pages/SupportPage';
// import PrivacyPolicyPage from './pages/PrivacyPolicyPage';
// import TermsOfServicePage from './pages/TermsOfServicePage';
// import CookiePolicyPage from './pages/CookiePolicyPage';
// import DataProtectionPolicyPage from './pages/DataProtectionPolicyPage';
// import DisclaimerPage from './pages/DisclaimerPage';
// import CommunityGuidelinesPage from './pages/CommunityGuidelinesPage';
// import NotFoundPage from './pages/NotFoundPage';
// import CreatePetPage from './pages/CreatePetPage';
// import DashboardPage from './pages/DashboardPage';
// import Login from './pages/Login';
// import Register from './pages/Register';
// import PrivateRoute from './pages/PrivateRoute';
// import ArticlePage from './pages/ArticleDetailsPage';
// import ArticleDetailsPage from './pages/ArticleDetailsPage';
// import SponsorshipsAndPartnershipsPage from './pages/SponsorshipsAndPartnershipsPage';
// import ProfilePage from './pages/ProfilePage';
// import ProfilePetsPage from './pages/ProfilePetsPage';
// import ProfileSettingsPage from './pages/ProfileSettingsPage';
// import ProfileServicesPage from './pages/ProfileServicesPage';
// import ProfilePostsPage from './pages/ProfilePostsPage';
// import PetsPosterPage from './pages/PetsPosterPage';
// import CreateArticleForm from './pages/CreateArticleForm';
// import ArticlesListPage from './pages/ArticlesListPage';
// import ServicesListPage from './pages/ServicesListPage';
// import EditPetPage from './pages/EditPetPage';
// import SheltersListPage from './pages/SheltersListPage';
// import CreateShelterForm from './pages/CreateShelterForm';
// import ShelterDetailsPage from './pages/ShelterDetailsPage';
// import VirtualPetTrainingClasses from './pages/VirtualPetTrainingClasses';
// import PetInfrastructurePage from './pages/PetInfrastructurePage';
// // import SponsorshipsPage from "./pages/SponsorshipsPage";
// import './i18n'; // Import the i18n configuration

// function App() {
//   return (
//     <AuthProvider>
//       <LanguageProvider>
//         <DrawerProvider>
//           <BrowserRouter>
//             <Routes>
//               <Route path="/" element={<Layout />}>
//                 <Route index element={<HomePage />} />
//                 <Route path="about" element={<AboutPage />} />
//                 <Route path="pets" element={<PetsListPage />} />
//                 <Route path="pets/:id" element={<PetsDetailsPage />} />
//                 <Route path="pets/:id/poster" element={<PetsPosterPage />} />
//                 <Route path="edit-pet/:petId" element={<EditPetPage />} />
//                 <Route path="articles" element={<ArticlesListPage />} />
//                 <Route path="articles/:slug" element={<ArticleDetailsPage />} />
//                 <Route path="shelters" element={<SheltersListPage />} />
//                 <Route path="shelters/:slug" element={<ShelterDetailsPage />} />
//                 <Route
//                   path="virtual-pet-training-classes"
//                   element={<VirtualPetTrainingClasses />}
//                 />
//                 <Route path="pet-infrastructure" element={<PetInfrastructurePage />} />
//                 <Route path="contact" element={<ContactPage />} />

//                 {/* <Route
//                   path="contact"
//                   element={
//                     <PrivateRoute>
//                       <ContactPage />
//                     </PrivateRoute>
//                   }
//                 /> */}
//                 <Route path="feedback" element={<FeedbackPage />} />
//                 <Route path="support" element={<SupportPage />} />
//                 <Route path="create-shelter" element={<CreateShelterForm />} />

//                 <Route path="admin/dashboard" element={<DashboardPage />} />
//                 <Route path="privacy-policy" element={<PrivacyPolicyPage />} />
//                 <Route path="terms-of-service" element={<TermsOfServicePage />} />
//                 <Route path="cookie-policy" element={<CookiePolicyPage />} />
//                 <Route path="data-protection-policy" element={<DataProtectionPolicyPage />} />
//                 <Route path="disclaimer" element={<DisclaimerPage />} />
//                 <Route path="community-guidelines" element={<CommunityGuidelinesPage />} />
//                 <Route path="sponsors-and-partners" element={<SponsorshipsAndPartnershipsPage />} />
//                 {/* <Route path="sponsorships" element={<SponsorshipsPage />} /> */}

//                 <Route path="article" element={<ArticleDetailsPage />} />
//                 {/* <Route path="add-pet" element={<CreatePetPage />} /> */}
//                 {/* <Route
//                   path="add-pet"
//                   element={
//                     <PrivateRoute>
//                       <CreatePetPage />
//                     </PrivateRoute>
//                   }
//                 /> */}
//                 <Route path="create-article" element={<CreateArticleForm />} />

//                 <Route path="add-pet" element={<PrivateRoute element={<CreatePetPage />} />} />
//                 {/* <Route path="user/profile" element={<ProfilePage />} />
//                 <Route path="user/profile/posts" element={<ProfilePostsPage />} />
//                 <Route path="user/profile/settings" element={<ProfileSettingsPage />} /> */}

//                 <Route path="user/profile" element={<ProfilePage />} />
//                 <Route path="user/profile/posts" element={<ProfilePostsPage />} />
//                 <Route path="user/profile/settings" element={<ProfileSettingsPage />} />

//                 <Route path="user/profile/services" element={<ProfileServicesPage />} />

//                 <Route path="user/profile/pets" element={<ProfilePetsPage />} />

//                 <Route path="services" element={<ServicesListPage />} />

//                 <Route path="/login" element={<Login />} />
//                 <Route path="/register" element={<Register />} />
//                 <Route path="*" element={<NotFoundPage />} />
//               </Route>
//             </Routes>
//           </BrowserRouter>
//         </DrawerProvider>
//       </LanguageProvider>
//     </AuthProvider>
//   );
// }

// export default App;
import React, { Suspense, lazy, useEffect, useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Button, TextField, Box, Typography, Grid } from '@mui/material';
import { AuthProvider } from './middleware/AuthContext';
import { LanguageProvider } from './middleware/LanguageContext';
import { DrawerProvider } from './context/DrawerContext';
import LoadingScreen from './components/LoadingScreen';
//import { initOneSignal } from './OneSignalSetup'; // Ensure this path is correct
import OneSignal from 'react-onesignal';
import './i18n'; // Import the i18n configuration

// Lazy-loaded components
const HomePage = lazy(() => import('./pages/HomePage'));
const AboutPage = lazy(() => import('./pages/AboutPage'));
const ContactPage = lazy(() => import('./pages/ContactPage'));
const PetsListPage = lazy(() => import('./pages/PetsListPage'));
const PetsDetailsPage = lazy(() => import('./pages/PetsDetailsPage'));
const Layout = lazy(() => import('./pages/Layout'));
const FeedbackPage = lazy(() => import('./pages/FeedbackPage'));
const SupportPage = lazy(() => import('./pages/SupportPage'));
const PrivacyPolicyPage = lazy(() => import('./pages/PrivacyPolicyPage'));
const TermsOfServicePage = lazy(() => import('./pages/TermsOfServicePage'));
const CookiePolicyPage = lazy(() => import('./pages/CookiePolicyPage'));
const DataProtectionPolicyPage = lazy(() => import('./pages/DataProtectionPolicyPage'));
const DisclaimerPage = lazy(() => import('./pages/DisclaimerPage'));
const CommunityGuidelinesPage = lazy(() => import('./pages/CommunityGuidelinesPage'));
const NotFoundPage = lazy(() => import('./pages/NotFoundPage'));
const CreatePetPage = lazy(() => import('./pages/CreatePetPage'));
const DashboardPage = lazy(() => import('./pages/DashboardPage'));
const Login = lazy(() => import('./pages/Login'));
const Register = lazy(() => import('./pages/Register'));
const PrivateRoute = lazy(() => import('./pages/PrivateRoute'));
const ArticlePage = lazy(() => import('./pages/ArticleDetailsPage'));
const ArticleDetailsPage = lazy(() => import('./pages/ArticleDetailsPage'));
const SponsorshipsAndPartnershipsPage = lazy(() =>
  import('./pages/SponsorshipsAndPartnershipsPage'),
);
const ProfilePage = lazy(() => import('./pages/ProfilePage'));
const ProfilePetsPage = lazy(() => import('./pages/ProfilePetsPage'));
const ProfileSettingsPage = lazy(() => import('./pages/ProfileSettingsPage'));
const ProfileServicesPage = lazy(() => import('./pages/ProfileServicesPage'));
const ProfilePostsPage = lazy(() => import('./pages/ProfilePostsPage'));
const PetsPosterPage = lazy(() => import('./pages/PetsPosterPage'));
const CreateArticleForm = lazy(() => import('./pages/CreateArticleForm'));
const ArticlesListPage = lazy(() => import('./pages/ArticlesListPage'));
const ServicesListPage = lazy(() => import('./pages/ServicesListPage'));
const EditPetPage = lazy(() => import('./pages/EditPetPage'));
const SheltersListPage = lazy(() => import('./pages/SheltersListPage'));
const CreateShelterForm = lazy(() => import('./pages/CreateShelterForm'));
const ShelterDetailsPage = lazy(() => import('./pages/ShelterDetailsPage'));
const VirtualPetTrainingClasses = lazy(() => import('./pages/VirtualPetTrainingClasses'));
const PetInfrastructurePage = lazy(() => import('./pages/PetInfrastructurePage'));

const App = () => {
  // const [location, setLocation] = useState({
  //   latitude: localStorage.getItem('latitude') || '',
  //   longitude: localStorage.getItem('longitude') || '',
  // });
  // const [distance, setDistance] = useState(localStorage.getItem('distance') || '');

  // // Function to initialize OneSignal
  // const initOneSignal = async () => {
  //   await OneSignal.init({
  //     appId: '07831676-ef12-409c-895e-3352642c136d',
  //   });

  //   console.log('OneSignal initialized');
  //   OneSignal.Slidedown.promptPush(); // Show subscription prompt after initialization
  // };

  // const getLocation = () => {
  //   if (navigator.geolocation) {
  //     navigator.geolocation.getCurrentPosition(
  //       (position) => {
  //         const { latitude, longitude } = position.coords;
  //         setLocation({
  //           latitude: latitude.toString(),
  //           longitude: longitude.toString(),
  //         });
  //         localStorage.setItem('latitude', latitude.toString());
  //         localStorage.setItem('longitude', longitude.toString());
  //       },
  //       (error) => {
  //         console.error('Error getting geolocation: ', error);
  //       },
  //     );
  //   } else {
  //     console.error('Geolocation is not supported by this browser.');
  //   }
  // };

  // const addLocationTags = () => {
  //   OneSignal.User.addTags({ ...location, distance });
  //   console.log('Tags added successfully');
  // };

  // const handleChange = (e) => {
  //   const { name, value } = e.target;
  //   setLocation((prevLocation) => ({
  //     ...prevLocation,
  //     [name]: value,
  //   }));
  //   localStorage.setItem(name, value);
  // };

  // const handleDistanceChange = (e) => {
  //   setDistance(e.target.value);
  //   localStorage.setItem('distance', e.target.value);
  // };

  // useEffect(() => {
  //   // Retrieve location from localStorage on component mount
  //   const storedLatitude = localStorage.getItem('latitude');
  //   const storedLongitude = localStorage.getItem('longitude');
  //   const storedDistance = localStorage.getItem('distance');

  //   if (storedLatitude && storedLongitude) {
  //     setLocation({
  //       latitude: storedLatitude,
  //       longitude: storedLongitude,
  //     });
  //   }

  //   if (storedDistance) {
  //     setDistance(storedDistance);
  //   }
  // }, []);

  return (
    <AuthProvider>
      <LanguageProvider>
        <DrawerProvider>
          <BrowserRouter>
            <Suspense fallback={<LoadingScreen />}>
              <Routes>
                {/* <Route index element={<HomePage />} /> */}
                <Route path="/" element={<Layout />}>
                  <Route index element={<HomePage />} />
                  <Route path="about" element={<AboutPage />} />
                  <Route path="pets" element={<PetsListPage />} />
                  <Route path="pets/:id" element={<PetsDetailsPage />} />
                  <Route path="pets/:id/poster" element={<PetsPosterPage />} />
                  <Route path="edit-pet/:petId" element={<EditPetPage />} />
                  <Route path="articles" element={<ArticlesListPage />} />
                  <Route path="articles/:slug" element={<ArticleDetailsPage />} />
                  <Route path="shelters" element={<SheltersListPage />} />
                  <Route path="shelters/:slug" element={<ShelterDetailsPage />} />
                  <Route
                    path="virtual-pet-training-classes"
                    element={<VirtualPetTrainingClasses />}
                  />
                  <Route path="pet-infrastructure" element={<PetInfrastructurePage />} />
                  <Route path="contact" element={<ContactPage />} />
                  <Route path="feedback" element={<FeedbackPage />} />
                  <Route path="support" element={<SupportPage />} />
                  <Route path="create-shelter" element={<CreateShelterForm />} />
                  <Route path="admin/dashboard" element={<DashboardPage />} />
                  <Route path="privacy-policy" element={<PrivacyPolicyPage />} />
                  <Route path="terms-of-service" element={<TermsOfServicePage />} />
                  <Route path="cookie-policy" element={<CookiePolicyPage />} />
                  <Route path="data-protection-policy" element={<DataProtectionPolicyPage />} />
                  <Route path="disclaimer" element={<DisclaimerPage />} />
                  <Route path="community-guidelines" element={<CommunityGuidelinesPage />} />
                  <Route
                    path="sponsors-and-partners"
                    element={<SponsorshipsAndPartnershipsPage />}
                  />
                  <Route path="article" element={<ArticleDetailsPage />} />
                  <Route path="create-article" element={<CreateArticleForm />} />
                  {/* <Route path="add-pet" element={<PrivateRoute element={<CreatePetPage />} />} /> */}
                  <Route
                    path="add-pet"
                    element={
                      <PrivateRoute>
                        <CreatePetPage />
                      </PrivateRoute>
                    }
                  />
                  <Route
                    path="user/profile"
                    element={
                      <PrivateRoute>
                        <ProfilePage />
                      </PrivateRoute>
                    }
                  />
                  <Route
                    path="user/profile/posts"
                    element={
                      <PrivateRoute>
                        <ProfilePostsPage />
                      </PrivateRoute>
                    }
                  />
                  <Route
                    path="user/profile/settings"
                    element={
                      <PrivateRoute>
                        <ProfileSettingsPage />
                      </PrivateRoute>
                    }
                  />
                  <Route
                    path="user/profile/services"
                    element={
                      <PrivateRoute>
                        <ProfileServicesPage />
                      </PrivateRoute>
                    }
                  />
                  <Route
                    path="user/profile/pets"
                    element={
                      <PrivateRoute>
                        <ProfilePetsPage />
                      </PrivateRoute>
                    }
                  />
                  {/* <Route path="user/profile" element={<ProfilePage />} /> */}
                  {/* <Route path="user/profile/posts" element={<ProfilePostsPage />} /> */}
                  {/* <Route path="user/profile/settings" element={<ProfileSettingsPage />} /> */}
                  {/* <Route path="user/profile/services" element={<ProfileServicesPage />} /> */}
                  {/* <Route path="user/profile/pets" element={<ProfilePetsPage />} /> */}
                  <Route path="services" element={<ServicesListPage />} />
                  <Route path="/login" element={<Login />} />
                  <Route path="/register" element={<Register />} />
                  <Route path="*" element={<NotFoundPage />} />
                </Route>
              </Routes>
              {/* <button onClick={initOneSignal}>Subscribe to Notifications</button>
              <div>
                <button onClick={getLocation}>Get Location</button>
                <label>
                  Latitude:
                  <input
                    type="text"
                    name="latitude"
                    value={location.latitude}
                    onChange={handleChange}
                  />
                </label>
                <label>
                  Longitude:
                  <input
                    type="text"
                    name="longitude"
                    value={location.longitude}
                    onChange={handleChange}
                  />
                </label>
                <label>
                  Distance:
                  <input
                    type="text"
                    name="distance"
                    value={distance}
                    onChange={handleDistanceChange}
                  />
                </label>
                <button onClick={addLocationTags}>Add Location Tags</button>
              </div> */}
              {/* <Box p={2} bgcolor="lightgray">
                <Grid container spacing={1} alignItems="center">
                  <Grid item xs={12} sm={4}>
                    <Button variant="contained" onClick={initOneSignal} fullWidth>
                      Subscribe
                    </Button>
                  </Grid>
                  <Grid item xs={12} sm={4}>
                    <Button variant="contained" onClick={getLocation} fullWidth>
                      Get Location
                    </Button>
                  </Grid>
                  <Grid item xs={12} sm={4}>
                    <Button variant="contained" onClick={addLocationTags} fullWidth>
                      Add Tags
                    </Button>
                  </Grid>
                  <Grid item xs={12} sm={4}>
                    <TextField
                      variant="outlined"
                      type="text"
                      name="latitude"
                      value={location.latitude}
                      onChange={handleChange}
                      fullWidth
                      size="small"
                      label="Latitude"
                    />
                  </Grid>
                  <Grid item xs={12} sm={4}>
                    <TextField
                      variant="outlined"
                      type="text"
                      name="longitude"
                      value={location.longitude}
                      onChange={handleChange}
                      fullWidth
                      size="small"
                      label="Longitude"
                    />
                  </Grid>
                  <Grid item xs={12} sm={4}>
                    <TextField
                      variant="outlined"
                      type="text"
                      name="distance"
                      value={distance}
                      onChange={handleDistanceChange}
                      fullWidth
                      size="small"
                      label="Distance"
                    />
                  </Grid>
                </Grid>
              </Box> */}
            </Suspense>
          </BrowserRouter>
        </DrawerProvider>
      </LanguageProvider>
    </AuthProvider>
  );
};

export default App;

// useEffect(() => {
//   const initOneSignal = async () => {
//     await OneSignal.init({
//       appId: '07831676-ef12-409c-895e-3352642c136d',
//     });

//     // OneSignal.User.addTags({
//     //   latitude: '56.946285',
//     //   longitude: '24.105078',
//     //   distance: '10',
//     // });

//     console.log('OneSignal initialized');
//     OneSignal.Slidedown.promptPush(); // Show subscription prompt after initialization
//     console.log('OneSignal.User', OneSignal.User);
//   };

//   initOneSignal();
// }, []);

// // Function to prompt for push notifications
// // const promptNotificationSubscription = () => {
// //   OneSignal.showSlidedownPrompt();
// // };
// // Handler to add tags for latitude, longitude, and distance
// const addLocationTags = () => {
//   OneSignal.User.addTags({
//     latitude: '56.946285',
//     longitude: '24.105078',
//     distance: '10',
//   });
//   console.log('Tags added successfully');
// };

// useEffect(() => {
//   const initOneSignal = async () => {
//     await OneSignal.init({
//       appId: '07831676-ef12-409c-895e-3352642c136d',
//     });

//     OneSignal.User.addTags({
//       latitude: '56.946285',
//       longitude: '24.105078',
//       distance: '10',
//     });
//     OneSignal.Slidedown.promptEmail();
//     OneSignal.User.addEmail('olegs.krivko@gmail.com');
//     OneSignal.User.addSms('+37129771299');
//     OneSignal.User.setExternalUserId('12345');
//     const tags = OneSignal.User.getTags();
//     console.log('tags', tags);
//     console.log('OneSignal.User.onesignalId', OneSignal.User.onesignalId);
//     // OneSignal.Slidedown.promptPushCategories();
//     console.log('OneSignal initialized');
//     OneSignal.Slidedown.promptPush(); // Show subscription prompt after initialization
//     console.log('OneSignal.User', OneSignal.User);
//   };

//   initOneSignal();
// }, []);

// promptOptions: {
//   slidedown: {
//     prompts: [
//       {
//         type: 'category',
//         autoPrompt: true,
//         text: {
//           actionMessage:
//             "We'd like to show you notifications for the latest news and updates.",
//           acceptButton: 'Allow',
//           cancelButton: 'Cancel',
//         },
//         categories: [
//           {
//             tag: 'politics',
//             label: 'Politics',
//           },
//         ],
//       },
//     ],
//   },
// },
