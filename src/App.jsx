import { useState, useEffect } from 'react';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import VideoCard from './components/VideoCard';
import VideoModal from './components/VideoModal';
import { videosData } from './data/videos';

function App() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedVideo, setSelectedVideo] = useState(null);
  const [modalOpen, setModalOpen] = useState(false);

  const filteredVideos = selectedCategory === 'all' 
    ? videosData 
    : videosData.filter(video => video.category === selectedCategory);

  const handleVideoClick = (video) => {
    setSelectedVideo(video);
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
    setSelectedVideo(null);
  };

  // Fechar modal com ESC
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape' && modalOpen) {
        closeModal();
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [modalOpen]);

  return (
    <div className="bg-gray-100 min-h-screen">
      <Header onMenuClick={() => setSidebarOpen(!sidebarOpen)} />
      
      <div className="flex">
        <Sidebar 
          isOpen={sidebarOpen}
          selectedCategory={selectedCategory}
          onCategorySelect={setSelectedCategory}
          onClose={() => setSidebarOpen(false)}
        />
        
        <main className="flex-1 lg:ml-64 p-4 mt-16">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
            {filteredVideos.map(video => (
              <VideoCard 
                key={video.id}
                video={video}
                onClick={handleVideoClick}
              />
            ))}
          </div>
        </main>
      </div>

      <VideoModal 
        video={selectedVideo}
        isOpen={modalOpen}
        onClose={closeModal}
      />
    </div>
  );
}

export default App;