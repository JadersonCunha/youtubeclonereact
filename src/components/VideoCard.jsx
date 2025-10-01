export default function VideoCard({ video, onClick }) {
  const getRandomDuration = () => {
    const minutes = Math.floor(Math.random() * 20) + 1;
    const seconds = Math.floor(Math.random() * 60);
    return `${minutes}:${seconds.toString().padStart(2, '0')}`;
  };

  const getRandomTime = () => {
    const times = ['há 1 hora', 'há 3 horas', 'há 1 dia', 'há 2 dias', 'há 1 semana'];
    return times[Math.floor(Math.random() * times.length)];
  };

  return (
    <div 
      className="video-card cursor-pointer group" 
      onClick={() => onClick(video)}
    >
      <div className="relative overflow-hidden rounded-lg mb-3">
        <img 
          src={video.thumbnail} 
          alt={video.title}
          className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-200"
        />
        <div className="absolute bottom-2 right-2 bg-black bg-opacity-80 text-white text-xs px-2 py-1 rounded">
          {getRandomDuration()}
        </div>
      </div>
      <div className="flex space-x-3">
        <div className="w-9 h-9 bg-blue-500 rounded-full flex items-center justify-center text-white text-sm font-bold flex-shrink-0">
          {video.channelInitial}
        </div>
        <div className="flex-1 min-w-0">
          <h3 className="font-medium text-gray-900 line-clamp-2 text-sm leading-5 mb-1">
            {video.title}
          </h3>
          <p className="text-gray-600 text-xs mb-1">{video.channel}</p>
          <p className="text-gray-600 text-xs">{video.views} • {getRandomTime()}</p>
        </div>
      </div>
    </div>
  );
}