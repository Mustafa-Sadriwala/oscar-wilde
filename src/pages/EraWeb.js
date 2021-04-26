import { Card, Col, Image, Jumbotron, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom'
import data from '../data/wilde-era-web.json';
import '../styles/ContentPage.css';

export default function EraWeb() {
    return (
        <div className="mx-0 wilde-era-websites">
            <Jumbotron>
                <div className="header-wrapper">
                    <div className="header-box">
                        <h1 style={{ textAlign: 'center' }}>Evaluating a Wilde-related Website</h1>
                    </div>
                </div>
            </Jumbotron>
            <div>
                <Row className="mx-2">
                    {data.map((value) => {
                        return (
                            <Col sm={6} md={4} lg={3} key={value.website} className="content-card-wrapper">
                                <Link to={`/wilde-era-websites/${value.slug}`}>
                                    <Card className="content-card draw">
                                        <Image width="100%" src={`${process.env.PUBLIC_URL}${value.image}`} />
                                        <div className="card-body">
                                            <h4>{value.title}</h4>
                                            <h5>{value.author}</h5>
                                        </div>
                                    </Card>
                                </Link>
                            </Col>
                        )
                    })}
                </Row>
            </div>
        </div>
    )
}