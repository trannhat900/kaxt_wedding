import { useState } from 'react';
import { Analytics } from '@vercel/analytics/react';
import { SpeedInsights } from '@vercel/speed-insights/react';
import Navigation from './components/Navigation';
import Hero from './components/Hero';
import LoveStoryTimeline from './components/LoveStoryTimeline';
import WeddingDetails from './components/WeddingDetails';
import Invitation from './components/Invitation';
import Gallery from './components/Gallery';
import GiftRegistry from './components/GiftRegistry';
import Wishes from './components/Wishes';
import Countdown from './components/Countdown';
import ThankYou from './components/ThankYou';
import Footer from './components/Footer';
import MusicPlayer from './components/MusicPlayer';
import ScrollToTop from './components/ScrollToTop';
import WelcomeModal from './components/WelcomeModal';
import CoverImage from './components/CoverImage';

function App() {
  const [isGiftModalOpen, setIsGiftModalOpen] = useState(false);

  return (
    <div className="min-h-screen">
      {/* Cover Image - Full Screen */}
      <CoverImage />

      {/* Navigation */}
      <Navigation />

      {/* Welcome Modal */}
      <WelcomeModal />

      {/* Main Content */}
      <main>
        <Hero />
        <Invitation />
        <Countdown />
        <WeddingDetails />
        <Wishes onOpenGiftModal={() => setIsGiftModalOpen(true)} />
        <Gallery />
        <LoveStoryTimeline />  
        <ThankYou />
      </main>

      {/* Footer */}
      <Footer />

      {/* Floating Components */}
      <MusicPlayer />
      <ScrollToTop />

      {/* Gift Modal */}
      <GiftRegistry isOpen={isGiftModalOpen} onClose={() => setIsGiftModalOpen(false)} />
      
      {/* Vercel Analytics */}
      <Analytics />
      <SpeedInsights />
    </div>
  );
}

export default App;
