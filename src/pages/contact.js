import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"

const ContactPage = () => (
    <Layout>
        <SEO title="Contact"/>
        <div className={"container"}>
            <div className={"content"}>
                <div className={"title"}>
                    <h1>Contact</h1>
                </div>

                <div className={"row"}>
                    <div className={"col-7"}>
                        <p>Do you want to contact us? Feel free to do it!</p>
                    </div>

                    <div className={"col-5"}>
                        <div className={"contact-items"}>
                            <p>Send us an email to:</p>
                            <h2>hello@perfecty.org</h2>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </Layout>
)

export default ContactPage
