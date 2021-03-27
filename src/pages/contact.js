import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import {Button, Form} from "react-bootstrap"

const ContactPage = () => (
    <Layout>
        <SEO title="Contact"/>
        <div className={"container"}>
            <div className={"content"}>
                <div className={"title"}>
                    <h1>Contact</h1>
                </div>

                <div className={"row"}>
                    <div className={"col-sm-7"}>
                        <p>Do you want to contact us? Feel free to send us a message!</p>
                        <Form name="contact" method="post" data-netlify="true" data-netlify-honeypot="not-pass">
                            <Form.Group controlId={"form-name"}>
                                <Form.Control type={"hidden"} name={"form-name"} value={"contact"}></Form.Control>
                            </Form.Group>
                            <Form.Group className={"not-pass"} controlId={"not-pass"}>
                                <Form.Label>Do not fill this:</Form.Label>
                                <Form.Control type={"text"} name={"not-pass"}></Form.Control>
                            </Form.Group>
                            <Form.Group controlId={"name"}>
                                <Form.Label>Name:</Form.Label>
                                <Form.Control type={"text"} name={"name"}></Form.Control>
                            </Form.Group>
                            <Form.Group controlId={"email"}>
                                <Form.Label>Email:</Form.Label>
                                <Form.Control type={"email"} name={"email"}></Form.Control>
                            </Form.Group>
                            <Form.Group controlId={"message"}>
                                <Form.Label>Message:</Form.Label>
                                <Form.Control as={"textarea"} name={"message"} rows={5}></Form.Control>
                            </Form.Group>
                            <Button variant={"primary"} type={"submit"} name={"submit"}>Send</Button>
                        </Form>
                    </div>

                    <div className={"col-sm-5"}>
                        <div className={"contact-items"}>
                            <p>Otherwise send us an email to:</p>
                            <h2>hello@perfecty.org</h2>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </Layout>
)

export default ContactPage
