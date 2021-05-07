import { useEffect, useState } from "react";
import { Jumbotron } from "react-bootstrap";
import { useLocation, useParams } from "react-router-dom"

import websiteData from '../data/wilde-web-evals.json';
import adaptationData from '../data/adaptations.json';
import eraWebsiteData from '../data/wilde-era-web.json';
import bookData from '../data/bad-book-covers.json';
import authorData from '../data/authors.json';
import NavHeader from "../components/NavHeader";


export default function Article() {
    let location = useLocation()
    let { slug } = useParams()
    const [articleInfo, setArticleInfo] = useState(null);
    const [author, setAuthor] = useState(null);

    useEffect(() => {
        const where = location.pathname.split('/')
        switch (where[1]) {
            case "wilde-websites": setArticleInfo(websiteData.find((data) => data.slug === slug)); break;
            case "adaptations": setArticleInfo(adaptationData.find((data) => data.slug === slug)); break;
            case "wilde-era-websites": setArticleInfo(eraWebsiteData.find((data) => data.slug === slug)); break;
            case "book-covers": setArticleInfo(bookData.find((data) => data.slug === slug)); break;
            default: setArticleInfo(websiteData.find((data) => data.slug === slug)); break;
        }
    }, [slug, location])

    useEffect(() => {
        if (articleInfo != null) {
            setAuthor(authorData.find(data => data.name === articleInfo.author));
        }
    }, [articleInfo])

    const crumbTitle = articleInfo != null ? (articleInfo.author + ': ' + articleInfo.title) : ''

    if (articleInfo != null) {
        return (
            <div className={"article " + location.pathname.split('/')[1]}>
                <NavHeader crumbTitle={crumbTitle.length > 50 ? crumbTitle.substring(0, 50) + '...' : crumbTitle} background={location.pathname.split('/')[1]} />
                <Jumbotron>
                    <div className="header-wrapper">
                        <div className="header-box pt-3 pb-1">
                            <h1 className="mb-1">{articleInfo.title}</h1>
                            {articleInfo.website != null && <p>source: <a href={articleInfo.website} target="_blank" rel="noreferrer">{articleInfo.website.length > 50 ? articleInfo.website.substring(0, 50) + '...' : articleInfo.website}</a></p>}
                            <div className="d-flex justify-content-end">
                                <a href={author != null && ("/authors/" + author.slug)} className="author-link px-3 py-2 mt-2 mb-2">
                                    <h4 className="text-right mb-0">
                                        <div className="d-inline-block mr-2">
                                            <img className="rounded-circle profile-avatar" src={author != null && author.image} />
                                        </div>
                                        {articleInfo.author}
                                    </h4>
                                </a>
                            </div>
                        </div>
                    </div>
                </Jumbotron>
                <a href={articleInfo.website} target="_blank" rel="noreferrer">
                    <div className={"image-frame " + location.pathname.split('/')[1]}>
                        <img height="100%" src={articleInfo.image} />
                    </div>
                </a>
                <div>
                    {articleInfo.content.split('\n').map((paragraph, index) => {
                        return (
                            <div className="mx-5" key={index}>
                                <p style={{ fontSize: '1.2rem', letterSpacing: '0.015rem' }} key={index}>&emsp;&emsp;{paragraph}</p>
                                <span style={{ height: '2rem' }} />
                            </div>
                        )
                    })}
                    {/* <span style={{ whiteSpace: "pre-wrap"}}>{articleInfo.content}</span> */}
                </div>
            </div>

        )
    } else return null
}