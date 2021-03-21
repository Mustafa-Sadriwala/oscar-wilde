import { useEffect, useState } from "react";
import { Jumbotron } from "react-bootstrap";
import { useLocation, useParams } from "react-router-dom"

import websiteData from '../data/wilde-web-evals.json';
import adaptationData from '../data/adaptations.json';


export default function Article() {
    let location = useLocation()
    let { slug } = useParams()
    const [articleInfo, setArticleInfo] = useState(null);

    useEffect(() => {
        const where = location.pathname.split('/')
        switch (where[1]) {
            case "wilde-websites": setArticleInfo(websiteData.find((data) => data.slug === slug)); break;
            case "adaptations": setArticleInfo(adaptationData.find((data) => data.slug === slug)); break;
            default: setArticleInfo(websiteData.find((data) => data.slug === slug)); break;
        }
    }, [slug, location])

    if (articleInfo != null) {
        return (
            <div className={"article " + location.pathname.split('/')[1]}>
                <Jumbotron>
                    <div className="header-wrapper">
                        <div className="header-box pt-3 pb-1">
                            <h1 className="mb-1">{articleInfo.title}</h1>
                            <h2 className="mb-2">By: {articleInfo.author}</h2>
                            {articleInfo.website != null && <p>source: <a href={articleInfo.website} target="_blank" rel="noreferrer">{articleInfo.website}</a></p>}
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