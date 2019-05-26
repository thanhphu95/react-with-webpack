import React, { Component } from 'react'
import { Container, Col, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';

class MainPageContainer extends Component {
    render() {
        return (

            <Container>
                <Col sm={12}>
                    <Navbar bg="dark" variant="dark">
                        <Nav>
                            <div className="menu-sub ">
                                <Link  to="/aquarium">Aquarium</Link>
                            </div>
                            <div className="menu-sub ">
                                <Link to="/fish">Fish</Link>
                            </div>
                        </Nav>
                    </Navbar>
                </Col>
            </Container >
        )
    }
}

export default MainPageContainer;