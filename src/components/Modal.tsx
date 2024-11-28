import React from 'react';
import { WishlistItem } from '../types/types';
import '../styles/Modal.css';

interface ModalProps {
  item: WishlistItem | null;
  onClose: () => void;
}

export const Modal: React.FC<ModalProps> = ({ item, onClose }) => {
  if (!item) return null;

  // Helper to render any field with a title if it exists
  const renderSection = (title: string, content: any) => {
    if (!content) return null;
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
                            {key}: {value}
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
        {renderSection("Description", item.description)}
        {renderSection("Thoughts", item.thoughts)}
        
        {/* Render any additional fields that might exist */}
        {Object.entries(item)
          .filter(([key]) => !['name', 'category', 'description', 'thoughts'].includes(key))
          .map(([key, value]) => renderSection(key, value))}
      </div>
    </div>
  );
}; 