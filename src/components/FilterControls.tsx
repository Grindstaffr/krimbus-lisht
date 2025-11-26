import { getCostRangeLabel, MAX_COST_INDEX } from '../data/cost';
import { CATEGORY_LIST, CATEGORY_LABELS, Category } from '../data/categories';
import '../styles/FilterControls.css';

interface FilterControlsProps {
  costRange: [number, number];
  onCostRangeChange: (range: [number, number]) => void;
  selectedCategories: string[];
  onCategoriesChange: (categories: string[]) => void;
  hasLinkOnly: boolean;
  onHasLinkChange: (hasLink: boolean) => void;
  isExpanded: boolean;
  onToggleExpand: () => void;
  activeFilterCount: number;
}

export function FilterControls({
  costRange,
  onCostRangeChange,
  selectedCategories,
  onCategoriesChange,
  hasLinkOnly,
  onHasLinkChange,
  isExpanded,
  onToggleExpand,
  activeFilterCount
}: FilterControlsProps) {
  const [minCost, maxCost] = costRange;

  const handleMinChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newMin = parseInt(e.target.value);
    onCostRangeChange([Math.min(newMin, maxCost), maxCost]);
  };

  const handleMaxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newMax = parseInt(e.target.value);
    onCostRangeChange([minCost, Math.max(newMax, minCost)]);
  };

  const allCategoriesSelected = selectedCategories.length === CATEGORY_LIST.length;

  const toggleCategory = (category: string) => {
    // If all selected, clicking one filters down to just that one
    if (allCategoriesSelected) {
      onCategoriesChange([category]);
      return;
    }
    
    // Otherwise toggle normally
    if (selectedCategories.includes(category)) {
      onCategoriesChange(selectedCategories.filter(c => c !== category));
    } else {
      onCategoriesChange([...selectedCategories, category]);
    }
  };

  const toggleAllCategories = () => {
    if (allCategoriesSelected) {
      onCategoriesChange([]);
    } else {
      onCategoriesChange([...CATEGORY_LIST]);
    }
  };

  return (
    <div className={`filter-controls ${isExpanded ? 'expanded' : ''}`}>
      {/* Mobile toggle header */}
      <button className="filter-toggle" onClick={onToggleExpand}>
        <span className="filter-toggle-text">
          Filters
          {activeFilterCount > 0 && (
            <span className="filter-badge">{activeFilterCount}</span>
          )}
        </span>
        <span className={`filter-toggle-icon ${isExpanded ? 'open' : ''}`}>
          ▼
        </span>
      </button>

      <div className="filter-content">
        {/* Cost Range Slider */}
        <div className="filter-section cost-filter">
          <h3>Budget</h3>
          <div className="cost-range-label">{getCostRangeLabel(minCost, maxCost)}</div>
          <div className="dual-slider">
            <div className="slider-track">
              <div 
                className="slider-fill"
                style={{
                  left: `${(minCost / MAX_COST_INDEX) * 100}%`,
                  width: `${((maxCost - minCost) / MAX_COST_INDEX) * 100}%`
                }}
              />
            </div>
            <input
              type="range"
              min="0"
              max={MAX_COST_INDEX}
              value={minCost}
              onChange={handleMinChange}
              className="slider slider-min"
            />
            <input
              type="range"
              min="0"
              max={MAX_COST_INDEX}
              value={maxCost}
              onChange={handleMaxChange}
              className="slider slider-max"
            />
          </div>
        </div>

        {/* Category Filter */}
        <div className="filter-section category-filter">
          <h3>Categories</h3>
          <div className="category-buttons">
            <button 
              className={`category-btn all-btn ${allCategoriesSelected ? 'active' : ''}`}
              onClick={toggleAllCategories}
            >
              All
            </button>
            {CATEGORY_LIST.map(category => (
              <button
                key={category}
                className={`category-btn ${selectedCategories.includes(category) ? 'active' : ''}`}
                onClick={() => toggleCategory(category)}
              >
                {CATEGORY_LABELS[category as Category]}
              </button>
            ))}
          </div>
        </div>

        {/* Has Link Filter */}
        <div className="filter-section link-filter">
          <label className="checkbox-label">
            <input
              type="checkbox"
              checked={hasLinkOnly}
              onChange={(e) => onHasLinkChange(e.target.checked)}
            />
            <span>Only show items with links</span>
          </label>
        </div>
      </div>
    </div>
  );
}
