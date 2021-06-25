import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'

export default function Footer() {
    return (
        <Container fluid style={{
            height: "200px",
            backgroundColor: "#A4C3B2",
            marginTop: "50px",
            // display:"flex"
        }}>
           
            <Row style={{
                justifyContent: 'center',
                textAlign: 'center',
            }}>
                <Col ></Col>
                <Col >Kit So</Col>
                <Col >Gui Gianjope</Col>
                <Col ></Col>
            </Row>
            <Row>
            <p>Copyright 2021 by Kit So | Gui Gianjope. All Rights Reserved.</p>
            </Row>
        </Container>

    )
}
