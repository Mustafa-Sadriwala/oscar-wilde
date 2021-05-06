import { Breadcrumb, Col, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import { Link, useLocation } from 'react-router-dom';
import { BsList } from 'react-icons/bs';
import '../styles/ContentPage.css';
import { useEffect, useState } from 'react';
import useScrollPosition from './useScrollPosition';


export function getCrumbName(crumb) {
    switch (crumb) {
        case 'wilde-websites': return 'Evaluating a Wilde-related Website';
        case 'wilde-era-websites': return 'Evaluating a Website on Wilde\'s Era';
        case 'adaptations': return 'Evaluating an Adaptation';
        case 'book-covers': return 'Bad Book Covers'
        default: return crumb;
    }
}

const SCROLL_CONSTANT = -10

export default function NavHeader({ crumbTitle, background }) {
    const { pathname } = useLocation();
    const [crumbs, setCrumbs] = useState([]);
    const [scrollShow, setScrollShow] = useState(false);

    useScrollPosition(({ currPos }) => {
        if (!scrollShow && currPos.y < SCROLL_CONSTANT) {
            setScrollShow(true);
        } else if (scrollShow && currPos.y > SCROLL_CONSTANT) {
            setScrollShow(false);
        }
    }, [scrollShow], false, false, 100)

    useEffect(() => {
        setCrumbs(pathname.split('/').slice(1));
        console.log(crumbs);
    }, [pathname])

    return (
        <Navbar className={"navbar " + (scrollShow ? "drop-shadow " : "") + background} sticky="top">
            <Col className="d-none d-sm-block" sm={11}>
                <Navbar.Collapse>
                    <Nav>
                        <Breadcrumb bsPrefix={"custom-breadcrumb " + (scrollShow ? "small" : "large")}>
                            <Breadcrumb.Item href="/">Home</Breadcrumb.Item>
                            {crumbs.length > 0 && crumbs.map((crumb, index) => {
                                if (index === crumbs.length - 1) {
                                    return (
                                        <Breadcrumb.Item active={false} linkAs={'b'}>{crumbTitle}</Breadcrumb.Item>
                                    )
                                }
                                return (
                                    <Breadcrumb.Item href={'/' + crumbs.slice(0, index + 1).join('/')}>{getCrumbName(crumb)}</Breadcrumb.Item>
                                )
                            })}
                        </Breadcrumb>
                    </Nav>
                </Navbar.Collapse>
            </Col>
            <Col className="d-block d-sm-none" xs={10}>
                <Navbar.Collapse>
                    <Nav>
                        <Breadcrumb bsPrefix="custom-breadcrumb">
                            <Breadcrumb.Item href="/">Home</Breadcrumb.Item>
                        </Breadcrumb>
                    </Nav>
                </Navbar.Collapse>
            </Col>
            <Col className="d-flex flex-grow-1 justify-content-end">
                <NavDropdown title={<BsList />} alignRight >
                    <NavDropdown.Item href="/">Home</NavDropdown.Item>
                    <NavDropdown.Header>Chapters</NavDropdown.Header>
                    <NavDropdown.Item href="/wilde-websites">Wilde Websites</NavDropdown.Item>
                    <NavDropdown.Item href="/wilde-era-websites">Websites on Wilde's Era</NavDropdown.Item>
                    <NavDropdown.Item href="/adaptations">Adaptations of Wilde</NavDropdown.Item>
                    <NavDropdown.Item href="/book-covers">Bad Book Covers</NavDropdown.Item>
                </NavDropdown>
            </Col>
        </Navbar>
    )
}