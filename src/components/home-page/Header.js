import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

export const Header = () => (
    <header className="header">
        <div className="content-container">
            <div className="header__content">
                <div className="header__title-content">
                    <Link className="header__title-content__title" to="/">
                        <h1>Seedbright.</h1>
                    </Link>
                </div>
                <div className="header__subtitle-content">
                    <Link className="header__subtitle" to="/work">
                        <h2>Work</h2>
                    </Link>
                    <Link className="header__subtitle" to="/about">
                        <h2>About</h2>
                    </Link>
                    <Link className="header__subtitle" to="/news">
                        <h2>News</h2>
                    </Link>
                    <Link className="header__subtitle" to="/careers">
                        <h2>Careers</h2>
                    </Link>
                    <Link className="header__subtitle" to="/contact">
                        <h2>Contact</h2>
                    </Link>
                </div>
            </div>
        </div>
    </header>
);

const mapDispatchToProps = () => ({

});

export default connect(undefined, mapDispatchToProps)(Header);
