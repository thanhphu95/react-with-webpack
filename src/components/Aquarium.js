import React, { Component } from 'react';
import { Col, Container, Button, Row } from 'react-bootstrap';
import { connect } from 'react-redux';
import { ADD_AQUARIUM } from '../actions/AquariumConstant';
class Aquarium extends Component {
    constructor(props) {
        super(props);
        this.handleAddAquarium = this.handleAddAquarium.bind(this);
    }
    handleAddAquarium() {
        const aquarium = {
            type: 'ho sieu trong',
            size: '60x40cm',
        }
        const action = {
            type: ADD_AQUARIUM,
            data: aquarium
        }
        this.props.dispatch(action);
    }
    render() {
        const { aquarium } = this.props;
        const aquariumExtract = aquarium.aquariumList.map((val, idx) => {
            return (
                <Row key={idx}>
                    <Col sm={12}>
                        <Col sm={2}>Type</Col>
                        <Col sm={2}>{val.type}</Col>
                    </Col>
                    <Col sm={12}>
                        <Col sm={2}>Size</Col>
                        <Col sm={2}>{val.size}</Col>
                    </Col>
                </Row>
            )
        });
        return (
            <Container>
                <Col sm={12}>
                    <Button onClick={this.handleAddAquarium} >
                        Add Aquarium
                    </Button>
                </Col>
                <Col sm={12}>
                    <h3>List of fishes</h3>
                </Col>
                {aquariumExtract}
            </Container>
        )
    }
}
const mapStateTopProps = (state) => {
    const { aquarium } = state;
    return {
        aquarium
    }
}
export default connect(mapStateTopProps)(Aquarium);