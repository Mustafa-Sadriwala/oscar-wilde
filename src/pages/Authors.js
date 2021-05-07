import { Card, Col, Image, Jumbotron, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom'
import NavHeader, { getCrumbName } from '../components/NavHeader';
import data from '../data/authors.json';
import '../styles/ContentPage.css';

export default function Authors() {
    return (
        <div className="mx-0 authors">
            <NavHeader crumbTitle={getCrumbName('authors')} background="authors" />
            <Jumbotron>
                <div className="header-wrapper">
                    <div className="header-box">
                        <h1 style={{ textAlign: 'center' }}>Authors/Students</h1>
                    </div>
                </div>
            </Jumbotron>
            <div>
                <Row className="mx-2">
                    {data.map((value) => {
                        return (
                            <Col sm={6} md={4} lg={3} key={value.slug} className="content-card-wrapper">
                                <Link className="d-flex flex-grow-1" to={`/authors/${value.slug}`}>
                                    <Card className="content-card draw">
                                        <div className="d-flex justify-content-center">
                                            <Image style={{ objectFit: "cover" }} height="200px" width="200px" roundedCircle src={`${process.env.PUBLIC_URL}${value.image}`} />
                                        </div>
                                        <div className="card-body d-flex justify-content-center">
                                            <h4>{value.name}</h4>
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