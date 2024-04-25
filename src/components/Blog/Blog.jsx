import './Blog.css';
import { Container, Row, Col, Card } from 'react-bootstrap';
import Typed from 'typed.js';
import { useEffect, useRef } from 'react';

const Blog = () => {
    const typingRef = useRef(null);

    useEffect(() => {
        const options = {
            strings: [
                `^1000 Have a wonderful holiday season...`,
            ],
            typeSpeed: 60,
            backSpeed: 50,
            backDelay: 3000,
            loop: true,
            showCursor: false,
        };

        const typingInstance = new Typed(typingRef.current, options);

        return () => {
            typingInstance.destroy();
        };
    }, []);

    return (
        <Container>
            <h3 style={{ fontFamily: 'cursive', color: 'deeppink' }} ref={typingRef}></h3>
            <p className='about'>Embark on a tranquil journey at our Kingsukh Guest House, enveloped by the scenic allure of Biharinath Hill, Baranti Hill, Susunia Hill, Joychandi Hill, Garhpanchkot, Baranti Dam, Maithon Dam, and the captivating Panchat Dam. Revel in the embrace of comfort, relish delightful meals, and unwind in our verdant garden oasis. Your ideal retreat beckons, promising a harmonious blend of nature's beauty and heartfelt hospitality. Explore the hidden gems of Purulia, creating memories that linger long after your stay.</p>
            <Row>
                <Col md={4}>
                    <Card>
                        <Card.Img variant="top" src="src/assets/GuestHouse.jpeg" />
                        <Card.Body>
                            <Card.Title>Kingsukh Guest House</Card.Title>
                            <Card.Text>
                                Courteous treatment will make a customer a walking advertisement.
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
                <Col md={4}>
                    <Card>
                        <Card.Img variant="top" src="src/assets/LivingRoom.jpeg" />
                        <Card.Body>
                            <Card.Title>Living</Card.Title>
                            <Card.Text>
                                In the right hotel, you feel like a VIP, and in the best hotel, you feel like family.
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
                <Col md={4}>
                    <Card>
                        <Card.Img variant="top" src="src/assets/OrangeFlowers.jpeg" />
                        <Card.Body>
                            <Card.Title>Nature</Card.Title>
                            <Card.Text>
                                When the view is so good, you forget how to adult.
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </Container>
    );
};

export default Blog;
