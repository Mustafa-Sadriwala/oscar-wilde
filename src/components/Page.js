import Container from 'react-bootstrap/Container'

export default function Page({title, children}) {
    return (
        <div className="page">
            <div className="outer-border">
                <div className="inner-border">
                    <Container>
                        <h1>{title}</h1>
                        {children}
                    </Container>
                </div>
            </div>
        </div>
    )
}