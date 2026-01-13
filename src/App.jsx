import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// Pages
import LandingPage from "./pages/landing/Landing";
// import HomePage from './pages/HomePage';
// import TouristCitiesPage from './pages/TouristCitiesPage';
// import TouristActivitiesPage from './pages/TouristActivitiesPage';
// import HotelsPage from './pages/HotelsPage';
// import RestaurantsPage from './pages/RestaurantsPage';
// import TransportationPage from './pages/TransportationPage';
// import EventsPage from './pages/EventsPage';
// import ShoppingPage from './pages/ShoppingPage';
// import LoginPage from './pages/LoginPage';
// import RegisterPage from './pages/RegisterPage';
// import SupportPage from './pages/SupportPage';
// import SmartTripPlannerPage from './pages/SmartTripPlannerPage';
// import ReviewsPage from './pages/ReviewsPage';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        {/*
         <Route path="/home" element={<HomePage />} />
        <Route path="/cities" element={<TouristCitiesPage />} />
        <Route path="/activities" element={<TouristActivitiesPage />} />
        <Route path="/hotels" element={<HotelsPage />} />
        <Route path="/restaurants" element={<RestaurantsPage />} />
        <Route path="/transportation" element={<TransportationPage />} />
        <Route path="/events" element={<EventsPage />} />
        <Route path="/shopping" element={<ShoppingPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/support" element={<SupportPage />} />
        <Route path="/planner" element={<SmartTripPlannerPage />} />
        <Route path="/reviews" element={<ReviewsPage />} /> */}
      </Routes>
    </Router>
  );
}

export default App;
