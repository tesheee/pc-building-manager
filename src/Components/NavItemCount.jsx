import React from 'react';
import { useSelector } from 'react-redux';

export default function NavItemCount() {
    const { items } = useSelector(state => state.cart);
    return(
        <div className={items.length > 0 ? 'nav-item-count':'nav-item-count hide'}>
            {items.length}
        </div>
)}
