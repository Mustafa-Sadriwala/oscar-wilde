import { Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";

import './../styles/Home.css';

export default function Home() {
    return (
        <div>
            <div className="fancy-border">
                <Container fluid style={{ padding: '5rem' }}>
                    <div style={{ width: '100%', textAlign: "center" }}>
                        <h1>Oscar Wilde</h1>
                    </div>
                    <Row>
                        <Col>
                            <div style={{ textAlign: "center" }}>
                                <h2>Table of Contents</h2>
                            </div>
                            <div style={{paddingLeft: 20, paddingTop: 20}}>
                                <Link to="/wilde-websites" className="highlight">
                                    <h4>Chapter One: Wilde Websites</h4>
                                </Link>
                            </div>
                            <div style={{paddingLeft: 20, paddingTop: 20}}>
                                <Link to="/wilde-era-websites" className="highlight">
                                    <h4>Chapter Two: Websites on Wilde's Era</h4>
                                </Link>
                            </div>
                            <div style={{paddingLeft: 20, paddingTop: 20}}>
                                <Link to="/adaptations" className="highlight">
                                    <h4>Chapter Three: Adaptations of Wilde</h4>
                                </Link>
                            </div>
                        </Col>
                        <Col>
                            <div style={{ textAlign: "center" }}>
                                <h2>Acknowledgements</h2>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>
        </div>
    )
}