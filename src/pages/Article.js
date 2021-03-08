import { useEffect, useState } from "react";
import { Jumbotron } from "react-bootstrap";
import { useLocation, useParams } from "react-router-dom"

import websiteData from '../data/wilde-web-evals.json';

export default function Article() {
    let location = useLocation()
    let { slug } = useParams()
    const [articleInfo, setArticleInfo] = useState(null);

    useEffect(() => {
        const where = location.pathname.split('/')
        switch (where[1]) {
            case "wilde-websites": setArticleInfo(websiteData.find((data) => data.slug === slug)); break;
            default: setArticleInfo(websiteData.find((data) => data.slug === slug)); break;
        }
    }, [slug, location])

    if (articleInfo != null) {
        return (
            <div className={"article " + location.pathname.split('/')[1]}>
                <Jumbotron>
                    <div className="header-wrapper">
                        <div className="header-box py-3">
                            <h1 className="mb-1">{articleInfo.title}</h1>
                            <h2 className="mb-2">By: {articleInfo.author}</h2>
                            <h4><a href={articleInfo.website} target="_blank" rel="noreferrer">website</a></h4>
                        </div>
                    </div>
                </Jumbotron>
                <a href={articleInfo.website} target="_blank" rel="noreferrer">
                    <div className="image-frame">
                        <img height="100%" src={articleInfo.image} />
                    </div>
                </a>
                <div>
                    {articleInfo.content.split('\n').map((paragraph, index) => {
                        return (
                            <div className="mx-5">
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