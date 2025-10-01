import { useState } from 'react';
import { Menu, Search, Video, Bell } from 'lucide-react';

export default function Header({ onMenuClick }) {
  const [showMobileSearch, setShowMobileSearch] = useState(false);

  return (
    <header className="bg-white shadow-sm border-b px-4 py-3 fixed top-0 left-0 right-0 z-50">
      <div className="flex items-center justify-between lg:justify-start">
        <div className="flex items-center space-x-4">
          <button 
            onClick={onMenuClick}
            className="p-2 hover:bg-gray-100 rounded-full"
          >
            <Menu className="w-5 h-5" />
          </button>
          <h1 className="text-xl font-bold text-red-600">YouTube</h1>
        </div>
        
        {/* Campo de pesquisa - desktop */}
        <div className="hidden md:flex flex-1 max-w-2xl mx-4">
          <div className="relative w-full">
            <input 
              type="text" 
              placeholder="Pesquisar" 
              className="w-full px-4 py-2 border rounded-full focus:outline-none focus:border-blue-500"
            />
            <button className="absolute right-3 top-2.5">
              <Search className="w-4 h-4 text-gray-500" />
            </button>
          </div>
        </div>
        
        <div className="flex items-center space-x-2">
          {/* Botão de pesquisa mobile */}
          <button 
            onClick={() => setShowMobileSearch(!showMobileSearch)}
            className="md:hidden p-2 hover:bg-gray-100 rounded-full"
          >
            <Search className="w-5 h-5" />
          </button>
          <button className="hidden sm:block p-2 hover:bg-gray-100 rounded-full">
            <Video className="w-5 h-5" />
          </button>
          <button className="hidden sm:block p-2 hover:bg-gray-100 rounded-full">
            <Bell className="w-5 h-5" />
          </button>
          <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center text-white text-sm font-bold">
            U
          </div>
        </div>
      </div>
      
      {/* Campo de pesquisa mobile */}
      {showMobileSearch && (
        <div className="md:hidden mt-3 mobile-search">
          <div className="relative">
            <input 
              type="text" 
              placeholder="Pesquisar" 
              className="w-full px-4 py-2 border rounded-full focus:outline-none focus:border-blue-500"
              autoFocus
            />
            <button className="absolute right-3 top-2.5">
              <Search className="w-4 h-4 text-gray-500" />
            </button>
          </div>
        </div>
      )}
    </header>
  );
}