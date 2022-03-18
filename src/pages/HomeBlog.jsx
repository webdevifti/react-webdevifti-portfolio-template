import React, { Component } from 'react';
import HomeBlogsItem from '../components/HomeBlogsItem';
import "../css/HomeBlog.scss";
export default class HomeBlog extends Component {
    render() {
        return (
            <section id="blog" className="blog-section">
                <div className="container">
                    <div className="section-header">
                        <h1 className="section-title blog-section-title">Blog</h1>
                        <p className="section-short-description blog-section-short-description">Lorem ipsum dolor sit amet consectetur adipisicing elit. Est, enim.</p>
                    </div>
                    <HomeBlogsItem />
                </div>
            </section>
        )
    }
}
