import { Home, Music, Monitor, Tv, Trophy, BookOpen } from 'lucide-react';

const categories = [
  { id: 'all', name: 'Todos', icon: Home },
  { id: 'musica', name: 'Música', icon: Music },
  { id: 'tecnologia', name: 'Tecnologia', icon: Monitor },
  { id: 'entretenimento', name: 'Entretenimento', icon: Tv },
  { id: 'esportes', name: 'Esportes', icon: Trophy },
  { id: 'educacao', name: 'Educação', icon: BookOpen },
];

export default function Sidebar({ isOpen, onCategorySelect, selectedCategory, onClose }) {
  return (
    <>
      <aside className={`w-64 bg-white h-screen fixed left-0 top-16 transform ${
        isOpen ? 'translate-x-0' : '-translate-x-full'
      } lg:translate-x-0 transition-transform duration-300 z-40 shadow-lg`}>
        <div className="p-4">
          <h2 className="font-semibold text-gray-800 mb-4">Categorias</h2>
          <nav className="space-y-2">
            {categories.map(({ id, name, icon: Icon }) => (
              <button
                key={id}
                onClick={() => {
                  onCategorySelect(id);
                  onClose();
                }}
                className={`w-full text-left px-3 py-2 rounded-lg hover:bg-gray-100 flex items-center space-x-3 ${
                  selectedCategory === id ? 'bg-red-100 text-red-600' : ''
                }`}
              >
                <Icon className="w-5 h-5" />
                <span>{name}</span>
              </button>
            ))}
          </nav>
        </div>
      </aside>
      
      {/* Overlay para mobile */}
      {isOpen && (
        <div 
          onClick={onClose}
          className="fixed inset-0 bg-black bg-opacity-50 z-30 lg:hidden"
        />
      )}
    </>
  );
}