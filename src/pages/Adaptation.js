import { Card, Col, Image, Jumbotron, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom'
import NavHeader, { getCrumbName } from '../components/NavHeader';
import data from '../data/adaptations.json';
import '../styles/ContentPage.css';

export default function Adaptation() {
    return (
        <div className="mx-0 adaptations">
            <NavHeader crumbTitle={getCrumbName('adaptations')} background="adaptations" />
            <Jumbotron>
                <div className="header-wrapper">
                    <div className="header-box">
                        <h1 style={{ textAlign: 'center' }}>Evaluating an Adaptation</h1>
                    </div>
                </div>
            </Jumbotron>
            <div>
                <Row className="mx-2">
                    {data.map((value) => {
                        return (
                            <Col sm={6} md={4} lg={3} key={value.slug} className="content-card-wrapper">
                                <Link to={`/adaptations/${value.slug}`} style={{ width: '100%' }}>
                                    <Card className="content-card draw" style={{ width: '100%' }}>
                                        <div style={{ width: '100%', height: '300px' }}>
                                            <Image src={`${process.env.PUBLIC_URL}${value.image}`} style={{ objectFit: 'cover', width: '100%', maxHeight: '100%' }} />
                                        </div>
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