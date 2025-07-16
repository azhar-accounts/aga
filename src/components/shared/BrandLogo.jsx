import React from 'react';
import BRAND_ICON from '../../assets/brand-icon.png';
export default function BrandLogo() {
    return (
        <a href="#" className="flex items-center space-x-2">
            <img src={BRAND_ICON} alt="Nexcent Logo" />
            <p className="text-xl font-semibold text-gray-800">
                Azhar Global Accounting
            </p>
        </a>
    );
}
