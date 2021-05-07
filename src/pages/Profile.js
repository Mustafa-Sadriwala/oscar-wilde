import { useEffect, useState } from "react";
import { Card, Col, Image, Jumbotron, Row } from "react-bootstrap";
import { Link, useLocation, useParams } from "react-router-dom"
import authorData from '../data/authors.json'
import websiteData from '../data/wilde-web-evals.json';
import adaptationData from '../data/adaptations.json';
import eraWebsiteData from '../data/wilde-era-web.json';
import bookData from '../data/bad-book-covers.json';
import NavHeader from "../components/NavHeader";


export default function Profile() {
    let location = useLocation()
    let { slug } = useParams()
    const [author, setAuthor] = useState(null);
    const [articles, setArticles] = useState(null);

    useEffect(() => {
        const where = location.pathname.split('/')
        setAuthor(authorData.find(author => author.slug === slug));
    }, [slug, location])

    useEffect(() => {
        if (author != null) {
            let accumulator = []

            let webArticle = websiteData.find(data => data.author === author.name)
            if (webArticle != null) {
                webArticle['link'] = 'wilde-websites';
                accumulator.push(webArticle);
            }

            let adaptationArticle = adaptationData.find(data => data.author === author.name)
            if (adaptationArticle != null) {
                adaptationArticle['link'] = 'adaptations';
                accumulator.push(adaptationArticle)
            }

            let eraArticle = eraWebsiteData.find(data => data.author === author.name);
            if (eraArticle != null) {
                eraArticle['link'] = 'wilde-era-websites';
                accumulator.push(eraArticle);
            }

            let bookArticle = bookData.find(data => data.author === author.name);
            if (bookArticle != null) {
                bookArticle['link'] = 'book-covers';
                accumulator.push(bookArticle);
            }

            setArticles(accumulator);
        }
    }, [author])


    if (author != null) {
        return (
            <div className={"article authors"}>
                <NavHeader crumbTitle={author.name} background="authors" />
                <Jumbotron>
                    <div className="header-wrapper">
                        <div className="header-box pt-3 pb-1 d-flex justify-content-center align-items-end">
                            <div className="d-inline-block mb-1 mr-2">
                                <img className="rounded-circle profile-avatar" src={author.image} />
                            </div>
                            <h1 className="d-inline-block mb-2">{author.name}</h1>
                        </div>
                    </div>
                </Jumbotron>
                <div>
                    <Row className="mx-2">
                        {articles != null && articles.map((value, index) => {
                            return (
                                <Col sm={6} md={4} lg={3} key={value.slug} className="content-card-wrapper">
                                    <Link to={`/${value.link}/${value.slug}`}>
                                        <Card className="content-card draw">
                                            <Image width="100%" src={`${process.env.PUBLIC_URL}${value.image}`} />
                                            <div className="card-body">
                                                <h4>{value.title}</h4>
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
    } else return null
}