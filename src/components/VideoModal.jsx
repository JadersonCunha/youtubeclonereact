import { X } from 'lucide-react';

export default function VideoModal({ video, isOpen, onClose }) {
  if (!isOpen || !video) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-lg max-w-2xl w-full max-h-[90vh] overflow-y-auto">
        <div className="p-6">
          <div className="flex justify-between items-start mb-4">
            <h2 className="text-xl font-bold text-gray-800">{video.title}</h2>
            <button 
              onClick={onClose}
              className="p-1 hover:bg-gray-100 rounded-full"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
          <div className="mb-4">
            <img 
              src={video.thumbnail} 
              alt={video.title}
              className="w-full h-64 object-cover rounded-lg"
            />
          </div>
          <div className="space-y-3">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-blue-500 rounded-full flex items-center justify-center text-white font-bold">
                {video.channelInitial}
              </div>
              <div>
                <p className="font-semibold">{video.channel}</p>
                <p className="text-sm text-gray-600">{video.views}</p>
              </div>
            </div>
            <p className="text-gray-700 leading-relaxed">{video.description}</p>
          </div>
        </div>
      </div>
    </div>
  );
}