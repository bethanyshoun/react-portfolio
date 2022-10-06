import React from 'react';

const Header = ({ name }) => {
    console.log(name);
    return (
        <footer className="flex-row px-1">
            <h6 id="footer">
            by Bethany Shoun 2022
            </h6>
        </footer>
    );

}

export default Header;