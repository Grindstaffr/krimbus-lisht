import { useState, useEffect, useMemo, useRef } from 'react';
import { WishlistItem as WishlistItemComponent } from './components/WishlistItem';
import { Tooltip } from './components/Tooltip';
import { Modal } from './components/Modal';
import { FilterControls } from './components/FilterControls';
import { WishlistItem } from './types/types';
import { getDraftList } from './data/draftlist';
import { CATEGORY_LIST } from './data/categories';
import { isInCostRange, MAX_COST_INDEX } from './data/cost';
import './styles/App.css';

function App() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [hoveredItem, setHoveredItem] = useState<WishlistItem | null>(null);
  const [selectedItem, setSelectedItem] = useState<WishlistItem | null>(null);

  // Filter state
  const [costRange, setCostRange] = useState<[number, number]>([0, MAX_COST_INDEX]);
  const [selectedCategories, setSelectedCategories] = useState<string[]>([...CATEGORY_LIST]);
  const [hasLinkOnly, setHasLinkOnly] = useState(false);

  // Mobile UI state
  const [filtersExpanded, setFiltersExpanded] = useState(false);
  const [headerVisible, setHeaderVisible] = useState(true);
  const lastScrollY = useRef(0);

  // Get data from draftlist
  const allItems = useMemo(() => getDraftList().items, []);

  // Apply filters
  const filteredItems = useMemo(() => {
    return allItems.filter(item => {
      // Cost filter (USD mapped to tier index)
      const itemCostUsd = item.cost ?? 0;
      if (!isInCostRange(itemCostUsd, costRange[0], costRange[1])) {
        return false;
      }

      // Category filter
      if (selectedCategories.length > 0 && !selectedCategories.includes(item.category)) {
        return false;
      }

      // Has link filter
      if (hasLinkOnly && (!item.link || item.link.trim() === '')) {
        return false;
      }

      return true;
    });
  }, [allItems, costRange, selectedCategories, hasLinkOnly]);

  // Mouse tracking for tooltip
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  // Mobile header hide on scroll
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      const isMobile = window.innerWidth <= 768;
      
      if (isMobile) {
        if (currentScrollY > lastScrollY.current && currentScrollY > 100) {
          setHeaderVisible(false);
        } else {
          setHeaderVisible(true);
        }
      } else {
        setHeaderVisible(true);
      }
      
      lastScrollY.current = currentScrollY;
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
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

  // Group filtered items by category
  const groupedItems = useMemo(() => {
    return filteredItems.reduce((acc, item) => ({
      ...acc,
      [item.category]: [...(acc[item.category] || []), item],
    }), {} as Record<string, WishlistItem[]>);
  }, [filteredItems]);

  // Count active filters for mobile badge
  const activeFilterCount = useMemo(() => {
    let count = 0;
    if (costRange[0] !== 0 || costRange[1] !== MAX_COST_INDEX) count++;
    if (selectedCategories.length !== CATEGORY_LIST.length) count++;
    if (hasLinkOnly) count++;
    return count;
  }, [costRange, selectedCategories, hasLinkOnly]);

  return (
    <div className="app">
      <header className={`app-header ${headerVisible ? '' : 'header-hidden'}`}>
        <h1>2025 - Rusty's Requisitions</h1>
        <p className="subtitle">Thank you for considering the set of things that could contribute to my day to day existence and wellbeing. Happy Holidays!</p>
      </header>

      <div className="main-layout">
        <aside className="sidebar">
          <FilterControls
            costRange={costRange}
            onCostRangeChange={setCostRange}
            selectedCategories={selectedCategories}
            onCategoriesChange={setSelectedCategories}
            hasLinkOnly={hasLinkOnly}
            onHasLinkChange={setHasLinkOnly}
            isExpanded={filtersExpanded}
            onToggleExpand={() => setFiltersExpanded(!filtersExpanded)}
            activeFilterCount={activeFilterCount}
          />
        </aside>
        
        <main className="content">
          {Object.entries(groupedItems).map(([category, items]) => (
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

          {filteredItems.length === 0 && (
            <div className="no-results">
              <p>No items match your filters</p>
            </div>
          )}
        </main>
      </div>

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
