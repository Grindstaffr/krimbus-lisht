import React from 'react';
import { WishlistItem as WishlistItemType } from '../types/types';
import '../styles/WishlistItem.css';

interface Props {
  item: WishlistItemType;
  onHover: (item: WishlistItemType | null) => void;
  onClick: (item: WishlistItemType) => void;
}

export const WishlistItem = ({ item, onHover, onClick }: Props) => {
  return (
    <div 
      className="wishlist-item"
      onMouseEnter={() => onHover(item)}
      onMouseLeave={() => onHover(null)}
      onClick={() => onClick(item)}
    >
      <h3>{item.name}</h3>
      <p>{item.description}</p>
    </div>
  );
}; 