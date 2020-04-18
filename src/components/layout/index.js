import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import NavBar from '../navbar/index';
import Template from '../template/index'
import Settings from '../settings/index'
import 'antd/dist/antd.css';

const Layout = () => {
    return (
        <div style={{height: "100vh"}}>
            <Container fluid>
                 {/* <Row>
                    <NavBar/>
                </Row> */}
                <Row>
                    <Col sm={8} style={{backgroundColor:'grey', minWidth: '600px', maxWidth:'700px'}}> <Template /> </Col>
                    <Col> <Settings/> </Col>
                </Row> 
            </Container>
        </div>
    );
}

export default Layout;



