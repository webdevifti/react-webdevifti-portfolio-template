import React, { Component } from 'react';
import AllPortfolioItems from '../components/AllPortfolioItems';
import HtmlConversionPortfolioItems from '../components/HtmlConversionPortfolioItems';
import PhpPortfolioItems from '../components/PhpPortfolioItems';
import ReactjsPortfolioItems from '../components/ReactjsPortfolioItems';
import WordpressPortfolioItems from '../components/WordpressPortfolioItems';

import "../css/Portfolio.scss";
export default class Portfolio extends Component {
    constructor(props){
        super(props)

        this.state = {
            tab: 'all',
            tabAll: true,
            tabhtmlconversion: false,
            tabreactjs: false,
            tabwp: false,
            tabphp: false,
        }
        
    }
    handleAllTab = () => {
        this.setState({
            tab: 'all',
            tabAll: true,
            tabhtmlconversion: false,
            tabreactjs: false,
            tabwp: false,
            tabphp: false,
        })
    }
    handleHtmlConversionTab = () => {
        this.setState({
            tab: 'htmlconversion',
            tabhtmlconversion: true,
            tabAll: false,
            tabreactjs: false,
            tabwp: false,
            tabphp: false,
        })
    }
    handleReactjsTab = () => {
        this.setState({
            tab: 'reactjs',
            tabhtmlconversion: false,
            tabAll: false,
            tabreactjs: true,
            tabwp: false,
            tabphp: false,
        })
    }
    handleWpTab = () => {
        this.setState({
            tab: 'wp',
            isActive: true,
            tabAll: false,
            tabhtmlconversion: false,
            tabreactjs: false,
            tabwp: true,
            tabphp: false,
        })
    }
    handlePhpTab = () => {
        this.setState({
            tab: 'php',
            tabAll: false,
            tabhtmlconversion: false,
            tabreactjs: false,
            tabwp: false,
            tabphp: true,
        })
    }
    render() {
        return (
            <section id="portfolio" className="portfolio-section">
                <div className="container">
                    <div className="section-header">
                        <h1 className="section-title portfolio-section-title">Portfolio</h1>
                        <p className="section-short-description portfolio-section-short-description">Lorem ipsum dolor sit amet consectetur adipisicing elit. Est, enim.</p>
                    </div>
                    <div className="myportfolioes">
                        <div className="portfolio-list-name">
                            <button onClick={this.handleAllTab} className={this.state.tabAll ? 'active': ''}>All</button>
                            <button onClick={this.handleHtmlConversionTab} className={this.state.tabhtmlconversion ? 'active': ''}>HTML Conversion</button>
                            <button onClick={this.handleReactjsTab} className={this.state.tabreactjs ? 'active': ''} >React JS</button>
                            <button onClick={this.handleWpTab} className={this.state.tabwp ? 'active': ''} >Wordpress</button>
                            <button onClick={this.handlePhpTab} className={this.state.tabphp ? 'active': ''} >PHP / Laravel</button>
                        </div>
                        <div className="portfolio-items">
                            {this.state.tab === 'all' ? <AllPortfolioItems /> : ''}
                            {this.state.tab === 'htmlconversion' ?  <HtmlConversionPortfolioItems /> : ''  }
                            {this.state.tab === 'reactjs' ? <ReactjsPortfolioItems /> : ''}
                            {this.state.tab === 'wp' ? <WordpressPortfolioItems /> : ''}
                            {this.state.tab === 'php' ? <PhpPortfolioItems /> : ''}
                           
                        </div>
                    </div>
                </div>
            </section>
        )
    }
}
