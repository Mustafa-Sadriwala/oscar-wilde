import { Card, Col, Image, Jumbotron, Nav, Navbar, NavDropdown, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom'
import NavHeader, { getCrumbName } from '../components/NavHeader';
import data from '../data/wilde-web-evals.json';
import '../styles/ContentPage.css';

export default function WildeWeb() {
    return (
        <div className="mx-0 wilde-websites">
            <NavHeader crumbTitle={getCrumbName('wilde-websites')} background="wilde-websites" />
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
                                <Link to={`/wilde-websites/${value.slug}`}>
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