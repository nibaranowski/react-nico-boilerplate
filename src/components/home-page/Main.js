import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

export const Main = () => (
    <header className="main">
        <div className="content-container">
            <div className="main__content">
                <div className="main__content__small-illustration">
                    <img src="/images/main_illustration.png" />
                </div>
                <div className="main__content__text">
                    <h1>Supercharged digital agency</h1>
                    <p>Seedbright is a digital agency focusing on crafting delightful products, brands and digital customer experience.</p>
                    <a href="mailto:hello@seedbright.com">
                        <img src="/images/arrow.svg" />
                        <span>Contact Us</span>
                    </a>
                </div>
                <div className="main__content__illustration">
                    <img src="/images/main_illustration.png" />
                </div>
            </div>
        </div>
    </header>
);

const mapDispatchToProps = () => ({

});

export default connect(undefined, mapDispatchToProps)(Main);
