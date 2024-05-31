import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AuthProvider } from "./middleware/AuthContext";

import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import ContactPage from "./pages/ContactPage";
import PetsListPage from "./pages/PetsListPage";
import PetsDetailsPage from "./pages/PetsDetailsPage";
import Layout from "./pages/Layout";

import FeedbackPage from "./pages/FeedbackPage";
import SupportPage from "./pages/SupportPage";
import PrivacyPolicyPage from "./pages/PrivacyPolicyPage";
import TermsOfServicePage from "./pages/TermsOfServicePage";
import CookiePolicyPage from "./pages/CookiePolicyPage";
import DataProtectionPolicyPage from "./pages/DataProtectionPolicyPage";
import DisclaimerPage from "./pages/DisclaimerPage";
import CommunityGuidelinesPage from "./pages/CommunityGuidelinesPage";
import NotFoundPage from "./pages/NotFoundPage";
import CreatePetPage from "./pages/CreatePetPage";
import DashboardPage from "./pages/DashboardPage";
import TomTomMap from "./TomTomMap";

function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<HomePage />} />
            <Route path="about" element={<AboutPage />} />
            <Route path="pets" element={<PetsListPage />} />

            <Route path="pets/:id" element={<PetsDetailsPage />} />
            <Route path="contact" element={<ContactPage />} />
            <Route path="feedback" element={<FeedbackPage />} />
            <Route path="support" element={<SupportPage />} />
            <Route path="admin/dashboard" element={<DashboardPage />} />

            <Route path="privacy-policy" element={<PrivacyPolicyPage />} />
            <Route path="terms-of-service" element={<TermsOfServicePage />} />
            <Route path="cookie-policy" element={<CookiePolicyPage />} />
            <Route
              path="data-protection-policy"
              element={<DataProtectionPolicyPage />}
            />
            <Route path="disclaimer" element={<DisclaimerPage />} />
            <Route
              path="community-guidelines"
              element={<CommunityGuidelinesPage />}
            />
            <Route path="add-pet" element={<CreatePetPage />} />

            {/* <Route exact path="/articles" component={ArticlesPage} />
        <Route exact path="/video-tutorials" component={VideoTutorialsPage} />
        <Route exact path="/infographics" component={InfographicsPage} />
        <Route exact path="/health-tips" component={HealthTipsPage} />
        <Route exact path="/behavioral-training" component={BehavioralTrainingPage} />
        <Route exact path="/breeder-guides" component={BreederGuidesPage} />
        <Route exact path="/senior-pet-care" component={SeniorPetCarePage} />
        <Route exact path="/emergency-preparedness" component={EmergencyPreparednessPage} /> */}
            <Route path="*" element={<NotFoundPage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  );
}

export default App;
