import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { AuthProvider } from './middleware/AuthContext';
import { LanguageProvider } from './middleware/LanguageContext';

import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import ContactPage from './pages/ContactPage';
import PetsListPage from './pages/PetsListPage';
import PetsDetailsPage from './pages/PetsDetailsPage';
import Layout from './pages/Layout';
import FeedbackPage from './pages/FeedbackPage';
import SupportPage from './pages/SupportPage';
import PrivacyPolicyPage from './pages/PrivacyPolicyPage';
import TermsOfServicePage from './pages/TermsOfServicePage';
import CookiePolicyPage from './pages/CookiePolicyPage';
import DataProtectionPolicyPage from './pages/DataProtectionPolicyPage';
import DisclaimerPage from './pages/DisclaimerPage';
import CommunityGuidelinesPage from './pages/CommunityGuidelinesPage';
import NotFoundPage from './pages/NotFoundPage';
import CreatePetPage from './pages/CreatePetPage';
import DashboardPage from './pages/DashboardPage';
import Login from './pages/Login';
import Register from './pages/Register';
import PrivateRoute from './pages/PrivateRoute';
import ArticlePage from './pages/ArticleDetailsPage';
import ArticleDetailsPage from './pages/ArticleDetailsPage';
import SponsorshipsAndPartnershipsPage from './pages/SponsorshipsAndPartnershipsPage';
import ProfilePage from './pages/ProfilePage';
import ProfilePetsPage from './pages/ProfilePetsPage';
import ProfileSettingsPage from './pages/ProfileSettingsPage';
import ProfileServicesPage from './pages/ProfileServicesPage';
import ProfilePostsPage from './pages/ProfilePostsPage';

// import SponsorshipsPage from "./pages/SponsorshipsPage";
import './i18n'; // Import the i18n configuration

function App() {
  return (
    <AuthProvider>
      <LanguageProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Layout />}>
              <Route index element={<HomePage />} />
              <Route path="about" element={<AboutPage />} />
              <Route path="pets" element={<PetsListPage />} />
              <Route path="pets/:id" element={<PetsDetailsPage />} />
              <Route
                path="contact"
                element={
                  <PrivateRoute>
                    <ContactPage />
                  </PrivateRoute>
                }
              />
              <Route path="feedback" element={<FeedbackPage />} />
              <Route path="support" element={<SupportPage />} />
              <Route path="admin/dashboard" element={<DashboardPage />} />
              <Route path="privacy-policy" element={<PrivacyPolicyPage />} />
              <Route path="terms-of-service" element={<TermsOfServicePage />} />
              <Route path="cookie-policy" element={<CookiePolicyPage />} />
              <Route path="data-protection-policy" element={<DataProtectionPolicyPage />} />
              <Route path="disclaimer" element={<DisclaimerPage />} />
              <Route path="community-guidelines" element={<CommunityGuidelinesPage />} />
              <Route path="sponsors-and-partners" element={<SponsorshipsAndPartnershipsPage />} />
              {/* <Route path="sponsorships" element={<SponsorshipsPage />} /> */}

              <Route path="article" element={<ArticleDetailsPage />} />
              {/* <Route path="add-pet" element={<CreatePetPage />} /> */}
              <Route
                path="add-pet"
                element={
                  <PrivateRoute>
                    <CreatePetPage />
                  </PrivateRoute>
                }
              />
              <Route path="add-pet" element={<PrivateRoute element={<CreatePetPage />} />} />
              <Route path="user/profile" element={<ProfilePage />} />
              <Route path="user/profile/posts" element={<ProfilePostsPage />} />
              <Route path="user/profile/services" element={<ProfileServicesPage />} />

              <Route path="user/profile/pets" element={<ProfilePetsPage />} />
              <Route path="user/profile/settings" element={<ProfileSettingsPage />} />
              <Route path="/login" element={<Login />} />
              <Route path="/register" element={<Register />} />
              <Route path="*" element={<NotFoundPage />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </LanguageProvider>
    </AuthProvider>
  );
}

export default App;
