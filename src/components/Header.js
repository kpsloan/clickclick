import React from 'react';

const Header = props => (
    <div className="container text-center" id="header-container">
        <br/>
        <h1 id="logo"><b>Clicky Game</b></h1>
        <br/>
        <h4 className="subtitle">Instructions:</h4>
        <br/>
        <h5 className="subtitle">Click on an image to earn points, but don't click on any more than once!</h5><br />
        <br/>
    </div>
)

export default Header;