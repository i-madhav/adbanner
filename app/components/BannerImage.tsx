import React from 'react';

interface BannerProps {
  id: number;
  title: string;
  description: string;
  cta: string;
  image: string;
  background: string;
  onEdit: (id: number) => void;
}

const BannerImageComp: React.FC<BannerProps> = ({ id, title, description, cta, image, background, onEdit }) => {
  return (
    <div style={{ background }} className="p-4 rounded-lg mb-4 relative">
      <img src={image} alt={title} className="w-full h-32 object-cover rounded-lg" />
      <div className="p-2">
        <h2 className="text-xl font-bold">{title}</h2>
        <p>{description}</p>
        <button className="mt-2 px-4 py-2 bg-blue-500 text-white rounded">{cta}</button>
        <button className="absolute top-2 right-2 text-black" onClick={() => onEdit(id)}>
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12h3m4 0a2 2 0 01-2 2h-4a2 2 0 01-2-2v-4a2 2 0 012-2h4a2 2 0 012 2zM4 15h4M7 4v8M9 20H7m8 0h-2M5 11V9a1 1 0 011-1h2m4 0h2m2 0h2m4 0a1 1 0 00-1-1h-2m-6 0V5a1 1 0 011-1h2a1 1 0 011 1v2m-2 0h2"></path>
          </svg>
        </button>
      </div>
    </div>
  );
};

export default BannerImageComp;
