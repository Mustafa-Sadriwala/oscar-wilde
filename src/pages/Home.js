import { Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";

import './../styles/Home.css';

export default function Home() {
    return (
        <div>
            <div className="border">
                <Container fluid style={{ padding: '2rem' }}>
                    <div style={{ width: '100%', textAlign: "center", padding: "2rem" }}>
                        <h1>Oscar Wilde</h1>
                    </div>
                    <Row>
                        <Col>
                            <div style={{ textAlign: "center" }}>
                                <h2 style={{ paddingBottom: "0.5rem" }}>Table of Contents</h2>
                            </div>
                            <div style={{ paddingLeft: 20, paddingTop: 20 }}>
                                <Link to="/wilde-websites" className="highlight">
                                    <h4>Chapter One: Wilde Websites</h4>
                                </Link>
                            </div>
                            <div style={{ paddingLeft: 20, paddingTop: 20 }}>
                                <Link to="/wilde-era-websites" className="highlight">
                                    <h4>Chapter Two: Websites on Wilde's Era</h4>
                                </Link>
                            </div>
                            <div style={{ paddingLeft: 20, paddingTop: 20 }}>
                                <Link to="/adaptations" className="highlight">
                                    <h4>Chapter Three: Adaptations of Wilde</h4>
                                </Link>
                            </div>
                        </Col>
                        <Col>
                            <div style={{ textAlign: "center" }}>
                                <h2 style={{ paddingBottom: "0.5rem" }}>Acknowledgements</h2>
                                <p>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque nisl eros, pulvinar facilisis justo mollis, auctor consequat urna. Morbi a bibendum metus.
                                    Donec scelerisque sollicitudin enim eu venenatis. Duis tincidunt laoreet ex, in pretium orci vestibulum eget. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Duis pharetra luctus lacus ut vestibulum. Maecenas ipsum lacus, lacinia quis posuere ut, pulvinar vitae dolor.
                                    Integer eu nibh at nisi ullamcorper sagittis id vel leo. Integer feugiat faucibus libero, at maximus nisl suscipit posuere. Morbi nec enim nunc.
                                    Phasellus bibendum turpis ut ipsum egestas, sed sollicitudin elit convallis.
                                    Cras pharetra mi tristique sapien vestibulum lobortis. Nam eget bibendum metus, non dictum mauris. Nulla at tellus sagittis, viverra est a, bibendum metus.
                                </p>
                            </div>
                        </Col>
                    </Row>
                </Container>
                <div className="border__horizontal"></div>
                <div className="border__vertical"></div>
            </div>
        </div>
    )
}