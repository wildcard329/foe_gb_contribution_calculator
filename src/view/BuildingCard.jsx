import React from 'react';
import {Card, Button} from 'react-bootstrap';

import BuildingController from '../controller/BuildingController.js';
import BuildingCalculator from '../functions/calculator.js';

function BuildingCard({building}) {
    return(
        <Card className='card'>
            <Card.Title>{building && building.name}</Card.Title>
            <Card.Text>Donation Multiplier: {building && building.multiplier}</Card.Text>
            <Card.Text>You contribute: {building && building.player} fps</Card.Text>
            <Card.Text>First seat: {building && building.seat1} fps</Card.Text>
            <Card.Text>Second seat: {building && building.seat2} fps</Card.Text>
            <Card.Text>Third seat: {building && building.seat3} fps</Card.Text>
            <Card.Text>Fourth seat: {building && building.seat4} fps</Card.Text>
            <Card.Text>Fifth seat: {building && building.seat5} fps</Card.Text>
        </Card>
    )
}

export default BuildingCard;
