import React from 'react';
import { WishlistItem } from '../types/types';
import '../styles/Tooltip.css';

interface TooltipProps {
  item: WishlistItem | null;
  mousePosition: { x: number; y: number };
  shouldRender: boolean;
}

export const Tooltip: React.FC<TooltipProps> = ({ item, mousePosition, shouldRender }) => {
  if (!shouldRender || !item) return null;

  return (
    <div 
      className="tooltip"
      style={{
        left: mousePosition.x + 10,
        top: mousePosition.y + 10,
        transform: 'translate(-50%, -100%)',
        pointerEvents: 'none'
      }}
    >
      {item.description && (
        <p>{item.description}</p>
      )}
      {item.thoughts && item.thoughts.length > 0 && (
        <div className="thoughts">
          <strong>Thoughts:</strong>
          <ul>
            {item.thoughts.map((thought, index) => (
              <li key={index}>{thought}</li>
            ))}
          </ul>
        </div>
      )}
      {/* Render any additional fields that might exist */}
      {Object.entries(item)
        .filter(([key]) => !['name', 'category', 'description', 'thoughts'].includes(key))
        .map(([key, value]) => (
          <p key={key}><strong>{key}:</strong> {
            typeof value === 'string' ? value : JSON.stringify(value)
          }</p>
        ))}
    </div>
  );
}; 