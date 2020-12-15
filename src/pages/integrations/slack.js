import React from "react"

import Layout from "../../components/layout"
import SEO from "../../components/seo"
import SlackHiStaffImage from "../../../static/images/integration/slack-histaff.svg";
import thumbnailEventWebhook from "../../../static/images/integration/slack-event-webhook.png";
import thumbnailNewsWebhook from "../../../static/images/integration/slack-news-webhook.png";
import thumbnailNoteWebhook from "../../../static/images/integration/slack-note-webhook.png";
import thumbnailGuid1 from "../../../static/images/integration/slack-guid-1.png";
import thumbnailGuid2 from "../../../static/images/integration/slack-guid-2.png";

const AboutPage = () => (
    <Layout>
        <SEO title="Slack Integration"/>

        <div className={"page-header"}>
            <img alt={"Slack"} src={SlackHiStaffImage}/>
            <h2>Lorem Ipsum</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit<br />Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </div>

        <div className={"container"}>
            <div className={"features"}>
                <div className={"feature__item"}>
                    <div className={"row"}>
                        <div className={"col-6 first"}>
                            <div className={"thumbnail"}>
                                <img alt={"Event"} src={thumbnailEventWebhook}/>
                            </div>
                        </div>

                        <div className={"col-6"}>
                            <div className={"feature__content"}>
                                <h2>Lorem ipsum</h2>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className={"feature__item"}>
                    <div className={"row"}>
                        <div className={"col-6"}>
                            <div className={"feature__content"}>
                                <h2>Lorem ipsum dolor</h2>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                            </div>
                        </div>

                        <div className={"col-6 first"}>
                            <div className={"thumbnail"}>
                                <img alt={"Board"} src={thumbnailNewsWebhook}/>
                            </div>
                        </div>
                    </div>
                </div>

                <div className={"feature__item"}>
                    <div className={"row"}>
                        <div className={"col-6 first"}>
                            <div className={"thumbnail"}>
                                <img alt={"News"} src={thumbnailNoteWebhook}/>
                            </div>
                        </div>

                        <div className={"col-6"}>
                            <div className={"feature__content"}>
                                <h2>Lorem ipsum</h2>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div className={"bg-color"}>
            <div className={"container"}>
                <div className={"integration-guid"}>
                    <div className={"title"}>
                        <h2>Lorem ipsum dolor sit amet, consectetur adipiscing elit</h2>
                    </div>

                    <div className={"content"}>
                        <h4>Overview</h4>
                        <p>YLorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                        <h4>Step 1</h4>
                        <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque.</p>
                        <img alt={"News"} src={thumbnailGuid1}/>

                        <h4>Step 2</h4>
                        <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae.</p>
                        <img alt={"News"} src={thumbnailGuid2}/>
                    </div>
                </div>
            </div>
        </div>
    </Layout>
)

export default AboutPage
