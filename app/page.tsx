// Add this line to mark the component as a Client Component
"use client";

import React, { useState } from 'react';
import BannerImageComp from './components/BannerImage'; // Ensure the filename is correct
import EditBannerTemplateBs from './components/EditBannerTemplateBs';
import bannersData from './data/banner.json'; // Ensure the filename matches

interface Banner {
  id: number;
  title: string;
  description: string;
  cta: string;
  image: string;
  background: string;
}

const Home: React.FC = () => {
  const [banners, setBanners] = useState<Banner[]>(bannersData);
  const [selectedBanner, setSelectedBanner] = useState<Banner | null>(null);

  const handleEdit = (id: number) => {
    const banner = banners.find((b) => b.id === id);
    if (banner) setSelectedBanner(banner);
  };

  const handleSave = (updatedBanner: Banner) => {
    setBanners(banners.map((banner) => (banner.id === updatedBanner.id ? updatedBanner : banner)));
    setSelectedBanner(null);
  };

  const handleClose = () => setSelectedBanner(null);

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Ad Banners</h1>
      {banners.map((banner) => (
        <BannerImageComp key={banner.id} {...banner} onEdit={handleEdit} />
      ))}
      {selectedBanner && (
        <EditBannerTemplateBs banner={selectedBanner} onClose={handleClose} onSave={handleSave} />
      )}
    </div>
  );
};

export default Home;
