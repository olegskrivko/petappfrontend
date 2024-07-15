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
import React, { Suspense, lazy, useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
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

// useEffect(()=> {
//   OneSignal.init({
//     appId: '07831676-ef12-409c-895e-3352642c136d'});
// },[])

const App = () => {
  useEffect(() => {
    const initOneSignal = async () => {
      await OneSignal.init({
        appId: '07831676-ef12-409c-895e-3352642c136d',
        notifyButton: {
          enable: true,
        },
        promptOptions: {
          slidedown: {
            prompts: [
              {
                type: 'smsAndEmail',
                autoPrompt: false,
                text: {
                  emailLabel: 'Insert Email Address',
                  smsLabel: 'Insert Phone Number',
                  acceptButton: 'Submit',
                  cancelButton: 'No Thanks',
                  actionMessage: 'Receive the latest news, updates and offers as they happen.',
                  updateMessage: 'Update your push notification subscription preferences.',
                  confirmMessage: 'Thank You!',
                  positiveUpdateButton: 'Save Preferences',
                  negativeUpdateButton: 'Cancel',
                },
                delay: {
                  pageViews: 1,
                  timeDelay: 3,
                },
              },
              {
                type: 'category',
                autoPrompt: true,
                text: {
                  actionMessage:
                    "We'd like to show you notifications for the latest news and updates.",
                  acceptButton: 'Allow',
                  cancelButton: 'Cancel',

                  /* CATEGORY SLIDEDOWN SPECIFIC TEXT */
                  negativeUpdateButton: 'Cancel',
                  positiveUpdateButton: 'Save Preferences',
                  updateMessage: 'Update your push notification subscription preferences.',
                },
                delay: {
                  pageViews: 2,
                  timeDelay: 3,
                },
                categories: [
                  {
                    tag: 'politics',
                    label: 'Politics',
                  },
                  {
                    tag: 'local_news',
                    label: 'Local News',
                  },
                  {
                    tag: 'world_news',
                    label: 'World News',
                  },
                  {
                    tag: 'culture',
                    label: 'Culture',
                  },
                ],
              },
            ],
          },
        },
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
      });

      OneSignal.User.addTags({
        latitude: '56.946285',
        longitude: '24.105078',
        distance: '10',
      });
      // OneSignal.Slidedown.promptPushCategories();
      console.log('OneSignal initialized');
      OneSignal.Slidedown.promptPush(); // Show subscription prompt after initialization
    };

    initOneSignal();
  }, []);

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
                  <Route path="user/profile" element={<ProfilePage />} />
                  <Route path="user/profile/posts" element={<ProfilePostsPage />} />
                  <Route path="user/profile/settings" element={<ProfileSettingsPage />} />
                  <Route path="user/profile/services" element={<ProfileServicesPage />} />
                  <Route path="user/profile/pets" element={<ProfilePetsPage />} />
                  <Route path="services" element={<ServicesListPage />} />
                  <Route path="/login" element={<Login />} />
                  <Route path="/register" element={<Register />} />
                  <Route path="*" element={<NotFoundPage />} />
                </Route>
              </Routes>
              {/* <button className="react" onClick={() => onHandleTag('react')}>
                React Js
              </button>
              <button className="angular" onClick={() => onHandleTag('angular')}>
                Angular Js
              </button> */}
            </Suspense>
          </BrowserRouter>
        </DrawerProvider>
      </LanguageProvider>
    </AuthProvider>
  );
};

export default App;
