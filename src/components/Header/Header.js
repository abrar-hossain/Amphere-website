import React from 'react';
import NavBars from '../Navbars/NavBars';

const Header = () => {
    return (
        <div className="bg-dark fixed-top">
            <NavBars></NavBars>
        </div>
    );
};

export default Header;