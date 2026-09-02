import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import ProjectOverview from './components/ProjectOverview';
import FloorPlanExplorer from './components/FloorPlanExplorer';
import MasterPlanViewer from './components/MasterPlanViewer';
import WalkthroughVideo from './components/WalkthroughVideo';
import VirtualTour360 from './components/VirtualTour360';
import AmenitiesShowcase from './components/AmenitiesShowcase';
import LocationRadar from './components/LocationRadar';
import EmiCalculator from './components/EmiCalculator';
import Specifications from './components/Specifications';
import ConstructionUpdates from './components/ConstructionUpdates';
import DeveloperHeritage from './components/DeveloperHeritage';
import FaqSection from './components/FaqSection';
import SeoContentHub from './components/SeoContentHub';
import Footer from './components/Footer';
import StickyBottomBar from './components/StickyBottomBar';
import BrochureModal from './components/Modals/BrochureModal';
import SiteVisitModal from './components/Modals/SiteVisitModal';

export default function App() {
  const [brochureModalOpen, setBrochureModalOpen] = useState(false);
  const [siteVisitModalOpen, setSiteVisitModalOpen] = useState(false);
  const [selectedConfigForModal, setSelectedConfigForModal] = useState(null);

  const handleOpenBrochure = (config = null) => {
    setSelectedConfigForModal(config);
    setBrochureModalOpen(true);
  };

  const handleOpenSiteVisit = () => {
    setSiteVisitModalOpen(true);
  };

  return (
    <div className="min-h-screen bg-[#F8FAFC] text-[#0F172A] selection:bg-[#0284C7] selection:text-white">
      {/* Navigation */}
      <Navbar
        onOpenBrochure={() => handleOpenBrochure()}
        onOpenSiteVisit={handleOpenSiteVisit}
      />

      {/* Main Content */}
      <main>
        {/* Hero Section */}
        <Hero
          onOpenBrochure={() => handleOpenBrochure()}
          onOpenSiteVisit={handleOpenSiteVisit}
        />

        {/* The Italian Riviera Experience & Fluid Elements */}
        <ProjectOverview
          onOpenBrochure={() => handleOpenBrochure()}
          onOpenSiteVisit={handleOpenSiteVisit}
        />

        {/* Interactive Floor Plan Explorer (1, 2 & 3 BHK) */}
        <FloorPlanExplorer
          onOpenBrochure={() => handleOpenBrochure()}
          onOpenSiteVisit={handleOpenSiteVisit}
          onSelectConfigForCostSheet={(cfg) => handleOpenBrochure(cfg)}
        />

        {/* Interactive 45-Acre Master Layout Plan */}
        <MasterPlanViewer
          onOpenBrochure={() => handleOpenBrochure()}
          onOpenSiteVisit={handleOpenSiteVisit}
        />

        {/* Official Walkthrough Video */}
        <WalkthroughVideo
          onOpenBrochure={() => handleOpenBrochure()}
          onOpenSiteVisit={handleOpenSiteVisit}
        />

        {/* 360° Virtual Panoramic Walkthrough */}
        <VirtualTour360
          onOpenSiteVisit={handleOpenSiteVisit}
          onOpenBrochure={() => handleOpenBrochure()}
        />

        {/* 30+ Curated Lifestyle Amenities & Club Azzurro */}
        <AmenitiesShowcase
          onOpenBrochure={() => handleOpenBrochure()}
          onOpenSiteVisit={handleOpenSiteVisit}
        />

        {/* Strategic Bavdhan Location & Transit Radar */}
        <LocationRadar
          onOpenSiteVisit={handleOpenSiteVisit}
        />

        {/* Interactive EMI & Investment Calculator */}
        <EmiCalculator
          onOpenBrochure={() => handleOpenBrochure()}
          onOpenSiteVisit={handleOpenSiteVisit}
        />

        {/* Engineering & Architectural Specifications */}
        <Specifications
          onOpenBrochure={() => handleOpenBrochure()}
        />

        {/* Live Construction Milestones & Progress */}
        <ConstructionUpdates
          onOpenSiteVisit={handleOpenSiteVisit}
          onOpenBrochure={() => handleOpenBrochure()}
        />

        {/* Developer Legacy (34+ Years) & Resident Testimonials */}
        <DeveloperHeritage />

        {/* Master SEO Knowledge Hub & 10 Content Silos */}
        <SeoContentHub
          onOpenBrochure={() => handleOpenBrochure()}
          onOpenSiteVisit={handleOpenSiteVisit}
        />

        {/* Frequently Asked Questions */}
        <FaqSection
          onOpenBrochure={() => handleOpenBrochure()}
          onOpenSiteVisit={handleOpenSiteVisit}
        />
      </main>

      {/* Footer */}
      <Footer
        onOpenBrochure={() => handleOpenBrochure()}
        onOpenSiteVisit={handleOpenSiteVisit}
      />

      {/* Mobile Floating Action Bar */}
      <StickyBottomBar
        onOpenBrochure={() => handleOpenBrochure()}
        onOpenSiteVisit={handleOpenSiteVisit}
      />

      {/* Modals */}
      <BrochureModal
        isOpen={brochureModalOpen}
        onClose={() => setBrochureModalOpen(false)}
        preselectedConfig={selectedConfigForModal}
      />

      <SiteVisitModal
        isOpen={siteVisitModalOpen}
        onClose={() => setSiteVisitModalOpen(false)}
      />
    </div>
  );
}
