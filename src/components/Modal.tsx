import React, { useState } from 'react';
import { WishlistItem } from '../types/types';
import { getCostLabel } from '../data/cost';
import '../styles/Modal.css';

interface ModalProps {
  item: WishlistItem | null;
  onClose: () => void;
}

export const Modal: React.FC<ModalProps> = ({ item, onClose }) => {
  const [showRealCost, setShowRealCost] = useState(false);

  if (!item) return null;

  const costLabel = item.cost !== undefined ? getCostLabel(item.cost) : null;

  // Helper to render any field with a title if it exists
  const renderSection = (title: string, content: any) => {
    if (!content) return null;

    // Special handling for links
    if (title.toLowerCase() === 'link') {
      return (
        <div className="modal-section">
          <a 
            href={content} 
            target="_blank" 
            rel="noopener noreferrer" 
            className="link-button"
          >
            Link
          </a>
        </div>
      );
    }

    return (
      <div className="modal-section">
        <h3>{title}</h3>
        {typeof content === 'string' ? (
          <p>{content}</p>
        ) : Array.isArray(content) ? (
          <ul>
            {content.map((item, index) => (
              <li key={index}>
                {typeof item === 'string' 
                  ? item 
                  : (
                    <div className="details">
                      <strong>{item.brand} {item.model}</strong>
                      {Object.entries(item)
                        .filter(([key]) => !['brand', 'model'].includes(key))
                        .map(([key, value]) => (
                          <p key={key} className="additional-info">
                            {key}: {String(value)}
                          </p>
                        ))}
                    </div>
                  )
                }
              </li>
            ))}
          </ul>
        ) : (
          <p>{JSON.stringify(content)}</p>
        )}
      </div>
    );
  };

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={e => e.stopPropagation()}>
        <button className="close-button" onClick={onClose}>×</button>
        
        <h2>{item.name}</h2>

        {costLabel && (
          <div className="modal-section cost-section">
            <h3>Approximate Cost</h3>
            <p 
              className="cost-display"
              onMouseEnter={() => setShowRealCost(true)}
              onMouseLeave={() => setShowRealCost(false)}
            >
              <span className="cost-value">{costLabel}</span>
              {showRealCost && item.cost !== undefined && (
                <span className="cost-tooltip">${item.cost.toLocaleString()}</span>
              )}
            </p>
          </div>
        )}

        {renderSection("Description", item.description)}
        {renderSection("Thoughts", item.thoughts)}
        {renderSection("Link", item.link)}
        
        {/* Render any additional fields that might exist */}
        {Object.entries(item)
          .filter(([key]) => !['name', 'category', 'description', 'thoughts', 'link', 'cost'].includes(key))
          .map(([key, value]) => renderSection(key, value))}
      </div>
    </div>
  );
};
