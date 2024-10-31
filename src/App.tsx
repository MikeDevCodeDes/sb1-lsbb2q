import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import TopGames from './pages/games/TopGames';
import LatestGames from './pages/games/LatestGames';
import ReleaseCalendar from './pages/games/ReleaseCalendar';
import GameTrailers from './pages/games/GameTrailers';
import News from './pages/News';
import IndustryUpdates from './pages/news/IndustryUpdates';
import DeveloperInterviews from './pages/news/DeveloperInterviews';
import Store from './pages/store/Store';
import StoreGames from './pages/store/StoreGames';
import Accessories from './pages/store/Accessories';
import Merchandise from './pages/store/Merchandise';
import Reviews from './pages/reviews/Reviews';
import UserReviews from './pages/reviews/UserReviews';
import VideoReviews from './pages/reviews/VideoReviews';
import Builds from './pages/builds/Builds';
import BuildGuides from './pages/builds/BuildGuides';
import UserBuilds from './pages/builds/UserBuilds';
import YouTube from './pages/youtube/YouTube';
import InfluencerSpotlights from './pages/youtube/InfluencerSpotlights';
import ContentHub from './pages/youtube/ContentHub';
import ESportsNews from './pages/esports/ESportsNews';
import TeamProfiles from './pages/esports/TeamProfiles';
import EventCoverage from './pages/esports/EventCoverage';
import Privacy from './pages/legal/Privacy';
import Terms from './pages/legal/Terms';
import Sitemap from './pages/legal/Sitemap';
import Contact from './pages/legal/Contact';
import Forum from './pages/Forum';
import Connect from './pages/Connect';
import FindBuddies from './pages/FindBuddies';
import Login from './pages/Login';
import Events from './pages/Events';
import Tutorials from './pages/Tutorials';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-50 flex flex-col">
        <Navbar />
        <div className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/games/top-games" element={<TopGames />} />
            <Route path="/games/latest" element={<LatestGames />} />
            <Route path="/games/releases" element={<ReleaseCalendar />} />
            <Route path="/games/trailers" element={<GameTrailers />} />
            <Route path="/news" element={<News />} />
            <Route path="/news/industry" element={<IndustryUpdates />} />
            <Route path="/news/interviews" element={<DeveloperInterviews />} />
            <Route path="/store" element={<Store />} />
            <Route path="/store/games" element={<StoreGames />} />
            <Route path="/store/accessories" element={<Accessories />} />
            <Route path="/store/merch" element={<Merchandise />} />
            <Route path="/reviews" element={<Reviews />} />
            <Route path="/reviews/user" element={<UserReviews />} />
            <Route path="/reviews/video" element={<VideoReviews />} />
            <Route path="/builds" element={<Builds />} />
            <Route path="/builds/guides" element={<BuildGuides />} />
            <Route path="/builds/showcase" element={<UserBuilds />} />
            <Route path="/youtube" element={<YouTube />} />
            <Route path="/youtube/influencers" element={<InfluencerSpotlights />} />
            <Route path="/youtube/content" element={<ContentHub />} />
            <Route path="/esports/news" element={<ESportsNews />} />
            <Route path="/esports/teams" element={<TeamProfiles />} />
            <Route path="/esports/events" element={<EventCoverage />} />
            <Route path="/privacy" element={<Privacy />} />
            <Route path="/terms" element={<Terms />} />
            <Route path="/sitemap" element={<Sitemap />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/forum" element={<Forum />} />
            <Route path="/connect" element={<Connect />} />
            <Route path="/find-buddies" element={<FindBuddies />} />
            <Route path="/login" element={<Login />} />
            <Route path="/events" element={<Events />} />
            <Route path="/tutorials" element={<Tutorials />} />
          </Routes>
        </div>
        <Footer />
      </div>
    </Router>
  );
}

export default App;