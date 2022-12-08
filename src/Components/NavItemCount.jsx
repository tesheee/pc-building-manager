import React from 'react';

export default function NavItemCount( {count} ) {
    const a = count;
    return(
        <div className={a > 0 ? 'nav-item-count':'nav-item-count hide'}>
            {a}
        </div>
)}
