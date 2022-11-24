import React from 'react';

export default function NavItemCount() {
    const a = 0;
    return(
        <div className={a > 0 ? 'nav-item-count':'nav-item-count hide'}>
            {a}
        </div>
)}
