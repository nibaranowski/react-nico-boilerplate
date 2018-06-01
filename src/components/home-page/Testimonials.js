import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

export const Testimonials = () => (
    <header className="testimonials">
        <div className="content-container">
            <div className="testimonials__title">
                <h1>Find what our customers say.</h1>
            </div>
            <div className="testimonials__content">
                <div className="testimonials__content__card">
                    <img src="/images/person1.png" />
                    <h3>Jean-Michel Hermange</h3>
                    <h4>COO, BNP Cardif Belgium </h4>
                    <blockquote className="testimonials__content__card__quote">      Create things so easy beautiful, professional things so easy, you cit today.  professional things so easy, you cit today .</blockquote>
                </div>
                <div className="testimonials__content__card">
                    <img src="/images/person1.png" />
                    <h3>Benoit Gailly</h3>
                    <h4>Prof., Louvain Business School </h4>
                    <blockquote className="testimonials__content__card__quote">      Create things so easy beautiful, professional things so easy, you cit today.  professional things so easy, you cit today .</blockquote>
                </div>
                <div className="testimonials__content__card">
                    <img src="/images/person1.png" />
                    <h3>Damien Jacquinet</h3>
                    <h4>Founder, Impacteo </h4>
                    <blockquote className="testimonials__content__card__quote">      Create things so easy beautiful, professional things so easy, you cit today.  professional things so easy, you cit today .</blockquote>
                </div>
            </div>
        </div>
    </header>
);

const mapDispatchToProps = () => ({

});

export default connect(undefined, mapDispatchToProps)(Testimonials);
