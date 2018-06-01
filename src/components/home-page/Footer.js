import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

export const Footer = () => (
    <header className="footer">
        <div className="content-container">
            <div className="footer__content">
                <div className="footer__title-content">
                    <Link className="footer__title-content__title" to="/">
                        <h1>Seedbright.</h1>
                    </Link>
                </div>
                <div className="footer__sections">
                    <div className="footer__sections__column">
                        <div className="footer__sections__column__title">
                            <h2>COMPANY</h2>
                        </div>
                        <Link className="footer__sections__column__subtitle" to="/work">
                            <h2>About</h2>
                        </Link>
                        <Link className="footer__sections__column__subtitle" to="/jobs">
                            <h2>Jobs</h2>
                        </Link>
                        <Link className="footer__sections__column__subtitle" to="/blog">
                            <h2>Blog</h2>
                        </Link>
                        <Link className="footer__sections__column__subtitle" to="/press">
                            <h2>Press</h2>
                        </Link>
                    </div>
                    <div className="footer__sections__column">
                        <div className="footer__sections__column__title">
                            <h2>RESOURCES</h2>
                        </div>
                        <Link className="footer__sections__column__subtitle" to="/support">
                            <h2>Support</h2>
                        </Link>
                        <Link className="footer__sections__column__subtitle" to="/contact">
                            <h2>Contact</h2>
                        </Link>
                        <Link className="footer__sections__column__subtitle" to="/privacy">
                            <h2>Privacy & terms</h2>
                        </Link>
                    </div>
                    <div className="footer__sections__column">
                        <div className="footer__sections__column__title">
                            <h2>CONTACT</h2>
                        </div>
                        <div className="footer__sections__column__subtitle--mod">
                            <h2>Marszalkowska 18/29 <br />Warsaw, Poland</h2>
                        </div>
                        <Link className="footer__sections__column__subtitle" to="/twitter">
                            <h2>Twitter</h2>
                        </Link>
                        <Link className="footer__sections__column__subtitle" to="/instagram">
                            <h2>Instagram</h2>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    </header>
);

const mapDispatchToProps = () => ({

});

export default connect(undefined, mapDispatchToProps)(Footer);
