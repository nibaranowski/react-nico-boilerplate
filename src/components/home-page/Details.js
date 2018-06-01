import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

export const Customers = () => (
    <header className="details">
        <div className="content-container">

            <div className="details__content">
                <div className="details__content__detail">
                    <div className="details__content__detail__img">
                        <img src="images/speed.png" alt="Speed" />
                    </div>
                    <div className="details__content__detail__text">
                        <h1>Speed</h1>
                        <p>We use the Scrum method to meet your deadlines and follow changes along the project.</p>
                    </div>
                </div>
                <div className="details__content__detail">
                    <div className="details__content__detail__img">
                        <img src="images/quality.png" alt="Quality" />
                    </div>
                    <div className="details__content__detail__text">
                        <h1>Quality</h1>
                        <p>We implement the toughest quality control processes to insure we meet the highest quality standards. </p>
                    </div>
                </div>
                <div className="details__content__detail">
                    <div className="details__content__detail__img">
                        <img src="images/transparency.png" alt="Transparency" />
                    </div>
                    <div className="details__content__detail__text">
                        <h1>Transparency</h1>
                        <p>You can monitor on a daily basis the progress made during each phases of the project by using our task management tool.</p>
                    </div>
                </div>
            </div>

            <div className="details__content">
                <div className="details__content__detail">
                    <div className="details__content__detail__img">
                        <img src="images/expertise.png" alt="Expertise" />
                    </div>
                    <div className="details__content__detail__text">
                        <h1>Expertise</h1>
                        <p>We work with the best developers and designers only. Our team is composed of experts that received multiple international awards.</p>
                    </div>
                </div>
                <div className="details__content__detail">
                    <div className="details__content__detail__img">
                        <img src="images/passion.png" alt="Passion" />
                    </div>
                    <div className="details__content__detail__text">
                        <h1>Passion</h1>
                        <p>We love coding and developing game-changing new products. Passion is what drives us to give 200% every day.</p>
                    </div>
                </div>
                <div className="details__content__detail">
                    <div className="details__content__detail__img">
                        <img src="images/reliability.png" alt="Reliability" />
                    </div>
                    <div className="details__content__detail__text">
                        <h1>Reliability</h1>
                        <p>We are thriving to create long-term relationships with our clients. Our products are solid and built for the long term.</p>
                    </div>
                </div>
            </div>

            <div className="details__content__ipad">
                <img src="images/ipad.png" alt="iPad" />
            </div>

        </div>
    </header>
);

const mapDispatchToProps = () => ({

});

export default connect(undefined, mapDispatchToProps)(Customers);