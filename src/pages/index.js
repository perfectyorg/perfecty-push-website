import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import featureImage from "../../static/images/screenshot-1.png";
import thumbnailAuthPush from "../../static/images/screenshot-auto-push.png"
import thumbnailCustom from "../../static/images/screenshot-custom.png"
import thumbnailPublicPreferences from "../../static/images/screenshot-public-preferences.png"
import thumbnailManageUsers from "../../static/images/screenshot-manage-users.png"
import thumbnailAppareance from "../../static/images/screenshot-appareance.png"

const IndexPage = () => (
    <Layout>
        <SEO title="Self-hosted Push Notifications"/>

        <div className={"page-header home"}>
            <h1>Self-hosted Push plugin</h1>
            <p>Send web Push Notifications directly from your WordPress server:<br/> No hidden fees, no third-party dependencies and you own your data.</p>
            <img alt={"Dashboard"} src={featureImage}/>
        </div>

        <div className={"container"}>
            <div className={"features"}>
                <div className={"feature__item"}>
                    <div className={"row"}>
                        <div className={"col-sm-6"}>
                            <div className={"feature__content"}>
                                <h2>Self-hosted server</h2>
                                <p>All the information is processed and stored in your WordPress server.</p>
                                <p>No need of third-party API Keys.</p>
                            </div>
                        </div>

                        <div className={"col-sm-6"}>
                            <div className={"thumbnail"}>
                                <img alt={"Team"} src={thumbnailManageUsers}/>
                            </div>
                        </div>
                    </div>
                </div>

                <div className={"feature__item"}>
                    <div className={"row"}>
                        <div className={"col-sm-6"}>
                            <div className={"thumbnail"}>
                                <img alt={"News"} src={thumbnailPublicPreferences}/>
                            </div>
                        </div>

                        <div className={"col-sm-6"}>
                            <div className={"feature__content"}>
                                <h2>Opt-in/opt-out</h2>
                                <p>Your users can opt-out using the public widget.</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className={"feature__item"}>
                    <div className={"row"}>
                        <div className={"col-sm-6"}>
                            <div className={"feature__content"}>
                                <h2>Custom notifications</h2>
                                <p>Send notifications with custom title, message, image, url to open and icon.</p>
                            </div>
                        </div>

                        <div className={"col-sm-6"}>
                            <div className={"thumbnail"}>
                                <img alt={"Board"} src={thumbnailCustom}/>
                            </div>
                        </div>
                    </div>
                </div>

                <div className={"feature__item"}>
                    <div className={"row"}>
                        <div className={"col-sm-6"}>
                            <div className={"thumbnail"}>
                                <img alt={"Send on new Post"} src={thumbnailAuthPush}/>
                            </div>
                        </div>

                        <div className={"col-sm-6"}>
                            <div className={"feature__content"}>
                                <h2>Automatic notifications</h2>
                                <p>Send Push Notifications when you publish a new post.</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className={"feature__item"}>
                    <div className={"row"}>
                        <div className={"col-sm-6"}>
                            <div className={"feature__content"}>
                                <h2>Custom appearance</h2>
                                <p>Easily change the public widget texts and feel free to override the CSS styles.</p>
                            </div>
                        </div>

                        <div className={"col-sm-6"}>
                            <div className={"thumbnail"}>
                                <img alt={"Users"} src={thumbnailAppareance}/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div className={"call-to-action"}>
            <div className={"container"}>
                <div className={"call-to-action__content"}>
                    <h2>Install it for free!</h2>
                    <p>Perfecty Push is for free, it's Open Source.</p>
                </div>

                <div className={"button"}>
                    <a href="https://wordpress.org/plugins/perfecty-push-notifications/" target={"_blank"}>Install</a>
                </div>
            </div>
        </div>
    </Layout>
)

export default IndexPage
