import React, { useState } from 'react';
import {Row, Col, Card, Dropdown, Button} from 'react-bootstrap';

import BuildingCalculator from '../functions/calculator.js';
import BuildingController from '../controller/BuildingController.js';

function BuildingForm() {
    const [successMsg, setSuccessMsg] = useState(false);
    const [errorMsg, setErrorMsg] = useState(false);
    const [building, setBuilding] = useState({
        name: null,
        total_fps: null,
        first_seat_contribution: 0,
        second_seat_contribution: 0,
        third_seat_contribution: 0,
        fourth_seat_contribution: 0,
        fifth_seat_contribution: 0,
        player_contribution: 0
    });
    const [contribution_multiplier, setContribution_multiplier] = useState(1.85)

    const handleContributions = e => {
        setBuilding({...building, [e.target.name]: e.target.value})
    }

    const checkInt = e => {
        setErrorMsg(BuildingCalculator.checkIntValue(e.target.value));
        console.log('error: ',errorMsg)
    }

    const incrementContributionMultiplier = () => {
        setContribution_multiplier(1.9)
    }

    const decrementContributionMultiplier = () => {
        setContribution_multiplier(1.85)
    }

    const handleSubmit = e => {
        e.preventDefault();
        const totals = BuildingCalculator.calculateFPSAllocations(contribution_multiplier, building.first_seat_contribution, building.second_seat_contribution, building.third_seat_contribution, building.fourth_seat_contribution, building.fifth_seat_contribution)
        const player_price = BuildingCalculator.calculatePlayerContributions(building.total_fps, totals)
        const submittedBuilding = BuildingCalculator.setTotalContributions(building.name, totals, contribution_multiplier, player_price)
        BuildingController.storeBuilding(submittedBuilding);
        setSuccessMsg(true);
        setBuilding({
            name: null,
            total_fps: null,
            first_seat_contribution: 0,
            second_seat_contribution: 0,
            third_seat_contribution: 0,
            fourth_seat_contribution: 0,
            fifth_seat_contribution: 0,
            player_contribution: 0
        });
        setTimeout(function(){setSuccessMsg(false)}, 5000)
    }
    return(
        <form onSubmit={handleSubmit} className='building-form'>
            <Row>
                <Card.Title>Great Building FPS Contribution Calculator</Card.Title>
            </Row>
            <Row className='form-container'>
                <Row className='left-side-form'>
                    <Col>
                        <Card.Text>Great Building Name</Card.Text>
                        <input name='name' placeholder='GB name' onChange={handleContributions} />
                    </Col>
                    <Col>
                        <Card.Text>Total FPS to next level</Card.Text>
                        <input name='total_fps' placeholder='integer fps value' onChange={handleContributions} onBlur={checkInt} />
                    </Col>
                    <Col>
                        <Card.Text>Contribution Multiplier</Card.Text>
                        {contribution_multiplier === 1.85 ?
                        <div className='contribution-wrapper'><button size='sm' onClick={incrementContributionMultiplier}>+</button><Card.Text>{contribution_multiplier}</Card.Text></div> :
                        <div className='contribution-wrapper'><button size='sm' onClick={decrementContributionMultiplier}>-</button><Card.Text>{contribution_multiplier}</Card.Text></div>}
                    </Col>
                </Row>
                <Row className='right-side-form'>
                    <Col>
                        <Card.Text>First Seat FPS Reward</Card.Text>
                        <input name='first_seat_contribution' placeholder='integer fps value' onChange={handleContributions} onBlur={checkInt} />
                    </Col>
                    <Col>
                        <Card.Text>Second Seat FPS Reward</Card.Text>
                        <input name='second_seat_contribution' placeholder='integer fps value' onChange={handleContributions} onBlur={checkInt} />
                    </Col>
                    <Col>
                        <Card.Text>Third Seat FPS Reward</Card.Text>
                        <input name='third_seat_contribution' placeholder='integer fps value' onChange={handleContributions} onBlur={checkInt} />
                    </Col>
                    <Col>
                        <Card.Text>Fourth Seat FPS Reward</Card.Text>
                        <input name='fourth_seat_contribution' placeholder='integer fps value' onChange={handleContributions} onBlur={checkInt} />
                    </Col>
                    <Col>
                        <Card.Text>Fifth Seat FPS Reward</Card.Text>
                        <input name='fifth_seat_contribution' placeholder='integer fps value' onChange={handleContributions} onBlur={checkInt} />
                    </Col>
                </Row>

            </Row>
            <Row>
                {!errorMsg && building.name && building.total_fps && <button type='submit'>Submit</button>}
            </Row>
            <Row>
                {successMsg && <Card.Text className='successMsg'>{building.name} added!</Card.Text>}
            </Row>
        </form>
    )
}

export default BuildingForm;
