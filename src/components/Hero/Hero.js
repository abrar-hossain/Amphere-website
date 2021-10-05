import React from 'react';
import { Col, Container, Image, Row } from 'react-bootstrap';

const Hero = () => {
    return (
        <div className='mt-5 pt-5'>
            <Container className='my-5 pt-5 pb-5'>
                <Row>
                    <Col style={{ backgroundColor: '#00203FFF', color: '#ADEFD1FF', textAlign: 'center' }}>
                        <h1 className='pt-5'>We're the Shortest Distance Between You and an Acceptance Letter</h1>
                        <p>Improve your GRE, IELTS, TOEFL, SAT score by at least 5 points.
                            <br /> Learn it the easy way.</p>
                    </Col>
                    <Col>
                        <Image src="https://certificatescore.com/wp-content/uploads/2021/02/GRE.png" rounded />
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default Hero;