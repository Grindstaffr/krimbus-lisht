import { useState, useEffect } from 'react';
import { WishlistItem as WishlistItemComponent } from './components/WishlistItem';
import { Tooltip } from './components/Tooltip';
import { Modal } from './components/Modal';
import { WishlistItem } from './types/types';
import wishlistData from './data/wishlist.json';
import './styles/App.css';

function App() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [hoveredItem, setHoveredItem] = useState<WishlistItem | null>(null);
  const [selectedItem, setSelectedItem] = useState<WishlistItem | null>(null);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const handleItemHover = (item: WishlistItem | null) => {
    setHoveredItem(item);
  };

  const handleItemClick = (item: WishlistItem) => {
    setSelectedItem(item);
  };

  const handleModalClose = () => {
    setSelectedItem(null);
  };

  return (
    <div className="app">
      <header>
        <h1>2024 Wishlist</h1>
        <p className="subtitle">A curated collection of aspirational items</p>
      </header>
      
      <main>
        {Object.entries(
          wishlistData.items.reduce((acc, item) => ({
            ...acc,
            [item.category]: [...(acc[item.category] || []), item],
          }), {} as Record<string, typeof wishlistData.items>)
        ).map(([category, items]) => (
          <section key={category}>
            <h2>{category}</h2>
            <div className="items-grid">
              {items.map((item, index) => (
                <WishlistItemComponent 
                  key={index}
                  item={item}
                  onHover={handleItemHover}
                  onClick={handleItemClick}
                />
              ))}
            </div>
          </section>
        ))}
      </main>

      <Tooltip 
        item={hoveredItem}
        mousePosition={mousePosition}
        shouldRender={hoveredItem !== null}
      />

      <Modal 
        item={selectedItem}
        onClose={handleModalClose}
      />
    </div>
  );
}

export default App; 