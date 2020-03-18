import PropTypes from 'prop-types'
import { Container, Col, Row } from 'reactstrap'

import NavBar from './Nav'

const Layout = ({ children }) => (
    <div>
        <NavBar />
        <Container fluid={true}>
            <Row>
                <Col>{children}</Col>
            </Row>
        </Container>
    </div>
)

Layout.propTypes = {
    children: PropTypes.object
}

export { Layout }
