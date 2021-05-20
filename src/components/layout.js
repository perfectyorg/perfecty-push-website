/**
 * Layout component that queries for data
 * with Gatsby's StaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import {StaticQuery, graphql, Link} from "gatsby"

import Header from "./header"
import "../../static/styles/main.scss"
import logo from "../../static/images/logo.svg"

const Layout = ({children}) => (
    <StaticQuery query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
          }
        }
      }
    `} render={data => (
        <>
            <Header siteTitle={data.site.siteMetadata.title}/>
            <main>{children}</main>
            <footer>
                <div className={"container"}>
                    <div className={"row"}>
                        <div className={"col-sm-5"}>
                            <div className={"widget__item"}>
                                <div className={"logo"}>
                                    <Link to="/" title={"Perfecty"}>
                                        <img alt={"Logo"} src={logo} loading={"lazy"}/>
                                    </Link>
                                </div>

                                <div className={"about"}>
                                    <p>WordPress plugin for self-hosted Web Push Notifications</p>
                                </div>
                            </div>
                        </div>

                        <div className={"col-sm-3"}>
                            <div className={"widget__item"}>
                                <ul className={"links"}>
                                    <h4>Perfecty Push</h4>
                                    <ul>
                                        <li><Link to="https://docs.perfecty.org" title={"Documentation"}>Documentation</Link></li>
                                        <li><Link className={"links__special"} to="/contact" title={"Contact Us"}>Feedback</Link></li>
                                    </ul>
                                </ul>
                            </div>
                        </div>

                        <div className={"col-sm-2"}>
                            <div className={"widget__item"}>
                                <div className={"links"}>
                                    <h4>Support</h4>
                                    <ul>
                                        <li><Link to="/contact" title={"Contact Us"}>Contact</Link></li>
                                    </ul>
                                </div>
                            </div>
                        </div>

                        <div className={"col-sm-2"}>
                            <div className={"widget__item"}>
                                <div className={"social"}>
                                    <a href="https://github.com/rwngallego/perfecty-push-wp" target={"_blank"} rel="noreferrer" title={"GitHub"} aria-label={"GitHub"}><i className="bi bi-github"></i></a>
                                    <a href="https://www.facebook.com/perfectypush/" target={"_blank"} rel="noreferrer"  title={"Facebook"} aria-label={"Facebook"}><i className="bi bi-facebook"></i></a>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className={"copyright"}>
                        <p>Copyright {new Date().getFullYear()}, {` `} <a href="https://perfecty.org" title={"Perfecty"}>Perfecty.org</a>.</p>
                    </div>
                </div>
            </footer>
        </>
    )}/>
)

Layout.propTypes = {
    children: PropTypes.node.isRequired,
}

export default Layout
