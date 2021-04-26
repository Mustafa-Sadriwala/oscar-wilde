import { Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";

import './../styles/Home.css';

const CHAPTERS = [
    {
        title: "1. Wilde Websites",
        shortTitle: "Wilde Websites",
        link: "/wilde-websites",
        className: "wilde-websites"
    },
    {
        title: "2. Websites on Wilde's Era",
        shortTitle: "Websites on Wilde's Era",
        link: "/wilde-era-websites",
        className: "wilde-era"
    },
    {
        title: "3. Adaptations of Wilde",
        shortTitle: "Adaptations of Wilde",
        link: "/adaptations",
        className: "adaptations"
    }
]

export default function Home() {
    return (
        <div>
            <div className="border">
                <Container fluid style={{ padding: '2vw' }}>
                    <div style={{ width: '100%', textAlign: "center", paddingBottom: "5vh" }}>
                        <h1>Oscar Wilde</h1>
                    </div>
                    <Row>
                        <Col style={{ paddingBottom: '2rem' }}>
                            <div style={{ textAlign: "center" }}>
                                <h2 style={{ paddingBottom: "0.5rem" }}>Chapters</h2>
                            </div>
                            {
                                CHAPTERS.map((chapter) => {
                                    return (
                                        <div style={{ paddingLeft: 20, paddingTop: 20 }} key={chapter.title}>
                                            <Link to={chapter.link} className={"highlight " + chapter.className}>
                                                <h4 className={"d-none d-md-block chapter-title " + chapter.className}>{chapter.title}</h4>
                                                <h4 className={"d-block d-md-none chapter-title " + chapter.className}>{chapter.shortTitle}</h4>
                                            </Link>
                                        </div>
                                    )
                                })
                            }
                        </Col>
                        <Col>
                            <div style={{ textAlign: "center", width: '100%' }}>
                                <h2 style={{ paddingBottom: "0.5rem", wordBreak: 'break-all' }}>Acknowledgements</h2>
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