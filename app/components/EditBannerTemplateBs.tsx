import React, { useState , useEffect} from 'react';
import { Dialog } from '@headlessui/react';

interface EditBannerProps {
  banner: {
    id: number;
    title: string;
    description: string;
    cta: string;
    image: string;
    background: string;
  };
  onClose: () => void;
  onSave: (banner: { id: number; title: string; description: string; cta: string; image: string; background: string }) => void;
}

const EditBannerTemplateBs: React.FC<EditBannerProps> = ({ banner, onClose, onSave }) => {
  const [title, setTitle] = useState(banner.title);
  const [description, setDescription] = useState(banner.description);
  const [cta, setCta] = useState(banner.cta);
  const [background, setBackground] = useState(banner.background);

  // Update local state when banner prop changes
  useEffect(() => {
    setTitle(banner.title);
    setDescription(banner.description);
    setCta(banner.cta);
    setBackground(banner.background);
  }, [banner]);

  const handleSave = () => {
    onSave({ ...banner, title, description, cta, background });
    onClose();
  };

  return (
    <Dialog open={true} onClose={onClose} className="fixed inset-0 z-50 flex items-end bg-black">
      <div className="bg-white w-full p-4 rounded-t-lg text-black">
        <h2 className="text-xl font-bold mb-4">Edit Banner</h2>
        <div className="mb-4">
          <label className="block mb-2 text-black">Title</label>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="w-full p-2 border rounded"
          />
        </div>
        <div className="mb-4">
          <label className="block mb-2 text-black">Description</label>
          <textarea
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            className="w-full p-2 border rounded"
          />
        </div>
        <div className="mb-4">
          <label className="block mb-2">CTA</label>
          <input
            type="text"
            value={cta}
            onChange={(e) => setCta(e.target.value)}
            className="w-full p-2 border rounded"
          />
        </div>
        <div className="mb-4">
          <label className="block mb-2">Background</label>
          <input
            type="color"
            value={background}
            onChange={(e) => setBackground(e.target.value)}
            className="w-full p-2 border rounded"
          />
        </div>
        <button className="px-4 py-2 bg-blue-500 text-white rounded" onClick={handleSave}>
          Save
        </button>
        <button className="ml-4 px-4 py-2 bg-gray-500 text-white rounded" onClick={onClose}>
          Cancel
        </button>
      </div>
    </Dialog>
  );
};

export default EditBannerTemplateBs;

