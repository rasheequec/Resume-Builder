import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import NavBar from '../navbar/index'

const Layout = () => {
    return (
        <div>
            <Container fluid>
                <Row>
                    <NavBar/>
                </Row>
                <Row>
                    <Col sm={8}>sm=8</Col>
                    <Col sm={4}>sm=4</Col>
                </Row>
            </Container>
        </div>
    );
}

export default Layout;



